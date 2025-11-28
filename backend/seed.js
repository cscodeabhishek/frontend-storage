import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./models/User.js";
dotenv.config();

const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI)
  .then(async () => {
    console.log("MongoDB connected");

    const user = new User({
      email: "admin@gmail.com",
      password: "admin123" // for testing only; you can hash later
    });

    await user.save();
    console.log("User created!");
    process.exit(0);
  })
  .catch(err => {
    console.error("MongoDB connection error:", err);
  });
