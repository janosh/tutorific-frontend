import React from 'react';
import {connect} from 'react-redux';

import {getStudents, getTutors, getConnections} from '../actions';
import PersonList from '../components/PersonList';
import MapContainer from '../components/Map';
import './LandingPage.css';

class LandingPage extends React.Component {

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
      <div className="landing-page">
        <PersonList/>
        <MapContainer/>
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

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);