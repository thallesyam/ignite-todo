import { Header } from "@/components/Header"
import { Input } from "@/components/Input"

import style from "./style.module.css"

export function Home() {
  return (
    <div>
      <Header />

      <div className={style.searchContainer}>
        <Input />
      </div>
    </div>
  )
}
