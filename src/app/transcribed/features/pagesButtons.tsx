'use client'
import Link from 'next/link'
import { HiOutlineDocument } from 'react-icons/hi2'
import { HiOutlineCodeBracket } from 'react-icons/hi2'

export default function PagesButton() {
  return (
    <div className="flex justify-self-end">
      <div className="border border-stone-100 rounded-md w-20 h-8 flex flex-col shadow-sm mr-2">
        <Link href="/diarize" className="self-end p-2">
          <span className="">
            <HiOutlineCodeBracket className="text-stone-300 w-4 h-4" />
          </span>
        </Link>
      </div>
      <div className="border border-stone-100 rounded-md w-20 h-8 flex flex-col shadow-sm">
        <Link href="/diarize" className="self-end p-2">
          <span className="">
            <HiOutlineDocument className="text-stone-300 w-4 h-4" />
          </span>
        </Link>
      </div>
    </div>
  )
}
