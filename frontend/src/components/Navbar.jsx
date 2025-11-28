import React from "react";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  return (
    <div style={{ display:"flex", justifyContent:"space-between", padding:"10px 20px", background:"#1976d2", color:"#fff" }}>
      <h2>Frontend Storage</h2>
      {user && (
        <div>
          <span style={{ marginRight:"20px" }}>{user.name}</span>
          <button onClick={logout} style={{ padding:"5px 10px", border:"none", borderRadius:"4px", cursor:"pointer" }}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
