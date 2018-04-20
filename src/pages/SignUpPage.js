import React from 'react';
import {connect} from 'react-redux';

import {changeUserType} from '../actions';
import './SignUpPage.css';

class SignUpPage extends React.Component {
  render() {
    return (
      <div className="signup-page">
        <h1>Sign up for Tutorific!</h1>
        <form id="signup">
          <div>
            <label htmlFor="firstname">First Name</label>
            <input id="firstname" type="text" placeholder="John" required/>
          </div>
          <div>
            <label htmlFor="lastname">Last Name</label>
            <input id="lastname" type="text" placeholder="Doe" required/>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="john@doe.com" required/>
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <input id="phone" type="tel" placeholder="+1 234 567 890"/>
          </div>
          <div className="gender">
            <span>gender:</span>
            <input type="radio" id="male" name="gender" value="male"/>
            <label htmlFor="male">male</label>
            <input type="radio" id="female" name="gender" value="female"/>
            <label htmlFor="female">female</label>
            <input type="radio" id="other" name="gender" value="other"/>
            <label htmlFor="other">other</label>
          </div>
          <div className="address">
            <label htmlFor="street">Street</label>
            <input id="street" type="text" placeholder="Long Lane"/>
            <label htmlFor="number">Number</label>
            <input id="number" type="text" placeholder="42"/>
            <label htmlFor="zip">ZIP</label>
            <input id="zip" type="text" placeholder="6942"/>
            <label htmlFor="country">Country</label>
            <input id="country" type="text" placeholder="Wonderland"/>
          </div>
          <input id="grade" type="number" name="grade" min="1" max="13" placeholder="1" required/>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userType: state.appState.userType,
    students: state.students,
    tutors: state.tutors
  };
};

const mapDispatchToProps = (dispatch) => ({
  changeUserType: (userType) => dispatch(changeUserType(userType)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);