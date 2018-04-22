import React from 'react';
import {connect} from 'react-redux';

import SelectPersonType from './SelectPersonType';
import PersonListItem from './PersonListItem';
import './PersonList.css';

class PersonList extends React.Component {

  render() {
    const persons = this.props.userType === 'student' ? this.props.tutors : this.props.students;
    return (
      <div className="person-list">
        <SelectPersonType plural={true}/>
        <div className="list">
          {persons.map(person => {
            return <PersonListItem key={person._id} person={person}/>
          })}
        </div>
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

export default connect(mapStateToProps)(PersonList);