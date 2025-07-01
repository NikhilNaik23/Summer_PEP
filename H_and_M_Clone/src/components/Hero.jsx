import React, { useState } from "react";
import { GoPlus } from "react-icons/go";
import { LuMinus } from "react-icons/lu";
import { Link } from "react-router-dom";

const Hero = () => {
  const [openBar, setOpenBar] = useState(false);
  const routes = [
    {
      path: "/",
      name: "HOME",
    },
    {
      path: "/ladies",
      name: "LADIES",
    },
    {
      path: "/men",
      name: "MEN",
    },
    {
      path: "/baby",
      name: "BABY",
    },
    {
      path: "/kids/sale/2-8",
      name: "KIDS 2-8Y",
    },
    {
      path: "/kids/sale/9-14",
      name: "KIDS 9-14Y",
    },
  ];
  const toggleBar = () => {
    setOpenBar((prev) => !prev);
  };
  return (
    <section>
      <div className="relative hover:text-gray-400" onClick={toggleBar}>
        <div
          className={`relative h-[78vh] ${
            !openBar ? "bg-gray-100" : "bg-black/70"
          } flex  items-center`}
        >
          <p
            className={`md:w-[50%] p-5 ${
              !openBar ? "text-red-600" : "text-red-950"
            } text-5xl font-bold space-x-2 break-normal font-serif`}
          >
            UP TO 50% OFF <br />
            <br /> NEWS STYLES ADDED
          </p>
          {openBar && (
            <div className="absolute bottom-0 right-0 bg-white p-5 text-md pr-50 text-black">
              <ul className="flex flex-col">
                {routes.map((route) => (
                  <Link className="py-2" to={route.path}>
                    {route.name}
                  </Link>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="flex justify-center items-center gap-1 absolute right-0 px-5 py-2 cursor-pointer">
          <p className="underline">SHOP NOW</p>
          {!openBar ? (
            <GoPlus className="text-2xl" />
          ) : (
            <LuMinus className="text-2xl" />
          )}
        </div>
      </div>
      <p className="text-xs text-gray-600 absolute bottom-0 left-0">
        Offer valid on selected styles. Available online & in-stores. *T&C Apply
      </p>
    </section>
  );
};

export default Hero;
