import React, { useState } from "react";
import { uploadFile } from "../api";
import { useAuth } from "../context/AuthContext";

const UploadButton = ({ onUpload }) => {
  const { user } = useAuth();
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if(!file) return alert("Select a file first!");
    try {
      await uploadFile(file, user.token);
      alert("File uploaded!");
      onUpload(); // refresh list
    } catch(err) {
      alert("Upload failed");
    }
  };

  return (
    <div style={{ margin:"20px 0" }}>
      <input type="file" onChange={e=>setFile(e.target.files[0])}/>
      <button onClick={handleUpload} style={{ marginLeft:"10px", padding:"5px 10px", borderRadius:"4px", background:"#1976d2", color:"#fff", border:"none" }}>Upload</button>
    </div>
  );
};

export default UploadButton;
