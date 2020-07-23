import React, { Component } from "react";
import Type from "./Type";
import axios from "axios";

class TypeList extends Component {
  state = {
    types: [],
  };

  componentDidMount() {
    axios
      .get("https://pokeapi.co/api/v2/type")
      .then((res) => this.setState({ types: res.data.results }));
  }

  render() {
    return(
    <ul>
      {
        this.state.types.map((type) => <Type key={type.name} type={type} />)
      }
    </ul>);
  }
}

export default TypeList;
