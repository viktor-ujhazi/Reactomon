import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import PokemonList from "./components/PokemonList";
import TypeList from "./components/TypeList";
import DetailPage from "./components/DetailPage";
import "./App.css";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <img src="https://lh3.googleusercontent.com/proxy/cgWF6k0saMgPyUtQ5NPKnw_jpEbTNE5mlCOFcqufINa64m_hq1aVVeF2RsUFKYUbyw3c3oSf33qXNWXwctV2B5FsOyL8FPvH" />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRmlwlZ6bkQBzmOFmQ8YR8pCf6EeYJaw6iZsw&usqp=CAU"
            style={{ paddingLeft: "20%" }}
          />
        </div>
        <nav
          style={{
            paddingLeft: 40,
            border: "5px solid",
            borderColor: "cornflowerblue",
            backgroundColor: "yellow",
            textAlign: "center",
            fontSize: "xxx-large",
            fontWeight: "900",
          }}
        >
          <a href="/Pokemons">Pokemons</a>
          <a style={{ paddingLeft: 40 }} href="/Types">
            Types
          </a>
        </nav>

        <Switch>
          <Route path="/Pokemons">
            <PokemonList />
          </Route>
          <Route path="/Types">
            <TypeList />
          </Route>
          <Route path="/Pokemon/:id" component={DetailPage}></Route>
        </Switch>
      </Router>
      // <
      //   PokemonList pokemons={this.state.pokemons}
      // />
    );
  }
}

export default App;
