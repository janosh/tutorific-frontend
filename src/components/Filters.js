import React from 'react';
import {connect} from 'react-redux';

import SelectPersonType from './SelectPersonType';
import Geosearch from './Geosearch';
import {updateFilters} from '../actions';

import './Filters.css';

class Filters extends React.Component {

  update = async (e) => {
    await this.props.updateFilters({
      [e.target.name]: e.target.value
    });
  }

  render() {
    const {filters, studentsList, tutorsList} = this.props;
    const relevantList = filters.userType === 'student' ? studentsList : tutorsList;
    const findCount = relevantList.length;
    const availableCount = relevantList.filter(person => person.status === 'available').length;
    return (
      <div className="filters">
        <h2>Filters</h2>
        <p>Number of <strong>{filters.userType}s</strong> near you: <strong>{findCount}</strong> of which <strong>{availableCount}</strong> are currently available.</p>
        <Geosearch storePrefix="filters"/>
        <div>
          <label htmlFor="searchfor">Search for</label>
          <SelectPersonType id="searchfor" storePrefix="filters"/>
        </div>
        <div>
          <label htmlFor="status">Status</label>
          <select
            name="status"
            id="status"
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
    filters: state.filters,
    studentsList: state.studentsList,
    tutorsList: state.tutorsList,
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateFilters: (data) => dispatch(updateFilters(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);