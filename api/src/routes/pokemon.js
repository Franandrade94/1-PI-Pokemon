
const axios = require('axios');
const { conn } = require('../db.js');
const { Pokemon, Type } = conn.models

const POKE_EXT_URL = "https://pokeapi.co/api/v2/pokemon";
const INIT_VALUE = 10000

const get_pokemons = async({res, offset="0",local=false}) => {

  const localDbResult = await Pokemon.findAll({include: [ {
    model: Type,
    as: "types",
  }]})
  console.log(localDbResult)
  if(local=='true'){
    console.log(localDbResult)
    res.send({
      pokemons:(localDbResult == null || localDbResult.length == 0)?null: localDbResult,
      metadata: {
        offset:offset
      }
    })
    return;
  }
  let pokes = await axios.get(`${POKE_EXT_URL}?limit=20&offset=${offset}`)
  let pokeData = pokes.data.results?.map(async(i) => await axios.get(i.url))
  Promise.all(pokeData)
  .then(r => {
    let pokeResults = r.map((p) => { 
        let pokemon = p.data
        return {
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon?.sprites?.other?.dream_world?.front_default,
        types: pokemon?.types
    }})
    res.send({
      pokemons:localDbResult.concat(pokeResults),
      metadata: {
        offset:offset
      }
    })
  })

}

const get_pokemon = async({id, res, min=false}) => {
  try {
    axios.get(`${POKE_EXT_URL}/${id}`)
    .catch(function (error) {
      if(error.data == undefined){
        return res.json();
      }
    })
  .then(r => {

    if(min) {
      let pokemon = r.data

      if(pokemon == undefined){
       return res.json()
      }
      
      res.send(
        {pokemons:[{
      id: pokemon.id,
      name: pokemon.name,
      image: pokemon?.sprites?.other?.dream_world?.front_default,
      types: pokemon?.types
  }]})}
  else res.send(r.data)

  })
  } catch {
    res.send({})
  }
  
}


const pokemon = {
  getAll:   async (req, res, next) => {
  (req.query.name == undefined)? get_pokemons({res: res, offset: req.query.offset, local: req.query.local}) : get_pokemon({id: req.query.name, res: res, min:true})
},

getPokemonDetail: (req, res, next) => {
  let id = (req.params.id == undefined)? req.query.name:req.params.id
  get_pokemon({id, res})
},

getTypes: (req, res, next) => {
  axios.get(`https://pokeapi.co/api/v2/type`)
  .then(r => res.send(r.data))
},

createPokemon: async(req, res) => {
  let pokemon = req.body
  let types = req.body.type
  let result = await Pokemon.max("id")
  if (result === null){
    pokemon.id = INIT_VALUE
  }else{
    pokemon.id = result + 1
  }
  const pokemonObj = await Pokemon.create(pokemon)
  

  const typeObj = types.map(async (type) => {
    let result = await Type.findOne({ where: { name: type } });
    if (result === null) {
       return await Type.create({name: type})
    }
    return result
    
  }) 
  Promise.all(typeObj)
  .then(async(t) => await pokemonObj.addType(t))
  .then(r => {
    console.log(r)
    res.send(r)
  })
},
}

module.exports = pokemon;
