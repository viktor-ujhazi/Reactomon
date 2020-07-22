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
import PropTypes from "prop-types";
import axios from 'axios';
import {Card} from 'react-bootstrap';

export class PokemonDetail extends Component {
  state = {
    id:0,
    img:'',

  }

  componentDidMount = (props) => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((res) => this.setState({ pokemons: res.data.results }))
      .then(axios
        .get(this.props.pokemon.url)
        .then((result) => this.setState({ id: result.data.id , img: result.data.sprites.front_default})));
  };

  render() {
    const { name } = this.props.pokemon;
    return (
      <Card style={{backgroundColor: "peachpuff",
        border: "solid",
        marginBlockStart: "20px",
        marginBlockEnd: "20px",
        marginLeft: "20px",
        marginRight: "20px",
        width: "150px",
        textAlign: "center"}}>
          
        <Card.Img variant="top" src={this.state.img}/>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
        </Card.Body>

        {/* <p>{name} </p>
        <img src={this.state.img}/> */}
      </Card>
    );
  }
}

// // PropTypes
// PokemonDetail.propTypes = {
//   pokemon: PropTypes.object.isRequired,
// };

export default PokemonDetail;
