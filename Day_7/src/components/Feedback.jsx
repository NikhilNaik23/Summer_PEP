import React from "react";

const Feedback = () => {
  return (
    <div className="min-h-screen max-w-7xl flex justify-center items-center flex-col select-none">
      <h1 className="text-4xl text-black font-bold p-2">Feedback Form</h1>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-1.5">
        <div className="flex justify-between items-center">
          <label htmlFor="first_name" className="text-xl ">
            FirstName:
          </label>
          <input
            id="first_name"
            name="first_name"
            required
            className="placeholder-gray-400 bg-black text-white p-2 m-2 rounded-lg focus:bg-gray-400 "
            placeholder="Enter First Name"
          />
        </div>
        <div className="flex justify-between items-center">
          <label htmlFor="last_name" className="text-xl ">
            LastName:
          </label>
          <input
            id="last_name"
            name="last_name"
            required
            className="placeholder-gray-400 bg-black text-white p-2 m-2 rounded-lg focus:bg-gray-400 "
            placeholder="Enter Last Name"
          />
        </div>
        <div className="flex justify-between items-center">
          <label htmlFor="email" className="text-xl ">
            Email:
          </label>
          <input
            id="email"
            name="email"
            required
            className="placeholder-gray-400 bg-black text-white p-2 m-2 rounded-lg focus:bg-gray-400 "
            placeholder="Enter Email Address"
          />
        </div>
        <div className="flex justify-between items-center">
          <label htmlFor="phone" className="text-xl ">
            Phone:
          </label>
          <input
            id="phone"
            name="phone"
            required
            className="placeholder-gray-400 bg-black text-white p-2 m-2 rounded-lg focus:bg-gray-400 "
            placeholder="Enter Phone"
          />
        </div>
        <div className="md:col-span-2 flex flex-col gap-2">
          <label htmlFor="feedback" className="text-xl ">
            Comment
          </label>
          <textarea
            id="feedback"
            name="feedback"
            cols="50"
            rows="5"
            placeholder="Feedback..."
            className="w-full text-white bg-black p-3 rounded-lg"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="md:col-span-2 p-3 m-3 bg-green-500 hover:bg-green-600 cursor-pointer rounded-xl"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Feedback;
