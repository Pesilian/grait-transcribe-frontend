'use client'
import { DarkMode } from '@/services/themeService'
import { PiSpeakerSimpleHighLight } from 'react-icons/pi'

interface SegmentProps {
  speakerSmall: string
  speaker: string
  time: string
  content: string
}

export default function Segment({
  speakerSmall,
  speaker,
  time,
  content,
}: SegmentProps) {
  const isDarkMode = DarkMode()
  return (
    <div
      className={`mb-4 p-4 w-full h-auto rounded-sm flex hover:ring ${isDarkMode ? 'hover:bg-stone-800 hover:ring-stone-50' : 'hover:bg-white'}`}
    >
      <div
        className={`flex pr-16 pl-4 rounded-r-full ${isDarkMode ? 'bg-stone-600 text-stone-50' : 'bg-stone-200'} items-center h-12 rounded mr-4`}
      >
        <span
          className={` ${isDarkMode ? 'bg-stone-500 text-stone-50' : 'bg-stone-300'} h-10 w-10 text-center p-2 rounded-full mr-2 text-sm`}
        >
          {speakerSmall}
        </span>
        <span className="flex flex-col ">
          <p className="text-nowrap fon-Roboto font-bold text-sm">{speaker}</p>

          <div className="flex">
            <p className="mr-2 text-sm text-blue-400">{time}</p>
            <PiSpeakerSimpleHighLight className="self-center fill-blue-400" />
          </div>
        </span>
      </div>
      <p>{content}</p>
    </div>
  )
}
