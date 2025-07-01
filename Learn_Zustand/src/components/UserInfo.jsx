import React from "react";
import { useUserInfoForCart } from "../store/userInfoForCart";
import { Link, useNavigate } from "react-router-dom";

const UserInfo = () => {
  const navigate = useNavigate();
  const firstName = useUserInfoForCart((state) => state.firstName);
  const lastName = useUserInfoForCart((state) => state.lastName);
  const address = useUserInfoForCart((state) => state.address);
  const city = useUserInfoForCart((state) => state.city);
  const _state = useUserInfoForCart((state) => state.state);
  const country = useUserInfoForCart((state) => state.country);
  const postalCode = useUserInfoForCart((state) => state.postalCode);
  const state = useUserInfoForCart();
  const openCart = async (e) => {
    e.preventDefault();
    navigate("/cart");
  };
  return (
    <div>
      <form className="flex gap-5 flex-col" onSubmit={openCart}>
        <div className="flex gap-5">
          <input
            className="bg-white text-black"
            type="text"
            placeholder="FirstName"
            value={firstName}
            onChange={(e) => {
              state.setFirstName(e.target.value);
            }}
            required
          />
          <input
            className="bg-white text-black"
            type="text"
            value={lastName}
            onChange={(e) => {
              state.setLastName(e.target.value);
            }}
            placeholder="LastName"
            required
          />
          <input
            className="bg-white text-black"
            type="text"
            value={address}
            onChange={(e) => {
              state.setAddress(e.target.value);
            }}
            placeholder="Address"
            required
          />
          <input
            className="bg-white text-black"
            type="text"
            value={city}
            onChange={(e) => {
              state.setCity(e.target.value);
            }}
            placeholder="City"
            required
          />
          <input
            className="bg-white text-black"
            type="text"
            value={_state}
            onChange={(e) => {
              state.setState(e.target.value);
            }}
            placeholder="State"
            required
          />
          <input
            className="bg-white text-black"
            type="text"
            value={country}
            onChange={(e) => {
              state.setCountry(e.target.value);
            }}
            placeholder="Country"
            required
          />
          <input
            className="bg-white text-black"
            type="text"
            value={postalCode}
            onChange={(e) => {
              state.setPostalCode(e.target.value);
            }}
            placeholder="postalCode"
            required
          />
        </div>

        <button className="p-2 bg-white text-black" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserInfo;
