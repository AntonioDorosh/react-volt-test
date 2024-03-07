import React, { FC, ReactElement, useState } from "react"

import styles from "./TodoItem.module.scss"
import { Action } from "@reduxjs/toolkit"
import {Todo} from "../../features/redux/reducers/todo/type";
import {useAppDispatch} from "../../features/redux/hooks/useStore";
import {completedTask, removeTask} from "../../features/redux/reducers/todo/slice";
import TodoModal from "../TodoModal";
import cn from "classnames"


const TodoItem: FC<Todo> = ({ id, title, isCompleted }): ReactElement => {
    const [modal, setModal] = useState(false)
    const dispatch = useAppDispatch()
    const removeTodo = (id: string): Action => dispatch(removeTask(id))
    const toggleCompletedTasks = (id: string): Action =>
        dispatch(completedTask(id))

    return (
        <>
            {modal &&
                <TodoModal id={id} title={title} onClose={() => setModal(false)} />
            }
            <li key={id} className={styles.list__item}>
        <span
            className={cn(styles.list__item__text, {
                [styles.list__item__textactive]: isCompleted,
            })}
            onClick={() => toggleCompletedTasks(id)}>
          {title}
        </span>
                <div className={styles.list__item__button__container}>
                    <input
                        onChange={() => toggleCompletedTasks(id)}
                        className={styles.list__item__input}
                        type="checkbox"
                        checked={isCompleted}
                    />
                    <button
                        className={styles.list__item__button}
                        onClick={() => removeTodo(id)}>
                        Delete
                    </button>
                    <button
                        className={styles.list__item__button}
                        onClick={() => setModal(true)}>
                        Edit
                    </button>
                </div>
            </li>
        </>
    )
}

export default TodoItem
