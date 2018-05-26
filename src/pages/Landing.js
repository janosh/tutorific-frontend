import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Geosearch from '../components/inputs/Geosearch';

import ButtonGroup from '../components/inputs/ButtonGroup';
import {updateFilters} from '../redux/actions';
import './Landing.css';

class LandingPage extends React.Component {

  update = (e) => {
    this.props.updateFilters({
      [e.target.name]: e.target.value
    });
  }

  render() {
    const {userType} = this.props;
    return (
      <div id="landing-page">
        <div className="overlay">
          <img src="./assets/logo.svg" alt="Logo"/>
          <ButtonGroup
            name="userType"
            clickHandler={this.update}
            btnValues={['student', 'tutor']}
            currentValue={userType}
          />
          <Geosearch storePrefix="filters"/>
          {this.props.userType === 'student'
            ? <h1><Link to="/connect">Get free tutoring from a student near you!</Link></h1>
            : <h1><Link to="/signup">Sign up as a tutor to make a difference in someone's life!</Link></h1>}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userType: state.filters.userType || 'student',
  };
};

export default connect(mapStateToProps, {updateFilters})(LandingPage);