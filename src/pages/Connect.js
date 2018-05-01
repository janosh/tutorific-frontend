import React from 'react';

import PersonModal from '../components/PersonModal';
import Filters from '../components/Filters';
import PersonList from '../components/PersonList';
import Map from '../components/Map';
import './Connect.css';

export default class ConnectPage extends React.Component {

  render() {
    return (
      <div id="connect-page">
        <Filters/>
        <PersonList/>
        <PersonModal/>
        <Map/>
      </div>
    );
  }
}