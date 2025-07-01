import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Screen3 = ({ setScreen }) => {
  return (
    <div className="w-full h-full ">
      <h1 className="text-4xl">Screen 3</h1>
      <div className="flex justify-end items-center">
        <button className="text-white bg-purple-500 px-10 py-2 rounded-xl">
          Submit
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Screen3;
