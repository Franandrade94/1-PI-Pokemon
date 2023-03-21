import "./pokemondetail.css";
import React, { Component } from "react";
import * as actions from "./../../Redux/actions/index";
import { connect } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import audio from "../../Sound/BACK.wav";
import img from "../../Images/HP-bar.png";
import bug from "../../Images/Types/Bug.png";
import dark from "../../Images/Types/Dark.png";
import dragon from "../../Images/Types/Dragon.png";
import electric from "../../Images/Types/Electric.png";
import fairy from "../../Images/Types/Fairy.png";
import fighting from "../../Images/Types/Fighting.png";
import fire from "../../Images/Types/Fire.png";
import flying from "../../Images/Types/Flying.png";
import ghost from "../../Images/Types/Ghost.png";
import grass from "../../Images/Types/Grass.png";
import ground from "../../Images/Types/Ground.png";
import ice from "../../Images/Types/Ice.png";
import normal from "../../Images/Types/Normal.png";
import poison from "../../Images/Types/Poison.png";
import psychic from "../../Images/Types/Psychic.png";
import rock from "../../Images/Types/Rock.png";
import steel from "../../Images/Types/Steel.png";
import water from "../../Images/Types/Water.png";
import backbug from "../../Images/Types/BackTypes/backBug.png";
import backdark from "../../Images/Types/BackTypes/backDark.png";
import backdragon from "../../Images/Types/BackTypes/backDragon.png";
import backelectric from "../../Images/Types/BackTypes/backElectric.png";
import backfairy from "../../Images/Types/BackTypes/backFairy.png";
import backfighting from "../../Images/Types/BackTypes/backFighting.png";
import backfire from "../../Images/Types/BackTypes/backFire.png";
import backflying from "../../Images/Types/BackTypes/backFlying.png";
import backghost from "../../Images/Types/BackTypes/backGhost.png";
import backgrass from "../../Images/Types/BackTypes/backGrass.png";
import background from "../../Images/Types/BackTypes/backGround.png";
import backice from "../../Images/Types/BackTypes/backIce.png";
import backnormal from "../../Images/Types/BackTypes/backNormal.png";
import backpoison from "../../Images/Types/BackTypes/backPoison.png";
import backpsychic from "../../Images/Types/BackTypes/backPsychic.png";
import backrock from "../../Images/Types/BackTypes/backRock.png";
import backsteel from "../../Images/Types/BackTypes/backSteel.png";
import backwater from "../../Images/Types/BackTypes/backWater.png";

class PokemonDetail extends Component {

    componentDidMount() {
        const id = this.props.match.params.id
        this.props.getPokemonDetail(id)
    }

    playAudio = () => {
        new Audio(audio).play();
    }


