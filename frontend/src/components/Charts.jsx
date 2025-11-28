import React from "react";

const Charts = ({ data = [] }) => {
  const safeData = Array.isArray(data) ? data : [];

  const fileTypeCount = {};
  safeData.forEach((file) => {
    const ext = file.extension || "unknown";
    fileTypeCount[ext] = (fileTypeCount[ext] || 0) + 1;
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",     // horizontally center
        alignItems: "center",          // vertically center (inside the container)
        width: "100%",
        marginTop: "20px",
      }}
    >
      <div
        style={{
          padding: "20px",
          background: "#fff",
          borderRadius: "8px",
          width: "60%",
          textAlign: "center",         // centers the text
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h3>Charts</h3>
        <pre style={{ textAlign: "left" }}>
          {JSON.stringify(fileTypeCount, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default Charts;
