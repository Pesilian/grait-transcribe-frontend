'use client'
import Link from 'next/link'
import { HiOutlineDocument } from 'react-icons/hi2'
import { HiOutlineCodeBracket } from 'react-icons/hi2'

export default function PagesButton() {
  return (
    <div className="flex">
      <div className="border-r-2 border-t-2 border-t-stone-300 border-r-stone-300 rounded-tr-md w-12 flex flex-col">
        <Link href="/diarize" className="self-end p-2">
          <span className="">
            <HiOutlineCodeBracket className="text-stone-300 w-6 h-6" />
          </span>
        </Link>
      </div>
      <div className="border-r-2 border-t-2 border-t-stone-300 border-r-stone-300 rounded-tr-md w-12 flex flex-col">
        <Link href="/diarize" className="self-end p-2">
          <span className="">
            <HiOutlineDocument className="text-stone-300 w-6 h-6" />
          </span>
        </Link>
      </div>
    </div>
  )
}
