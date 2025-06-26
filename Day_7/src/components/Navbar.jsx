import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const onButtonClick = () => {
    console.log("Clicked");
  };
  const mouseEnter = () => {
    console.log("Mouse Entered");
  };
  const doubleClick = () => {
    console.log("Double Clicked");
  };
  return (
    <>
      <div className="select-none">
        <nav className="h-15 bg-black text-white flex gap-12 justify-around items-center text-sm md:text-lg ">
          <h2 className="text-2xl md:text-xl text-left font-bold text-blue-300">
            Application
          </h2>
          <div className="absolute right-10 md:hidden">
            {!sidebar && (
              <GiHamburgerMenu
                className="text-2xl font-bold"
                onClick={() => setSidebar((prev) => !prev)}
              />
            )}
          </div>
          <div className="md:flex gap-12 justify-around items-center hidden">
            <div className="flex gap-12">
              <a href="/" className="hover:text-gray-400">
                Home
              </a>
              <a href="/" className="hover:text-gray-400">
                Shop
              </a>
              <a href="/" className="hover:text-gray-400">
                About
              </a>
              <a href="/" className="hover:text-gray-400">
                Contact
              </a>
            </div>
            <div className="flex gap-3">
                <button
                  className="bg-red-600 px-3 py-2 hover:text-red-900 rounded-xl"
                  onClick={onButtonClick}
                >
                  Login
                </button>
                <button
                  className="bg-blue-600 hover:text-blue-900 px-3 py-2 rounded-xl "
                  onMouseEnter={mouseEnter}
                  onDoubleClick={doubleClick}
                >
                  Register
                </button>
            </div>
          </div>
        </nav>
        {sidebar ? (
          <nav className="flex bg-black justify-center items-center text-white text-lg p-5 flex-col gap-12 md:hidden">
            <div className="absolute right-10 top-5  md:hidden">
              {sidebar && (
                <MdOutlineClose
                  className="text-2xl font-bold"
                  onClick={() => setSidebar((prev) => !prev)}
                />
              )}
            </div>
            <a href="/" className="hover:text-gray-400">
              Home
            </a>
            <a href="/" className="hover:text-gray-400">
              Shop
            </a>
            <a href="/" className="hover:text-gray-400">
              About
            </a>
            <a href="/" className="hover:text-gray-400">
              Contact
            </a>
          </nav>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Navbar;
