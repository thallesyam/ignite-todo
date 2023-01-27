import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"

import { Heading } from "."

describe("<Heading />", async () => {
  it("should render component text correctly", async () => {
    render(<Heading>fake-text</Heading>)
    const sut = screen.getByText("fake-text") as HTMLSpanElement
    expect(sut).toBeTruthy
  })

  it("should render component props correctly", async () => {
    render(
      <Heading asChild isBold>
        <h1>fake-text</h1>
      </Heading>
    )
    const sut = screen.getByRole("heading") as HTMLSpanElement
    expect(sut).toBeTruthy()
    expect(sut.classList.length).toEqual(2)
  })
})
