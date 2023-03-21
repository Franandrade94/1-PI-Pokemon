import axios from 'axios';

export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS";
export const GET_POKEMON_DETAIL = "GET_POKEMON_DETAIL";
export const FILTER_POKEMON = "FILTER_POKEMON";
export const FILTER_POKEMON_TYPE = "FILTER_POKEMON_TYPE"
export const GET_POKEMON_TYPES = "GET_POKEMON_TYPES";
export const ORDER_POKEMONS = "ORDER_POKEMONS";
export const CREATE_POKEMON = "CREATE_POKEMON";
export const DELATE_POKEMON = "DELETE_POKEMON";

export const getAllPokemons = (id=null, offset="0", local=false) => {
    return (dispatch) => {
        return axios.get(`http://localhost:3001/pokemons?${(id != null)?`name=${id}&`:""}offset=${offset}&local=${local}`)
            .then(res => {
                console.log(res)
                return dispatch({ type: GET_ALL_POKEMONS, payload: res.data})})
            } 
    }


export const getPokemonDetail = (id) => {
    return (dispatch) => {
        return axios.get(`http://localhost:3001/pokemons/${id}`)
            .then(res => dispatch({ type: GET_POKEMON_DETAIL, payload: res.data }))
    }
};

export const getPokemonTypes = () => {
    return (dispatch) => {
        return axios.get(`https://pokeapi.co/api/v2/type`)
            .then(res => res.json())
            .then(data => dispatch({ type: GET_POKEMON_TYPES, payload: data }))
    }
}

export const createPokemon = (pokemon) => {
    return (dispatch) => {
        return axios.post(`http://localhost:3001/pokemons`, pokemon)
            .then(res => dispatch({ type: CREATE_POKEMON, payload: res.data }))
    }
}

export const filterPokemonType = (type) => {
    return (dispatch) => {
        return dispatch({
        type: FILTER_POKEMON_TYPE,
        payload: type
    })
    }
}

export const filterPokemon = (data) => {
    return {
        type: FILTER_POKEMON,
        payload: data
    }
}

export const orderPokemons = (data) => {
    return{
        type: ORDER_POKEMONS,
        payload: data,
    }
}







/*
var idPokemon = 0;

export const createPokemon = (payload) => {
    return {
        type: CREATE_POKEMON,
        payload: {
            ...payload,
            id: `c${idPokemon++}` ,
        }
    }
};
*/

export const deletePokemon = (payload) => {
    return {
        type: DELATE_POKEMON,
        payload,
    }
};