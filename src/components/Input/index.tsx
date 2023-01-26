import { InputHTMLAttributes } from "react"
import style from "./style.module.css"

type IInput = InputHTMLAttributes<HTMLInputElement> & {
  name: string
}

export function Input({ name, ...props }: IInput) {
  return (
    <input
      type="text"
      placeholder="Adicione uma nova tarefa"
      {...props}
      className={`${style.input} `.concat(props.className ?? "")}
      name={name}
      id={name}
    />
  )
}
