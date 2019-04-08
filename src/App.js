import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, NavLink } from "react-router-dom";
import './App.css';
import Home from "./Home.js";
import History from "./History.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <BrowserRouter>
            <div>
              <ul>
                <NavLink exact to="/" activeClassName="selected"> Home </NavLink>
                <NavLink to="/History" activeClassName="selected"> History </NavLink>
              </ul>

              <hr />

              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/History" component={History} />
              </Switch>
            </div>
          </BrowserRouter>
        </header>
      </div>
    );
  }
}

export default App;
