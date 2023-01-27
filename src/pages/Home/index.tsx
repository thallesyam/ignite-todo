import { PlusCircle } from "phosphor-react"

import { Header } from "@/components/Header"
import { Input } from "@/components/Input"
import { Button } from "@/components/Button"
import { Heading } from "@/components/Heading"
import { Count } from "@/components/Count"

import style from "./style.module.css"

export function Home() {
  return (
    <div>
      <Header />

      <section className={style.container}>
        <div className={style.searchContainer}>
          <Input name="search" />

          <Button text="Criar" icon={<PlusCircle size={20} />} />
        </div>

        <header className={style.headingInfoContainer}>
          <div className={style.headingInfoText}>
            <Heading className={`${style.title} ${style.blue}`} isBold>
              Tarefas criadas
            </Heading>
            <Count>5</Count>
          </div>

          <div className={style.headingInfoText}>
            <Heading className={`${style.title} ${style.purple}`} isBold>
              Concluídas
            </Heading>
            <Count>2 de 5</Count>
          </div>
        </header>
      </section>
    </div>
  )
}
