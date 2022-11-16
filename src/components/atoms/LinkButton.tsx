import Link from 'next/link';

type Props = {
  href: string
  text: string
}

const LinkButton = ({
  href,
  text
}: Props) => {
  return (
    <Link href={href}>
      <button type="button" className="text-blue hover:text-white border border-blue hover:bg-blue focus:ring-4 focus:outline-none focus:ring-blue font-medium rounded py-2 px-3 text-xs text-center mr-2 mb-2">
          {text}
      </button>
    </Link>
)
}

export default LinkButton