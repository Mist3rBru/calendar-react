import { Calendar } from './components/calendar'
import { Todos } from './components/todos'
import { LanguageSwitch } from './components/language-switch'
import { CalendarProvider } from './context/calendar-provider'
import { LanguageProvider } from './context/language-provider'

export function App () {
  return (
    <LanguageProvider>
      <CalendarProvider>
        <main className="flex items-center h-screen w-screen bg-background">
          <LanguageSwitch />
          <div className="flex gap-x-4 justify-between w-11/12 max-w-9xl mt-5 mx-auto">
            <Calendar />
            <Todos />
          </div>
        </main>
      </CalendarProvider>
    </LanguageProvider>
  )
}
