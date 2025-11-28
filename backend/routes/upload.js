import express from "express";
import multer from "multer";
import AWS from "aws-sdk";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

AWS.config.update({
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS,
  secretAccessKey: process.env.AWS_SECRET
});

const s3 = new AWS.S3();

router.get("/presign", (req, res) => {
  const params = {
    Bucket: process.env.AWS_BUCKET,
    Key: req.query.filename,
    Expires: 300,
    ContentType: req.query.type
  };

  const url = s3.getSignedUrl("putObject", params);
  res.json({ url });
});

export default router;
