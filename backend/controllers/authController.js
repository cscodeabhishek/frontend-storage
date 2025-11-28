import User from "../models/User.js";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({ message: "Email and password required" });

  const user = await User.findOne({ email });
  if (!user) return res.status(401).json({ message: "Invalid email" });

  const isMatch = user.password === password; // Simple plain-text check (use bcrypt in production)
  if (!isMatch) return res.status(401).json({ message: "Invalid password" });

  const token = jwt.sign({ id: user._id, email: user.email }, "secretkey", { expiresIn: "1d" });

  res.json({ token, email: user.email });
};
