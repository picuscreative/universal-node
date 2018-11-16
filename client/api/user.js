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
}

export default UserApi;
