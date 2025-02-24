import Image from 'next/image'

export default function Hero() {
  return (
    <div className="justify-self-center self-center">
      <Image
        src="kommunkartan.svg"
        alt="Kommunkartan"
        width={500}
        height={500}
        className="p-4"
        priority={true}
      />
    </div>
  )
}
