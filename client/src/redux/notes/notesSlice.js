import {createSlice} from "@reduxjs/toolkit";

export const notesSlice = createSlice({
    name: "notes",
    initialState : {
        items: [
            {
                id: 1,
                desc: "note 1"
            },
            {
                id: 2,
                desc: "note 2"
            },
            {
                id: 3,
                desc: "note 3"
            },
        ],

    },
    reducers: {
        addNotes: (state, action) => {
            state.items.push(action.payload)
        },
        removeNotes: (state, action) => {
            const id = action.payload;
            const filtered = state.items.filter((item) => item.id !== id)
            state.items = filtered
        }
    }
})

export const {addNotes, removeNotes} = notesSlice.actions
export default notesSlice.reducer