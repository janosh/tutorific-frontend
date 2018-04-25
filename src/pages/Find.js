import React from 'react';
import {connect} from 'react-redux';

import {getStudents, getTutors, getConnections} from '../actions';
import Filters from '../components/Filters';
import PersonList from '../components/PersonList';
import Map from '../components/Map';
import config from '../config';
import './Find.css';

class FindPage extends React.Component {

  componentDidMount() {
    this.props.getTutorsRequest();
    fetch(config.backendUrl + 'tutors')
    .then(res => res.json())
    .then(tutors => {
      this.props.getTutors(tutors);
      this.props.getTutorsSuccess();
    })
    .catch(reason => {
      console.error(reason.message);
      this.props.getTutorsFailure();
    });

    this.props.getStudentsRequest();
    fetch(config.backendUrl + 'students')
    .then(res => res.json())
    .then(students => {
      this.props.getStudents(students);
      this.props.getStudentsSuccess();
    })
    .catch(reason => {
      console.error(reason.message);
      this.props.getStudentsFailure();
    });
  }

  render() {
    return (
      <div id="find-page">
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
  getStudentsRequest: (tutors) => dispatch({type: 'getStudentsRequest'}),
  getStudentsSuccess: (tutors) => dispatch({type: 'getStudentsSuccess'}),
  getStudentsFailure: (tutors) => dispatch({type: 'getStudentsFailure'}),
  getTutors: (tutors) => dispatch(getTutors(tutors)),
  getTutorsRequest: (tutors) => dispatch({type: 'getTutorsRequest'}),
  getTutorsSuccess: (tutors) => dispatch({type: 'getTutorsSuccess'}),
  getTutorsFailure: (tutors) => dispatch({type: 'getTutorsFailure'}),
  getConnections: (connections) => dispatch(getConnections(connections))
});

export default connect(mapStateToProps, mapDispatchToProps)(FindPage);