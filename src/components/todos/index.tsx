import { useContext, useState, useEffect } from 'react'
import { CalendarContext, ITodo } from '../../context'
import { TodoForm } from './todo-form'
import { TodoHeader } from './todo-header'
import { TodoItem } from './todo-item'

export function Todos () {
  const { date, todos, setTodos } = useContext(CalendarContext)
  const [filteredTodos, setFilteredTodos] = useState(todos)

  const deleteItem = (deleteTodo: ITodo) => {
    setTodos(todos =>
      todos.filter(todo => todo.description !== deleteTodo.description)
    )
  }

  useEffect(() => {
    setFilteredTodos(
      todos.filter(todo => {
        const dateParts = todo.date.replace(/-0/g, '-').split('-')
        return (
          dateParts[2] === date.getDate().toString() &&
          dateParts[1] === (date.getMonth() + 1).toString() &&
          dateParts[0] === date.getFullYear().toString()
        )
      })
    )
  }, [date, todos])

  return (
    <section className="w-2/5 bg-white">
      <TodoHeader />

      <ul className="flex flex-col gap-y-2 py-1 h-[calc(5rem*6)] overflow-y-auto">
        {filteredTodos.map((todo, index) => (
          <TodoItem key={todo.date + index} todo={todo} onClick={deleteItem} />
        ))}
      </ul>

      <TodoForm />
    </section>
  )
}
