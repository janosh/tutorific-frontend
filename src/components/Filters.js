import React from 'react';
import {connect} from 'react-redux';

import SelectPersonType from './SelectPersonType';
import Geosearch from './Geosearch';

import './Filters.css';

class Filters extends React.Component {

  render() {
    const {userType, studentsList, tutorsList} = this.props;
    const relevantList = userType === 'student' ? studentsList : tutorsList;
    const findCount = relevantList.length;
    const availableCount = relevantList.filter(person => person.status === 'available').length;
    return (
      <div className="filters">
        <h2>Filters</h2>
        <p>Number of <strong>{userType}s</strong> near you: <strong>{findCount}</strong> of which <strong>{availableCount}</strong> are currently available.</p>
        <Geosearch storePrefix="user"/>
        <div>
          <label htmlFor="searchfor">Search for</label>
          <SelectPersonType id="searchfor" storePrefix="filters"/>
        </div>
        <div>
          <label htmlFor="status">Status</label>
          <select
            name="status"
            id="status"
            required
            onChange={this.update}
          >
            <option value="available">Available</option>
            <option value="connected">Connected</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        <div>
          <label htmlFor="last-login-after">Last login after</label>
          <input
            name="lastLoginAfter"
            id="last-login-after"
            type="date"
            onChange={this.update}
          />
        </div>
        <div className="distance-filter">
          <label htmlFor="distance">Distance</label>
          <div name="distance" className="distance-buttons">
            <button className="selected">5 km</button>
            <button>10 km</button>
            <button>20 km</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userType: state.app.filtersUserType,
    studentsList: state.studentsList,
    tutorsList: state.tutorsList,
  }
}

export default connect(mapStateToProps)(Filters);