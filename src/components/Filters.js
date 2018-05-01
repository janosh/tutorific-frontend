import React from 'react';
import {connect} from 'react-redux';

import SelectPersonType from './SelectPersonType';
import Geosearch from './Geosearch';
import {updateFilters, getPersonList} from '../actions';

import './Filters.css';

const flatten = (obj) => Object.assign({}, ...function _flatten(o) {
  return [].concat(...Object.keys(o).map(k => typeof o[k] === 'object'
  ? _flatten(o[k]) : ({[k]: o[k]})))}(obj));


class Filters extends React.Component {

  update = async (e) => {
    await this.props.updateFilters({
      [e.target.name]: e.target.value
    });
  }

  componentDidMount() {
    this.props.getPersonList(flatten(this.props.filters));
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.filters !== this.props.filters) {
      this.props.getPersonList(flatten(nextProps.filters));
    }
  }

  render() {
    const {filters, personList} = this.props;
    const findCount = personList.length;
    const availableCount = personList.filter(person => person.status === 'available').length;
    return (
      <div className="filters">
        <h2>Filters</h2>
        <p><strong>{findCount}</strong> {filters.userType}s near you. <strong>{availableCount}</strong> of them are currently available.</p>
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
        <div>
          <label htmlFor="max-distance">Distance</label>
          <div className="max-distance" id="max-distance">
            <input
              type="radio"
              name="max-distance"
              id="max-distance-5km"
              value="5"
              onClick={this.update}
            />
            <label htmlFor="max-distance-5km">5 km</label>
            <input
              type="radio"
              name="max-distance"
              id="max-distance-10km"
              value="10"
              onClick={this.update}
            />
            <label htmlFor="max-distance-10km">10 km</label>
            <input
              type="radio"
              name="max-distance"
              id="max-distance-20km"
              value="20"
              onClick={this.update}
            />
            <label htmlFor="max-distance-20km">20 km</label>
          </div>
        </div>
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

const mapDispatchToProps = (dispatch) => ({
  updateFilters: (data) => dispatch(updateFilters(data)),
  getPersonList: (params) => dispatch(getPersonList(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);