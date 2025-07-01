import React from "react";
import { useUserInfoForCart } from "../store/userInfoForCart";

const Cart = () => {
  const firstName = useUserInfoForCart((state) => state.firstName);
  const lastName = useUserInfoForCart((state) => state.lastName);
  const address = useUserInfoForCart((state) => state.address);
  const city = useUserInfoForCart((state) => state.city);
  const _state = useUserInfoForCart((state) => state.state);
  const country = useUserInfoForCart((state) => state.country);
  const postalCode = useUserInfoForCart((state) => state.postalCode);
  return (
    <div className="bg-white flex flex-col text-black ">
      <p>{firstName}</p>
      <p>{lastName}</p>
      <p>{address}</p>
      <p>{city}</p>
      <p>{_state}</p>
      <p>{country}</p>
      <p>{postalCode}</p>
    </div>
  );
};

export default Cart;
