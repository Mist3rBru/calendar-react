import { memo } from 'react'
import { useLang } from '../../hooks'

function CalendarWeekdaysComponent () {
  const { lang } = useLang()
  const weekdays = new Array(7)
  const date = new Date()

  for (let i = 1; i <= 7; i++) {
    date.setDate(i)
    weekdays[date.getDay()] = date
      .toLocaleDateString(lang, { weekday: 'short' })
      .replace(/\w/i, letter => letter.toUpperCase())
      .replace(/\./g, '')
  }

  return (
    <ul className="flex items-center py-4 px-1">
      {weekdays.map(weekday => (
        <li
          key={weekday}
          className="flex items-center justify-center w-[calc(100%/7)] text-2xl font-semibold"
          style={{ textShadow: '0 0.3rem 0.5rem rgba(0, 0, 0, 0.5' }}
        >
          {weekday}
        </li>
      ))}
    </ul>
  )
}

export const CalendarWeekdays = memo(CalendarWeekdaysComponent)
