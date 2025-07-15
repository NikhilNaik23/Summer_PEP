import { nanoid } from "nanoid";
import URL from "../models/url.js";
export const generateShortenUrl = async (req, res) => {
  const { longUrl } = req.body;
  try {
    let existing = await URL.findOne({ longUrl });
    if (existing) {
      return res.status(200).json({
        shortUrl: `http://localhost:${process.env.PORT}/shorten/${existing.shortId}`,
        longUrl,
      });
    }

    const shortId = nanoid(6);
    const newUrl = new URL({ longUrl, shortId });
    await newUrl.save();

    res.status(201).json({
      shortUrl: `http://localhost:${process.env.PORT}/shorten/${shortId}`,
      longUrl,
    });
  } catch (error) {
    console.error("Error generating short URL:", error);
    res.status(500).json({ message: "Server error. Try again later." });
  }
};

export const openUrl = async (req, res) => {
  const { id: shortId } = req.params;
  try {
    const url = await URL.findOne({ shortId });
    if (!url) {
      return res.status(400).json({ message: "Invalid shortId" });
    }
    return res.redirect(url.longUrl);
  } catch (error) {
    console.log("Error in openUrl Controller", error);
    res.status(500).json({ message: "Server error. Try again later." });
  }
};
