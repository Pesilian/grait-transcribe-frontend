import AudioIcon from './audioIcon'
import PagesButton from './features/pagesButtons'
import TranscriptionHeader from './features/transcriptionHeader'
import Transcription from './features/transcriptionText'

export default function Diarized() {
  return (
    <div className="h-full w-full grid grid-cols-5 gap-4 content-start">
      <AudioIcon />
      <TranscriptionHeader />
      <PagesButton />
      <Transcription />
    </div>
  )
}
