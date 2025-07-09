import { nanoid } from "nanoid";
import URL from "../models/url.js";
export const generateShortenUrl = async (req, res) => {
  const { longUrl } = req.body;
  try {
    let existing = await URL.findOne({ longUrl });
    if (existing) {
      return res.status(200).json({
        shortUrl: `http://localhost:${process.env.PORT}/${existing.shortId}`,
        longUrl,
      });
    }

    const shortId = nanoid(6);
    const newUrl = new URL({ longUrl, shortId });
    await newUrl.save();

    res.status(201).json({
      shortUrl: `http://localhost:${process.env.PORT}/${shortId}`,
      longUrl,
    });
  } catch (error) {
    console.error("Error generating short URL:", error);
    res.status(500).json({ message: "Server error. Try again later." });
  }
};
