const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const users = [];

app.post("/signup", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    return res.status(409).json({ message: "User already exists" });
  }

  users.push({ email, password });
  return res.status(201).json({ message: "User registered successfully" });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  const user = users.find(user => user.email === email && user.password === password);
  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  return res.status(200).json({ message: "Login successful" });
});

// Server
app.listen(5000, () => {
  console.log("Your server is running on port 5000");
});
