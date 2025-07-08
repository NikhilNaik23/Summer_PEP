import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

router.get("/", (req, res) => {
  const filePath = path.join(__dirname, "../data/products.json");

  fs.readFile(filePath, "utf8", (err, jsonString) => {
    if (err) {
      console.error("Error reading file:", err);
      res.status(500).send("Internal Server Error");
      return;
    }
    try {
      const data = JSON.parse(jsonString);
      res.json(data);
    } catch (parseError) {
      console.error("Error parsing JSON:", parseError);
      res.status(500).send("Error parsing data");
    }
  });
});

export default router;
