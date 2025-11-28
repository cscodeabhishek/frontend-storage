import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import FileList from "../components/FileList";
import UploadButton from "../components/UploadButton";
import { useAuth } from "../context/AuthContext";
import { getFiles } from "../api";

const Dashboard = () => {
  const { user } = useAuth();
  const [files, setFiles] = useState([]);

  const fetchFiles = async () => {
    if(!user) return;
    const data = await getFiles(user.token);
    setFiles(data);
  };

  useEffect(()=>{
    fetchFiles();
  }, [user]);

  if(!user) return <p>Please login first.</p>;

  return (
    <div>
      <Navbar />
      <div style={{ padding:"20px" }}>
        <UploadButton onUpload={fetchFiles}/>
        <FileList files={files} />
      </div>
    </div>
  );
};

export default Dashboard;
