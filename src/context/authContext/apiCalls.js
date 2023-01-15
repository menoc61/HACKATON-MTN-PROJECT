import axios from "axios";
import {
  loginFailure,
  loginStart,
  loginSuccess,
  logout,
  RegisterFailure,
  RegisterStart,
  RegisterSuccess,
  UpdateUserFailure,
  UpdateUserStart,
  UpdateUserSuccess,
} from "./AuthActions";

export const loginUser = async (user, dispatch) => {
  dispatch(loginStart());

  try {
    const res = await axios.post("https://nextgel-backend.herokuapp.com/api/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure(err));
  }
};

export const registerUser = async (user, dispatch) => {
  dispatch(RegisterStart());

  try {
    const res = await axios.post("https://nextgel-backend.herokuapp.com/api/auth/register", user);
    dispatch(RegisterSuccess(res.data));
  } catch (err) {
    dispatch(RegisterFailure(err));
  }
};

export const updateUser = async (user, userInfo, dispatch) => {
  dispatch(UpdateUserStart());

  try {
    const res = await axios.put(`https://nextgel-backend.herokuapp.com/api/user/${user._id}`, userInfo, {
      headers: {
        token: "Bearer " + user.accessToken,
      },
    });
    dispatch(UpdateUserSuccess(res.data));
  } catch (err) {
    dispatch(UpdateUserFailure(err));
  }
};

export const logoutUser = (dispatch) => {
  dispatch(logout());
}