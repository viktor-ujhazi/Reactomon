import React, { Component } from 'react';
import Pokemon from './Pokemon';
import PropTypes from 'prop-types';

class PokemonList extends Component {
  render() {
    return this.props.pokemons.map((pokemon) => (
      <Pokemon key={pokemon.name} pokemon={pokemon} />
    ));
  }
}

// PropTypes
PokemonList.propTypes = {
    pokemonList: PropTypes.array.isRequired,
  
}

export default PokemonList;