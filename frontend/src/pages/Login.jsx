import React, { useState } from "react";
import { authLogin } from "../api";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("admin@gmail.com");
  const [password, setPassword] = useState("admin123");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await authLogin(email, password);
      login(data.user);
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div style={{ display:"flex", justifyContent:"center", alignItems:"center", height:"100vh", background:"#f0f2f5" }}>
      <form onSubmit={handleSubmit} style={{ padding:"30px", borderRadius:"8px", background:"#fff", width:"300px", boxShadow:"0 2px 8px rgba(0,0,0,0.2)" }}>
        <h2>Login</h2>
        {error && <p style={{color:"red"}}>{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          style={{ width:"100%", padding:"10px", margin:"10px 0" }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          style={{ width:"100%", padding:"10px", margin:"10px 0" }}
        />
        <button type="submit" style={{ width:"100%", padding:"10px", background:"#1976d2", color:"#fff", border:"none", borderRadius:"4px" }}>Login</button>
      </form>
    </div>
  );
};

export default Login;
