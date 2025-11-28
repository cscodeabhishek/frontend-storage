import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const fetchFiles = (page, limit, search) =>
  API.get(`/files?page=${page}&limit=${limit}&search=${search}`);

export const getPresignedUrl = (filename, type) =>
  API.get(`/upload/presign?filename=${filename}&type=${type}`);
