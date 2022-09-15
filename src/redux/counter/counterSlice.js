import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 5
    },
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        }
        ,incrementByAmunt: (state, action) => {
            state.value += Number(action.payload)
        }
    }
})

export const {increment, decrement, incrementByAmunt} = counterSlice.actions
export default counterSlice.reducer;