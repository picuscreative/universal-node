import cookie from 'js-cookie';
import { isEmpty, isNull } from 'lodash';
import isUndefined from 'lodash/isUndefined';

/**
 /* Session with cookies for client and server-side
*/

export const setCookie = (key, value, expires = 1) => {
  if (process.browser) {
    cookie.set(key, value, {
      ...(expires && { expires }),
      path: '/',
    });
  }
};

const getCookieFromBrowser = key => cookie.get(key);

const getCookieFromServer = (key, req) => {
  if (!req.headers.cookie) {
    return undefined;
  }
  const rawCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith(`${key}=`));
  if (!rawCookie) {
    return undefined;
  }
  return rawCookie.split('=')[1];
};

const removeCookiesFromBrowser = (keys) => {
  keys.forEach((key) => {
    cookie.remove(key);
  });
};

const removeCookiesFromServer = (keys, res = {}) => {
  if (!isEmpty(res)) {
    keys.forEach(key => res.clearCookie(key));
  }
};

export const getCookie = (key, req = {}) => {
  if (isNull(req) || isUndefined(req)) {
    return process.browser && getCookieFromBrowser(key);
  }
  return process.browser ? getCookieFromBrowser(key) : getCookieFromServer(key, req);
};

export const removeCookies = (keys, res = {}) => {
  if (isNull(res) || isUndefined(res)) {
    return process.browser && removeCookiesFromBrowser();
  }
  return process.browser ? removeCookiesFromBrowser(keys) : removeCookiesFromServer(keys, res);
};
