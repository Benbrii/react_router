import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Home from "./Home.js";
import History from "./History.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Router>
            <div>
              <ul>
                <li>
                  <Link to="/">Main Page</Link>
                </li>
                <li>
                  <Link to="/Home.js">Home</Link>
                </li>
                <li>
                  <Link to="/History.js">History</Link>
                </li>
              </ul>

              <hr />

              <Route exact path="/" component={App} />
              <Route path="/Home.js" component={Home} />
              <Route path="/History.js" component={History} />
            </div>
          </Router>
        </header>
      </div>
    );
  }
}

export default App;
