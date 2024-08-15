// step 4
// it can be done by one method only createslice

import { createSlice, nanoid } from "@reduxjs/toolkit";
// nano id creates unique ids bs eitna kaam h iska

const intitalstate = {
  // object hai
  todos: [

  ],
};

// slice reducers ka bara function h

export const todoSlice = createSlice({
  //object slices k naame hoty hain

  name: "todos",
  initialState: intitalstate,
  reducers: {
    // reducers may property or functions atey hain

    // property
    // addTodo:(state,action)=>{},// syntax
    addTodo: (state, action) => {
      // const todo = {
      //   id: nanoid(),
      //   text: action.payload,
      // };
      console.log(action.payload)
      state.todos.push(action.payload); 
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
  // name ek property hai
});
export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
