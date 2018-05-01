import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';

import {setSinglePersonView} from '../actions';
import './PersonListItem.css';

class PersonListItem extends React.Component {
  render() {
    const person = this.props.person;
    return (
      <div className="person-list-item" onClick={() => this.props.setSinglePersonView(person)}>
        <h3>{person.firstName} {person.lastName}</h3>
        <p><span>Status</span> {person.status}</p>
        <p><span>Subjects</span> {person.subjects.join(', ')}</p>
        {person.location && person.location.label && <p><span>Address</span> {person.location.label}</p>}
        <p><span>Gender</span> {person.gender}</p>
        <p><span>Last login</span> {moment(person.updatedAt).format('MMMM DD, YYYY')}</p>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setSinglePersonView: (person) => dispatch(setSinglePersonView(person)),
});

export default connect(null, mapDispatchToProps)(PersonListItem);