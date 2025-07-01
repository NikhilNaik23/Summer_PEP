import React, { useState } from "react";
import { PersonContext } from "../context/PersonContext";

const PersonProvider = ({ children }) => {
  const [person, setPerson] = useState("Raju");
  return (
    <PersonContext.Provider value={{ person, setPerson }}>
      {children}
    </PersonContext.Provider>
  );
};

export default PersonProvider;
