import React from "react";
import useAxios from "./useAxios";
import { useNavigate } from "react-router-dom";

const useAuthCalls = () => {
  const { axiosPublic } = useAxios();
  const navigate=useNavigate()
  const login = async (userInfo) => {
    try {
      const { data } = await axiosPublic.post("auth/login", userInfo);
      console.log(data)
      navigate("/stock")

    } catch (error) {
      console.log(error);
    }
  };
  return { login };
};

export default useAuthCalls;
