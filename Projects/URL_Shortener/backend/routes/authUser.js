import express from "express";
import { home, login, logout, signup } from "../controllers/authUser.js";
const router = express.Router();
router.get("/", home);
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

export default router;
