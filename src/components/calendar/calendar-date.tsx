type CalendarDateProps = {
  className: string
  day: number
  todos?: number
  onClick: (day: number) => void
}

export function CalendarDate (props: CalendarDateProps) {
  return (
    <li
      className={`
        group relative h-20 w-[calc(100%/7)] flex items-center justify-center text-2xl transition-colors
        ${props.className}
      `}
      style={{ textShadow: '0 3px 4px #33333380' }}
      onClick={() => props.onClick(props.day)}
    >
      {props.day}
      {props.todos ? (
        <span className="absolute bottom-0 text-sm text-white rounded p-0.5 bg-green group-hover:bg-emerald-500 transition-colors">
          {props.todos}
        </span>
      ) : (
        ''
      )}
    </li>
  )
}
