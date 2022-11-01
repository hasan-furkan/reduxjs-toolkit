import { configureStore } from "@reduxjs/toolkit"
import  counterReducer  from "./counter/counterSlice"
import todosSlice from "./todos/todosSlice"
import notesSlice from "./notes/notesSlice";
import charactersSlice from "./breakingbad/characterSlice";
import contactsSlice from "./contacts/contactsSlice";

export const store = configureStore({
    reducer: {
        // counter: counterReducer
        // todos: todosSlice
        // notes: notesSlice
        // characters: charactersSlice
        contacts: contactsSlice
    }
})