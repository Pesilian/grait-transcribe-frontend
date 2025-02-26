'use client'

interface LabelProps {
  label: string
}

export default function TranscriptionInfo({ label }: LabelProps) {
  return (
    <div className="bg-stone-300 mt-4 mr-2 rounded-sm shadow-sm w-20 text-center font-Inter">
      {label}
    </div>
  )
}
