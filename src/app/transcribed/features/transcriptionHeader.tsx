'use client'

import TranscriptionInfo from './transcriptionInfo'

export default function TranscriptionHeader() {
  return (
    <div className="col-span-2 col-start-2 flex flex-col h-20">
      <h2 className="font-black text-4xl font-Roboto">
        Transcription file title
      </h2>
      <div className="flex">
        <TranscriptionInfo label="2 talare" />
        <TranscriptionInfo label="Svenska" />
        <TranscriptionInfo label="498 ord" />
        <TranscriptionInfo label="12 min" />
      </div>
    </div>
  )
}
