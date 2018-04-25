import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

import LandingPage from './pages/Landing';
import FindPage from './pages/Find';
import AboutPage from './pages/About';
import SupportPage from './pages/Support';
import SignUpPage from './pages/SignUp';
import Login from './components/Login';

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
                  <img src="./assets/logo.svg" alt="Logo"/>Tutorific
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
            <Route path="/find" component={FindPage}/>
            <Route path="/about" component={AboutPage}/>
            <Route path="/support" component={SupportPage}/>
            <Route path="/signup" component={SignUpPage}/>
          </main>
        </div>
      </Router>
    );
  }
}