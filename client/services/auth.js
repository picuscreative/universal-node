/* eslint-disable no-unused-expressions */
import redirect from '~/utils/redirect';
import { setCookie, getCookie, removeCookies } from '~/utils/cookies';
import { pageRoutes } from '~/config/routes';

/**
 /* Authorization utilities and redirects
*/
export default class Auth {
  static login = ({ id, token, ctx = {} }, dontRedirect) => {
    setCookie('user_id', id);
    setCookie('jwt', token);
    !dontRedirect && redirect(pageRoutes.ACCOUNT_DETAILS_PATH, ctx);
    return null;
  };

  static logout = (ctx = {}) => {
    Auth.clearUserState();
    redirect(pageRoutes.HOME_PATH, ctx);
  };

  static clearUserState = (ctx = {}) => {
    removeCookies(['user_id', 'jwt'], ctx.res);
  };

  static getJwt = (ctx = {}) => getCookie('jwt', ctx.req);

  static getUserId = (ctx = {}) => getCookie('user_id', ctx.req);

  static isAuthenticated = ctx => !!Auth.getJwt(ctx);

  static redirectIfAuthenticated = (ctx, path = pageRoutes.ACCOUNT_PATH) => {
    if (Auth.isAuthenticated(ctx)) {
      redirect(path, ctx);
      return true;
    }
    return false;
  };

  static redirectIfNotAuthenticated = (ctx, user, path = pageRoutes.LOGIN_PATH) => {
    if (!Auth.isAuthenticated(ctx)) {
      Auth.clearUserState(ctx);
      redirect(path, ctx);
      return true;
    }
    return false;
  };
}
