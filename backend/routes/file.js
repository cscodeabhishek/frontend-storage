import express from "express";
import fs from "fs";
import path from "path";

const router = express.Router();

router.get("/", (req, res) => {
  const filePath = path.join(process.cwd(), "backend/data/mockFiles.json");

  if (!fs.existsSync(filePath)) {
    return res.json({ files: [], total: 0 });
  }

  const files = JSON.parse(fs.readFileSync(filePath));

  const page = parseInt(req.query.page ?? 1);
  const limit = parseInt(req.query.limit ?? 50);
  const search = req.query.search?.toLowerCase() || "";

  let filtered = files.filter(f => f.name.toLowerCase().includes(search));

  let paginated = filtered.slice((page - 1) * limit, page * limit);

  res.json({
    files: paginated,
    total: filtered.length
  });
});

export default router;
