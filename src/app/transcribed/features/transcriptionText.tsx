'use client'
import { useEffect, useState } from 'react'
import Segment from './segment'

interface TranscriptionData {
  diarization_results: {
    start: number
    end: number
    speaker: string
    text: string
  }[]
}

export default function TranscriptionText() {
  const [transcription, setTranscription] = useState<TranscriptionData | null>(
    null
  )

  useEffect(() => {
    const storedTranscription = localStorage.getItem('transcription')
    if (storedTranscription) {
      setTranscription(JSON.parse(storedTranscription))
    }
  }, [])

  return (
    <section className="w-full h-auto col-span-5 col-start-2 font-Inter overflow-auto overscroll-contain flex flex-col p-8">
      {transcription ? (
        transcription.diarization_results.map((segment, index) => (
          <Segment
            key={index}
            speakerSmall={segment.speaker.split(' ')[1]} // Tar ut "1" från "SPEAKER 1"
            speaker={segment.speaker}
            time={`${segment.start.toFixed(2)} - ${segment.end.toFixed(2)}`}
            content={segment.text}
          />
        ))
      ) : (
        <p>Laddar transkribering...</p>
      )}
    </section>
  )
}
