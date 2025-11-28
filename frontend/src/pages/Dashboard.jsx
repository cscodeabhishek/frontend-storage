import React from "react";
import UploadButton from "../components/UploadButton";
import Charts from "../components/Charts";
import Pagination from "../components/Pagination";
import { useRBAC } from "../rbac/RBACContext";

const Dashboard = () => {
  const { logout } = useRBAC();

  return (
    <div style={{ padding: "20px", position: "relative" }}>
      {/* Logout Button */}
      <button
        onClick={logout}
        style={{
          position: "absolute",
          top: 20,
          right: 20,
          background: "red",
          color: "white",
          padding: "8px 16px",
          borderRadius: "5px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Logout
      </button>

      <h1>Dashboard</h1>
      <UploadButton />
      <Charts />
      <Pagination />
    </div>
  );
};

export default Dashboard;
