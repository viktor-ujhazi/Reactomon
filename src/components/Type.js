import React, { Component } from "react";
import PropTypes from "prop-types";

export class Type extends Component {

  render() {
    const { name } = this.props.type;
    return (
      <li style={{textAlign: "center",
      border: "solid 5px",
      borderColor: "black",
      backgroundImage: "linear-gradient(45deg, indianred, transparent)",
      width: "200px",
      marginLeft: "auto",
      marginRight: "auto"}
      }>
        {name}
      </li>
    );
  }
}

export default Type;