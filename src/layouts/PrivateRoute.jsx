import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
  const savedUser = JSON.parse(localStorage.getItem("registeredUser"));
  return savedUser ?  <Navigate to="/" replace /> : <Outlet /> ;
};

export default PrivateRoute;
