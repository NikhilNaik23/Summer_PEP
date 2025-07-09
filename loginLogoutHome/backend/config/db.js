import mongoose from "mongoose";

export const connectDB = async (url) => {
  try {
    await mongoose.connect(url);
    console.log("Connected Successfully");
  } catch (err) {
    console.log("Error while connecting DB", err);
  }
};
