// frontend/src/api.js
import axios from "axios";

const API_BASE = "http://localhost:5000"; // Change backend port if different

// Auth login
// 
// frontend/src/api.js
export const authLogin = async (email, password) => {
  // Mock login
  if (email === "admin@gmail.com" && password === "admin123") {
    return { name: "Admin User", role: "admin" };
  } else {
    throw new Error("Invalid credentials");
  }
};


// File upload
export const uploadFile = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  try {
    const res = await axios.post(`${API_BASE}/upload`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return res.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

// Fetch files
export const fetchFiles = async () => {
  try {
    const res = await axios.get(`${API_BASE}/files`);
    return res.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
