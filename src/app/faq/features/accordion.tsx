'use client'
import { useState } from 'react'
import React from 'react'
import { HiOutlineChevronDown } from 'react-icons/hi2'
import { HiOutlineChevronUp } from 'react-icons/hi2'

interface FaQAccordation {
  title: string
  content: string
}

export default function AccordionFaq({ title, content }: FaQAccordation) {
  const [open, setOpen] = useState(false)

  return (
    <div
      onClick={() => setOpen(!open)}
      className="h-auto w-5/6 flex flex-col self-center  border-2 border-stone-50 border-b-stone-300 rounded-sm mb-4"
    >
      <div>
        <h2 className="text-lg font-bold text-center pt-6">{title}</h2>
        <div
          className={`w-full overflow-hidden transition-all duration-300 ${
            open ? 'h-auto pt-4 pb-4' : 'h-0'
          }`}
        >
          <p className="text-black text-center ">{content} </p>
        </div>
      </div>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="font-bold py-2 px-4 self-end"
      >
        {open ? <HiOutlineChevronUp /> : <HiOutlineChevronDown />}
      </button>
    </div>
  )
}
