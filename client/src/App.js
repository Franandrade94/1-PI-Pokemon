import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import React from 'react';
import { useState } from "react";
import LandingPage from "./components/1-LandingPage/LandingPage";
import Nav from './components/2-Nav/Nav';
import Home from "./components/4-Home/Home";
import PokemonDetail from "./components/6-PokemonDetail/PokemonDetail";
import CreatePokemon from "./components/7-CreatePokemon/CreatePokemon";
import Pagination from './components/8-Pagination/Pagination';

function App(props) {
  
  return (
    <div className="App">
      <Router className="Router">
        <Route path="/" exact component={LandingPage}/>
        
        
        <Route path="/home" exact component={Nav}/>
        <Route path="/home" exact component={Home}/>
        
        <Route path="/pokemons/:id" exact component={Nav}/>
        <Route path="/pokemons/:id" exact component={PokemonDetail}/>

        <Route path="/pokemon/create" exact component={Nav}/>
        <Route path="/pokemon/create" exact component={CreatePokemon}/>

        <Route path="/pagination" exact component={Pagination}/>
      </Router>
    </div>
  );
}

export default App;
