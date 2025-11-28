import express from "express";
import multer from "multer";
import { uploadFile, getFiles } from "../controllers/fileController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();
const upload = multer({ dest: "backend/uploads/" });

router.post("/upload", authMiddleware, upload.single("file"), uploadFile);
router.get("/", authMiddleware, getFiles);

export default router;
