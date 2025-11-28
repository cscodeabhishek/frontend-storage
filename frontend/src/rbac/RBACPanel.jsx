import React, { useState } from "react";
import { authRegister } from "../api";
import Protected from "../rbac/Protected";

export default function RBACPanel() {
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("viewer");
  const [password, setPassword] = useState("");

  async function createUser(e) {
    e.preventDefault();
    await authRegister({ username, password, role });
    alert("User created!");
  }

  return (
    <Protected permission="manage_users">
      <div className="container">
        <div className="card" style={{ maxWidth: 500 }}>
          <h2>Create User</h2>
          <form onSubmit={createUser}>
            <input
              className="input"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <br /><br />

            <input
              className="input"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br /><br />

            <select
              className="input"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="admin">Admin</option>
              <option value="editor">Editor</option>
              <option value="viewer">Viewer</option>
            </select>
            <br /><br />

            <button className="btn">Create</button>
          </form>
        </div>
      </div>
    </Protected>
  );
}
