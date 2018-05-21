import React from 'react';
import moment from 'moment';

import './PersonListItem.css';

const PersonListItem = ({person, setSinglePersonView}) => (
  <div className="person-list-item" onClick={setSinglePersonView}>
    <h3>{person.firstName} {person.lastName}</h3>
    <p><span>Status</span> {person.status}</p>
    <p><span>Subjects</span> {person.subjects.join(', ')}</p>
    {person.location && person.location.label && <p><span>Address</span> {person.location.label}</p>}
    <p><span>Gender</span> {person.gender}</p>
    <p><span>Last login</span> {moment(person.updatedAt).format('MMMM DD, YYYY')}</p>
  </div>
);

export default PersonListItem;