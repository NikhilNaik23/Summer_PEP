import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import shortenRoute from "./routes/url.js";
import connectDB from "./config/db.js";
import authRoute from "./routes/authUser.js";
import cookieParser from "cookie-parser";
dotenv.config();
connectDB(process.env.MONGO_URI);
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true, 
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", authRoute);
app.use("/shorten", shortenRoute);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
