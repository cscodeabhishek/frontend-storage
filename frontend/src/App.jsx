import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useRBAC } from "./rbac/RBACContext";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import RBACPanel from "./pages/RBACPanel";

export default function App() {
  const { token, currentRole, setToken, setCurrentRole } = useRBAC();

  function logout() {
    setToken(null);
    setCurrentRole("viewer");
  }

  return (
    <>
      {/* Navigation */}
      {token && (
        <div className="card" style={{ margin: 12, display: "flex", gap: 20 }}>
          <Link to="/">Dashboard</Link>
          {currentRole === "admin" && <Link to="/rbac">RBAC Panel</Link>}

          <div style={{ flex: 1 }}></div>

          <span>Role: <b>{currentRole}</b></span>
          <button className="btn" onClick={logout}>Logout</button>
        </div>
      )}

      {/* Routes */}
      <Routes>
        {!token && <Route path="*" element={<Login />} />}
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/rbac" element={<RBACPanel />} />
      </Routes>
    </>
  );
}
