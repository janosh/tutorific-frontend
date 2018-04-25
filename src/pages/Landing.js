import React from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";

import logo from '../assets/logo.svg';
import {setUserLocation} from '../actions';
import './Landing.css';

class LandingPage extends React.Component {

  render() {
    return (
      <div id="landing-page">
        <img src={logo} alt="Logo"/>
        <h1><Link to="/find">Get free tutoring from a student near you!</Link></h1>
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