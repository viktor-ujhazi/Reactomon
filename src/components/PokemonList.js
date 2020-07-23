import React, { Component } from "react";
import PokemonDetail from "./PokemonDetail";
import axios from "axios";
import PropTypes from "prop-types";

class PokemonList extends Component {
  state = {
    pokemons: [],
    next: "https://pokeapi.co/api/v2/pokemon",
    
    
  };

  buttonclick(param){
    if (param){
    axios
      .get(param)
      .then((res) => this.setState({ 
        pokemons: res.data.results,
        next: res.data.next,
        prev: res.data.previous,
      
      }));
    }
  }

  componentDidMount() {
    // axios
    //   .get(this.state.next)
    //   .then((res) => this.setState({ 
    //     pokemons: res.data.results,
    //     next: res.data.next,
    //     prev: res.data.previous,
      
    //   }));
    this.buttonclick(this.state.next);
  }

  render() {
    return(
      <div>
        <ul style={{ textAlign: "center" }}>
          {
            this.state.pokemons.map((pokemon) => (
            <li style={{display: "inline-block"}}><PokemonDetail key={pokemon.name} pokemon={pokemon} 
                cardBackground={this.props.backgrounds} /></li>))
          }
        </ul>
            <div style={{ textAlign: "center", marginBlockEnd: "50px" }}>
              <button onClick={ () => this.buttonclick(this.state.prev)} style={{ marginRight: "50px" }}>Previous</button>
              <button onClick={ () => this.buttonclick(this.state.next)}>Next</button>
            </div>
      </div>

      );       
  }
}

// PropTypes
// PokemonList.propTypes = {
//   pokemonList: PropTypes.array.isRequired,
// };

export default PokemonList;