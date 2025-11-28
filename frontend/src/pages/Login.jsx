import React, { useState } from "react";
import { useRBAC } from "../rbac/RBACContext";
import { authLogin } from "../api";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useRBAC();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const user = await authLogin(email, password);
      login(user); // Save user in context
      navigate("/dashboard"); // Redirect to dashboard
    } catch {
      alert("Login failed!");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Login</h1>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
