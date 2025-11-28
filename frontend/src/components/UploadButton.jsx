// src/components/UploadButton.jsx
import React from "react";

const UploadButton = () => {
  const handleUpload = () => alert("Upload clicked!");
  return <button onClick={handleUpload}>Upload File</button>;
};

export default UploadButton;
