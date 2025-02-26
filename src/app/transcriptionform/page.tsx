import Form from './features/form'
import Hero from '../components/Hero'

export default function TranscriptionForm() {
  return (
    <div className="h-full w-full grid grid-cols-2">
      <Hero />
      <Form />
    </div>
  )
}
