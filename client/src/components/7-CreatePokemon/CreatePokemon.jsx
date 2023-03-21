import "./createpokemon.css";
import React from "react";
import{ useDispatch } from "react-redux";
import * as actions from "./../../Redux/actions/index";
import { Link } from "react-router-dom";
import Select from "react-select";

const CreatePokemon = () => {

    const [input, setInput] = React.useState({
        image:"https://i.ytimg.com/vi/ZrybriFT0_8/maxresdefault.jpg",
        name: "",
        type:[""],
        height:0,
        weight:0,
        hp:0,
        attack:0,
        defense:0,
        speed:0,
    });
    const [typeArray, setTypeArray ]= React.useState([])

    const handleInputChange = (e) => {
        setInput({
            ...input,
            [e.target.name] : e.target.value,
        })
    }

    const dispatch = useDispatch();

    const handleSubmit = () => {
        setInput({
            ...input,
            ["type"] : typeArray,
        })
        let req = input
        req.type = typeArray
        dispatch(actions.createPokemon(req))
        
        console.log(req)
    }

    const enviarDatos = (e) => {
        e.preventDefault();
        handleSubmit();
    }

    const [file, setFile] = React.useState([]);

    const handleChange = (e) => {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));

        setInput({
            ...input,
            [e.target.name] : e.target.value,
        })
    }

   

    const handleCheckChange = (e) => {
        const value = e.target.value;
        const checked = e.target.checked;
        console.log(value, checked);
        if(checked)
        {
            setTypeArray([
                ...typeArray, value
            ])
        } else
        {
            setTypeArray(typeArray.filter( (e) => (e!== value) ))
        }

    
        
    }
    
    

    return(
        <div>
            <div className="Animation-form">
                <form className="createPokemon" onSubmit={enviarDatos}>
                    <Link className="close" to={"./../home"}>
                        X
                    </Link>
                    <div className="file-select">
                        <label id="src-file">
                            Image:  <input
                                        className="ImageInput" 
                                        type="file" 
                                        name="image" 
                                        onChange={handleChange}
                                    
                                    />
                            <img 
                            
                              className="Pokemon-image"
                              type="image" 
                                src={file}
                            />
                        </label>
                    </div>
                    <br/>
                    <label className="NameLabel">
                        Name: <input 
                                    className="Name" 
                                    type="text"
                                    name="name" 
                                    onChange={handleInputChange}
                                />
                    </label>
                    <br/>
                    <div   className="type">
                        <label htmlFor="">
                            Type:
                        </label>
                        <div className="AllTypes">
                            
                            <label htmlFor="">Bug 
                                <input className="CheckBox" type="checkbox" name="type" value="bug" onChange={ handleCheckChange } /> 
                            </label>
                            
                            <label htmlFor="">Dark
                                <input className="CheckBox" type="checkbox" name="type" value="dark" onChange={ handleCheckChange } />
                            </label>
                        
                            <label htmlFor="">Dragon
                                <input className="CheckBox" type="checkbox" name="type" value="dragon" onChange={ handleCheckChange } />
                            </label>
                        
                            <label htmlFor="">Electric
                                <input className="CheckBox" type="checkbox" name="type" value="electric" onChange={ handleCheckChange } />
                            </label>
                        
                            <label htmlFor="">
                                Fairy
                                <input className="CheckBox" type="checkbox" name="type" value="fairy" onChange={ handleCheckChange } />
                            </label>
                        
                            <label htmlFor="">Fighting
                                <input className="CheckBox" type="checkbox" name="type" value="fighting" onChange={ handleCheckChange } />
                            </label>
                        
                            <label htmlFor="">Fire
                                <input className="CheckBox" type="checkbox" name="type" value="fire" onChange={ handleCheckChange } />
                            </label>
                        
                            <label htmlFor=""> Flying
                                <input className="CheckBox" type="checkbox" name="type" value="flying" onChange={ handleCheckChange } />
                            </label>
                        
                            <label htmlFor="">Ghost
                                <input className="CheckBox" type="checkbox" name="type" value="ghost" onChange={ handleCheckChange } />
                            </label>
                        
                            <label htmlFor="">Grass
                                <input className="CheckBox" type="checkbox" name="type" value="grass" onChange={ handleCheckChange } />
                            </label>
                            
                            <label htmlFor=""> Ground
                                <input className="CheckBox" type="checkbox" name="type" value="ground" onChange={ handleCheckChange } />
                            </label>
                        
                            <label htmlFor=""> Ice 
                                <input className="CheckBox" type="checkbox" name="type" value="ice" onChange={ handleCheckChange } />
                            </label>
                        
                            <label htmlFor=""> Normal
                                <input className="CheckBox" type="checkbox" name="type" value="normal" onChange={ handleCheckChange } />
                            </label>
                        
                            <label htmlFor="">Poison
                                <input className="CheckBox" type="checkbox" name="type" value="poison" onChange={ handleCheckChange } />
                            </label>
                        
                            <label htmlFor="">Psychic
                                <input className="CheckBox" type="checkbox" name="type" value="psychic" onChange={ handleCheckChange } />
                            </label>
                        
                            <label htmlFor="">Rock
                                <input className="CheckBox" type="checkbox" name="type" value="rock" onChange={ handleCheckChange } />
                            </label>
                            
                            <label htmlFor=""> Steel
                                <input className="CheckBox" type="checkbox" name="type" value="steel" onChange={ handleCheckChange } />
                            </label>
                        
                            <label htmlFor="">Water
                                <input className="CheckBox" type="checkbox" name="type" value="water" onChange={ handleCheckChange } />
                            </label>
                        
                        </div>
                    </div>
                    <br/>
                    <label className="HeightLabel">
                        Height: <input 
                                    className="Height" 
                                    type="number" 
                                    name="height" 
                                    onChange={handleInputChange}
                                />
                    </label>
                    <br/>
                    <label>
                        Weight: <input 
                                    className="Weight" 
                                    type="number" 
                                    name="weight" 
                                    onChange={handleInputChange}
                                />
                    </label>
                    <br/>
                    <label>
                        HP: <input 
                                className="HP" 
                                type="number" 
                                name="hp" 
                                onChange={handleInputChange}
                            />
                    </label>
                    <br/>
                    <label>
                        Attack: <input 
                                    className="Attack" 
                                    type="number" 
                                    name="attack" 
                                    onChange={handleInputChange}
                                />
                    </label>
                    <br/>
                    <label>
                        Defense: <input 
                                    className="Defense" 
                                    type="number" 
                                    name="defense" 
                                    onChange={handleInputChange}
                                />
                    </label>
                    <br/>
                    <label>
                        Speed: <input 
                                    className="Speed" 
                                    type="number" 
                                    name="speed" 
                                    onChange={handleInputChange}
                                />
                    </label>
                    <br/>
                    <button className="button-create"  type="submit">
                        Create Pokemon
                    </button>
                </form>
            </div>
        </div>
    )
}

export default CreatePokemon;