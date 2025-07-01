import { useContext } from "react";
import { PersonContext } from "../context/PersonContext";
import Component2 from "./Component2";

const Component1 = () => {
  const { person } = useContext(PersonContext);
  return (
    <div className="p-10 w-[500px] h-[500px] bg-teal-300">
      Component1 {person}
      <Component2 />
    </div>
  );
};

export default Component1;
