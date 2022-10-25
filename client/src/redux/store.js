import { configureStore } from "@reduxjs/toolkit"
import  counterReducer  from "./counter/counterSlice"
import todosSlice from "./todos/todosSlice"

export const store = configureStore({
    reducer: {
        // counter: counterReducer
        todos: todosSlice 
    }
})