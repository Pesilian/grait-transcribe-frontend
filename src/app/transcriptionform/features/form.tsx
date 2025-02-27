'use client'
import { useState } from 'react'
import DragAndDrop from './dragAndDrop'
import Button from './button'

export default function Form() {
  const [selectNumber, setSelectNumber] = useState<number | null>(null)
  const [selectLanguage, setSelectLanguage] = useState<string | null>(null)

  return (
    <div className="flex flex-col col-span-2 col-start-2  justify-self-center self-center bg-white rounded-sm h-auto w-96 flex  p-2">
      <h2 className="font-Roboto text-2xl font-medium">Inställningar</h2>
      <h3 className="font_Roboto text-nowrap text-xs text-stone-700 ">
        Konfigurera din transkription
      </h3>
      <form className="flex flex-col mb-4">
        <label className="text-xs mt-4 font-medium">Antal talare</label>
        <select
          id="numberSelect"
          value={selectNumber || ''}
          onChange={(e) => setSelectNumber(Number(e.target.value))}
          className="w-full bg-transparent placeholder:text-stone-400 text-stone-700 text-xs border border-stone-200 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-stone-400 hover:border-stone-400 shadow-sm focus:shadow-md appearance-none cursor-pointer"
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
        <label className="text-xs mt-4 font-medium">Språk</label>
        <select
          id="languageSelect"
          value={selectLanguage || ''}
          onChange={(e) => setSelectLanguage(e.target.value)}
          className="w-full bg-transparent placeholder:text-stone-400 text-stone-700 text-xs border border-stone-200 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-stone-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer"
        >
          <option value="" disabled>
            Välj...
          </option>
          <option value="Svenska">Svenska</option>
          <option value="Engelska">Engelska</option>
          <option value="">Automatiskt</option>
        </select>
      </form>
      <DragAndDrop />
      <div className="flex justify-between">
        <Button
          link="/"
          label="Tillbaka"
          color="stone-200"
          textColor="stone-400"
        />
        <Button
          link="/transcribed"
          label="Transkribera"
          color="stone-950"
          textColor="stone-50"
        />
      </div>
    </div>
  )
}
