import React, { Component } from "react";
import PropTypes from "prop-types";


const typePics =  {  
    normal: 'https://previews.123rf.com/images/sanek13744/sanek137441707/sanek13744170700460/82985601-normal-level-risk-gauge-vector-icon-normal-fuel-illustration-on-isolated-background-simple-business-.jpg',
    fighting: 'https://cdn0.iconfinder.com/data/icons/people-lifestyle/100/Hit-01-512.png',
    flying: 'https://cdn2.iconfinder.com/data/icons/superhero-superman/309/superman-thenoun-012-512.png',
    poison: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/poison-65-1053864.png',
    ground: 'https://cdn0.iconfinder.com/data/icons/electronic-components-line/50/ground-512.png',
    rock: 'https://cdn4.iconfinder.com/data/icons/ios-edge-glyph-9/25/Rock-On-512.png',
    bug: 'https://cdn1.iconfinder.com/data/icons/social-object-set-2-2/74/27-512.png',
    ghost: 'https://cdn1.iconfinder.com/data/icons/halloween-2100/48/51-512.png',
    steel: 'https://cdn1.iconfinder.com/data/icons/elasto-metal-structures-and-products/26/16_i-beam-512.png',
    fire: 'https://image.flaticon.com/icons/svg/394/394631.svg',
    water: 'https://cdn2.iconfinder.com/data/icons/beauty-and-spa-10/64/3-512.png',
    grass: 'https://cdn1.iconfinder.com/data/icons/garden-tools-15/64/grass-meadow-lawn-plant-field-512.png',
    electric: 'https://cdn2.iconfinder.com/data/icons/industry-3/512/power-512.png',
    psychic: 'https://www.clipartmax.com/png/middle/102-1027299_migraine-io-psychic-icon.png',
    ice: 'https://icons.iconarchive.com/icons/icons-land/weather/256/Ice-icon.png',
    dragon: 'https://icons-for-free.com/iconfiles/png/512/of+thrones+game+thrones+series+character+avatar+dragon-1320568555377017678.png',
    dark: 'https://image.flaticon.com/icons/svg/0/8.svg',
    fairy: 'https://cdn3.iconfinder.com/data/icons/people-professions/512/fairy_B-512.png',
    unknown: 'https://cdn1.iconfinder.com/data/icons/rounded-flat-country-flag-collection-1/2000/_Unknown.png',
    shadow: 'https://cdn0.iconfinder.com/data/icons/positive-character-traits-alphabet-s-part-2/237/positive-s2003-512.png',
    
}





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
        <img style={{width:"50%"}} src={typePics[name]} />
        {name}
      </li>
    );
  }
}

export default Type;