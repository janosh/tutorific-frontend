import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import SignUpPage from './pages/SignUpPage';

import './App.css';

export default class App extends React.Component {

  render() {
    return (
      <Router>
        <div id="app">
          <header>
            <nav id="main-nav">
              <div>
                <Link to="/">Tutorific</Link>
                <Link to="/about">About</Link>
                <Link to="/support">Support</Link>
                <Link to="/contact">Contact</Link>
              </div>
              <div>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign up</Link>
              </div>
            </nav>
          </header>
          <main>
            <div id="content">
              <Route exact path="/" component={LandingPage}/>
              <Route path="/about" component={AboutPage}/>
              <Route path="/signup" component={SignUpPage}/>
            </div>
          </main>
        </div>
      </Router>
    );
  }
}