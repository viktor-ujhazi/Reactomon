import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";
import { Card } from "react-bootstrap";

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
            img: res.data.sprites.front_default,
          },
        })
      );
  };

  render() {
    return (
      <Card style={{width: "50%", height: "100%", textAlign: "center", display: "block",
      marginLeft: "auto",marginRight: "auto", border:"solid", backgroundColor: "peachpuff",
      marginBlockEnd: "30px", marginBlockStart: "30px", borderWidth: "10px"}}>
          <Card.Body>
            <Card.Title style={{fontSize: "xxx-large"}}>{this.state.pokemon.name}</Card.Title>
            <Card.Img variant="top" src={this.state.pokemon.img} style={{height: "250px"}} />
            <Card.Text>Base XP: {this.state.pokemon.base_experience}</Card.Text>
            <Card.Text>Height: {this.state.pokemon.height}</Card.Text>
            <Card.Text>HP: {this.state.pokemon.hp}</Card.Text>
            <Card.Text>Attack: {this.state.pokemon.attack}</Card.Text>
            <Card.Text>Defense: {this.state.pokemon.defense}</Card.Text>
            <Card.Text>Special Attack: {this.state.pokemon.specialAttack}</Card.Text>
            <Card.Text>Special Defense: {this.state.pokemon.specialDefense}</Card.Text>
            <Card.Text>Speed: {this.state.pokemon.speed}</Card.Text>
          </Card.Body>
      </Card>
    );
  }
}

export default DetailPage;
