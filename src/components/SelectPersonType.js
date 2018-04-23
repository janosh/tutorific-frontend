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
          onClick={() => changeUserType(plural ? 'tutor' : 'student')}
          className={userType === (plural ? 'tutor' : 'student') ? 'active' : null}>
          Student{plural ? 's' : null}
        </button>
        <button
          onClick={() => changeUserType(plural ? 'student' : 'tutor')}
          className={userType === (plural ? 'student' : 'tutor') ? 'active' : null}>
          Tutor{plural ? 's' : null}
        </button>
      </div>
    );
  }
}

PersonList.defaultProps = {
  plural: false,
  storePrefix: ''
}

const mapStateToProps = (state, ownProps) => {
  return {
    userType: state.app[ownProps.storePrefix + 'UserType']
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  changeUserType: (userType) => dispatch(changeUserType(ownProps.storePrefix, userType)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PersonList);