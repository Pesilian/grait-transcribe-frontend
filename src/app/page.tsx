import Button from './components/button'
import Hero from './components/Hero'

export default function Home() {
  return (
    <div className="h-full w-full grid grid-cols-2">
      <Hero />
      <Button link="/transcriptionform" label="Ny transkription" />
    </div>
  )
}
