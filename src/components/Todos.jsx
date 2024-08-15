import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';

const Todos = () => {
  // Getting the todos from the Redux store
  const {todos} = useSelector((state) => state.todos);
  const dispatch = useDispatch();


  return (
    <>
 <div className="flex flex-col items-center justify-center min-h-screen bg-[#FAF1E4] p-4">
      <div className="bg-[#CEDEBD] p-8 rounded-lg shadow-lg w-full max-w-md mt-8">
        <h1 className="text-3xl font-bold text-[#435334] mb-6 text-center">Your Todos</h1>
        <ul className="space-y-4">
          {todos && todos.length > 0 ? (
            todos.map((todo) => (
              <li
                key={todo.id}
                className="bg-[#9EB384] p-4 rounded-lg shadow-sm"
              >
                <div className="mb-4">
                  <h2 className="text-[#FAF1E4] text-xl font-semibold">{todo.text}</h2>
                  {todo.des && (
                    <p className="text-[#FAF1E4] mt-1">{todo.des}</p>
                  )}
                </div>
                <button
                  onClick={() => dispatch(removeTodo(todo.id))}
                  className="bg-[#435334] text-[#FAF1E4] py-1 px-3 w-24 rounded-lg hover:bg-[#9EB384] transition duration-300 ease-in-out"
                >
                  Delete
                </button>
              </li>
            ))
          ) : (
            <li className="text-[#435334] text-center">No todos yet. Add some!</li>
          )}
        </ul>
      </div>
    </div>
  </>
  );
};

export default Todos;
