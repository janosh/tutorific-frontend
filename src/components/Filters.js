import React from 'react';

import LocationSearch from './LocationSearch';

export default class Filters extends React.Component {

  componentDidMount() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(pos => {
        const {latitude, longitude} = pos.coords;
        console.log('latitude', latitude);
      })
    }
  }

  render() {
    return (
      <div className="filters">
        <h2>Filters</h2>
        <LocationSearch/>
      </div>
    );
  }
}