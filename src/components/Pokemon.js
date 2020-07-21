import React, { Component } from "react";
import PropTypes from "prop-types";

export class Pokemon extends Component {
  

  componentDidMount = (props) => {
    console.log(this.props.pokemon);
  };

  render() {
    const { name } = this.props.pokemon;
    return (
      <div >
        <p>
          
          {name}
          
        </p>
      </div>
    );
  }
}

// PropTypes
Pokemon.propTypes = {
  pokemon: PropTypes.object.isRequired,
  
};


export default Pokemon;