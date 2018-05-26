import React from 'react';
import {connect} from 'react-redux';

import ButtonGroup from './inputs/ButtonGroup';
import Geosearch from './inputs/Geosearch';
import * as actions from '../redux/actions';

import './Filters.css';

class Filters extends React.Component {

  update = (e) => {
    this.props.updateFilters({
      [e.target.name]: e.target.value
    });
  }

  requestPersonList(filters) {
    const query = {...filters};
    query.lng = filters.location.lng || filters.userLocation.lng;
    query.lat = filters.location.lat || filters.userLocation.lat;
    this.props.getPersonList(query);
  }

  componentDidMount() {
    this.requestPersonList(this.props.filters);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.filters !== this.props.filters)
      this.requestPersonList(nextProps.filters);
  }

  render() {
    const {filters, personList} = this.props;
    const findCount = personList.length;
    const availableCount = personList.filter(person => person.status === 'available').length;
    return (
      <div className="filters">
        <h2>Filters</h2>
        <p>There {findCount === 1 ? 'is' : 'are'} <strong>{findCount}</strong> {filters.userType}{findCount === 1 ? '' : 's'} near you, <strong>{availableCount}</strong> of which {findCount === 1 ? 'is' : 'are'} currently available.</p>
        <Geosearch storePrefix="filters"/>
        <ButtonGroup
          label="Search for"
          id="searchFor"
          name="userType"
          clickHandler={this.update}
          btnValues={['student', 'tutor']}
          currentValue={filters.userType}
        />
        <div>
          <label htmlFor="status">Status</label>
          <select
            name="status"
            id="status"
            onChange={this.update}
            value={filters.status}
          >
            <option hidden></option>
            <option value="available">Available</option>
            <option value="connected">Connected</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        <div>
          <label htmlFor="lastLoginAfter">Last login after</label>
          <input
            name="lastLoginAfter"
            id="lastLoginAfter"
            type="date"
            onChange={this.update}
            value={filters.lastLoginAfter}
          />
        </div>
        <ButtonGroup
          label="Maximum distance"
          id="maxDistance"
          name="maxDistance"
          clickHandler={this.update}
          btnValues={['5', '10', '20', '500']}
          btnLabels={['5 km', '10 km', '20 km', 'any']}
          currentValue={filters.maxDistance}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
    personList: state.personList,
  }
}

export default connect(mapStateToProps, actions)(Filters);