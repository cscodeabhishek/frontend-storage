import File from "../models/File.js";
import path from "path";

export const uploadFile = async (req, res) => {
  if(!req.file) return res.status(400).json({ message: "No file uploaded" });

  const file = new File({
    name: req.file.originalname,
    size: req.file.size,
    type: req.file.mimetype,
    path: req.file.path,
    uploadedBy: req.user.id
  });

  await file.save();
  res.json({ message: "File uploaded successfully", file });
};

export const getFiles = async (req, res) => {
  const files = await File.find({ uploadedBy: req.user.id }).sort({ uploadedAt: -1 });
  res.json(files);
};
