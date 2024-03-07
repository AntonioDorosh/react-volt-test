import React from 'react';
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoSort from "./components/TodoSort";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";
import {useAppSelector} from "./features/redux/hooks/useStore";
import {selectCategory, selectTodo} from "./features/redux/reducers/todo/slice";

const App = () => {
    const tasks = useAppSelector(selectTodo)
    const currentCategory = useAppSelector(selectCategory)
    return (
        <>
            <TodoHeader />
            <TodoInput />
            {!!tasks.length && <TodoSort />}
            <TodoList />
            {currentCategory === "All" && !!tasks.length && <TodoFooter />}
        </>
    );
};

export default App;
