import React, { useState } from "react";
const App = () => {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(prev=>prev+1)
  };
  return (
    <div className="text-center select-none">
      <p className="text-red-700 text-4xl font-bold">{counter}</p>
      <button className="p-2 bg-black text-white rounded-2xl " onClick={increment}>Increase</button>
    </div>
  );
};
export default App;
