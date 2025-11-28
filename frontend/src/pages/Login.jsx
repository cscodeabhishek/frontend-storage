import React, { useState } from "react";
import { authLogin } from "../api";
import { useNavigate } from "react-router-dom";
import { useRBAC } from "../rbac/RBACContext";

export default function Login() {
  const { setToken, setCurrentRole } = useRBAC();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const res = await authLogin({ username, password });
      setToken(res.data.token);
      setCurrentRole(res.data.role);
      navigate("/");
    } catch (err) {
      alert("Invalid credentials");
    }
  }

  return (
    <div className="container">
      <div className="card" style={{ maxWidth: 400, margin: "40px auto" }}>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: 10 }}>
            <input
              className="input"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div style={{ marginBottom: 10 }}>
            <input
              className="input"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="btn" style={{ width: "100%" }}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
