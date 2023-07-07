import UserActionTypes from "./action-types";

const loginUser = (payload) => ({
  type: UserActionTypes.LOGIN,
  payload
});

const logoutUser = () => ({
  type: UserActionTypes.LOGOUT, 
});

export {loginUser, logoutUser};
