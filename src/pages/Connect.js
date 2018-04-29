import React from 'react';
import {connect} from 'react-redux';

import PersonModal from '../components/PersonModal';
import Filters from '../components/Filters';
import PersonList from '../components/PersonList';
import Map from '../components/Map';
import {getStudents, getTutors, getConnections} from '../actions';
import config from '../config';
import './Connect.css';

class ConnectPage extends React.Component {

  componentDidMount() {
    fetch(config.backendUrl + 'tutors')
    .then(res => res.json())
    .then(tutors => {
      this.props.getTutors(tutors);
    })
    .catch(err => {
      console.error(err.message);
    });

    fetch(config.backendUrl + 'students')
    .then(res => res.json())
    .then(students => {
      this.props.getStudents(students);
    })
    .catch(err => {
      console.error(err.message);
    });
  }

  render() {
    return (
      <div id="find-page">
        <Filters/>
        <PersonList/>
        <PersonModal/>
        <Map/>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getStudents: (students) => dispatch(getStudents(students)),
  getTutors: (tutors) => dispatch(getTutors(tutors)),
  getConnections: (connections) => dispatch(getConnections(connections)),
});

export default connect(null, mapDispatchToProps)(ConnectPage);