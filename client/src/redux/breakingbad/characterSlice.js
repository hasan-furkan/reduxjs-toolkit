import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const char_limit = 12
export const fetchCharacters = createAsyncThunk("/characters/getCharacters", async (page) =>{
    const res = await axios.get(`${process.env.REACT_APP_BASE_API_ENDPOINT}/characters?limit=${char_limit}&offset=${
        page * char_limit
    }`)
    return res.data
})

export const charactersSlice = createSlice({
    name: "characters",
    initialState: {
        items: [],
        isLoading: false,
        error : null,
        page: 0,
        hasNextPage: true
    },
    reducers: {
    },
    extraReducers: {
        [fetchCharacters.pending] : (state, action) => {
            state.isLoading = true
        },
        [fetchCharacters.fulfilled]: (state,action) => {
            state.items = [...state.items, ...action.payload]
            state.isLoading = false
            state.page += 1;

            if(action.payload.length < 12){
                state.hasNextPage = false
            }
         },
        [fetchCharacters.rejected] : (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        }
    }
})

export default charactersSlice.reducer