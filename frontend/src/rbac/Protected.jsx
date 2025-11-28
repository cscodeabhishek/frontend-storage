import React from "react";
import { Navigate } from "react-router-dom";
import { useRBAC } from "./RBACContext";

const Protected = ({ children, requiredRole }) => {
  const { user } = useRBAC();

  if (!user) {
    return <Navigate to="/" replace />;
  }

  if (requiredRole && user.role !== requiredRole) {
    return <p>Access Denied</p>;
  }

  return children;
};

export default Protected;
