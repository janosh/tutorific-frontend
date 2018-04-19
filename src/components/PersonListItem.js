import React from 'react';

export default function PersonListItem({person}) {
  return (
    <div className="person-list-item">
      <h3>{person.firstname} {person.lastname}</h3>
      <p className="status">status: {person.status}</p>
    </div>
  );
}