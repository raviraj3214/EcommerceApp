export const LOGIN = 'LOGIN'; // ACTION TYPE
export const LOG_OUT = 'LOG_OUT'; // ACTION TYPE
export const UPDATE_USER = 'UPDATE_USER';
export const loginUser = (userInfo) => ({
  type: LOGIN,
  payload: userInfo,
});

export const logoutUser = () => ({
  type: LOG_OUT,
});

export const forgotPassword = (payload) => ({
  type: FORGOT_PASSWORD,
  payload: payload,

});

export const updateUser = (payload) => ({
  type: UPDATE_USER,
  payload,
});
