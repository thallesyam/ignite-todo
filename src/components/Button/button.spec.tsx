import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"

import { Button } from "."
import { Check } from "phosphor-react"

describe("<Button />", async () => {
  it("should render type button correctly", async () => {
    render(<Button text="fake-button" type="submit" />)
    const sut = screen.getByRole("button") as HTMLButtonElement
    expect(sut.type).toEqual("submit")
  })

  it("should render text correctly", async () => {
    const text = "fake-name-to-test"
    render(<Button text={text} />)
    const sut = screen.getByRole("button") as HTMLButtonElement
    expect(sut.textContent).toEqual(text)
  })

  it("should render icon correctly", async () => {
    const text = "fake-name-to-test"
    render(<Button text={text} icon={<Check />} />)
    const sut = screen.getByRole("button") as HTMLButtonElement
    expect(sut.children.length).toEqual(2)
  })
})
