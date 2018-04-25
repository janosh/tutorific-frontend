import React from 'react';
import moment from 'moment';

import './PersonListItem.css';

export default function PersonListItem({person}) {
  return (
    <div className="person-list-item">
      <h3>{person.firstname} {person.lastname}</h3>
      <p><span>Status</span> {person.status}</p>
      <p><span>Subjects</span> {person.subjects.map(subject => subject.name).join(', ')}</p>
      <p><span>Address</span> {person.address.city}</p>
      <p><span>Gender</span> {person.gender}</p>
      <p><span>Last login</span> {moment(person.updatedAt).format('MMMM DD, YYYY, h:mm:ss')}</p>
    </div>
  );
}