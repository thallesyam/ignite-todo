import { Logo } from "@/components/Logo"

import style from "./style.module.css"

export function Header() {
  return (
    <header className={style.header}>
      <Logo />
    </header>
  )
}
