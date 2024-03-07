import {configureStore} from "@reduxjs/toolkit";
import {todoReducer} from "../reducers/todo/slice";
import {filterReducer} from "../reducers/filter/slice";

export const store = configureStore({
    reducer: {
        todo: todoReducer,
        filter: filterReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
