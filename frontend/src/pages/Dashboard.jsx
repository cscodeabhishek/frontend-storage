import axios from "axios";

const handleUpload = async (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const token = localStorage.getItem("token");

  const formData = new FormData();
  formData.append("file", file);

  try {
    const res = await axios.post("http://localhost:5000/api/files/upload", formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });

    alert("Upload success");
  } catch (err) {
    console.error(err);
    alert("Upload failed");
  }
};
