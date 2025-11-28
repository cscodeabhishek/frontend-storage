import React, { useState } from "react";
import { uploadFileAPI } from "../api";
import { useAuth } from "../context/AuthContext";

const UploadButton = () => {
  const { user } = useAuth();
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (!file) return alert("Select a file first!");
    const res = await uploadFileAPI(file, user.token);
    alert(res.message);
    setFile(null);
    window.location.reload(); // Refresh to show new file
  };

  return (
    <div className="upload-container">
      <input type="file" onChange={e => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default UploadButton;
