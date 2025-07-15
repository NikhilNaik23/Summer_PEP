import express from "express";
import { generateShortenUrl, openUrl } from "../controllers/url.js";
const router = express.Router();

router.post("/",generateShortenUrl);
router.get("/:id",openUrl)
export default router;
