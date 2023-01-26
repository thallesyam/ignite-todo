import { PlusCircle } from "phosphor-react"

import { Button } from "@/components/Button"
import { Header } from "@/components/Header"
import { Input } from "@/components/Input"

import style from "./style.module.css"

export function Home() {
  return (
    <div>
      <Header />

      <div className={style.searchContainer}>
        <Input name="search" />

        <Button text="Criar" icon={<PlusCircle size={20} />} />
      </div>
    </div>
  )
}
