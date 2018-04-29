import types from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case types.LOAD_USER:
      return action.user;
    default:
      return state;
  }
};
