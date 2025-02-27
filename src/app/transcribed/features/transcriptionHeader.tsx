'use client'

import TranscriptionIcons from './transcriptionIcons'

export default function TranscriptionHeader() {
  return (
    <div className="col-span-4 col-start-2 flex flex-col h-20">
      <h2 className="text-4xl font-Roboto font-bold tracking-wide">
        Transcription file title
      </h2>
      <div className="flex">
        <TranscriptionIcons label="2 talare" />
        <TranscriptionIcons label="Svenska" />
        <TranscriptionIcons label="498 ord" />
        <TranscriptionIcons label="12 min" />
      </div>
    </div>
  )
}
