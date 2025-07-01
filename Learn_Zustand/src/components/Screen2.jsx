import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Screen2 = ({ setScreen }) => {
  return (
    <div className="w-full h-full">
      <h1 className="text-4xl">Educational Info</h1>
      <div className="flex justify-between items-center">
        <button className="text-white bg-purple-500 px-10 py-2 rounded-xl">
          Back
          <FaArrowLeft />
        </button>
        <button className="text-white bg-purple-500 px-10 py-2 rounded-xl">
          Next
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Screen2;
