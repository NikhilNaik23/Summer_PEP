import React, { useEffect, useState } from "react";

const App = () => {
  const [sentence, setSentence] = useState("");
  const [count, setCount] = useState(0);
  const [characterCount, setCharacterCount] = useState(0);
  const reset = () => {
    setSentence("");
    setCount(0);
  };
  useEffect(() => {
    const words = sentence.trim().split(/\s+/).filter(Boolean);
    setCount(sentence.trim() === "" ? 0 : words.length);
    const sentenceWithoutSpaces = sentence.split("").filter((char) => char !== " ");
  setCharacterCount(sentenceWithoutSpaces.length);
  }, [sentence]);
  return (
    <div className="h-[100vh] flex flex-col text-white bg-black items-center gap-10 justify-center">
      <div className="flex flex-col justify-center items-center gap-5">
        <h2 className="text-4xl text-blue-500 font-bold">Word Counter</h2>
        <p className="text-2xl">{count}</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-5">
        <h2 className="text-4xl text-blue-500 font-bold">Character Counter</h2>
        <p className="text-2xl">{characterCount}</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-5">
        <input
          type="text"
          value={sentence}
          onChange={(e) => {
            setSentence(e.target.value);
          }}
          className={`bg-white text-black px-4 py-2 rounded outline-blue-500 focus:bg-blue-300`}
          placeholder="Enter something..."
        />
        <button onClick={reset} className="px-4 py-2 bg-blue-400 rounded">
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;
