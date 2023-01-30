import * as RadixCheckbox from "@radix-ui/react-checkbox"
import { Check } from "phosphor-react"
import style from "./style.module.css"

type ICheckbox = {
  id: string
  isDone: boolean
  finishTodo: (id: string) => void
}

export function Checkbox({ id, isDone, finishTodo }: ICheckbox) {
  return (
    <RadixCheckbox.Root
      className={style.checkboxRoot}
      id={id}
      checked={isDone}
      onClick={() => finishTodo(id)}
    >
      <RadixCheckbox.Indicator className={style.checkboxIndicator}>
        <Check size={10} color="#F2F2F2" />
      </RadixCheckbox.Indicator>
    </RadixCheckbox.Root>
  )
}
