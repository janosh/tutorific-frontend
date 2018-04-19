import React from 'react';

import PersonList from '../components/PersonList';

export default class LandingPage extends React.Component {
  render() {
    return (
      <div className="landing-page">
        <PersonList/>
      </div>
    );
  }
}