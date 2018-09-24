import types from '~/actions/types';
import initialState from './initialState';

export default (state = initialState.user, action) => {
  switch (action.type) {
    case types.CREATE_USER:
      return action.payload;
    case types.AUTH_USER:
      return action.payload;
    case types.UPDATE_USER:
      return action.payload;
    case types.GET_USER:
      return action.payload;
    case types.RESET_USER_PASSWORD:
      return action.payload;
    case types.LOGOUT_USER:
      return {};
    default:
      return state;
  }
};
