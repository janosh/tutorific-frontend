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
    const {userType, studentsList, tutorsList} = this.props;
    const list = userType === 'student' ? studentsList : tutorsList;
    return (
      <div id="find-page">
        <Filters/>
        <PersonList userType={userType} list={list}/>
        <PersonModal/>
        <Map list={list}/>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    userType: state.filters.userType,
    studentsList: state.studentsList,
    tutorsList: state.tutorsList
  };
};

const mapDispatchToProps = (dispatch) => ({
  getStudents: () => dispatch(getStudents()),
  getTutors: () => dispatch(getTutors()),
  getConnections: () => dispatch(getConnections()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ConnectPage);