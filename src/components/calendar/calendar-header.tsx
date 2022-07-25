import { useContext } from 'react'
import { CalendarContext } from '../../context'
import { useLang } from '../../hooks'

export function CalendarHeader () {
  const { date, setDate } = useContext(CalendarContext)
  const { lang } = useLang()

  const prevMonth = () => {
    setDate(date => new Date(date.getFullYear(), date.getMonth() - 1, 1))
  }

  const resetCalendar = () => {
    setDate(new Date())
  }

  const nextMonth = () => {
    setDate(date => new Date(date.getFullYear(), date.getMonth() + 1, 1))
  }

  return (
    <header
      className="flex gap-1 h-48 bg-green text-center text-white"
      style={{ textShadow: '0 0.3rem 0.5rem rgba(0, 0, 0, 0.5)' }}
    >
      <button
        className="px-3 text-4xl material-icons hover:bg-green-hover transition-colors"
        onClick={prevMonth}
      >
        arrow_back
      </button>
      <button
        className="w-full hover:bg-green-hover transition-colors"
        onClick={resetCalendar}
      >
        <h1 className="mb-4 uppercase text-5xl font-raleway tracking-wide">
          {date.toLocaleDateString(lang, { month: 'long' }).toUpperCase()}
        </h1>
        <p className="text-2xl">
          {new Date().toLocaleDateString(lang, {
            weekday: 'long',
            day: 'numeric',
            month: 'short',
            year: 'numeric'
          })}
        </p>
      </button>
      <button
        className="px-3 text-4xl material-icons hover:bg-green-hover transition-colors"
        onClick={nextMonth}
      >
        arrow_forward
      </button>
    </header>
  )
}
