import React from 'react';

import SelectPersonType from './SelectPersonType';
import Geosearch from './Geosearch';

import './Filters.css';

export default class Filters extends React.Component {

  render() {
    return (
      <div className="filters">
        <h2>Filters</h2>
        <Geosearch/>
        <SelectPersonType plural={true} storePrefix="filters"/>
      </div>
    );
  }
}