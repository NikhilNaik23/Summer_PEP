import React from "react";
import { MdOutlineSearch } from "react-icons/md";
import { MdOutlinePerson } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { RiShoppingBagLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Navbar = () => {
  const lists = [
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
      path: "/kids",
      name: "KIDS",
    },
  ];
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center px-5 ">
        <div className="flex justify-between items-center gap-12">
          <div>
            <img src="logo.svg" alt="logo" className="h-6 md:h-8" />
          </div>
          <div>
            <ul className="hidden md:flex justify-evenly items-center gap-8 text-gray-400  transition-colors ">
              {lists.map((list) => (
                <Link
                  className="hover:text-black hover:font-medium"
                  to={list.path}
                >
                  {list.name}
                </Link>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex justify-evenly items-center font-bold text-xl gap-5">
          <MdOutlineSearch className="text-2xl hover:text-gray-400 " />
          <MdOutlinePerson className="text-2xl hover:text-gray-400 " />
          <FaRegHeart className="hover:text-gray-400 " />
          <RiShoppingBagLine className="hover:text-gray-400 " />
        </div>
      </div>
      <div className="mt-5">
        <ul className="flex md:hidden justify-evenly items-center gap-5 text-gray-400  transition-colors ">
          {lists.map((list) => (
            <Link className="hover:text-black hover:font-medium" to={list.path}>
              {list.name}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
