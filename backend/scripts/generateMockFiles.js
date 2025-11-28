import fs from "fs";
import path from "path";
import { v4 as uuid } from "uuid";

const TOTAL = process.env.TOTAL_FILES || 20000;

const types = ["pdf", "jpg", "png", "txt", "zip", "mp4"];

let list = [];

function randomName() {
  return "file_" + Math.random().toString(36).substring(2, 9);
}

for (let i = 0; i < TOTAL; i++) {
  const ext = types[Math.floor(Math.random() * types.length)];
  list.push({
    id: uuid(),
    name: `${randomName()}.${ext}`,
    type: "file",
    size: Math.floor(Math.random() * 5_000_000)
  });
}

const out = path.join(process.cwd(), "backend/data/mockFiles.json");
fs.writeFileSync(out, JSON.stringify(list, null, 2));

console.log("Generated", TOTAL, "files → mockFiles.json");
