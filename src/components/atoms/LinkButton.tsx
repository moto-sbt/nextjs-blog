import Link from 'next/link'

type Props = {
  href: string
  text: string
}

const LinkButton = ({ href, text }: Props) => {
  return (
    <Link href={href}>
      <a
        className="inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-lg transition-all"
        style={{
          color: '#0891b2',
          background: '#f0f9ff',
          border: '1px solid #bae6fd',
        }}
      >
        {text}
      </a>
    </Link>
  )
}

export default LinkButton
