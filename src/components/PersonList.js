import React from 'react';
import {connect} from 'react-redux';

import PersonListItem from './PersonListItem';
import {changeUserSearch} from '../actions';

class PersonList extends React.Component {

  render() {
    const persons = this.props.userSearches === 'tutors' ? this.props.tutors : this.props.students;
    return (
      <div className="person-list">
        <div className="person-type">
          <button onClick={() => this.props.changeUserSearch('tutors')}>Tutors</button>
          <button onClick={() => this.props.changeUserSearch('students')}>Students</button>
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
    userSearches: state.appState.userSearches,
    students: state.students,
    tutors: state.tutors
  };
};

const mapDispatchToProps = (dispatch) => ({
  changeUserSearch: (userSearches) => dispatch(changeUserSearch(userSearches)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PersonList);