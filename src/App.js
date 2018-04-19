import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import SignUpPage from './pages/SignUpPage';
import {getStudents, getTutors, getConnections} from './actions';

import './App.css';

class App extends React.Component {

  componentDidMount() {
    fetch('http://localhost:3000/tutors')
    .then(res => res.json())
    .then(tutors => {
      this.props.getTutors(tutors);
    });

    fetch('http://localhost:3000/students')
    .then(res => res.json())
    .then(students => {
      this.props.getStudents(students);
    });
  }

  render() {
    return (
      <Router>
        <div id="App">
          <nav id="main-nav">
            <Link to="/">Logo</Link>
            <Link to="/about">About</Link>
            <Link to="/signup">Sign up</Link>
          </nav>
          <div>
            <Route exact path="/" component={LandingPage}/>
            <Route path="/about" component={AboutPage}/>
            <Route path="/signup" component={SignUpPage}/>
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    students: state.students,
    tutors: state.tutors,
    connections: state.connections
  };
};

const mapDispatchToProps = (dispatch) => ({
  getStudents: (students) => dispatch(getStudents(students)),
  getTutors: (tutors) => dispatch(getTutors(tutors)),
  getConnections: (connections) => dispatch(getConnections(connections))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);