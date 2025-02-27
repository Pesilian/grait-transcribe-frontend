'use client'
import Link from 'next/link'
import { CiCircleInfo } from 'react-icons/ci'

export default function FaQLink() {
  return (
    <Link href="/faq" className="pt-10 pr-10 justify-self-end">
      <CiCircleInfo className="w-10 h-10" />
    </Link>
  )
}
