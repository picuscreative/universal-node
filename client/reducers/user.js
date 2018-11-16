import types from '~/actions/types';
import initialState from './initialState';

export default (state = initialState.user, action) => {
  switch (action.type) {
    case types.CREATE_USER:
      return action.payload;
    case types.UPDATE_USER:
      return action.payload;
    case types.GET_USER:
      return action.payload;
    case types.DELETE_USER:
      return action.payload;
    default:
      return state;
  }
};
