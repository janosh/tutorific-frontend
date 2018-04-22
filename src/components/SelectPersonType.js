import React from 'react';
import {connect} from 'react-redux';

import {changeUserType} from '../actions';
import './SelectPersonType.css';

class PersonList extends React.Component {

  render() {
    const {userType, changeUserType, plural} = this.props;
    return (
      <div className="person-type">
        <button
          onClick={() => changeUserType(plural ? 'student' : 'tutor')}
          className={userType === (plural ? 'student' : 'tutor') ? 'active' : null}>
          Tutor{plural ? 's' : null}
        </button>
        <button
          onClick={() => changeUserType(plural ? 'tutor' : 'student')}
          className={userType === (plural ? 'tutor' : 'student') ? 'active' : null}>
          Student{plural ? 's' : null}
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