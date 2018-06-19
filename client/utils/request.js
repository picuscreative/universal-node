import { Base64 } from 'js-base64';
import Auth from '~/services/auth';

/**
 /* Apply parameters for each request:
 /* content-type, authorization type, and body
*/
export default ({
  method, authorization, body, ctx,
}) => {
  const request = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (authorization) {
    const {
      type, facebookToken, email, password,
    } = authorization;

    switch (type) {
      case 'bearer': {
        Object.assign(request.headers, { Authorization: `Bearer ${Auth.getJwt(ctx)}` });
        break;
      }
      case 'basic':
        Object.assign(request.headers, {
          Authorization: `Basic ${Base64.btoa(`${email}:${password}`)}`,
        });
        break;
      case 'facebook':
        Object.assign(request.headers, { Authorization: `Facebook ${email}:${facebookToken}` });
        break;
      default:
        break;
    }
  }

  if (body) {
    Object.assign(request, { body: JSON.stringify(body) });
  }

  return request;
};
