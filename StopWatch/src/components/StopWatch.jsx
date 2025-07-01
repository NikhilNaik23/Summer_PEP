import React, {  useState } from "react";

const StopWatch = () => {
  const [start, setStart] = useState(false);
  const [reset, setReset] = useState(false);
  const [time, setTime] = useState({
    h: 0,
    m: 0,
    s: 0,
  });
  const [timer, setTimer] = useState(0);
  const runTimer = () => {
    setInterval(() => {
      setTimer((prev) => prev + 1);
      if (timer >= 60) {
        time.m /= 60;
      }
      if (timer >= 3600) {
        time.h /= 3600;
      }
      time.s = timer
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      {timer}
      <p className="text-2xl py-5">{`${time.h < 10 ? `0${time.h}` : time.h}:${
        time.m < 10 ? `0${time.m}` : time.m
      }:${time.s < 10 ? `0${time.s}` : time.s}`}</p>
      <div className="flex flex-col w-50 gap-3">
        <div className="flex justify-around ">
          <button
            onClick={() => {
              setStart(true);
              runTimer();
            }}
            className="py-2 px-5 bg-black text-white rounded-2xl"
          >
            Start
          </button>
          <button
            onClick={() => setStart(false)}
            className="py-2 px-5 bg-black text-white rounded-2xl"
          >
            Stop
          </button>
        </div>
        <button
          onClick={() => {
            setReset(true);
          }}
          className="py-2 px-5 bg-black text-white rounded-2xl"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default StopWatch;
