import React from 'react';
import {connect} from 'react-redux';

import {changeUserType} from '../actions';
import './SelectPersonType.css';

class SelectPersonType extends React.Component {

  render() {
    const {userType, changeUserType} = this.props;
    return (
      <div className="person-type">
        <button type="button" value="student" onClick={changeUserType}
          className={userType === 'student' ? 'active' : null}>
          Student
        </button>
        <button type="button" value="tutor" onClick={changeUserType}
          className={userType === 'tutor' ? 'active' : null}>
          Tutor
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    userType: state[ownProps.storePrefix].userType,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  changeUserType: (e) => dispatch(changeUserType(ownProps.storePrefix, e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectPersonType);