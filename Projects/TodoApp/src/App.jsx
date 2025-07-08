import React, { useState } from "react";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [error, setError] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const addTodoInList = () => {
    setError("");
    if (todo.trim().length === 0) {
      setError("Todo is required");
      return;
    }

    if (editIndex !== null) {
      const updatedList = [...todoList];
      updatedList[editIndex] = todo;
      setTodoList(updatedList);
      setEditIndex(null);
    } else {
      setTodoList([...todoList, todo]);
    }

    setTodo("");
  };

  const clearTodo = () => {
    setError("");
    setTodo("");
    setEditIndex(null);
  };

  const editTodo = (index) => {
    setTodo(todoList[index]);
    setEditIndex(index);
  };

  const deleteTodo = (index) => {
    const filteredTodos = todoList.filter((_, idx) => idx !== index);
    setTodoList(filteredTodos);
    if (editIndex === index) {
      clearTodo();
    }
  };

  return (
    <div className="h-[100vh] flex flex-col justify-center items-center gap-10 bg-black text-white">
      <div>
        <h2 className="text-4xl text-blue-600 font-bold">Todo App</h2>
      </div>
      <div>
        <p className="text-red-500">{error}</p>
      </div>
      <div className="w-[80%] md:w-[60%] flex gap-2">
        <input
          type="text"
          placeholder="Enter a Todo..."
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className="w-[80%] bg-blue-400 px-4 py-2 rounded outline-blue-400 focus:bg-blue-600 placeholder:text-gray-500"
        />
        <button
          type="button"
          onClick={addTodoInList}
          className="w-[10%] md:w-[20%] font-semibold bg-blue-400 text-xs md:text-lg hover:bg-blue-500 rounded text-black"
        >
          {editIndex !== null ? "Update" : "Add"}
        </button>
        <button
          onClick={clearTodo}
          className="w-[10%] md:w-[20%] font-semibold text-xs md:text-lg bg-yellow-400 hover:bg-yellow-500 rounded text-black"
        >
          Clear
        </button>
      </div>
      <div className="w-[80%] md:w-[60%]">
        <ul className="w-[100%]">
          {todoList.map((todo, idx) => (
            <div
              key={idx}
              className="w-[100%] text-white bg-blue-600 px-4 py-2 rounded my-3 flex justify-between"
            >
              <li>{todo}</li>
              <div className="flex gap-2 justify-center items-center">
                <button
                  onClick={() => editTodo(idx)}
                  className="text-white bg-green-500 hover:bg-green-600 px-4 py-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteTodo(idx)}
                  className="text-white bg-red-500 hover:bg-red-600 px-4 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
