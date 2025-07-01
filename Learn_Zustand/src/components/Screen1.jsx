import React from "react";
import toast from "react-hot-toast";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Screen1 = ({ setScreen }) => {
  const validatePersonalInfo = () => {
    const form = document.getElementsByTagName("form")[0];
    const formData = new FormData(form);
    for (const info of formData.entries()) {
      if (info.length === 0) {
        toast.error("Please fill all the details");
        return
      }
    }

    setScreen(2);
  };
  return (
    <div className="max-w-5xl min-h-[80vh] m-25 p-5 border-2 rounded border-purple-500">
      <div className=" flex justify-between items-center">
        <h1 className="text-4xl">Personal Info</h1>
        <div className="flex justify-end items-center">
          <button
            onClick={() => {
              validatePersonalInfo();
              //   setScreen(3);
            }}
            className="text-white bg-purple-500 px-10 py-2 rounded-xl"
          >
            Next
            <FaArrowRight />
          </button>
        </div>
      </div>
      <form
        action=""
        className="w-full h-full text-xl flex flex-col justify-center items-center gap-5"
      >
        <div className="flex w-[40%] justify-between items-center  gap-4">
          <label htmlFor="first_name" className="text-purple-500">
            FirstName
          </label>
          <input
            type="text"
            name="first_name"
            id="first_name"
            className=" outline-purple-500 border-2 border-purple-300 px-2 py-1"
          />
        </div>
        <div className="flex w-[40%] justify-between items-center gap-4">
          <label htmlFor="lastname" className="text-purple-500">
            LastName
          </label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            className=" outline-purple-500 border-2 border-purple-300 px-2 py-1"
          />
        </div>
        <div className="flex w-[40%] justify-between items-center gap-4">
          <label htmlFor="nationality" className="text-purple-500">
            Nationality
          </label>
          <input
            type="text"
            name="nationality"
            id="nationality"
            className=" outline-purple-500 border-2 border-purple-300 px-2 py-1"
          />
        </div>
        <div className="flex w-[40%] justify-between items-center gap-4">
          <label htmlFor="address" className="text-purple-500">
            Address
          </label>
          <input
            type="text"
            name="address"
            id="address"
            className=" outline-purple-500 border-2 border-purple-300 px-2 py-1"
          />
        </div>
        <div className="flex w-[40%] justify-between items-center gap-4">
          <label htmlFor="city" className="text-purple-500">
            City
          </label>
          <input
            type="text"
            name="city"
            id="city"
            className=" outline-purple-500 border-2 border-purple-300 px-2 py-1"
          />
        </div>
        <div className="flex w-[40%] justify-between items-center gap-4">
          <label htmlFor="state" className="text-purple-500">
            State
          </label>
          <input
            type="text"
            name="state"
            id="city"
            className=" outline-purple-500 border-2 border-purple-300 px-2 py-1"
          />
        </div>
        <div className="flex w-[40%] justify-between items-center gap-4">
          <label htmlFor="postalCode" className="text-purple-500">
            PostalCode
          </label>
          <input
            type="text"
            name="postalCode"
            id="postalCode"
            className=" outline-purple-500 border-2 border-purple-300 px-2 py-1"
          />
        </div>
      </form>
    </div>
  );
};

export default Screen1;
