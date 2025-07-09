import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import shortenRoute from "./routes/url.js";
import connectDB from "./config/db.js";
dotenv.config();
connectDB(process.env.MONGO_URI)
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/shorten", shortenRoute);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
