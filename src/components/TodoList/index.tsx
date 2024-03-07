import React, { FC } from "react"
import TodoItem from "../TodoItem"
import {useAppSelector} from "../../features/redux/hooks/useStore";
import {selectTodo} from "../../features/redux/reducers/todo/slice";
import {selectFilter} from "../../features/redux/reducers/filter/slice";
import {sortingTodos} from "../../utils/sortingTodos";

const TodoList: FC = () => {
    const tasks = useAppSelector(selectTodo)
    const sort = useAppSelector(selectFilter)
    const filteredTask = sortingTodos(tasks, sort)

    return (
        <ul>
            {filteredTask.map((todo) =>
                <TodoItem key={todo.id} {...todo} />
            )}
        </ul>
    )
}

export default TodoList
