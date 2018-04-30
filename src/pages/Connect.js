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
    const {filters, studentsList, tutorsList} = this.props;
    const list = filters.userType === 'student' ? studentsList : tutorsList;
    return (
      <div id="connect-page">
        <Filters/>
        <PersonList userType={filters.userType} list={list}/>
        <PersonModal/>
        <Map list={list}/>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    filters: state.filters,
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