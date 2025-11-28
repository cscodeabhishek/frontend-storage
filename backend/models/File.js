import mongoose from "mongoose";

const fileSchema = new mongoose.Schema({
  name: String,
  size: Number,
  type: String,
  path: String,
  uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  uploadedAt: { type: Date, default: Date.now }
});

export default mongoose.model("File", fileSchema);
