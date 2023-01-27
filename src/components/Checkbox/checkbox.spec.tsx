import { describe, it, expect, vi } from "vitest"
import { render, screen, fireEvent } from "@testing-library/react"

import { Checkbox } from "."

describe("<Checkbox />", async () => {
  it("should render call function correctly value", async () => {
    const finishTodo = vi.fn().mockImplementation(() => {})

    render(<Checkbox finishTodo={finishTodo} id={"1"} isDone={false} />)
    const sut = screen.getByRole("checkbox") as HTMLButtonElement
    fireEvent.click(sut)
    expect(finishTodo).toHaveBeenCalledTimes(1)
  })
})
