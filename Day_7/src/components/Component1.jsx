import React, { useEffect, useState } from "react";

const Component1 = () => {
  console.log("Component re-renders");
  const [x, setX] = useState(0);
  function increaseX() {
    setX(x + 1);
  }
  useEffect(() => {
    console.log("Value of x has changed");
  },[]);

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

export default Component1;
