import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import PokemonList from "./components/PokemonList";
import TypeList from "./components/TypeList";
import axios from "axios";
import "./App.css";
import {Navbar} from 'react-bootstrap';

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <img src="http://pixelartmaker.com/art/435fe298d486154.png"/>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRmlwlZ6bkQBzmOFmQ8YR8pCf6EeYJaw6iZsw&usqp=CAU" style={{paddingLeft: "20%"}}/>
        </div>
        <Navbar style={{ paddingLeft: 40, border: '5px solid', borderColor: "cornflowerblue", backgroundColor: "yellow", textAlign: "center",
          fontSize: "xxx-large", fontWeight: "900" }}>
          <a href="/Pokemons">Pokemons</a>
          <a style={{ paddingLeft: 40 }} href="/Types">
            Types
          </a>
        </Navbar>

        <Switch>
          <Route path="/Pokemons">
            <ul><PokemonList /></ul>
          </Route>

          <Route path="/Types">
            <TypeList />
          </Route>
        </Switch>
      </Router>
      // <
      //   PokemonList pokemons={this.state.pokemons}
      // />
    );
  }
}

export default App;
