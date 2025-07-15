import User from "../models/authUser.js";
import { v4 as uuid } from "uuid";

const userState = {};

export const home = async (req, res) => {
  const uid = req.cookies?.uid;
  const user = userState[uid];
  if (!uid || !user) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  res.status(200).json({ message: "Ok", user: user.username });
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    if (!(await user.comparePassword(password))) {
      return res.status(400).json({ error: "Invalid Email or Password" });
    }
    user.password = undefined;
    const uid = uuid();
    userState[uid] = user;
    res
      .status(200)
      .cookie("uid", uid, {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
        maxAge: 24 * 60 * 60 * 1000,
      })
      .json({ message: "successfully logged in" });
  } catch (error) {
    console.log("Error in login controller", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
export const signup = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const existingUser = await User.findOne({
      $or: [{ email }, { username }],
    });
    if (existingUser) {
      if (existingUser.email === email) {
        return res
          .status(400)
          .json({ error: "Email already in use, try logging in" });
      } else if (existingUser.username === username) {
        return res.status(400).json({ error: "Username already in use" });
      }
    }
    const user = await User.create({ username, email, password });
    const uid = uuid();
    userState[uid] = user;
    console.log(userState);
    res
      .status(201)
      .cookie("uid", uid, {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
        maxAge: 24 * 60 * 60 * 1000,
      })
      .json({ message: "Account created successfully" });
  } catch (error) {
    console.log("Error in signup controller", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const logout = (req, res) => {
  const uid = req.cookies?.uid;
  if (uid) {
    delete userState[uid];
  }
  res.clearCookie("uid");

  console.log("User logged out");
  res.status(200).json({ message: "Logged out" });
};
