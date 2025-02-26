'use client'

import { DarkMode } from '@/services/themeService'

interface LabelProps {
  label: string
}

export default function TranscriptionInfo({ label }: LabelProps) {
  const isDarkMode = DarkMode()
  return (
    <div
      className={`${isDarkMode ? 'bg-stone-600 text-stone-50' : 'bg-stone-300'} mt-4 mr-2 rounded-sm shadow-sm w-20 text-center font-Inter`}
    >
      {label}
    </div>
  )
}
