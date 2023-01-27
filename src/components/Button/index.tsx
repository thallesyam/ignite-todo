import { ButtonHTMLAttributes } from "react"
import style from "./style.module.css"

type IButton = ButtonHTMLAttributes<HTMLButtonElement> & {
  text?: string
  icon?: JSX.Element
}

export function Button({ text, icon, ...props }: IButton) {
  return (
    <button
      type="button"
      {...props}
      className={`${style.button} `.concat(props.className ?? "")}
    >
      {text && <span>{text}</span>}
      {icon && icon}
    </button>
  )
}
