import Footer from '../components/footer'
import AudioIcon from './features/audioIcon'
import PagesButton from './features/pagesButtons'
import TranscriptionHeader from './features/transcriptionHeader'
import TranscriptionSegment from './features/transcriptionText'

export default function Diarized() {
  return (
    <div className="h-full w-full grid grid-cols-7 gap-4 content-start">
      <AudioIcon />
      <TranscriptionHeader />
      <PagesButton />
      <TranscriptionSegment />
      <Footer />
    </div>
  )
}
