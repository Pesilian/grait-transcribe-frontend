'use client'

import { DarkMode } from '@/services/themeService'

export default function Footer() {
  const isDarkMode = DarkMode()

  return (
    <footer
      className={`absolute bottom-0 left-0 w-full h-40 ${isDarkMode ? 'bg-gradient-bl' : 'bg-gradient'}`}
    ></footer>
  )
}