    render() {

        let pokemon = this.props.pokemonDetail;

        let type = pokemon.types?.map((v) => v.type?.name);

        let backtype = (type == undefined) ? "0" : type[0];

        let backtype2 = (backtype === 'bug') ?
        <img className="BackTypeImg" src={backbug} alt='bug' /> : backtype === 'dark' ?
        <img className="BackTypeImg" src={backdark} alt='dark' /> : backtype === 'dragon' ?
        <img className="BackTypeImg" src={backdragon} alt='dragon' /> : backtype === 'electric' ?
        <img className="BackTypeImg" src={backelectric} alt='electric' /> : backtype === 'fairy' ?
        <img className="BackTypeImg" src={backfairy} alt='fairy' /> : backtype === 'fire' ?
        <img className="BackTypeImg" src={backfire} alt='fire' /> : backtype === 'flying' ?
        <img className="BackTypeImg" src={backflying} alt='flying' /> : backtype === 'ghost' ?
        <img className="BackTypeImg" src={backghost} alt='ghost' /> : backtype === 'grass' ?
        <img className="BackTypeImg" src={backgrass} alt='grass' /> : backtype === 'ground' ?
        <img className="BackTypeImg" src={background} alt='ground' /> : backtype === 'ice' ?
        <img className="BackTypeImg" src={backice} alt='ice' /> : backtype === 'normal' ?
        <img className="BackTypeImg" src={backnormal} alt='normal' /> : backtype === 'poison' ?
        <img className="BackTypeImg" src={backpoison} alt='poison' /> : backtype === 'psychic' ?
        <img className="BackTypeImg" src={backpsychic} alt='psychic' /> : backtype === 'rock' ?
        <img className="BackTypeImg" src={backrock} alt='rock' /> : backtype === 'steel' ?
        <img className="BackTypeImg" src={backsteel} alt='steel' /> : backtype === 'water' ?
        <img className="BackTypeImg" src={backwater} alt='water' /> : backtype === 'fighting' ?
        <img className="BackTypeImg" src={backfighting} alt='fighting' /> : null;
        
        let defense = (pokemon?.stats == undefined) ? "0" : pokemon?.stats[2]?.base_stat
        

        return(

            <div>
                <div className="detailcard">
                    <div className="Margin-Detailcard-back">
                        
                            <div className="Pokedetail">
                                
                                <div className="HP-Bar"></div>

                                <div className="ButtonPosition">
                                    <Link to={`/home`}>
                                        <button className="buttonGameDetails" onClick={this.playAudio}>back</button>
                                    </Link>
                                </div>

                                <p className="ImgBackType">{backtype2}</p>

                                <div className="DivPokeIMG">
                                    <img className="PokemonImg" src={pokemon?.sprites?.other?.dream_world?.front_default} alt=""/>
                                </div>
                                

                                <div className="pokemon-Info">

                                    <p className="DetailID">N°: {pokemon?.id}</p>
                                    
                                    <p className="DetailName">{pokemon?.name}</p>

                                    <p className="DetailType">{type?.map((e) => {
                                        return ( <p>{e === 'bug' ?
                                            <img className="DetailTypeImg" src={bug} alt='bug' /> : e === 'dark' ?
                                            <img className="DetailTypeImg" src={dark} alt='dark' /> : e === 'dragon' ?
                                            <img className="DetailTypeImg" src={dragon} alt='dragon' /> : e === 'electric' ?
                                            <img className="DetailTypeImg" src={electric} alt='electric' /> : e === 'fairy' ?
                                            <img className="DetailTypeImg" src={fairy} alt='fairy' /> : e === 'fire' ?
                                            <img className="DetailTypeImg" src={fire} alt='fire' /> : e === 'flying' ?
                                            <img className="DetailTypeImg" src={flying} alt='flying' /> : e === 'ghost' ?
                                            <img className="DetailTypeImg" src={ghost} alt='ghost' /> : e === 'grass' ?
                                            <img className="DetailTypeImg" src={grass} alt='grass' /> : e === 'ground' ?
                                            <img className="DetailTypeImg" src={ground} alt='ground' /> : e === 'ice' ?
                                            <img className="DetailTypeImg" src={ice} alt='ice' /> : e === 'normal' ?
                                            <img className="DetailTypeImg" src={normal} alt='normal' /> : e === 'poison' ?
                                            <img className="DetailTypeImg" src={poison} alt='poison' /> : e === 'psychic' ?
                                            <img className="DetailTypeImg" src={psychic} alt='psychic' /> : e === 'rock' ?
                                            <img className="DetailTypeImg" src={rock} alt='rock' /> : e === 'steel' ?
                                            <img className="DetailTypeImg" src={steel} alt='steel' /> : e === 'water' ?
                                            <img className="DetailTypeImg" src={water} alt='water' /> : e === 'fighting' ?
                                            <img className="DetailTypeImg" src={fighting} alt='fighting' /> : null}</p>)})}</p>

                                    <p className="DetailHeight">Height: {pokemon?.height}</p>

                                    <p className="DetailWeight">Weight: {pokemon?.weight}</p>
                                    
                                    <img className="HP-Bar" src={img}/>
                                    
                                    <p className="DetailHP">HP: {(pokemon?.stats == undefined) ? "0" : pokemon?.stats[0]?.base_stat}</p>

                                    <p className="DetailAttack">Attack: {(pokemon?.stats == undefined) ? "0" : pokemon?.stats[1]?.base_stat}</p>

                                    <p className="DetailDefense">Defense: {defense}</p>

                                    <p className="DetailSpeed">Speed: {(pokemon?.stats == undefined) ? "0" : pokemon?.stats[5]?.base_stat}</p>
                                </div>
                                
                                

                            </div>
                        
                    </div>
                </div>
            </div>
        )
        
    }
    
};


export const mapSrateToProps = (state) => {
    return {
        pokemonDetail: state.pokemonDetail
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        getPokemonDetail: (id) => dispatch(actions.getPokemonDetail(id))
    }
}

export default connect(mapSrateToProps, mapDispatchToProps)(PokemonDetail);