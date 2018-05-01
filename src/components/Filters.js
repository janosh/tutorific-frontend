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
        <p>There {findCount === 1 ? 'is' : 'are'} <strong>{findCount}</strong> {filters.userType}{findCount === 1 ? '' : 's'} near you, <strong>{availableCount}</strong> of which {findCount === 1 ? 'is' : 'are'} currently available.</p>
        <Geosearch storePrefix="filters"/>
        <div>
          <label htmlFor="searchFor">Search for</label>
          <SelectPersonType id="searchFor" storePrefix="filters"/>
        </div>
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
        <div>
          <label htmlFor="maxDistance">Maximum Distance</label>
          <div className="max-distance" id="maxDistance">
            <button type="button" name="maxDistance" value="5" onClick={this.update}
              className={filters.maxDistance === '5' ? 'active' : null}>
              5 km
            </button>
            <button type="button" name="maxDistance" value="10" onClick={this.update}
              className={filters.maxDistance === '10' ? 'active' : null}>
              10 km
            </button>
            <button type="button" name="maxDistance" value="20" onClick={this.update}
              className={filters.maxDistance === "20" ? 'active' : null}>
              20 km
            </button>
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