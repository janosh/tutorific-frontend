import React from 'react';
import {connect} from 'react-redux';

import {changeUserType} from '../actions';
import './SelectPersonType.css';

class SelectPersonType extends React.Component {

  render() {
    const {userType, changeUserType} = this.props;
    return (
      <div className="person-type">
        <button
          onClick={() => changeUserType('student')}
          className={userType === 'student' ? 'active' : null}>
          Student
        </button>
        <button
          onClick={() => changeUserType('tutor')}
          className={userType === 'tutor' ? 'active' : null}>
          Tutor
        </button>
      </div>
    );
  }
}

SelectPersonType.defaultProps = {
  storePrefix: '',
}

const mapStateToProps = (state, ownProps) => {
  return {
    userType: state.app[ownProps.storePrefix + 'UserType']
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  changeUserType: (userType) => dispatch(changeUserType(ownProps.storePrefix, userType)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectPersonType);