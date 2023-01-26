import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"

import { Button } from "."

describe("<Button />", async () => {
  it("should render type button correctly", async () => {
    render(<Button text="fake-button" type="submit" />)
    const sut = screen.getByRole("button") as HTMLButtonElement
    expect(sut.type).toEqual("submit")
  })

  it("should render type input correctly", async () => {
    const text = "fake-name-to-test"
    render(<Button text={text} />)
    const sut = screen.getByRole("button") as HTMLButtonElement
    expect(sut.textContent).toEqual(text)
  })
})
