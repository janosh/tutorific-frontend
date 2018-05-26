import initialAppState from './initialState';

export const modals = (state = initialAppState.modals, action) => {
  if (action.type === 'toggle_modal') return {
    ...state,
    [action.name]: !state[action.name],
  };
  return state;
};