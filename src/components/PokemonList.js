import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';

class PokemonList extends Component {
  // state = {
  //   pokemons: []

  // };


  // componentDidMount() {
  //   axios
  //     .get('https://pokeapi.co/api/v2/pokemon')
  //     .then(res => this.setState({ pokemons: res.data.results }));
  // }
  
  render() {

    return (
      <Fragment>
        <h1>Pokemons</h1>
        <ul>
          {this.props.pokemons.map(this.mapPokemonToListItem)}
        </ul>

      </Fragment>
      
      
    );
  }

  mapPokemonToListItem(pokemon){
    return (
      <li key={pokemon.url}>
      <Link to={`/pokemons/${pokemon.id}`}>
        <img src={pokemon.image_url}/>
        {pokemon.name}

      </Link>

      </li>
    )
  }

}


export default PokemonList;