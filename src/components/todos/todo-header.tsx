import { useCalendar, useLang } from '../../hooks'

export function TodoHeader () {
  const { lang } = useLang()
  const { date } = useCalendar()

  return (
    <header
      className="flex flex-col items-center justify-center h-48 bg-green text-center text-white"
      style={{ textShadow: '0 0.3rem 0.5rem rgba(0, 0, 0, 0.5)' }}
    >
      <h1 className="mb-4 uppercase text-5xl font-raleway tracking-wide">
        {date.toLocaleDateString(lang, { month: 'long' }).toUpperCase()}
      </h1>
      <p className="text-2xl">
        {date.toLocaleDateString(lang, {
          weekday: 'long',
          day: 'numeric',
          month: 'short',
          year: 'numeric'
        })}
      </p>
    </header>
  )
}
