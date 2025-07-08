import React, { useState } from "react";

const App = () => {
  const [chances, setChances] = useState(7);
  const [guess, setGuess] = useState("");
  const [won, setWon] = useState(false);
  const [text, setText] = useState("");
  const [randomNumber, setRandomNumber] = useState(
    Math.ceil(Math.random() * 100)
  );
  const restart = () => {
    setChances(7);
    setGuess("");
    setWon(false);
    setText("");
    setRandomNumber(Math.ceil(Math.random() * 100));
  };

  return (
    <div className="relative h-[100vh] min-w-screen flex flex-col justify-center items-center gap-10 bg-black">
      <div className="absolute top-0 right-0 text-white">
        <p className="m-5 p-2 text-lg font-semibold border-1 rounded-2xl border-white">
          Chances: {chances}
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold text-blue-600">Guess The Number</h2>
        <p
          className={`${
            won ? "text-green-500 text-2xl" : "text-red-500 text-2xl"
          }`}
        >
          {chances === 0 && !won
            ? `You've lost the game.To play again click on restart`
            : text}
        </p>
      </div>
      <div className="flex flex-col justify-center items-center gap-5">
        <input
          className="bg-gray-400 p-2 rounded text-white placeholder:text-white focus:ring-0 focus:outline-gray-800 disabled:bg-gray-100 disabled:line-through"
          required
          disabled={chances === 0 || won}
          type="text"
          value={guess}
          onChange={(e) => {
            setGuess(e.target.value);
          }}
          placeholder={`${
            chances === 0 ? "" : "Enter a number (1-100)"
          }`}
        />
        <button
          disabled={chances === 0 || won}
          onClick={() => {
            if (Number(guess) === randomNumber) {
              setText(`You've won the game. To play again click on restart`);
              setWon(true);
            }
            if (Number(guess) > randomNumber) {
              setText(`Your guess is too high`);
            }
            if (Number(guess) < randomNumber) {
              setText(`Your guess is too low`);
            }
            setChances((prev) => prev - 1);
          }}
          className="px-4 py-2 text-white rounded border-white border-2 hover:bg-gray-800 disabled:bg-gray-200 disabled:line-through"
        >
          Submit
        </button>
        <button
          onClick={restart}
          className="px-4 py-2 text-white rounded border-white border-2 hover:bg-gray-800"
        >
          Restart
        </button>
      </div>
    </div>
  );
};

export default App;
