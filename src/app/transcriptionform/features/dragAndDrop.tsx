'use client'
import { LuAudioLines } from 'react-icons/lu'

export default function DragAndDrop() {
  return (
    <div>
      <h2>Ladda upp fil</h2>
      <h3>Max 200MB- WAV, MP3, OGG, M4A</h3>
      <form>
        <input />
        <p>Dra och släpp dina filer här</p>
        <LuAudioLines />
        <p>eller klicka för att väla dina filer på datorn</p>
      </form>
    </div>
  )
}
