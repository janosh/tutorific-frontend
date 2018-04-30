import React from 'react';

import PersonListItem from './PersonListItem';
import './PersonList.css';

export default class PersonList extends React.Component {

  render() {
    const {list, userType} = this.props;
    return (
      <div className="person-list">
        {list.length === 0 &&
          <div className="empty-list"><h2>No {userType}s to display.</h2></div>
        }
        {list.map(person =>
          <PersonListItem key={person._id} person={person}/>
        )}
      </div>
    );
  }
}