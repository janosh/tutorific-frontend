import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import LandingPage from './pages/Landing';
import ConnectPage from './pages/Connect';
import AboutPage from './pages/About';
import SupportPage from './pages/Support';
import SignupPage from './pages/Signup';
import SignupForm from './pages/ReduxForm';
import PageNotFoundPage from './pages/PageNotFound';
import Login from './components/Login';

import './App.css';

export default class App extends React.Component {

  render() {
    return (
      <Router>
        <div id="app">
          <header>
            <nav>
              <div id="main-nav">
                <Link to="/"><img src="./assets/logo.svg" alt="Logo"/></Link>
                <div>
                  <Link to="/">Tutorific</Link>
                  <Link to="/connect">Connect</Link>
                  <Link to="/about">About</Link>
                  <Link to="/support">Support</Link>
                </div>
              </div>
              <div id="signup-nav">
                <Link to="/signupform">Sign up form</Link>
                <Link to="/signup">Sign up</Link>
                <Link to="#"><Login/></Link>
              </div>
            </nav>
          </header>
          <main>
            <Switch>
              <Route exact path="/" component={LandingPage}/>
              <Route path="/connect" component={ConnectPage}/>
              <Route path="/about" component={AboutPage}/>
              <Route path="/support" component={SupportPage}/>
              <Route path="/signup" component={SignupPage}/>
              <Route path="/signupform" component={SignupForm}/>
              <Route path="/*" component={PageNotFoundPage}/>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}