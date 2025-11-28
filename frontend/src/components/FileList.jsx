import React from "react";

export default function FileList({ files = [] }) {
  if (!files.length) return <div>No files uploaded yet.</div>;
  return (
    <div>
      <h3>Files</h3>
      <ul>
        {files.map((f, i) => (
          <li key={i}>
            <a target="_blank" rel="noreferrer" href={f.url}>{f.originalname}</a>
            {" — "}{(f.size/1024).toFixed(2)} KB
          </li>
        ))}
      </ul>
    </div>
  );
}
