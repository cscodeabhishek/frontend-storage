import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import UploadButton from "../components/UploadButton";
import Charts from "../components/Charts";
import FileList from "../components/FileList";
import { getFilesAPI } from "../api";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { user } = useAuth();
  const [files, setFiles] = useState([]);

  useEffect(() => {
    if (user) {
      getFilesAPI(user.token).then(setFiles);
    }
  }, [user]);

  return (
    <div>
      <Navbar />
      <div className="container">
        <UploadButton />
        <Charts data={files} />
        <FileList files={files} />
      </div>
    </div>
  );
};

export default Dashboard;
