import React, {ChangeEvent, FC, useState} from "react"
import styles from "./TodoModal.module.scss"
import {useAppDispatch} from "../../features/redux/hooks/useStore";
import {editTask} from "../../features/redux/reducers/todo/slice";

type TodoModalProps = {
    title: string
    id: string
    onClose: () => void
}

const TodoModal: FC<TodoModalProps> = ({ id, onClose, title }) => {
    const dispatch = useAppDispatch()
    const [editTodoValue, setEditTodoValue] = useState(title)

    const handleUpdateTodo = (newTitle: string): void => {
        if (newTitle.length < 3) {
            alert("You need at least 3 letter to edit some task")
            return
        }

        dispatch(
            editTask({
                id,
                newTitle,
            }),
        )
        onClose()
    }

    return (
        <div className={styles.modal}>
            <input
                className={styles.modal__input}
                type="text"
                value={editTodoValue}
                onChange={(e) => setEditTodoValue(e.target.value)}
                placeholder={"Change your task here..."}
            />
            <button
                onClick={() => handleUpdateTodo(editTodoValue)}
                className={styles.modal__button}>
                save
            </button>
            <button className={styles.modal__button___cancel} onClick={onClose}>
                cancel
            </button>
        </div>
    )
}

export default TodoModal
