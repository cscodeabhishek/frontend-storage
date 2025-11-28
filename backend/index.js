// backend/index.js
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import bcrypt from "bcryptjs";

// Import routes
import authRoutes from "./routes/auth.js";
import fileRoutes from "./routes/files.js";
import User from "./models/User.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const DB_URL = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/frontendStorage";

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/files", fileRoutes);

// MongoDB connection
mongoose.connect(DB_URL)
  .then(() => {
    console.log("MongoDB connected");

    // ✅ Auto-seed admin user if not exists
    (async () => {
      try {
        const existingAdmin = await User.findOne({ email: "admin@gmail.com" });
        if (!existingAdmin) {
          const hashedPassword = await bcrypt.hash("admin123", 10);
          const admin = new User({
            name: "Admin",
            email: "admin@gmail.com",
            password: hashedPassword,
            role: "admin",
          });
          await admin.save();
          console.log("Admin user auto-created!");
        } else {
          console.log("Admin user already exists.");
        }
      } catch (err) {
        console.error("Error auto-creating admin user:", err);
      }
    })();
  })
  .catch(err => console.error("MongoDB connection error:", err));

// Start server
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
