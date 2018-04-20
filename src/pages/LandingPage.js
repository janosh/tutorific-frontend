import React from 'react';

import PersonList from '../components/PersonList';
import MapContainer from '../components/Map';
import './LandingPage.css';

export default class LandingPage extends React.Component {
  render() {
    return (
      <div className="landing-page">
        <PersonList/>
        <MapContainer/>
      </div>
    );
  }
}