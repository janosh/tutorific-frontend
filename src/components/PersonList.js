import React from 'react';
import {connect} from 'react-redux';

import PersonListItem from './PersonListItem';
import {changePersonType} from '../actions';

// const tutors = false;

class PersonList extends React.Component {
  constructor() {
    super();
    this.state = {tutors: true};
  }

  render() {
    const persons = this.state.tutors ? this.props.tutors : this.props.students;
    return (
      <div className="person-list">
        <div className="person-type">
          <button>Tutors</button>
          <button>Students</button>
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
    personType: state.personType,
    students: state.students,
    tutors: state.tutors
  };
};

const mapDispatchToProps = (dispatch) => ({
  changePersonType: (personType) => dispatch(changePersonType(personType)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PersonList);