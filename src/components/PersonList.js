import React from 'react';
import {connect} from 'react-redux';

import SelectPersonType from './SelectPersonType';
import PersonListItem from './PersonListItem';
import './PersonList.css';

class PersonList extends React.Component {

  render() {
    const personsList = this.props.userType === 'student' ? this.props.tutorsList : this.props.studentsList;
    return (
      <div className="person-list">
        <SelectPersonType plural={true}/>
        <div className="list">
          {personsList.map(person => {
            return <PersonListItem key={person._id} person={person}/>
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userType: state.user.type,
    studentsList: state.studentsList,
    tutorsList: state.tutorsList
  };
};

export default connect(mapStateToProps)(PersonList);