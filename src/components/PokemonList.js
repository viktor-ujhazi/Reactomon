import React, { Component } from "react";
import PokemonDetail from "./PokemonDetail";
import axios from "axios";
import PropTypes from "prop-types";

class PokemonList extends Component {
  state = {
    pokemons: [],
  };

  componentDidMount() {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((res) => this.setState({ pokemons: res.data.results }));
  }

  render() {
    return this.state.pokemons.map((pokemon) => (
      <PokemonDetail key={pokemon.name} pokemon={pokemon} />
    ));
  }
}

// PropTypes
PokemonList.propTypes = {
  pokemonList: PropTypes.array.isRequired,
};

export default PokemonList;
