import express from "express";
import { generateShortenUrl } from "../controllers/url.js";
const router = express.Router();

router.post("/",generateShortenUrl);
export default router;
