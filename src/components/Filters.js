import React from 'react';

import SelectPersonType from './SelectPersonType';
import Geosearch from './Geosearch';

import './Filters.css';

export default class Filters extends React.Component {

  render() {
    return (
      <div className="filters">
        <h2>Filters</h2>
        <Geosearch storePrefix="user"/>
        <SelectPersonType plural={true} storePrefix="filters"/>
        <div>
          <label htmlFor="status">Status</label>
          <select
            name="status"
            id="status"
            required
            onChange={this.update}
            // value={this.props.signUpData.status}
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
            // value={this.props.signUpData.birthday}
          />
        </div>
        <div className="distance-filter">
          <label htmlFor="distance">Distance</label>
          <div name="distance" className="distance-buttons">
            <button className="selected">
              5 km
            </button>
            <button>
              10 km
            </button>
            <button>
              20 km
            </button>
          </div>
        </div>
      </div>
    );
  }
}