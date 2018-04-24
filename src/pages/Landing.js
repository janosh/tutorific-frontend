import React from 'react';
import {connect} from 'react-redux';

import LocationSearch from '../components/LocationSearch';
import logo from '../assets/logo.svg';
import {setUserLocation} from '../actions';
import './Landing.css';

class LandingPage extends React.Component {

  render() {
    return (
      <div id="landing-page">
        <img src={logo} alt="Logo"/>
        <div id="landing-page-title">
          <h1>Get free tutoring from a student near you!</h1>
          <LocationSearch/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userLocation: state.userLocation
  };
};

const mapDispatchToProps = (dispatch) => ({
  setUserLocation: (userLocation) => dispatch(setUserLocation(userLocation))
});

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);