import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import {Todo, TodoState} from "./type";

export const initialState: TodoState = {
    todos: [],
    currentCategory: "All",
    countCompletedTodo: 0,
    countUncompletedTodo: 0,
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    selectors: {
        selectTodo: (state) => state.todos,
        selectCategory: (state) => state.currentCategory,
        selectUnCompletedTodo: (state) =>
            state.todos.filter((todo) => !todo.isCompleted).length,
        selectCompletedTodoCount: (state) =>
            state.todos.filter((todo) => todo.isCompleted).length,
    },
    reducers: {
        addTask: (state, action: PayloadAction<Todo>) => {
            state.todos.push(action.payload)
        },
        removeTask: (state, action: PayloadAction<string>) => {
            const todo = state.todos
            state.todos = todo.filter((todo) => todo.id !== action.payload)
        },
        completedTask: (state, action: PayloadAction<string>) => {
            state.todos.forEach((todo) => {
                if (todo.id === action.payload) {
                    todo.isCompleted = !todo.isCompleted
                }
            })
        },
        editTask: (
            state,
            action: PayloadAction<{
                id: string | null
                newTitle: string
            }>,
        ) => {
            const todo = state.todos
            state.todos = todo.map((todo) => {
                if (todo.id === action.payload.id) {
                    todo.title = action.payload.newTitle
                }
                return todo
            })
        },
        setCategory: (state, action: PayloadAction<string>) => {
            state.currentCategory = action.payload
        },
    },
})

export const {
    selectTodo,
    selectCategory,
    selectUnCompletedTodo,
    selectCompletedTodoCount,
} = todoSlice.selectors
export const { addTask, removeTask, completedTask, editTask, setCategory } =
    todoSlice.actions
export const todoReducer = todoSlice.reducer
