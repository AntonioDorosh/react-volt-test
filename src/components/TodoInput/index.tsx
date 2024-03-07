import React, { ChangeEvent, FC, FormEvent, useEffect, useState } from "react"
import styles from "./TodoInput.module.scss"
import {useDebounce} from "../../hooks/useDebouce";
import {useAppDispatch} from "../../features/redux/hooks/useStore";
import {Todo} from "../../features/redux/reducers/todo/type";
import {addTask} from "../../features/redux/reducers/todo/slice";

const TodoInput: FC = () => {
    const [inputTaskValue, setInputTaskValue] = useState("")
    const debounceInputValue = useDebounce(inputTaskValue, 500)
    const dispatch = useAppDispatch()

    useEffect(() => {
        setInputTaskValue(debounceInputValue)
    }, [debounceInputValue])

    const addTodo = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault()

        if (inputTaskValue.length < 3 || inputTaskValue.trim() === "") {
            alert("You need at least 3 letter to add some task")
            return
        }

        const newTask: Todo = {
            id: crypto.randomUUID(),
            title: inputTaskValue,
            isCompleted: false,
        }

        dispatch(addTask(newTask))
        setInputTaskValue("")
    }

    const inputTaskValueHandler = (event: ChangeEvent<HTMLInputElement>): void =>
        setInputTaskValue(event.target.value)

    return (
        <form className={styles.form} onSubmit={addTodo}>
            <input
                value={inputTaskValue}
                onChange={inputTaskValueHandler}
                className={styles.form__input}
                type="text"
                placeholder={"Enter your task here..."}
            />
            <button className={styles.form__button} type="submit">
                Add
            </button>
        </form>
    )
}

export default TodoInput
