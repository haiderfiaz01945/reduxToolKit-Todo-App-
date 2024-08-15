// steps of making a store 
// step 1
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../features/todo/todoSlice'
// step 2

const sllReducerd = {
    todos: todoReducer
}


export const store = configureStore({
reducer: sllReducerd
})

// configureStore={} object leta hai 

// next step make reducers it is actually calleed slicers making folder features 
