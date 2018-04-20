import React from 'react';
import './PersonListItem.css';

export default function PersonListItem({person}) {
  return (
    <div className="person-list-item">
      <h3>{person.firstname} {person.lastname}</h3>
      <p className="status">status: {person.status}</p>
      <p className="status">email: {person.email}</p>
      <p className="status">subjects: {person.subjects.map(subject => subject.name).join(', ')}</p>
    </div>
  );
}