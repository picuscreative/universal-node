import cookie from 'js-cookie';
import isNull from 'lodash/isNull';
import isUndefined from 'lodash/isUndefined';

/**
 /* Session with cookies for client and server-side
*/

export const setCookie = (key, value) => {
  if (process.browser) {
    cookie.set(key, value, {
      expires: 0.1,
      path: '/',
    });
  }
};

export const removeCookie = (key) => {
  if (process.browser) {
    cookie.remove(key, {
      expires: 0.1,
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

export const getCookie = (key, req = {}) => {
  if (isNull(req) || isUndefined(req)) {
    return process.browser && getCookieFromBrowser(key);
  }
  return process.browser ? getCookieFromBrowser(key) : getCookieFromServer(key, req);
};
