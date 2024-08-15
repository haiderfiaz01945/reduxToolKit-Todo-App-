import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./features/todo/todoSlice";
import { nanoid } from "@reduxjs/toolkit";
function AddTodos() {
  const [input, setInput] = useState("");
  const [description,setDescription]=useState("")
  const dispatch = useDispatch();

  const addTodoHandler = async (e) => {
    const data = {
      id: nanoid(),
des:description,
      text: input,
    };
    e.preventDefault(); // This line should prevent the default form submission behavior
    await dispatch(addTodo(data));
    setInput("");
  };

  return (
    <div className="flex items-center justify-center mt-4 bg-[#FAF1E4]">
      <div className="bg-[#CEDEBD] p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-[#435334] mb-6 text-center">
          Redux Toolkit Todo
        </h1>
        <form onSubmit={addTodoHandler} className="flex flex-col gap-1">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter your Title"
            className="p-3 border border-[#9EB384] rounded focus:outline-none focus:ring-2 focus:ring-[#9EB384]"
          />
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter your Description"
            className="p-3 border border-[#9EB384] rounded focus:outline-none focus:ring-2 focus:ring-[#9EB384]"
          />
          <button
            type="submit"
            className="bg-[#9EB384] text-[#FAF1E4] py-2 px-4 rounded-lg hover:bg-[#435334] transition duration-300 ease-in-out"
          >
            Add Todo
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddTodos;
