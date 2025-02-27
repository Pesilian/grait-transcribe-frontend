'use client'
import { useRef, useState } from 'react'
import { LuAudioLines } from 'react-icons/lu'

export default function DragAndDrop() {
  const [dragActive, setDragActive] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [files, setFiles] = useState<File[]>([])

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault()
    if (e.target.files) {
      const newFiles = Array.from(e.target.files)
      setFiles((prevState) => [...prevState, ...newFiles])
    }
  }

  function handleDrop(e: React.DragEvent<HTMLFormElement>) {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files) {
      const newFiles = Array.from(e.dataTransfer.files)
      setFiles((prevState) => [...prevState, ...newFiles])
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

  return (
    <div className="flex flex-col justify-self-center self-start w-full">
      <h2 className="text-xs mt-4 font-medium">Ladda upp fil</h2>
      <h3 className="mb-4 text-xs text-stone-400">
        Max 200MB - WAV, MP3, OGG, M4A
      </h3>

      <form
        className={`${
          dragActive ? 'bg-stone-300' : 'bg-stone-200'
        } p-8 w-5/6 h-60 rounded text-center flex flex-col text-center self-center justify-center border-2 border-stone-400 border-dashed mb-8 opacity-50`}
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
      </form>
    </div>
  )
}
