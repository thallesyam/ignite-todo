import { useState, useCallback, ChangeEvent, useEffect } from "react"
import { PlusCircle } from "phosphor-react"

import { Header } from "@/components/Header"
import { Input } from "@/components/Input"
import { Button } from "@/components/Button"
import { Heading } from "@/components/Heading"
import { Count } from "@/components/Count"
import { TodoItem } from "@/components/TodoItem"

import style from "./style.module.css"
import { Empty } from "@/Empty"

type ITodo = {
  id: string
  isDone: boolean
  text: string
}

export function Home() {
  const [todoText, setTodoText] = useState("")
  const [todos, setTodos] = useState<ITodo[]>([])
  const finishTodos = todos.filter((todo) => todo.isDone).length

  useEffect(() => {
    if (!window) return

    const initialTodos = localStorage.getItem("@igniteTodo:todos")
    if (!initialTodos) return
    setTodos(JSON.parse(initialTodos))
  }, [])

  function finishTodo(id: string) {
    const todo = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isDone: !todo.isDone,
        }
      }

      return todo
    })

    setTodos(todo)
    localStorage.setItem("@igniteTodo:todos", JSON.stringify(todo))
  }

  function handleChangeTodo(event: ChangeEvent<HTMLInputElement>) {
    setTodoText(event.target.value)
  }

  function handleAddNewTodo() {
    const todo: ITodo = {
      id: String(todos.length + 1),
      isDone: false,
      text: todoText,
    }

    setTodos((prevTodos) => {
      localStorage.setItem(
        "@igniteTodo:todos",
        JSON.stringify([...prevTodos, todo])
      )
      return [...prevTodos, todo]
    })
  }

  function handleDeleteTodo(id: string) {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
    localStorage.setItem("@igniteTodo:todos", JSON.stringify(newTodos))
  }

  return (
    <div>
      <Header />

      <section className={style.container}>
        <div className={style.searchContainer}>
          <Input
            name="search"
            value={todoText}
            onChange={handleChangeTodo}
            required
          />

          <Button
            text="Criar"
            icon={<PlusCircle size={20} />}
            disabled={!todoText}
            onClick={handleAddNewTodo}
          />
        </div>

        <header className={style.headingInfoContainer}>
          <div className={style.headingInfoText}>
            <Heading className={`${style.title} ${style.blue}`} isBold>
              Tarefas criadas
            </Heading>
            <Count>{todos.length}</Count>
          </div>

          <div className={style.headingInfoText}>
            <Heading className={`${style.title} ${style.purple}`} isBold>
              Concluídas
            </Heading>
            <Count>
              {finishTodos} de {todos.length}
            </Count>
          </div>
        </header>

        <main>
          {todos.length === 0 ? (
            <Empty />
          ) : (
            <>
              {todos
                .sort((x, y) => Number(x.isDone) - Number(y.isDone))
                .map((todo) => (
                  <TodoItem
                    todo={todo}
                    finishTodo={finishTodo}
                    handleDeleteTodo={handleDeleteTodo}
                    key={todo.id}
                  />
                ))}
            </>
          )}
        </main>
      </section>
    </div>
  )
}
