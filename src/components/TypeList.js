import React, { Component } from "react";
import Type from './Type';
import axios from 'axios';

class TypeList extends Component {
    state = {
        types: [],
      };
    
      componentDidMount() {
        axios
          .get("https://pokeapi.co/api/v2/type")
          .then((res) => this.setState({ types: res.data.results }));
      }
    
    
    render(){
        // return(
        // <div>
        //     <a>Here we go with the types CUNT!</a>
        // </div>
        // );
        return this.state.types.map((type) => (
            <Type key={type.name} type={type} />
          ));
        
    }
}

export default TypeList;