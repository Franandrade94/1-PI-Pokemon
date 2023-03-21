import "./home.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../Redux/actions";
import PokemonCard from "../5-PokemonCard/PokemonCard";
import "./searchbar.css";


class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            searchbarValue: ""
        }
        this.updateSearchbarValue = this.updateSearchbarValue.bind(this)
        this.handleSearchbar = this.handleSearchbar.bind(this)
        this.previousPage = this.previousPage.bind(this)
        this.nextPage = this.nextPage.bind(this)
        this.soloLocalDb = this.soloLocalDb.bind(this)



    }

    componentDidMount() {
       
        this.props.getAllPokemons()
    }

    updateSearchbarValue(evt) {
        let value = evt.target?.value;
          this.setState({
            ...this.state,
            searchbarValue: value,
          });
     }

     handleSearchbar(e){
           e.preventDefault();
            const {searchbarValue}  = this.state
            this.props.history.push({
                pathname: '/home',
                search: "?" + new URLSearchParams({serach: searchbarValue}).toString()
            })
            this.props.getAllPokemons(searchbarValue,"0")

        }

        previousPage(){
            let offset = this.props.metadata?.offset
            let newOffset = (parseInt(offset) - 20)
            if(newOffset < 0){
                this.props.getAllPokemons(null,"0") 
            }else this.props.getAllPokemons(null,newOffset)


        }

        nextPage(){

            let offset = this.props.metadata?.offset

            let newOffset = (parseInt(offset) + 20)
            this.props.getAllPokemons(null, newOffset)
        }

        soloLocalDb(){
            this.props.getAllPokemons(null, this.props.metadata?.offset, true)
        }
    render() {
       let pokemons = []
         pokemons  = this.props.pokemons
      
        
        console.log(this.props)

        return (
            <div>

                <form className="SearchBar" onSubmit={(e) => this.handleSearchbar(e)} >
                    <input className="Searchtext" type="text" placeholder="Pokemon..."  value={this.state.searchbarValue} onChange={(evt) => this.updateSearchbarValue(evt)}/>
                    <input className="icon-buscar" type="submit" value="Search" />

                </form>

                <button onClick={()=> this.soloLocalDb()}> local db</button>

                <div className="home-back">
                    <div className="home">
                        {pokemons?.map((pokemon) => {
                            return <div className="gamecard" key={pokemon.id}>
                                <PokemonCard
                                    id={pokemon.id}
                                    name={pokemon.name}
                                    image={pokemon.image}
                                    type={pokemon?.types?.map((v) => v.type?.name)}

                                />
                            </div>
                        })}
                        <div className="PaginationDiv">

                            <button onClick={()=> this.previousPage()}>Prev</button>
                            <button onClick={()=> this.nextPage()}>Next</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export const mapStateToProps = (state) => {
    return {
        pokemons: state.pokemons,
        metadata: state.metadata,
        pokemonDetail: state.pokemonDetail
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        getAllPokemons: (id, offset, local=false) => dispatch(actions.getAllPokemons(id, offset,local)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)