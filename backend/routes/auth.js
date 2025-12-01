import express from "express";
import User from "../models/User.js";

const router = express.Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) return res.status(400).json({ message: "Invalid email" });
  if (user.password !== password)
    return res.status(400).json({ message: "Invalid password" });

  res.json({ message: "Login successful", user });
});

export default router;
