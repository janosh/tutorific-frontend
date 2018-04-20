import React from 'react';
import {connect} from 'react-redux';

import PersonListItem from './PersonListItem';
import {changeUserType} from '../actions';
import './PersonList.css';

class PersonList extends React.Component {

  render() {
    const persons = this.props.userType === 'tutor' ? this.props.tutors : this.props.students;
    return (
      <div className="person-list">
        <div className="person-type">
          <button
            onClick={() => this.props.changeUserType('tutor')}
            className={this.props.userType === 'tutor' ? 'active' : null}>
            Tutors
          </button>
          <button
            onClick={() => this.props.changeUserType('student')}
            className={this.props.userType === 'student' ? 'active' : null}>
            Students
          </button>
        </div>
        {persons.map(person => {
          return <PersonListItem key={person._id} person={person}/>
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userType: state.appState.userType,
    students: state.students,
    tutors: state.tutors
  };
};

const mapDispatchToProps = (dispatch) => ({
  changeUserType: (userType) => dispatch(changeUserType(userType)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PersonList);