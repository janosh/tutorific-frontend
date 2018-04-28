import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';

import {setSingleViewPerson} from '../actions';
import './PersonListItem.css';

class PersonListItem extends React.Component {
  render() {
    const person = this.props.person;
    return (
      <div className="person-list-item" onClick={() => this.props.setSingleViewPerson(person)}>
        <h3>{person.firstname} {person.lastname}</h3>
        <p><span>Status</span> {person.status}</p>
        <p><span>Subjects</span> {person.subjects.map(subject => subject.name).join(', ')}</p>
        <p><span>Address</span> {person.address.city}</p>
        <p><span>Gender</span> {person.gender}</p>
        <p><span>Last login</span> {moment(person.updatedAt).format('MMMM DD, YYYY')}</p>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setSingleViewPerson: (person) => dispatch(setSingleViewPerson(person)),
});

export default connect(null, mapDispatchToProps)(PersonListItem);