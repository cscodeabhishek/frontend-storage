import express from "express";
import cors from "cors";
import fileRoutes from "./routes/files.js";
import uploadRoutes from "./routes/upload.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/files", fileRoutes);
app.use("/api/upload", uploadRoutes);

app.listen(5000, () => console.log("Backend running on port 5000"));
