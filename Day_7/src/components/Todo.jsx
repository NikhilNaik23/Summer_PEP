import React, { useRef, useState } from "react";
import { MdDeleteOutline } from "react-icons/md";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);
  const addTodo = () => {
    const newTodos = [...todos, inputRef.current.value];
    setTodos(newTodos);
    inputRef.current.value = "";
  };
  const removeTodo = (idx) => {
    const newTodos = todos.filter((_, i) => i !== idx);
    setTodos(newTodos);
  };
  return (
    <div className=" max-h-screen max-w-7xl flex justify-center select-none items-center flex-col gap-5">
      <h1 className="text-4xl text-blue-600 font-extrabold">Todo App</h1>
      <div className="flex justify-center items-center gap-3">
        <label htmlFor="todo">Todo: </label>
        <input
          className="w-full bg-black placeholder-gray-400 p-3  rounded-xl border-none focus:bg-gray-300"
          type="text"
          id="todo"
          ref={inputRef}
          placeholder="Enter Todo"
        />
      </div>
      <div>
        {" "}
        <button
          type="button"
          className="bg-red-600 hover:bg-red-800 py-3 px-5 rounded-xl text-white"
          onClick={addTodo}
        >
          Add
        </button>
      </div>
      <div className=" text-white w-[80vw] md:w-[60vw] m-5 p-5 rounded-xl">
        <ul className=" flex flex-col gap-5">
          {todos.length === 0 ? (
            <li className="bg-black p-3 rounded-xl ">
              No Todos are found. Add todos to view.
            </li>
          ) : (
            <>
              {todos.map((todo, idx) => (
                <div
                  className="bg-black p-3 rounded-xl flex justify-between "
                  key={idx}
                >
                  <li>{todo}</li>
                  <button
                    className="cursor-pointer p-1 bg-red-600 rounded-lg"
                    onClick={() => {
                      removeTodo(idx);
                    }}
                  >
                    <MdDeleteOutline />
                  </button>
                </div>
              ))}
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
