import React from "react";
import { useInputStore } from "../store/inputStore";

const InputFromUser = () => {
  const name = useInputStore((state) => state.name);
  const updateName = useInputStore((state)=>state.updateName)
  return (
    <div>
      <input type="text" value={name} onChange={(e)=>{updateName(e.target.value)}}/>
    </div>
  );
};

export default InputFromUser;
