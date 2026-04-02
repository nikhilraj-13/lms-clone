import React from "react";
import { Navigate } from "react-router-dom";
import { checkAuth } from "../utils/auth";

const ProtectedRoute = ({ children }) => {
  const user = checkAuth();

  if (!user) {
    return <Navigate to="/student" replace />;
  }

  return children;
};

export default ProtectedRoute;
