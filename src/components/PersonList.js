import React from 'react';
import {connect} from 'react-redux';

import PersonListItem from './PersonListItem';
import './PersonList.css';

class PersonList extends React.Component {

  render() {
    const personsList = this.props.userType === 'student' ? this.props.studentsList : this.props.tutorsList;
    return (
      <div className="person-list">
        <div className="list">
          {personsList.length === 0 && <div><h2>No {this.props.userType}s to display.</h2></div> }
          {personsList.map(person =>
            <PersonListItem key={person._id} person={person}/>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userType: state.app.filtersUserType,
    studentsList: state.studentsList,
    tutorsList: state.tutorsList
  };
};

export default connect(mapStateToProps)(PersonList);