'use client'

import { DarkMode } from '@/services/themeService'

interface LabelProps {
  label: string
}

export default function TranscriptionIcons({ label }: LabelProps) {
  const isDarkMode = DarkMode()
  return (
    <figure
      className={`${isDarkMode ? 'bg-stone-600 text-stone-50' : 'bg-stone-300'} mt-4 mr-2 rounded-sm shadow-sm text-center text-sm font-Inter`}
    >
      {label}
    </figure>
  )
}
