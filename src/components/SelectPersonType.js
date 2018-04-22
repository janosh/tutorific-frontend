import React from 'react';
import {connect} from 'react-redux';

import {changeUserType} from '../actions';
import './SelectPersonType.css';

class PersonList extends React.Component {

  render() {
    return (
      <div className="person-type">
        <button
          onClick={() => this.props.changeUserType('student')}
          className={this.props.userType === 'student' ? 'active' : null}>
          Tutors
        </button>
        <button
          onClick={() => this.props.changeUserType('tutor')}
          className={this.props.userType === 'tutor' ? 'active' : null}>
          Students
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userType: state.appState.userType
  };
};

const mapDispatchToProps = (dispatch) => ({
  changeUserType: (userType) => dispatch(changeUserType(userType)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PersonList);