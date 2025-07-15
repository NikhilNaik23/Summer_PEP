import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
      credentials: "include",
    });
    const data = await res.json();
    if (res.ok) {
      console.log(data);
      navigate("/");
    } else {
      console.log(data);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div className="w-[100vw] h-[100vh] text-white gap-10 bg-black flex justify-center items-center flex-col select-none">
      <h1 className="text-blue-600 text-3xl font-bold">Login</h1>
      <form
        method="post"
        className="flex flex-col justify-between gap-5 p-2"
        onSubmit={submitForm}
      >
        <div className="flex justify-between w-[100%] items-center">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className="py-2 px-4 border-2 border-white mx-5 rounded text-white"
            name="email"
            id="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex justify-between w-[100%] items-center">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="py-2 px-4 border-2 border-white mx-5 rounded text-white"
            name="password"
            id="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-white text-black px-4 py-2 rounded hover:bg-gray-100"
        >
          Login
        </button>
        <div className="text-sm flex justify-between items-center">
          <p>Don't have an account?</p>
          <Link
            to={"/signup"}
            className="text-blue-500 underline hover:text-blue-600"
          >
            Register
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
