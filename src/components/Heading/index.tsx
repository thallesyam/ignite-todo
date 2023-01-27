import { HTMLAttributes, ReactNode } from "react"
import { Slot } from "@radix-ui/react-slot"

import style from "./style.module.css"

type IHeading = HTMLAttributes<HTMLParagraphElement> & {
  asChild?: boolean
  isBold?: boolean
  children: ReactNode
}

export function Heading({
  children,
  isBold = false,
  asChild = false,
  ...props
}: IHeading) {
  const Component = asChild ? Slot : "p"
  const titleClass = isBold ? style.title : ""

  return (
    <Component
      {...props}
      className={`${style.text} ${titleClass} `.concat(props.className ?? "")}
    >
      {children}
    </Component>
  )
}
