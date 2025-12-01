import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./models/User.js";

dotenv.config();

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB!");

    // Remove old user
    await User.deleteMany({ email: "admin@gmail.com" });

    // Create new user with name (required)
    await User.create({
      name: "Admin User",
      email: "admin@gmail.com",
      password: "admin123",
    });

    console.log("Admin user created:");
    console.log("Email: admin@gmail.com");
    console.log("Password: admin123");

    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();
