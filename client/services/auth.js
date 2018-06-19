import redirect from '~/utils/redirect';
import { setCookie, getCookie, removeCookie } from '~/utils/session';
import { pageRoutes } from '~/config/routes';
/**
 /* Authorization utilities and redirects
*/
export default class Auth {
  static login = ({ id, token, ctx = {} }) => {
    setCookie('customer_id', id);
    setCookie('jwt', token);
    redirect(pageRoutes.ACCOUNT_PATH, ctx);
    return null;
  };

  static logout = (ctx = {}) => {
    removeCookie('customer_id');
    removeCookie('jwt');
    redirect(pageRoutes.HOME_PATH, ctx);
  };

  static getJwt = (ctx = {}) => getCookie('jwt', ctx.req);
  static getCustomerId = (ctx = {}) => getCookie('customer_id', ctx.req);
  static isAuthenticated = ctx => !!Auth.getJwt(ctx);

  static redirectIfAuthenticated = (ctx, path = pageRoutes.ACCOUNT_PATH) => {
    if (Auth.isAuthenticated(ctx)) {
      redirect(path, ctx);
      return true;
    }
    return false;
  };

  static redirectIfNotAuthenticated = (ctx, path = pageRoutes.LOGIN_PATH) => {
    if (!Auth.isAuthenticated(ctx)) {
      redirect(path, ctx);
      return true;
    }
    return false;
  };
}
