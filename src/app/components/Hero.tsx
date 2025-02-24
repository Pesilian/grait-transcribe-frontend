'use client'
import Image from 'next/image'
import { DarkMode } from '../services/themeService'

export default function Hero() {
  const isDarkMode = DarkMode()
  return (
    <div className="justify-self-center self-center">
      {isDarkMode ? (
        <Image
          src="kommunkartan_dark.svg"
          alt="Kommunkartan"
          width={500}
          height={500}
          className="p-4"
          priority={true}
        />
      ) : (
        <Image
          src="kommunkartan.svg"
          alt="Kommunkartan"
          width={500}
          height={500}
          className="p-4"
          priority={true}
        />
      )}
    </div>
  )
}
