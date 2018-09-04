const apiUrl = process.env.REACT_APP_API_URL;

export const apiRoutes = {
  CREATE_USER_API: `${apiUrl}/users`,
  AUTH_USER_API: `${apiUrl}/auth/token`,
  GET_USER_API: userId => `${apiUrl}/users/${userId}`,
  UPDATE_USER_API: userId => `${apiUrl}/users/${userId}`,
  RESET_USER_PASSWORD_API: `${apiUrl}/request_password_reset`,
  DELETE_USER_API: userId => `${apiUrl}/users/${userId}`,
};

export const pageRoutes = {
  HOME_PATH: '/',
};
