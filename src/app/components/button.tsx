'use client'
import Link from 'next/link'

interface LinkProps {
  link: string
  label: string
}

export default function Button({ link, label }: LinkProps) {
  return (
    <Link
      href={link}
      className="bg-black justify-self-center self-center rounded-lg p-2 w-20 h-20 m-2  "
    >
      <span className="text-white p-4">{label}</span>
    </Link>
  )
}
