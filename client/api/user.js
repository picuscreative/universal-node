/* eslint-disable camelcase */
import fetch from 'isomorphic-fetch';
import request from '~/utils/request';
import { apiRoutes } from '~/config/routes';

class UserApi {
  static create(body) {
    return fetch(
      apiRoutes.CREATE_USER_API,
      request({
        method: 'POST',
        body,
      }),
    )
      .then(res => res.json())
      .catch(error => error);
  }
  static login({ email, password }) {
    return fetch(
      apiRoutes.AUTH_USER_API,
      request({
        method: 'GET',
        authorization: {
          type: 'basic',
          email,
          password,
        },
      }),
    )
      .then(res => res.json())
      .catch(error => error);
  }
  static loginFacebook({ fb_token, type }) {
    const requestUrl = type === 'login' ? apiRoutes.AUTH_USER_API : apiRoutes.CREATE_USER_API;
    const requestContent =
      type === 'login'
        ? {
          method: 'GET',
          authorization: {
            type: 'facebook',
            fb_token,
          },
        }
        : {
          method: 'POST',
          authorization: {
            type: 'facebook',
            fb_token,
          },
          body: {
            fb_token,
          },
        };

    return fetch(requestUrl, request(requestContent))
      .then(res => res.json())
      .catch(error => error);
  }
  static update(id, body) {
    return fetch(
      apiRoutes.UPDATE_USER_API(id),
      request({
        method: 'POST',
        authorization: {
          type: 'bearer',
        },
        body,
      }),
    )
      .then(res => res.json())
      .catch(error => error);
  }
  static get(id, ctx = {}) {
    return fetch(
      apiRoutes.GET_USER_API(id),
      request({
        method: 'GET',
        authorization: {
          type: 'bearer',
        },
        ctx,
      }),
    )
      .then(res => res.json())
      .catch(error => error);
  }
  static delete(id) {
    return fetch(
      apiRoutes.DELETE_USER_API(id),
      request({
        method: 'DELETE',
        authorization: {
          type: 'bearer',
        },
      }),
    )
      .then(res => res)
      .catch(error => error);
  }
  static resetPassword(body) {
    return fetch(
      apiRoutes.RESET_USER_PASSWORD_API,
      request({
        method: 'POST',
        body,
      }),
    )
      .then(res => res.json())
      .catch(error => error);
  }
  static recoverPassword(id, token) {
    return fetch(
      apiRoutes.GET_USER_API(id),
      request({
        method: 'GET',
        authorization: {
          type: 'token',
        },
        token,
      }),
    )
      .then(res => res.json())
      .catch(error => error);
  }
}

export default UserApi;
