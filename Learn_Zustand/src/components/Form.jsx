import React, { useState } from "react";
import Screen1 from "./Screen1";
import Screen2 from "./Screen2";
import Screen3 from "./Screen3";

const Form = () => {
  const [screen, setScreen] = useState(1);

  return (
    <div>
      <h1 className="text-center text-5xl">Form</h1>

      {screen === 1 && <Screen1 setScreen={setScreen} />}
      {screen === 2 && <Screen2 setScreen={setScreen} />}
      {screen === 3 && <Screen3 setScreen={setScreen} />}
    </div>
  );
};

export default Form;
