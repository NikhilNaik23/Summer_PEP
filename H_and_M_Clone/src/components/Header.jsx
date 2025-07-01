import React from "react";
import Navbar from "./Navbar";
import { GoPlus } from "react-icons/go";

const Header = () => {
  return (
    <div className="max-w-full flex flex-col bg-white ">
      <div className="min-w-screen flex justify-between text-md p-5 cursor-pointer">
        <p className="text-[rgb(229,0,16)] text-lg ">Steals of the season | Under ₹699</p>
        <div className="flex justify-center items-center gap-1">
          <p className="underline">SHOP NOW</p>
          <GoPlus className="text-2xl"/>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
