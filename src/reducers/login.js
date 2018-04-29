import defaultAppState from './defaultState';

export const login = (state = defaultAppState.login, action) => {
  switch (action.type) {
    case 'setLoginUserType':
    return {
      ...state,
      userType: action.userType
    }
    case 'toggleLoginPanel':
    return {
      ...state,
      showLoginModal: !state.showLoginModal
    }
    case 'updateLoginData':
    return {
      ...state,
      ...action.data
    }
    default:
    return state;
  }
};