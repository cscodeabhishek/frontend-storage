import React from "react";

const Charts = ({ data = [] }) => {
  const safeData = Array.isArray(data) ? data : [];
  const fileTypeCount = {};
  safeData.forEach((file) => {
    const ext = file.filename.split(".").pop();
    fileTypeCount[ext] = (fileTypeCount[ext] || 0) + 1;
  });

  return (
    <div style={{ padding: "20px", background: "#fff", borderRadius: "8px", textAlign:"center" }}>
      <h3>Charts</h3>
      <pre>{JSON.stringify(fileTypeCount, null, 2)}</pre>
    </div>
  );
};

export default Charts;
