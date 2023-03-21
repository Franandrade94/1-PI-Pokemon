//import "./pokemoncard.css";
import "./flipcardEj.css"
import React from "react";
import { Link } from "react-router-dom";
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

const PokemonCard = (props) => {
    
    let backtype = (props.type != undefined)?props.type[0]:""
    
    let backtype2 = (backtype === 'bug') ?
        <img className="BackTypeImgCard" src={backbug} alt='bug' /> : backtype === 'dark' ?
        <img className="BackTypeImgCard" src={backdark} alt='dark' /> : backtype === 'dragon' ?
        <img className="BackTypeImgCard" src={backdragon} alt='dragon' /> : backtype === 'electric' ?
        <img className="BackTypeImgCard" src={backelectric} alt='electric' /> : backtype === 'fairy' ?
        <img className="BackTypeImgCard" src={backfairy} alt='fairy' /> : backtype === 'fire' ?
        <img className="BackTypeImgCard" src={backfire} alt='fire' /> : backtype === 'flying' ?
        <img className="BackTypeImgCard" src={backflying} alt='flying' /> : backtype === 'ghost' ?
        <img className="BackTypeImgCard" src={backghost} alt='ghost' /> : backtype === 'grass' ?
        <img className="BackTypeImgCard" src={backgrass} alt='grass' /> : backtype === 'ground' ?
        <img className="BackTypeImgCard" src={background} alt='ground' /> : backtype === 'ice' ?
        <img className="BackTypeImgCard" src={backice} alt='ice' /> : backtype === 'normal' ?
        <img className="BackTypeImgCard" src={backnormal} alt='normal' /> : backtype === 'poison' ?
        <img className="BackTypeImgCard" src={backpoison} alt='poison' /> : backtype === 'psychic' ?
        <img className="BackTypeImgCard" src={backpsychic} alt='psychic' /> : backtype === 'rock' ?
        <img className="BackTypeImgCard" src={backrock} alt='rock' /> : backtype === 'steel' ?
        <img className="BackTypeImgCard" src={backsteel} alt='steel' /> : backtype === 'water' ?
        <img className="BackTypeImgCard" src={backwater} alt='water' /> : backtype === 'fighting' ?
        <img className="BackTypeImgCard" src={backfighting} alt='fighting' /> : null;
        
    
    return (

        <div className="card middle">
            
            <div className="front">
                
                <h3 className="NameFront">{props.name}</h3>
                
                <img className="img" src={props.image} alt={props.name}/>
                
            </div>

            <div className="back">
                <div className="back-content middle">
                    
                    <p className="idBack">N°: {props.id}</p>

                    <p className="nameBack">{props.name}</p>

                    <p className="ImgBackTypeCard">{backtype2}</p>

                    <img className="imageBack" src={props.image}/>

                    <div className="backsizetype">
                        <br/>
                        <div className="typesBack" id="TYPES">{props.type?.map((e, k) => {
                                        return ( <div key={k}>
                                            <br/>
                                                {e === 'bug' ?
                                            <img className="TypeImg" src={bug} alt='bug' /> : e === 'dark' ?
                                            <img className="TypeImg" src={dark} alt='dark' /> : e === 'dragon' ?
                                            <img className="TypeImg" src={dragon} alt='dragon' /> : e === 'electric' ?
                                            <img className="TypeImg" src={electric} alt='electric' /> : e === 'fairy' ?
                                            <img className="TypeImg" src={fairy} alt='fairy' /> : e === 'fire' ?
                                            <img className="TypeImg" src={fire} alt='fire' /> : e === 'flying' ?
                                            <img className="TypeImg" src={flying} alt='flying' /> : e === 'ghost' ?
                                            <img className="TypeImg" src={ghost} alt='ghost' /> : e === 'grass' ?
                                            <img className="TypeImg" src={grass} alt='grass' /> : e === 'ground' ?
                                            <img className="TypeImg" src={ground} alt='ground' /> : e === 'ice' ?
                                            <img className="TypeImg" src={ice} alt='ice' /> : e === 'normal' ?
                                            <img className="TypeImg" src={normal} alt='normal' /> : e === 'poison' ?
                                            <img className="TypeImg" src={poison} alt='poison' /> : e === 'psychic' ?
                                            <img className="TypeImg" src={psychic} alt='psychic' /> : e === 'rock' ?
                                            <img className="TypeImg" src={rock} alt='rock' /> : e === 'steel' ?
                                            <img className="TypeImg" src={steel} alt='steel' /> : e === 'water' ?
                                            <img className="TypeImg" src={water} alt='water' /> : e === 'fighting' ?
                                            <img className="TypeImg" src={fighting} alt='fighting' /> : null}
                                            <br/>
                                            </div>)})
                                            }</div>
    
                    </div>
                    <Link to={`/pokemons/${props.id}`}>
                        <button className="buttondetails">More Details</button>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default (PokemonCard);