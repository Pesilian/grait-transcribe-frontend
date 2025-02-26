'use client'
import { useState } from 'react'
import DragAndDrop from './dragAndDrop'

export default function Form() {
  const [selectNumber, setSelectNumber] = useState<number | null>(null)
  const [selectLanguage, setSelectLanguage] = useState<string | null>(null)

  return (
    <div className="flex flex-col justify-self-center self-center bg-white rounded h-auto w-80 flex shadow-lg">
      <h2>Inställningar</h2>
      <h3>Konfigurera din transkription</h3>
      <form className="flex flex-col">
        <label>Språk</label>
        <select
          id="languageSelect"
          value={selectLanguage || ''}
          onChange={(e) => setSelectLanguage(e.target.value)}
          className="border-2 border-black rounded-lg p-2 m-2"
        >
          <option value="" disabled>
            Välj...
          </option>
          <option value="Svenska">Svenska</option>
          <option value="Engelska">Engelska</option>
          <option value="">Automatiskt</option>
        </select>
        <label>Antal talare</label>
        <select
          id="numberSelect"
          value={selectNumber || ''}
          onChange={(e) => setSelectNumber(Number(e.target.value))}
          className="border-2 border-black rounded-lg p-2 m-2"
        >
          <option value="" disabled>
            Välj antal talare
          </option>
          {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      </form>
      <DragAndDrop />
    </div>
  )
}
