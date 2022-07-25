import { FormEvent, useContext, useEffect, useState } from 'react'
import { AppLanguage, CalendarContext } from '../../context'
import { useLang } from '../../hooks'

export function TodoForm() {
  const { date: appDate, setTodos } = useContext(CalendarContext)
  const { lang } = useLang()
  const [description, setDescription] = useState('')
  const [timeStart, setTimeStart] = useState('')
  const [timeEnd, setTimeEnd] = useState('')
  const [date, setDate] = useState('')

  // eslint-disable-next-line no-unused-vars
  const submit: { [key in AppLanguage]: string } = {
    en: 'Send',
    es: 'Enviar',
    pt: 'Enviar',
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    setTodos(todos => [
      ...todos,
      {
        date,
        description,
        timeEnd,
        timeStart,
      },
    ])
  }

  useEffect(() => {
    setDate(appDate.toLocaleDateString('pt').split('/').reverse().join('-'))
  }, [appDate])

  return (
    <form
      className="border-t border-zinc-300 bg-zinc-100 p-2"
      onSubmit={handleSubmit}
    >
      <div className="flex border border-zinc-300">
        <textarea
          className="w-full p-2 border-r border-zinc-300 z-10 focus:outline-emerald-400"
          style={{ resize: 'none' }}
          value={description}
          onChange={event => setDescription(event.target.value)}
          required
        />
        <div className="flex flex-col">
          <input
            className="focus:outline-emerald-400"
            type="date"
            value={date}
            onChange={event => setDate(event.target.value)}
            required
          />
          <input
            className="focus:outline-emerald-400"
            type="time"
            value={timeStart}
            onChange={event => setTimeStart(event.target.value)}
            required
          />
          <input
            className="focus:outline-emerald-400"
            type="time"
            value={timeEnd}
            onChange={event => setTimeEnd(event.target.value)}
            required
          />
          <button
            className="border border-zinc-300 bg-zinc-100 hover:border-emerald-400 hover:text-emerald-400 font-semibold"
            type="submit"
          >
            {submit[lang]}
          </button>
        </div>
      </div>
    </form>
  )
}
