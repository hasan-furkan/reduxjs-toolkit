import {createSlice, createEntityAdapter} from "@reduxjs/toolkit";

export const contactAdapter = createEntityAdapter()

const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactAdapter.getInitialState(),
    reducers: {
        addContact :contactAdapter.addOne,
    }
})

export default contactsSlice.reducer

export const {addContact} = contactsSlice.actions