import { useState } from 'react'
import { ITodo } from '../../context'

type TodoItemProps = {
  todo: ITodo
  onClick: (todo: ITodo) => void
}

export function TodoItem ({ todo, onClick }: TodoItemProps) {
  const [hover, onHover] = useState(false)

  return (
    <li
      className="relative p-2 bg-zinc-200"
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
    >
      <div className="flex justify-between text-sm">
        {todo.date.split('-').reverse().join('/')}
        <span>
          {todo.timeStart} - {todo.timeEnd}
        </span>
      </div>
      <p>{todo.description}</p>
      <button
        className={`
          absolute right-1 bottom-1 z-20 text-red-500 material-icons
          ${hover ? 'visible opacity-100' : 'invisible opacity-0'}
        `}
        onClick={() => onClick(todo)}
      >
        delete
      </button>
    </li>
  )
}
