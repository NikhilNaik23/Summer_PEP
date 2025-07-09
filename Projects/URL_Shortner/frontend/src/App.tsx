import React, { useState } from "react";

const App = () => {
  const [shortenerUrl, setShortenerUrl] = useState("");
  const [longUrl, setLongUrl] = useState("");
  const [link, setLink] = useState("");

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setLink("");

    if (!longUrl.trim()) {
      setShortenerUrl("Please enter a valid URL.");
      return;
    }
    try {
      const res = await fetch("http://localhost:5000/shorten", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ longUrl }),
      });

      const data = await res.json();
      
      if (res.ok) {
        setShortenerUrl(data.shortUrl);
        setLink(data.longUrl);
        console.log(data.longUrl);
      } else {
        setShortenerUrl(data.message || "Error shortening URL");
      }
    } catch (error) {
      console.error(error);
      setShortenerUrl("Server error. Please try again later.");
    }
  };

  return (
    <div className="bg-black text-white h-[100vh] flex flex-col gap-5 justify-center items-center">
      <h1 className="text-4xl text-cyan-500">URL Shortener</h1>
      <form method="post" onSubmit={submitForm} className="flex gap-3">
        <input
          type="text"
          name="long-url"
          id="long-url"
          className="py-2 px-4 border-2 border-white mx-5 rounded text-white"
          placeholder="Enter a URL"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
        />
        <button
          type="submit"
          className="py-2 px-2 border-2 border-cyan-400 rounded hover:text-cyan-500"
        >
          Shorten URL
        </button>
      </form>
      {shortenerUrl && (
        <a href={`${link}`} className="text-green-400 break-words max-w-[90%]">
          {shortenerUrl}
        </a>
      )}
    </div>
  );
};

export default App;
