import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn !== "true") {
      navigate("/login");
    }
  }, [navigate]);

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div>
      <h2>Welcome to the Home Page</h2>
      <p>Logged in as: {localStorage.getItem("email")}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Home;
