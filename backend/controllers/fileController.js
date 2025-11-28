import File from "../models/File.js";
import path from "path";

export const uploadFile = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: "No file uploaded" });

    const file = new File({
      filename: req.file.originalname,
      path: req.file.path,
      uploadedBy: req.user._id,
    });

    await file.save();
    res.json({ message: "File uploaded", file });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getFiles = async (req, res) => {
  try {
    const files = await File.find({ uploadedBy: req.user._id });
    res.json(files);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
