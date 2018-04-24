import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

import LandingPage from './pages/Landing';
import FindPage from './pages/Find';
import AboutPage from './pages/About';
import SignUpPage from './pages/SignUp';
import Login from './components/Login';
import logo from './assets/logo.svg';

import './App.css';

export default class App extends React.Component {

  render() {
    return (
      <Router>
        <div id="app">
          <header>
            <nav>
              <Link to="/">
                <div className="logo-container">
                  <img src={logo} alt="Logo"/>Tutorific
                </div>
              </Link>
              <Link to="/find">Find</Link>
              <Link to="/about">About</Link>
              <Link to="/support">Support</Link>
              <Link to="/signup">Sign up</Link>
              <Link to="#"><Login/></Link>
            </nav>
          </header>
          <main>
            <Route exact path="/" component={LandingPage}/>
            <Route path="/about" component={AboutPage}/>
            <Route path="/find" component={FindPage}/>
            <Route path="/signup" component={SignUpPage}/>
          </main>
        </div>
      </Router>
    );
  }
}