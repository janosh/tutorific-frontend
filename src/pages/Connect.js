import React from 'react';
import {connect} from 'react-redux';

import PersonModal from '../components/PersonModal';
import Filters from '../components/Filters';
import PersonList from '../components/PersonList';
import Map from '../components/Map';
import {getStudents, getTutors, getConnections} from '../actions';
import './Connect.css';

class ConnectPage extends React.Component {

  componentDidMount() {
    this.props.getTutors();
    this.props.getStudents();
    this.props.getConnections();
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
  getStudents: () => dispatch(getStudents()),
  getTutors: () => dispatch(getTutors()),
  getConnections: () => dispatch(getConnections()),
});

export default connect(null, mapDispatchToProps)(ConnectPage);