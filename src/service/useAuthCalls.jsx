import React from "react";
import useAxios from "./useAxios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../features/authSlice";
import {toastWarnNotify, toastErrorNotify,toastSuccessNotify} from "../helper/ToastNotify"
const useAuthCalls = () => {
  const dispatch = useDispatch();
  const { axiosPublic } = useAxios();
  const navigate = useNavigate();
  const login = async (userInfo) => {
    try {
      const { data } = await axiosPublic.post("auth/login", userInfo);
      console.log(data);
      toastSuccessNotify("Login Success!")
      dispatch(loginSuccess(data));
      navigate("/stock");
    } catch (error) {
      console.log(error);
      toastErrorNotify("login Unseccess!")
    }
  };
  return { login };
};

export default useAuthCalls;
