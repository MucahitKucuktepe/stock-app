import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const {user}= useSelector((state)=>state.auth)
  console.log(user)
 
  return user ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRouter;
