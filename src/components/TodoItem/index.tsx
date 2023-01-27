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
}

export function TodoItem({ todo }: ITodoItem) {
  const isDoneClassname = todo?.isDone ? style.done : ""

  if (!todo) {
    return null
  }

  return (
    <li className={`${style.todo} ${isDoneClassname}`}>
      <Checkbox id={todo.id} isDone={todo.isDone} />
      <Heading>{todo.text}</Heading>

      <button className={style.trash}>
        <Trash size={20} />
      </button>
    </li>
  )
}
