import React, { useEffect, useRef, useState } from "react";

const StopWatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const formatTime = () => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h < 10 ? `0${h}` : h}:${m < 10 ? `0${m}` : m}:${s < 10 ? `0${s}` : s}`;
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setSeconds(0);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-white font-mono">
      <div className="w-64 h-64 rounded-full border-[8px] border-yellow-400 flex items-center justify-center shadow-xl bg-black">
        <p className="text-4xl sm:text-5xl">{formatTime()}</p>
      </div>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <button
          onClick={() => setIsRunning(true)}
          className="py-2 px-6 bg-green-600 hover:bg-green-700 transition rounded-full"
        >
          Start
        </button>
        <button
          onClick={() => setIsRunning(false)}
          className="py-2 px-6 bg-red-600 hover:bg-red-700 transition rounded-full"
        >
          Stop
        </button>
        <button
          onClick={handleReset}
          className="py-2 px-6 bg-yellow-500 hover:bg-yellow-600 transition rounded-full"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default StopWatch;
