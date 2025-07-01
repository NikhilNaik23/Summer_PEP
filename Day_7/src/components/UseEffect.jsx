import React, { useEffect, useState } from "react";

const UseEffect = () => {
  console.log("Component re-renders");
  const [x, setX] = useState(0);
  const increaseX = () => {
    setX(x + 1);
  };
  useEffect(() => {
    console.log("Value of x has changed ", x);
    const id = setInterval(() => {
      setX(x + 1);
    }, 1000);
    return () => {
      clearInterval(id);
    };
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <p>X: {x}</p>
      <button
        style={{
          backgroundColor: "red",
          color: "white",
          padding: "10px",
          margin: "5px",
        }}
        type="button"
        onClick={increaseX}
      >
        Increase X
      </button>
    </div>
  );
};

export default UseEffect;
