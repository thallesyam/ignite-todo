import { BrowserRouter } from "react-router-dom"
import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { faker } from "@faker-js/faker"

import { Logo } from "."

describe("<Logo />", async () => {
  it("should render src image correctly", async () => {
    const src = faker.image.imageUrl()
    render(
      <BrowserRouter>
        <Logo src={src} />
      </BrowserRouter>
    )
    const sut = screen.getByRole("img") as HTMLImageElement
    expect(sut.src).toEqual(src)
  })

  it("should render alt image correctly", async () => {
    const alt = faker.lorem.sentence()
    render(
      <BrowserRouter>
        <Logo alt={alt} />
      </BrowserRouter>
    )
    const sut = screen.getByRole("img") as HTMLImageElement
    expect(sut.alt).toEqual(alt)
  })

  it("should render other props image correctly", async () => {
    render(
      <BrowserRouter>
        <Logo className="fake-class" />
      </BrowserRouter>
    )
    const sut = screen.getByRole("img") as HTMLImageElement
    expect(sut.className).toEqual("fake-class")
  })
})
