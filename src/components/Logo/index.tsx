import { ImgHTMLAttributes } from "react"
import { Link } from "react-router-dom"

import LogoImage from "/logo.svg"

type ILogo = ImgHTMLAttributes<HTMLImageElement>

export function Logo(props: ILogo) {
  return (
    <Link to="/">
      <img
        src={LogoImage}
        alt="Logo do ignite todo"
        title="Logo Ignite todo"
        {...props}
      />
    </Link>
  )
}
