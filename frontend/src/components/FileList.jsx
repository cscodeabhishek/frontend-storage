import React from "react";
import FileCard from "./FileCard";

const FileList = ({ files }) => {
  if(!files || files.length===0) return <p>No files uploaded yet.</p>;
  return (
    <div style={{ display:"flex", flexWrap:"wrap" }}>
      {files.map(f => <FileCard key={f._id} file={f} />)}
    </div>
  );
};

export default FileList;
