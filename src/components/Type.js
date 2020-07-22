import React, { Component } from "react";
import PropTypes from "prop-types";

export class Type extends Component {
//   componentDidMount = (props) => {
//     console.log(this.props.pokemon);
//   };

  render() {
    const { name } = this.props.type;
    return (
      <div>
        <p>{name}</p>
      </div>
    );
  }
}
// // PropTypes
// Type.propTypes = {
//     pokemon: PropTypes.object.isRequired,
//   };

export default Type;