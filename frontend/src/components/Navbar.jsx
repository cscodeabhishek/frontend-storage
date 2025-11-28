import React from "react";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <div className="navbar">
      <h1>Frontend Storage</h1>
      {user && <button onClick={logout}>Logout</button>}
    </div>
  );
};

export default Navbar;
