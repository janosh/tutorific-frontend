import React from 'react';
import {connect} from 'react-redux';

import PersonListItem from './PersonListItem';
import './PersonList.css';
import {setSinglePersonView} from '../redux/actions';

class PersonList extends React.Component {

  render() {
    const {personList, filters, setSinglePersonView} = this.props;
    return (
      personList.length === 0
      ? <div className="empty-list">
        <h2>No {filters.userType}s to display.</h2>
      </div>
      : <div className="person-list">
        {personList.map(person =>
          <PersonListItem
            key={person._id}
            person={person}
            setSinglePersonView={() => setSinglePersonView(person)}
          />
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

const mapDispatchToProps = (dispatch) => ({
  setSinglePersonView: (person) => dispatch(setSinglePersonView(person)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PersonList);