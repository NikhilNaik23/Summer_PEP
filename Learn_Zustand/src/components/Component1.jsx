import React from "react";
import { useCounterStore } from "../store/counterStore";

const Component1 = () => {
  let count = useCounterStore((state) => state.count);
  return <div className="text-2xl">{count}</div>;
};

export default Component1;
