import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const getTodosAsync = createAsyncThunk("/todos/getTodosAsync", async () => {
    const res = await axios.get("http://localhost:7050/todos");
    return res.data
})

export const addTodosAsync = createAsyncThunk("/todos/addTodosAsync", async (data) => {
    const res = await axios.post("http://localhost:7050/todos", data)
    return res.data
 })

export const toggleTodoAsync = createAsyncThunk(
    "todos/toggleTodoAsync",
    async ({ id, data }) => {
        const res = await axios.patch(
            `http://localhost:7050/todos/${id}`,
            data
        );
        return res.data;
    }
);

export const removeItemAsync = createAsyncThunk("/todos/removeItemAsync", async (id) => {
    await axios.delete(`http://localhost:7050/todos/${id}`)
    return id
})

export const todosSlice = createSlice({
    name: "todos",
    initialState: {
        items: [        ],
        isLoading: false,
        errors: null,
        activeFilter: 'all',
    },
    reducers: {
        // toggle: (state, action) => {
        //     const {id} = action.payload
        //     const item = state.items.find(item => item.id === id)
        //
        //     item.completed = !item.completed
        // },
        destroy: (state, action) => {
            const id= action.payload
            const filtered = state.items.filter((item) => item.id !== id)
            state.items = filtered
        },
        changeActiveFilter: (state, action) => {
            state.activeFilter = action.payload
        },
        clearCompleted: state => {
            const filtered = state.items.filter((item) => item.completed === false)
            state.items = filtered
            // state.items = state.items.filter((item) => item.completed === false)
        }
    },
    extraReducers: {
        // get todos
        [getTodosAsync.pending] : (state, action) => {
            state.isLoading = true
        },
        [getTodosAsync.fulfilled] : (state, action) => {
            state.items = action.payload
            state.isLoading = false
        },
        [getTodosAsync.rejected] : (state, action) => {
            state.isLoading = false
            state.errors = action.errors.message
         },
        // add todos
        [addTodosAsync.fulfilled]: (state, action) => {
            state.items.push(action.payload)
        },
        // toggle todo
        [toggleTodoAsync.fulfilled]: (state, action) => {
            const { id, completed } = action.payload;
            const index = state.items.findIndex((item) => item.id === id);
            state.items[index].completed = completed;
        },
        [removeItemAsync.fulfilled] : (state, action) => {
            const id = action.payload;
            const filtered = state.items.filter((item) => item.id !== id)
            state.items = filtered
        }

    }
});

export const selectTodos = (state) => state.todos.items

export const selectFilteredTodos = (state) => {
    if(state.todos.activeFilter === "all") {
       return state.todos.items
    }

    return state.todos.items.filter((todo) => state.todos.activeFilter === "active" ? todo.completed === false : todo.completed === true)
}

export const { destroy, changeActiveFilter, clearCompleted} = todosSlice.actions

export default todosSlice.reducer;