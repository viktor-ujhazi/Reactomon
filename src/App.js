import React, { Component } from "react";
//import { BrowserRouter as Router, Route } from 'react-router-dom';

import PokemonList from "./components/PokemonList";

import "./App.css";

class App extends Component {
  render() {
    return <PokemonList pokemons />;
  }
}

export default App;
