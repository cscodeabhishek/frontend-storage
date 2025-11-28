import React from "react";

const FileCard = ({ file }) => (
  <div style={{
    border:"1px solid #ccc",
    borderRadius:"6px",
    padding:"10px",
    margin:"10px",
    minWidth:"150px",
    textAlign:"center"
  }}>
    <p>{file.originalname}</p>
    <small>{(file.size/1024).toFixed(2)} KB</small>
  </div>
);

export default FileCard;
