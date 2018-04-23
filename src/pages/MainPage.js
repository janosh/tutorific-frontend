import React from 'react';
import {connect} from 'react-redux';

import {getStudents, getTutors, getConnections} from '../actions';
import Filters from '../components/Filters';
import PersonList from '../components/PersonList';
import Map from '../components/Map';
import './MainPage.css';

class MainPage extends React.Component {

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
      <div id="main-page">
        <Filters/>
        <PersonList/>
        <Map/>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);