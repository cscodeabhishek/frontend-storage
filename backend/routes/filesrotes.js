import express from "express";
import multer from "multer";
import File from "../models/File.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// Multer storage config
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Upload route
router.post("/upload", verifyToken, upload.single("file"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const newFile = new File({
      filename: req.file.originalname,
      size: req.file.size,
      uploadedBy: req.user.id,
    });

    await newFile.save();
    res.json({ message: "File uploaded successfully" });

  } catch (err) {
    console.error("UPLOAD ERROR:", err);
    res.status(500).json({ message: "Upload failed", error: err.message });
  }
});

export default router;
