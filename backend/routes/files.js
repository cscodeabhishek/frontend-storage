import express from "express";
import multer from "multer";
import { uploadFile, getFiles } from "../controllers/fileController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
const router = express.Router();

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }
});
const upload = multer({ storage });

router.get("/", authMiddleware, getFiles);
router.post("/upload", authMiddleware, upload.single("file"), uploadFile);

export default router;
