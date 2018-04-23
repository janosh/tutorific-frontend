import React from 'react';

import SelectPersonType from './SelectPersonType';
import LocationSearch from './LocationSearch';

import './Filters.css';

export default class Filters extends React.Component {

  componentDidMount() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(pos => {
        const {latitude, longitude} = pos.coords;
        console.log('latitude', latitude);
        console.log('longitude', longitude);
      })
    }
  }

  render() {
    return (
      <div className="filters">
        <h2>Filters</h2>
        <LocationSearch/>
        <SelectPersonType plural={true} storePrefix="filters"/>
      </div>
    );
  }
}