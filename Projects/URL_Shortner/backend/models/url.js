import mongoose from "mongoose";
const urlSchema = new mongoose.Schema(
  {
    longUrl: { type: String, required: true },
    shortId: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

const URL = mongoose.model("URL", urlSchema);
export default URL;
