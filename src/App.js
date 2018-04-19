import React from 'react';
import {connect} from 'react-redux';

import {getStudents, getTutors, getConnections} from './actions';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div id="app"></div>
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