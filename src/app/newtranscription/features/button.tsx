'use client'
import Link from 'next/link'

interface LinkProps {
  link: string
  label: string
  color: string
  textColor: string
}

export default function Button({ link, label, color, textColor }: LinkProps) {
  return (
    <Link
      href={link}
      className={`border bg-${color} justify-self-center self-center rounded-lg p-2 w-auto h-auto `}
    >
      <span className={`text-${textColor} p-4`}>{label}</span>
    </Link>
  )
}
