'use client'

import { DarkMode } from '@/services/themeService'

interface ContentProps {
  content: string
}

export default function TextBox({ content }: ContentProps) {
  const isDarkMode = DarkMode()
  return (
    <div
      className={`mb-4 p-4 rounded-sm ${isDarkMode ? 'hover:bg-stone-800' : 'hover:bg-stone-100'}`}
    >
      {content}
    </div>
  )
}
