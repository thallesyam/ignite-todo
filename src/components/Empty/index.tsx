import { ClipboardText } from "phosphor-react"
import style from "./style.module.css"

export function Empty() {
  return (
    <section className={style.empty}>
      <ClipboardText size={56} color={"#808080"} />

      <strong>Você ainda não tem tarefas cadastradas</strong>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </section>
  )
}
