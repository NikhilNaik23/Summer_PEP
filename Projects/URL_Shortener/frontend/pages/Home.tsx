import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [shortenerUrl, setShortenerUrl] = useState("");
  const [longUrl, setLongUrl] = useState("");
  const [link, setLink] = useState("");

  useEffect(() => {
    async function checkAuth() {
      const res = await fetch("http://localhost:5000/", {
        credentials: "include",
      });
      const data = await res.json();

      if (res.status === 401) {
        navigate("/login");
      } else {
        console.log("Authenticated user:", data.user);
      }
    }
    checkAuth();
  }, []);

  const logout = async () => {
    const res = await fetch("http://localhost:5000/logout", {
      method: "POST",
      credentials: "include",
    });
    const data = await res.json();
    if (!data) {
      console.log("Nothing");
    } else {
      console.log(data);
      navigate("/login");
    }
  };

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
    <div className="bg-black text-white h-[100vh] flex flex-col gap-5 justify-center relative items-center select-none">
      <button
        onClick={logout}
        className="bg-red-500 hover:bg-red-600 text-sm px-4 py-2 rounded font-bold absolute right-0 top-0 m-5"
      >
        Logout
      </button>
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
        <a
          href={`${link}`}
          className="text-green-400 break-words max-w-[90%] select-text"
        >
          {shortenerUrl}
        </a>
      )}
    </div>
  );
};
export default Home;
