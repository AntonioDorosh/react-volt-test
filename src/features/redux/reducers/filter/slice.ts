import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import {FilterState, TSort} from "./type";

const initialState: FilterState = {
    sort: {
        sortKey: "All",
        sortProperty: "All",
    },
}

const filterSlice = createSlice({
    name: "filter",
    initialState,
    selectors: {
        selectFilter: (state) => state.sort,
    },
    reducers: {
        setSort: (state, action: PayloadAction<TSort>) => {
            state.sort = action.payload
        },
    },
})

export const { setSort } = filterSlice.actions
export const selectFilter = filterSlice.selectors.selectFilter

export const filterReducer = filterSlice.reducer
