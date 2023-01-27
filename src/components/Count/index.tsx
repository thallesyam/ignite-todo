import { HTMLAttributes, ReactNode } from "react"
import style from "./style.module.css"

type ICount = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode
}

export function Count({ children, ...props }: ICount) {
  return (
    <span
      {...props}
      className={`${style.count} `.concat(props.className ?? "")}
    >
      {children}
    </span>
  )
}
