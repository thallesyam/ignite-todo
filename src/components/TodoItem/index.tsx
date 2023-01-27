import { Trash } from "phosphor-react"

import { Heading } from "@/components/Heading"
import { Checkbox } from "@/components/Checkbox"

import style from "./style.module.css"

type ITodoItem = {
  todo: {
    id: string
    text: string
    isDone: boolean
  }
  finishTodo: (id: string) => void
  handleDeleteTodo: (id: string) => void
}

export function TodoItem({ todo, finishTodo, handleDeleteTodo }: ITodoItem) {
  const isDoneClassname = todo?.isDone ? style.done : ""

  if (!todo) {
    return null
  }

  return (
    <li className={`${style.todo} ${isDoneClassname}`}>
      <Checkbox id={todo.id} isDone={todo.isDone} finishTodo={finishTodo} />
      <Heading>{todo.text}</Heading>

      <button className={style.trash} onClick={() => handleDeleteTodo(todo.id)}>
        <Trash size={20} />
      </button>
    </li>
  )
}
