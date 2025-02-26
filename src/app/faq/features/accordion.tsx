'use client'
import { DarkMode } from '@/services/themeService'
import { useState } from 'react'
import React from 'react'
import { HiOutlineChevronDown } from 'react-icons/hi2'
import { HiOutlineChevronUp } from 'react-icons/hi2'

interface FaQAccordation {
  title: string
  content: string
}

export default function AccordionFaq({ title, content }: FaQAccordation) {
  const isDarkMode = DarkMode()
  const [open, setOpen] = useState(false)

  return (
    <div
      onClick={() => setOpen(!open)}
      className={`h-auto w-4/6 flex flex-col self-center  border-2 rounded-sm m-6 border-t-stone-300 ${isDarkMode ? 'border-stone-950' : 'border-stone-50 '}`}
    >
      <div>
        <h2
          className={`text-lg font-bold text-center pt-6 hover:text-stone-500 ${
            open ? 'text-stone-200' : ''
          }`}
        >
          {title}
        </h2>
        <div
          className={`w-full overflow-hidden transition-all duration-300 ${
            open ? 'h-auto pt-4 pb-4' : 'h-0'
          }`}
        >
          <p className="text-center">{content} </p>
        </div>
      </div>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="font-bold py-2 px-4 self-center"
      >
        {open ? <HiOutlineChevronUp /> : <HiOutlineChevronDown />}
      </button>
    </div>
  )
}
