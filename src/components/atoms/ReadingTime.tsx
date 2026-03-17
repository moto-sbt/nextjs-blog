interface Props {
  minutes: number
}

export default function ReadingTime({ minutes }: Props) {
  return (
    <span className="text-xs font-mono" style={{ color: '#94a3b8' }}>
      {minutes} min read
    </span>
  )
}
