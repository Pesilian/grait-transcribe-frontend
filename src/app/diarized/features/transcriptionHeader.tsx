'use client'

import { DarkMode } from '@/services/themeService'
import { LuAudioLines } from 'react-icons/lu'
import PagesButton from './pagesButtons'

export default function TranscriptionHeader() {
  const isDarkMode = DarkMode()
  return (
    <div className=" w-5/6 self-end flex">
      <div className="w-14 h-14 border-2 border-stone-950 bg-stone-950 rounded-md flex justify-center items-center">
        <LuAudioLines className={`w-8 h-8 ${isDarkMode ? '' : 'invert'}`} />
      </div>
      <h2 className="font-black text-4xl">Transcription file title</h2>
      <PagesButton />
    </div>
  )
}
