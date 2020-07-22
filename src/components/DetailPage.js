import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";

export class DetailPage extends Component {
  state = {
    pokemon: {},
  };

  componentDidMount = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/" + this.props.match.params.id)
      .then((res) =>
        this.setState({
          pokemon: {
            id: res.data.id,
            name: res.data.name,
            base_experience: res.data.base_experience,
            height: res.data.height,
            hp: res.data.stats["0"].base_stat,
            attack: res.data.stats["1"].base_stat,
            defense: res.data.stats["2"].base_stat,
            specialAttack: res.data.stats["3"].base_stat,
            specialDefense: res.data.stats["4"].base_stat,
            speed: res.data.stats["5"].base_stat,
          },
        })
      );
  };

  render() {
    return (
      <div>
        {this.state.pokemon.name},{this.state.pokemon.base_experience},
        {this.state.pokemon.height},{this.state.pokemon.hp},
        {this.state.pokemon.attack},{this.state.pokemon.defense},
        {this.state.pokemon.specialAttack},{this.state.pokemon.specialDefense},
        {this.state.pokemon.speed}
      </div>
    );
  }
}

export default DetailPage;
