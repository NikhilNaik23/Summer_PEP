import { create } from "zustand";

export const useUserInfoForCart = create((set) => ({
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  state: "",
  country: "",
  postalCode: "",
  setFirstName: (firstName) => set({ firstName }),
  setLastName: (lastName) => set({ lastName }),
  setAddress: (address) => set({ address }),
  setCity: (city) => set({ city }),
  setState: (state) => set({ state }),
  setCountry: (country) => set({ country }),
  setPostalCode: (postalCode) => set({ postalCode }),
}));
