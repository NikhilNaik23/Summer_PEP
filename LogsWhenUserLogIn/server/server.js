import express from "express";
import cors from "cors";
import { fileURLToPath } from "url";
import { dirname } from "path";
import fs from "fs";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(cors());
app.use(express.urlencoded({ extended: true })); // to receive form data
app.use(express.json());

// middlewares
const loginlog = (req, res, next) => {
  const data = {
    userEmail: req.body?.email || `User${Date.now()}`,
    dateTime: Date(),
  };
  const stringifyData = JSON.stringify(data) + "\n";
  fs.appendFileSync(__dirname + "/logs/logindata.txt", stringifyData, "utf8");
  next();
};
const aboutlog = (req, res, next) => {
  const data = {
    userEmail: req.body?.email || `User${Date.now()}`,
    dateTime: Date(),
  };

  const stringifyData = JSON.stringify(data) + "\n";
  fs.appendFileSync(__dirname + "/logs/aboutdata.txt", stringifyData, "utf8");
  next();
};
const contactlog = (req, res, next) => {
  const data = {
    userEmail: req.body?.email || `User${Date.now()}`,
    dateTime: Date(),
  };

  const stringifyData = JSON.stringify(data) + "\n";
  fs.appendFileSync(__dirname + "/logs/contactdata.txt", stringifyData, "utf8");
  next();
};

const login = (req, res, next) => {
  if (!req.body?.email) {
    return res.status(400).json({ error: "Email is required" });
  }
  next();
};

app.post("/login", login, loginlog, (req, res) => {
  return res.send("Thanks for visiting us");
});
app.post("/about", aboutlog, (req, res) => {
  return res.send("Thanks for visiting our about page");
});
app.post("/contact", contactlog, (req, res) => {
  return res.send("Thanks for visiting our contact page");
});

app.listen(5000, () => {
  console.log("http://localhost:5000");
});
