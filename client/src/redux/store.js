import { configureStore } from "@reduxjs/toolkit"
import  counterReducer  from "./counter/counterSlice"
import todosSlice from "./todos/todosSlice"
import notesSlice from "./notes/notesSlice";

export const store = configureStore({
    reducer: {
        // counter: counterReducer
        // todos: todosSlice
        notes: notesSlice
    }
})