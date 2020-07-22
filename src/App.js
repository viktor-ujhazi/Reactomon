import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PokemonList from "./components/PokemonList";
import TypeList from "./components/TypeList";
import axios from "axios";
import "./App.css";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div style={{ paddingLeft: 40 }}>
          <a href="/Pokemons">Pokemons</a>
          <a style={{ paddingLeft: 40 }} href="/Types">
            Types
          </a>
        </div>

        <Switch>
          <Route path="/Pokemons">
            <PokemonList />
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
