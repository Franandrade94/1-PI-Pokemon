import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonTypes, filterPokemonType} from '../../Redux/actions/index.js';
import './filtertypes.css'

export default function TypesPokemon({setCurrentPokemon}) {
    const dispatch = useDispatch();
    const types = useSelector(state => state.pokemonsTypes);
    const pokeFilter = useSelector(state => state.pokemonsFilter)
    
    useEffect(() => {
        dispatch(getPokemonTypes())
    }, [dispatch])

    useEffect(() => {
        setCurrentPokemon(pokeFilter)
    }, [pokeFilter, setCurrentPokemon])   //atento cambios filter

  return (
    <div  className='contayner-types'>
        {types.map((type)=>
        <button key={type} type="button" onClick={() =>dispatch(filterPokemonType(type))}>
          
          <span>{type}</span>
        </button>
        )}
    </div>
  )
}