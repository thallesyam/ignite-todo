import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"

import { Count } from "."

describe("<Count />", async () => {
  it("should render component text correctly", async () => {
    render(<Count>5</Count>)
    const sut = screen.getByText("5") as HTMLSpanElement
    expect(sut).toBeTruthy
  })
})
