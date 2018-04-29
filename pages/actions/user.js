import fetch from 'isomorphic-fetch';
import types from '../actions/types';

const apiURL = process.env.REACT_APP_API_URL;

export default {
  loadUser(id) {
    return (dispatch) => {
      fetch(`${apiURL}/api/v1/users/${id}`)
        .then((res) => {
          if (res.status >= 400) {
            dispatch({ type: types.LOAD_USER_ERROR });
          }
          return res.json();
        })
        .then((user) => {
          dispatch({ type: types.LOAD_USER, user });
        });
    };
  },
};
