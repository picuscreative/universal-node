import types from '~/actions/types';
import userApi from '~/api/user';

const User = {
  create(body) {
    return dispatch => userApi
      .create(body)
      .then(res => dispatch({ type: types.CREATE_USER, payload: res }))
      .catch((error) => {
        throw error;
      });
  },
  update(id, body) {
    return dispatch => userApi
      .update(id, body)
      .then(res => dispatch({ type: types.UPDATE_USER, payload: res }))
      .catch((error) => {
        throw error;
      });
  },
  get(id, ctx = {}) {
    return dispatch => userApi
      .get(id, ctx)
      .then(res => dispatch({ type: types.GET_USER, payload: res }))
      .catch((error) => {
        throw error;
      });
  },
  delete(id) {
    return dispatch => userApi
      .delete(id)
      .then(() => dispatch({ type: types.DELETE_USER }))
      .catch((error) => {
        throw error;
      });
  },
};

export default User;
