// import React, { Component, Fragment } from "react";
// import { withRouter } from "react-router";
// import PropTypes from "prop-types";

// class PokemonDetail extends Component {
//   render() {
//     const pokemon = this.props.pokemon.find(
//       (pokemon) => pokemon.id === parseInt(this.props.match.params.id, 10)
//     );
//     return (
//       <Fragment>
//         <h1>{pokemon.name}</h1>
//         <img src={pokemon.image_url} />
//       </Fragment>
//     );
//   }
// }

// export default withRouter(PokemonDetail);

import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";

export class PokemonDetail extends Component {
  state = {
    id: 0,
    img: "",
  };

  componentDidMount = (props) => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((res) => this.setState({ pokemons: res.data.results }))
      .then(
        axios.get(this.props.pokemon.url).then((result) =>
          this.setState({
            id: result.data.id,
            img: result.data.sprites.front_default,
          })
        )
      );
  };

  render() {
    const { name } = this.props.pokemon;
    return (
      <div>
        <Link to={`/Pokemon/${this.state.id}`}>
          <p>{name} </p>
        </Link>

        <img src={this.state.img} />
      </div>
    );
  }
}

// PropTypes
PokemonDetail.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default PokemonDetail;
