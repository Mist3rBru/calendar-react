import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState
} from 'react'
import { getStorage, setStorage } from '../cache/local-storage'

export interface ITodo {
  date: string
  timeStart: string
  timeEnd: string
  description: string
}

interface ICalendarContext {
  date: Date
  setDate: Dispatch<SetStateAction<Date>>
  todos: ITodo[]
  setTodos: Dispatch<SetStateAction<ITodo[]>>
}

export const CalendarContext = createContext({} as ICalendarContext)

const mock: ITodo[] = new Array(3).fill('').map((d, i) => {
  const date = new Date()
  return {
    date: date.toLocaleDateString('pt').split('/').reverse().join('-'),
    description: `test${i + 1}`,
    timeStart: `${date.getHours()}:${date.getMinutes()}`,
    timeEnd: `${date.getHours()}:${date.getMinutes() + 5}`
  }
})

export function CalendarProvider ({ children }: any) {
  const [date, setDate] = useState(new Date())
  const [todos, setTodos] = useState(
    getStorage<{ todos: ITodo[] }>('todos')?.todos ||
    mock
  )

  useEffect(() => {
    setStorage('todos', { todos })
  }, [todos])

  return (
    <CalendarContext.Provider
      value={{
        setDate,
        date,
        setTodos,
        todos
      }}
    >
      {children}
    </CalendarContext.Provider>
  )
}
