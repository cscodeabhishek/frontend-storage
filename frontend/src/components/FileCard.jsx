import React from "react";

const FileCard = ({ file }) => {
  return (
    <div className="file-card">
      <img 
        src="/src/assets/react.svg" 
        alt="file-icon" 
        style={{ width: "48px", marginBottom: "8px" }}
      />
      <div>{file.filename}</div>
    </div>
  );
};

export default FileCard;
