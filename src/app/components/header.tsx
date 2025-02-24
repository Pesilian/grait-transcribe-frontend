'use client'
import Image from 'next/image'
import Link from 'next/link'
import FaQLink from './faqLink'

export default function Header() {
  return (
    <header className="flex justify-between w-full ">
      <Link href="/">
        <Image
          src="/grLogotyp.svg"
          alt="GR Logga"
          width={215}
          height={70}
          priority={true}
          className="m-10 w-80 h-auto"
        />
      </Link>
      <FaQLink />
    </header>
  )
}
