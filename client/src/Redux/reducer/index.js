import * as actions from "../actions";

const initilState = {
    pokemons: [],
    pokemonDetail: {},
    pokemonTypes: [],
    pokemonFilter: [],
    metadata: {}
};

const rootReducer = (state = initilState, action) => {
    switch (action.type) {
        case actions.GET_ALL_POKEMONS:
        
            state.pokemonFilter = []

            return {
                ...state,
                pokemons: action.payload.pokemons,
                metadata: action.payload.metadata,
                pokemonDetail: {},
            };
        case actions.GET_POKEMON_DETAIL: return {
            ...state,
            pokemons: [],
            pokemonDetail: action.payload,
        };
       
        case actions.FILTER_POKEMON_TYPE: return{
            ...state,
            pokemonFilter: state.pokemons.filter((pokemon) => pokemon.types.map((type) => type.name)[0] === action.payload || pokemon.types.map((type) => type.name)[1] === action.payload)
        };
        case actions.FILTER_POKEMON: return{
            ...state,
            pokemons: action.payload
        };
        case actions.ORDER_POKEMONS: return {
            ...state,
            pokemons:action.payload
        }        
        case actions.DELATE_POKEMON: return {
            pokemons: state.pokemons.filter((item) => item.id !== action.payload),
            pokemonDetail: {},
        };
        case actions.CREATE_POKEMON: return {
            pokemons: [...state.pokemons, action.payload],
            pokemonDetail:{},
        };

        default: return state;
    }
};

export default rootReducer;