'use client'
import Image from 'next/image'
import Link from 'next/link'
import FaQLink from './faqLink'
import { DarkMode } from '../../services/themeService'

export default function Header() {
  const isDarkMode = DarkMode()
  return (
    <header className="flex justify-between w-full ">
      <Link href="/">
        <Image
          src={isDarkMode ? '/grLogotyp_dark.svg' : '/grLogotyp.svg'}
          alt="GR Logga"
          width={215}
          height={70}
          priority={true}
          className="m-10 w-60 h-auto "
        />
      </Link>
      <FaQLink />
    </header>
  )
}
