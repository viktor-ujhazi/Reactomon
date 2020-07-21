import React, { Component } from 'react'
//import { BrowserRouter as Router, Route } from 'react-router-dom';

import PokemonList from './components/PokemonList';
import axios from 'axios';
import './App.css';


class App extends Component {
  state = {
    pokemons: []
  };

  componentDidMount() {
    axios
      .get('https://pokeapi.co/api/v2/pokemon')
      .then(res => this.setState({ pokemons: res.data.results }));
  }

    
  render() {
    return (
      <
        PokemonList pokemons={this.state.pokemons}
      />
    );
  }
}

export default App;