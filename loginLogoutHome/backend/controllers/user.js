import User from "../models/user.js";

export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  const user = await User.findOne({ email, password });
  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }
  console.log("logged in successfully");
  return res.status(200).json({ message: "Login successful" });
};

export const signup = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const newUser = await User.create({ email, password });
    console.log("Created successfully:", newUser);

    return res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error("Signup error:", err.message);
    return res.status(500).json({ message: "Server error" });
  }
};
