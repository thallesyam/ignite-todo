import { describe, it, expect, vi } from "vitest"
import { render, screen, fireEvent } from "@testing-library/react"

import { TodoItem } from "."

type ITodo = {
  id: string
  isDone: boolean
  text: string
}

const todoNotDone = {
  id: "1",
  isDone: false,
  text: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
}

const todoDone = {
  id: "1",
  isDone: true,
  text: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
}

describe("<TodoItem />", async () => {
  it("should render component text correctly", async () => {
    render(
      <TodoItem
        finishTodo={() => {}}
        handleDeleteTodo={() => {}}
        todo={todoNotDone}
      />
    )
    const sut = screen.getByRole("listitem") as HTMLLIElement
    expect(sut).toBeTruthy()
    expect(sut.children).toBeTruthy()
  })

  it("should render empty if send todo null", async () => {
    render(
      <TodoItem
        finishTodo={() => {}}
        handleDeleteTodo={() => {}}
        todo={null as unknown as ITodo}
      />
    )
    const sut = screen.queryByRole("listitem") as HTMLLIElement
    expect(sut).toBeFalsy()
  })

  it("should render component done correctly", async () => {
    render(
      <TodoItem
        finishTodo={() => {}}
        handleDeleteTodo={() => {}}
        todo={todoDone}
      />
    )
    const sut = screen.getByRole("listitem") as HTMLLIElement
    expect(sut).toBeTruthy()
    expect(sut.classList.length).toBe(2)
  })

  it("should render call function correctly value", async () => {
    const handleDeleteTodo = vi.fn().mockImplementation(() => {})

    render(
      <TodoItem
        finishTodo={() => {}}
        handleDeleteTodo={handleDeleteTodo}
        todo={todoDone}
      />
    )
    const sut = screen.getByRole("button") as HTMLButtonElement
    fireEvent.click(sut)
    expect(handleDeleteTodo).toHaveBeenCalledTimes(1)
  })
})
