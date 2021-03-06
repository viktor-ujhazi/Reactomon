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
import { Navbar } from "react-bootstrap";
import "./App.css";

class App extends Component {
  state = {
    lightMode: true,
    navColor: "yellow",
    cardsBackground: "peachpuff",
    pageBackground: "white",
  };

  changeMode(){
    if(this.state.lightMode === true){
        this.setState({
            lightMode: false,
            navColor: "brown",
            cardsBackground: "darkgray",
            pageBackground: "grey",
        })

        document.getElementById("root").setAttribute("style", "background-color: grey;")
    }else{
        this.setState({
            lightMode: true,
            navColor: "yellow",
            cardsBackground: "peachpuff",
            pageBackground: "white",
        })

        document.getElementById("root").setAttribute("style", "background-color: white;")
    }
}

  render() {
    return (
      <Router>
        <button style={{marginLeft: "10%",
          width: "25%",
          backgroundColor: "bisque"}} onClick = { () => this.changeMode()}>Switch Theme</button>

        <div style={{ textAlign: "-webkit-center" }}>
          <img src="http://pixelartmaker.com/art/435fe298d486154.png" />
          <img
            src="https://24.media.tumblr.com/5b94f3545e5e0afa339efe86b6f723f4/tumblr_mgxqxcFyJT1rmazn7o1_250.gif"
            style={{ paddingLeft: "20%" }}
          />
        </div>

        <Navbar id="navbar"
          style={{
            paddingLeft: 40,
            border: "5px solid",
            borderColor: "cornflowerblue",
            backgroundColor: this.state.navColor,
            textAlign: "center",
            fontSize: "xxx-large",
            fontWeight: "900",
          }}
        >
          <a href="/Pokemons">Pokemons</a>
          <a style={{ paddingLeft: 40 }} href="/Types">
            Types
          </a>
        </Navbar>

        <Switch>
          <Route path="/Pokemons">
            <PokemonList backgrounds={this.state.cardsBackground}/>
          </Route>
          <Route path="/Types">
            <TypeList />
          </Route>
        <Route path="/Pokemon/:id" render={(props) => <DetailPage backgrounds={this.state.cardsBackground}
         {...props}/>}>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
