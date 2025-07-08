import React, { useState } from "react";

const units = {
  meter: 1,
  kilometer: 0.001,
  mile: 0.000621371,
  foot: 3.28084,
};

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [fromUnit, setFromUnit] = useState("meter");
  const [toUnit, setToUnit] = useState("kilometer");
  const [result, setResult] = useState("");

  const convert = () => {
    if (inputValue === "" || isNaN(inputValue)) {
      setResult("Enter a valid number");
      return;
    }
    const meters = parseFloat(inputValue) / units[fromUnit];
    const converted = meters * units[toUnit];
    setResult(`${converted.toFixed(4)} ${toUnit}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="w-full max-w-md p-6 bg-gray-800 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Unit Converter</h2>

        <input
          type="text"
          placeholder="Enter value"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-full p-2 mb-4 text-black rounded border border-gray-300"
        />

        <div className="flex justify-between items-center mb-4">
          <select
            value={fromUnit}
            onChange={(e) => setFromUnit(e.target.value)}
            className="w-full p-2 mr-2 text-black rounded"
          >
            {Object.keys(units).map((unit) => (
              <option key={unit} value={unit}>
                {unit}
              </option>
            ))}
          </select>

          <span className="mx-2">to</span>

          <select
            value={toUnit}
            onChange={(e) => setToUnit(e.target.value)}
            className="w-full p-2 ml-2 text-black rounded"
          >
            {Object.keys(units).map((unit) => (
              <option key={unit} value={unit}>
                {unit}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={convert}
          className="w-full py-2 bg-blue-500 hover:bg-blue-600 rounded text-white font-semibold"
        >
          Convert
        </button>

        {result && (
          <p className="mt-4 text-lg font-medium text-center">Result: {result}</p>
        )}
      </div>
    </div>
  );
};

export default App;
