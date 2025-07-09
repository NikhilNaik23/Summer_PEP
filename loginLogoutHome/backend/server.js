import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import userRoute from "./routes/user.js";
dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

connectDB(process.env.MONGO_URI);

app.use("/", userRoute);

// Server
app.listen(PORT, () => {
  console.log(`Your server is running on port ${PORT}`);
});
