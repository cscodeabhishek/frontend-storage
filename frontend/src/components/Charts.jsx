import React from "react";

const Charts = ({ data = [] }) => {
  const fileTypeCount = {};
  data.forEach((file) => {
    const ext = file.name.split(".").pop();
    fileTypeCount[ext] = (fileTypeCount[ext] || 0) + 1;
  });

  return (
    <div className="charts">
      <h3>File Type Count</h3>
      <pre>{JSON.stringify(fileTypeCount, null, 2)}</pre>
    </div>
  );
};

export default Charts;
