import React from "react";
import { useCounterStore } from "./store/counterStore";
import Component1 from "./components/Component1";
import InputFromUser from "./components/InputFromUser";
import { useInputStore } from "./store/inputStore";
import UserInfo from "./components/UserInfo";
import Cart from "./components/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TanStackQuery from "./components/TanStackQuery";

const App = () => {
  let count = useCounterStore((state) => state.count);
  let increase = useCounterStore((state) => state.increase);
  let decrease = useCounterStore((state) => state.decrease);
  let reset = useCounterStore((state) => state.reset);
  let name = useInputStore((state) => state.name);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      {/* <p className="text-2xl">{count}</p>
      <div className="flex gap-5">
        <button
          className="px-4 py-2 text-xl border-white border-2 rounded-2xl"
          onClick={decrease}
        >
          Decrease
        </button>
        <button
          className="px-4 py-2 text-xl border-white border-2 rounded-2xl"
          onClick={increase}
        >
          Increase
        </button>
      </div>
      <div className="m-5">
        <button
          className="p-5 border-white border-2 rounded-2xl"
          onClick={reset}
        >
          Reset
        </button>
      </div>
      <Component1 />
      <InputFromUser />
      Greetings {name} */}
      <BrowserRouter>
        <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route path="/userInfo" element={<UserInfo />} />
        </Routes>
      </BrowserRouter>
      <TanStackQuery/>
    </div>
  );
};

export default App;
