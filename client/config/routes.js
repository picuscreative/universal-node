const apiUrl = process.env.REACT_APP_API_URL;

export const apiRoutes = {
  CREATE_USER_API: `${apiUrl}/users`,
  GET_USER_API: userId => `${apiUrl}/users/${userId}`,
  UPDATE_USER_API: userId => `${apiUrl}/users/${userId}`,
  DELETE_USER_API: userId => `${apiUrl}/users/${userId}`,
};

export const pageRoutes = {
  HOME_PATH: '/',
  ABOUT_PATH: '/about',
};
