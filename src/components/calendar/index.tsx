import { useEffect, useState } from 'react'
import { useCalendar } from '../../hooks'
import { CalendarDate } from './calendar-date'
import { CalendarHeader } from './calendar-header'
import { CalendarWeekdays } from './calendar-weekdays'

export function Calendar() {
  const { date, setDate, todos } = useCalendar()
  const [prevDays, setPrevDays] = useState<number[]>([])
  const [currentDays, setCurrentDays] = useState<number[]>([])
  const [nextDays, setNextDays] = useState<number[]>([])

  const selectDate = (day: number) => {
    setDate(date => new Date(date.getFullYear(), date.getMonth(), day))
  }

  useEffect(() => {
    const prevMonth = new Date(date.getFullYear(), date.getMonth(), 0)
    const prevMonthLength = prevMonth.getDate()
    const prevMonthLastDayIndex = prevMonth.getDay()
    const prevDaysArray: number[] = []
    for (let i = prevMonthLastDayIndex; i >= 0; i--) {
      prevDaysArray.push(prevMonthLength - i)
    }
    setPrevDays(prevDaysArray)

    const currentMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0)
    const currentMonthLength = currentMonth.getDate()
    const currentDaysArray: number[] = []
    for (let i = 1; i <= currentMonthLength; i++) {
      currentDaysArray.push(i)
    }
    setCurrentDays(currentDaysArray)

    const nextMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0)
    const nextMonthLastDayIndex = nextMonth.getDay()
    const nextDaysLength = 6 - nextMonthLastDayIndex
    const nextDaysArray: number[] = []
    for (let i = 1; i <= nextDaysLength; i++) {
      nextDaysArray.push(i)
    }
    setNextDays(nextDaysArray)
  }, [date])

  return (
    <section
      className="bg-[#f0f0f0] w-3/5 max-w-4xl"
      style={{ boxShadow: '0 0 15px #444' }}
    >
      <CalendarHeader />
      <CalendarWeekdays />

      <ul className="flex flex-wrap px-1">
        {prevDays.map(day => (
          <CalendarDate
            key={day}
            className="opacity-60"
            day={day}
            onClick={() => {}}
          />
        ))}
        {currentDays.map(day => (
          <CalendarDate
            key={day}
            className={`
              cursor-pointer border-2 border-transparent hover:border-[#888] hover:bg-[#ccc]
              ${
                day === new Date().getDate() &&
                date.getMonth() === new Date().getMonth() &&
                date.getFullYear() === new Date().getFullYear()
                  ? 'bg-green text-white hover:border-emerald-500  hover:bg-emerald-500 transition-all'
                  : ''
              }
            `}
            day={day}
            onClick={selectDate}
            todos={
              todos.filter(todo => {
                const dateParts = todo.date.replace(/-0/g, '-').split('-')
                return (
                  dateParts[2] === day.toString() &&
                  dateParts[1] === (date.getMonth() + 1).toString() &&
                  dateParts[0] === date.getFullYear().toString()
                )
              }).length
            }
          />
        ))}
        {nextDays.map(day => (
          <CalendarDate
            key={day}
            className="opacity-60"
            day={day}
            onClick={() => {}}
          />
        ))}
      </ul>
    </section>
  )
}
