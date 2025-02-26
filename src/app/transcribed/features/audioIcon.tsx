'use client'
import { DarkMode } from '@/services/themeService'

import { LuAudioWaveform } from 'react-icons/lu'

export default function AudioIcon() {
  const isDarkMode = DarkMode()

  return (
    <div className="w-14 h-14 self-start justify-self-end border-2 border-stone-950 bg-stone-950 rounded-md flex justify-center items-center">
      <LuAudioWaveform className={`w-6 h-6 ${isDarkMode ? '' : 'invert'}`} />
    </div>
  )
}
