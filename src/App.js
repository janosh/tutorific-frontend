import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

import LandingPage from './pages/LandingPage';
import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';
import SignUpPage from './pages/SignUpPage';
import Login from './components/Login';

import './App.css';

export default class App extends React.Component {

  render() {
    return (
      <Router>
        <div id="app">
          <header>
            <nav>
              <Link to="/">Tutorific</Link>
              <Link to="/find">Find</Link>
              <Link to="/about">About</Link>
              <Link to="/support">Support</Link>
              <Link to="/signup">Sign up</Link>
              <Link to="#"><Login/></Link>
            </nav>
          </header>
          <main>
            <div className="content">
              <Route exact path="/" component={LandingPage}/>
              <Route path="/about" component={AboutPage}/>
              <Route path="/find" component={MainPage}/>
              <Route path="/signup" component={SignUpPage}/>
            </div>
          </main>
        </div>
      </Router>
    );
  }
}