import React from "react";
import Component1 from "./components/Component1";
import PersonProvider from "./provider/PersonProvider";

const App = () => {
  return (
    <div className="text-center flex justify-center items-center">
      <PersonProvider>
        <Component1 />
      </PersonProvider>
    </div>
  );
};

export default App;
