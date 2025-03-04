'use client'
import { useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { LuAudioLines } from 'react-icons/lu'
import Button from './button'

export default function DragAndDrop() {
  const [dragActive, setDragActive] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [files, setFiles] = useState<File[]>([])
  const [uploading, setUploading] = useState<boolean>(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault()
    if (e.target.files) {
      const newFiles = Array.from(e.target.files)
      setFiles((prevState) => {
        const updatedFiles = [...prevState, ...newFiles]
        console.log('Filer att skicka:', updatedFiles)
        return updatedFiles
      })
    }
  }

  function handleDrop(e: React.DragEvent<HTMLFormElement>) {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files) {
      const newFiles = Array.from(e.dataTransfer.files)
      setFiles((prevState) => {
        const updatedFiles = [...prevState, ...newFiles]
        console.log('Filer att skicka:', updatedFiles)
        return updatedFiles
      })
    }
  }

  function handleDragLeave(e: React.DragEvent<HTMLFormElement>) {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
  }

  function handleDragOver(e: React.DragEvent<HTMLFormElement>) {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(true)
  }

  function handleDragEnter(e: React.DragEvent<HTMLFormElement>) {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(true)
  }

  function removeFile(idx: number) {
    setFiles((prevState) => prevState.filter((_, index) => index !== idx))
  }

  function openFileExplorer() {
    if (inputRef.current) {
      inputRef.current.value = ''
      inputRef.current.click()
    }
  }

  const router = useRouter()

  async function uploadFiles() {
    if (files.length === 0) return

    setUploading(true)
    const formData = new FormData()
    files.forEach((file) => {
      formData.append('audio_file', file)
    })

    try {
      const response = await fetch('/api/proxy', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        throw new Error('Uppladdning misslyckades')
      }
      const data = await response.json()
      localStorage.setItem('transcription', JSON.stringify(data))

      router.push('/transcribed')
    } catch (error) {
      console.error('Fel vid uppladdning:', error)
      alert('Fel vid uppladdning av fil.')
    } finally {
      setUploading(false)
    }
  }
  return (
    <section className="flex flex-col justify-self-center self-start w-full">
      <h2 className="text-xs mt-4 font-medium">Ladda upp fil</h2>
      <h3 className="mb-4 text-xs text-stone-400">
        Max 200MB - WAV, MP3, OGG, M4A
      </h3>

      <form
        className={`${
          dragActive ? 'bg-stone-200' : 'bg-stone-100'
        } p-8 w-5/6 h-60 rounded text-center flex flex-col text-center self-center justify-center border border-stone-400 border-dashed mb-8 `}
        onDragEnter={handleDragEnter}
        onSubmit={(e) => e.preventDefault()}
        onDrop={handleDrop}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
      >
        <input
          className="hidden"
          ref={inputRef}
          type="file"
          multiple
          onChange={handleChange}
          accept="audio/*"
        />
        <div onClick={openFileExplorer} className="flex flex-col">
          <p className="mt-4 mb-2 text-xs">Dra och släpp dina filer här</p>
          <LuAudioLines className="self-center" />
          <p className="text-xs mt-2">
            eller klicka för att välja filer på din dator
          </p>
        </div>

        <div className="flex flex-col items-center p-3">
          {files.map((file, idx) => (
            <div key={idx} className="flex flex-row space-x-5 text-xs">
              <span>{file.name}</span>
              <span
                className="text-red-500 cursor-pointer"
                onClick={() => removeFile(idx)}
              >
                remove
              </span>
            </div>
          ))}
        </div>

        {uploading && <div className="mt-2"></div>}
      </form>
      <div className="flex justify-between">
        <Button
          link="/"
          label="Tillbaka"
          color="stone-200"
          textColor="stone-400"
        />
        <Button
          onClick={uploadFiles}
          label={uploading ? 'Laddar upp...' : 'Transkribera'}
          color="stone-950"
          textColor="stone-50"
          disabled={uploading}
        />
      </div>
    </section>
  )
}
