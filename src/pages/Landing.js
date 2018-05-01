import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Geosearch from '../components/Geosearch';

import SelectPersonType from '../components/SelectPersonType';
import './Landing.css';

class LandingPage extends React.Component {

  render() {
    return (
      <div id="landing-page">
        <div className="overlay">
          <img src="./assets/logo.svg" alt="Logo"/>
          <SelectPersonType storePrefix="signup"/>
          <Geosearch storePrefix="filters"/>
          {this.props.userType === 'student' ?
          <h1><Link to="/connect">Get free tutoring from a student near you!</Link></h1> :
          <h1><Link to="/signup">Sign up as a tutor today and make a difference in a child's life!</Link></h1>}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userType: state.signup.userType,
  };
};

export default connect(mapStateToProps)(LandingPage);