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
  login(body) {
    return dispatch => userApi
      .login(body)
      .then(res => dispatch({ type: types.AUTH_USER, payload: res }))
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
  logout() {
    return dispatch => dispatch({ type: types.LOGOUT_USER });
  },
  delete(id) {
    return new Promise((resolve, reject) => userApi
      .delete(id)
      .then(() => resolve(true))
      .catch((error) => {
        reject(error);
      }));
  },
  resetPassword(body) {
    return dispatch => userApi
      .resetPassword(body)
      .then(res => dispatch({ type: types.RESET_USER_PASSWORD, payload: res }))
      .catch((error) => {
        throw error;
      });
  },
};

export default User;
