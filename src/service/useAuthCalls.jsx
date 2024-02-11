import React from "react";
import useAxios from "./useAxios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchFail, fetchStart, loginSuccess, logoutSuccess, registerSuccess } from "../features/authSlice";
import { toastErrorNotify,toastSuccessNotify} from "../helper/ToastNotify"
const useAuthCalls = () => {
  const dispatch = useDispatch();
  const { axiosPublic,axiosWithToken} = useAxios();
  const navigate = useNavigate();
  const login = async (userInfo) => {
    try {
      const { data } = await axiosPublic.post("/auth/login/", userInfo);
      console.log(data);
      toastSuccessNotify("Login Success!")
      dispatch(loginSuccess(data));
      navigate("/stock");
    } catch (error) {
      console.log(error);
      toastErrorNotify("login Unseccess!")
    }
  };
  const register = async (userInfo) => {
    try {
      const { data } = await axiosPublic.post("/users/", userInfo);
      console.log(data);
      toastSuccessNotify("Register Success!")
      dispatch(registerSuccess(data));
      navigate("/stock");
    } catch (error) {
      console.log(error);
      toastErrorNotify("Register Unseccess!")
    }
  };
  const logOut = async () => {
    dispatch(fetchStart());
    try {
      // await axios.get(`${process.env.REACT_APP_BASE_URL}/auth/logout/`, {
      //   headers: { Authorization: `Token ${token}` },
      // });
      await axiosWithToken("/auth/logout");
      toastSuccessNotify("LogOut işlemi başarali");
      dispatch(logoutSuccess());
      // navigate("/")
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("LogOut işlemi başarisiz!");
      console.log(error);
    }
  };
  
  return { login, register, logOut };
};

export default useAuthCalls;
