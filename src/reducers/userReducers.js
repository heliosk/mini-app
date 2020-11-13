import {
  USER_REGISTER,
  USER_REGISTER_FAIL,
  USER_LOGIN,
  USER_FAIL,
} from '../constants/userConstants';

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER:
      return { userInfo: action.payload };
    case USER_REGISTER_FAIL:
      return { error: action.payload };
    default:
      return state;
  }
};
