import { describe, it, expect } from "vitest"
import { render } from "@testing-library/react"

import { Input } from "."

describe("<Input />", async () => {
  it("should render type input correctly", async () => {
    const { container } = render(<Input type="number" name="fake-input" />)
    const sut = container.querySelector("#fake-input") as HTMLInputElement
    expect(sut.type).toEqual("number")
  })

  it("should render type input correctly", async () => {
    const name = "fake-name-to-test"
    const { container } = render(<Input name={name} />)
    const sut = container.querySelector(`#${name}`) as HTMLInputElement
    expect(sut.name).toEqual(name)
    expect(sut.id).toEqual(name)
  })
})
