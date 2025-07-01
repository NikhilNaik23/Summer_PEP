import { useContext } from "react";
import { PersonContext } from "../context/PersonContext";

const Component5 = () => {
  const values = useContext(PersonContext);
  return (
    <div className="py-10 w-[100px] h-[100px] bg-green-600">
      Component5 {values.person}
    </div>
  );
};

export default Component5;
