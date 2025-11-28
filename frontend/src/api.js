import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // Backend URL
});

// Auth APIs
export const authLogin = async (email, password) => {
  const res = await API.post("/auth/login", { email, password });
  return res.data;
};

// File APIs
export const uploadFile = async (file, token) => {
  const formData = new FormData();
  formData.append("file", file);
  const res = await API.post("/files/upload", formData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

export const getFiles = async (token) => {
  const res = await API.get("/files", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};
