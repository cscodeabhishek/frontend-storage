import React, { useState } from "react";
import { uploadFile } from "../api";

export default function UploadButton({ onUploaded }) {
  const [message, setMessage] = useState("");

  const handle = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setMessage("Uploading...");
    try {
      await uploadFile(file);
      setMessage("Uploaded!");
      onUploaded?.();
    } catch (err) {
      console.error(err);
      setMessage("Upload failed");
    }
  };

  return (
    <div>
      <input type="file" onChange={handle} />
      <div>{message}</div>
    </div>
  );
}
