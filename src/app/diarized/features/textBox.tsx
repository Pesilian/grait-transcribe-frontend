'use client'

interface ContentProps {
  content: string
}

export default function TextBox({ content }: ContentProps) {
  return <div className="mb-4 p-4 rounded-sm hover:bg-stone-100">{content}</div>
}
