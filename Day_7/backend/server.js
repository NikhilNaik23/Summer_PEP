import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/feedback", (req, res) => {
  const feedback = JSON.stringify(req.body) + "\n";
  fs.appendFileSync(path.join(__dirname, "data", "data.txt"), feedback, "utf8");
  res.send("Submitted");
});

app.listen(5000, () => {
  console.log(`server is running at http://localhost:5000`);
});
