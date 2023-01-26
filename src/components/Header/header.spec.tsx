import { BrowserRouter } from "react-router-dom"
import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"

import { Header } from "."

describe("<Header />", async () => {
  it("should render component header correctly", async () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
    const sut = screen.getByRole("img") as HTMLImageElement
    expect(sut).toBeTruthy()
  })
})
