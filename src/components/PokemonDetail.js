import React, { Component, Fragment } from "react";
import {withRouter} from 'react-router';
import PropTypes from "prop-types";

class PokemonDetail extends Component {
  
  render() {
    const pokemon = this.props.pokemon.find((pokemon) => pokemon.id ===parseInt(this.props.match.params.id, 10));
    return (
      <Fragment>
        <h1>{pokemon.name}</h1>
        <img src={pokemon.image_url}/>
                   
       
      </Fragment>
    );
  }
}


export default withRouter(PokemonDetail);