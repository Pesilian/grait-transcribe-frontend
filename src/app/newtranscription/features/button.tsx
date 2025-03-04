'use client'
import Link from 'next/link'

interface ButtonProps {
  label: string
  color: string
  textColor: string
  link?: string
  onClick?: () => void
  disabled?: boolean
}

export default function Button({
  label,
  color,
  textColor,
  link,
  onClick,
  disabled,
}: ButtonProps) {
  if (link) {
    return (
      <Link
        href={link}
        className={`bg-${color} text-${textColor} px-4 py-2 rounded`}
      >
        {label}
      </Link>
    )
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`border bg-${color} justify-self-center self-center rounded-lg p-2 w-auto h-auto text-${textColor} px-4 py-2 rounded ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {label}
    </button>
  )
}
