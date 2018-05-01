import React from 'react';
import {connect} from 'react-redux';

import PersonListItem from './PersonListItem';
import './PersonList.css';

class PersonList extends React.Component {

  render() {
    const {personList, filters} = this.props;
    return (
      <div className="person-list">
        {personList.length === 0 &&
          <div className="empty-list"><h2>No {filters.userType}s to display.</h2></div>
        }
        {personList.map(person =>
          <PersonListItem key={person._id} person={person}/>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
    personList: state.personList
  };
};

export default connect(mapStateToProps)(PersonList);