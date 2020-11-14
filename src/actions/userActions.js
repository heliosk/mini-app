import { USER_REGISTER } from '../constants/userConstants';

export const register = (name, email, password) => async (dispatch) => {
  dispatch({
    type: USER_REGISTER,
    payload: { name, email, password },
  });
};
