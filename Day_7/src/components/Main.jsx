import React from "react";

const Main = () => {
  const arr = [1, 2, 3, 4, 5, 6];

  let title = "Numbers";
  return (
    <div className="text-center"> 
      <h1>{title}</h1>
      
      <p>{arr}</p>
    </div>
  );
};

export default Main;
