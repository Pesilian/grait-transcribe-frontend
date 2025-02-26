'use client'
import Link from 'next/link'
import { HiOutlineQuestionMarkCircle } from 'react-icons/hi2'

export default function FaQLink() {
  return (
    <Link href="/faq" className="pt-10 pr-4">
      <HiOutlineQuestionMarkCircle className="w-10 h-10" />
    </Link>
  )
}
