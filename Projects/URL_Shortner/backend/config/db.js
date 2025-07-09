import mongoose from "mongoose";

const connectDB = async (url) => {
  await mongoose
    .connect(url)
    .then(() => console.log("Connected Successfully"))
    .catch((err) => console.log("Error while connecting: ", err));
};
export default connectDB;
