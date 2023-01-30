import { describe, it, expect } from "vitest"
import { render } from "@testing-library/react"

import { Empty } from "."

describe("<Logo />", async () => {
  it("should render text component correctly", async () => {
    const { container } = render(<Empty />)

    const strong = container.querySelector("strong")
    const paragraph = container.querySelector("p")
    const svg = container.querySelector("svg")
    expect(svg).toBeTruthy()
    expect(strong).toBeTruthy()
    expect(paragraph).toBeTruthy()
  })
})
