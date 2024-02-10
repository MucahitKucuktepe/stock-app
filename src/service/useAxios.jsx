import axios from "axios";
import React from "react";

const useAxios = () => {
  const axiosPublic = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}`,
  });
  return {
    axiosPublic,
  };
};

export default useAxios;
