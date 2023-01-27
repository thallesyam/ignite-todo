import * as RadixCheckbox from "@radix-ui/react-checkbox"
import { Check } from "phosphor-react"
import style from "./style.module.css"

type ICheckbox = {
  id: string
  isDone: boolean
}

export function Checkbox({ id, isDone }: ICheckbox) {
  return (
    <RadixCheckbox.Root className={style.checkboxRoot} id={id} checked={isDone}>
      <RadixCheckbox.Indicator className={style.checkboxIndicator}>
        <Check size={10} color="#F2F2F2" />
      </RadixCheckbox.Indicator>
    </RadixCheckbox.Root>
  )
}
