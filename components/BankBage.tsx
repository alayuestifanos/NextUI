'use client'

// import { Lock } from 'lucide-react'

import { IoIosLock } from 'react-icons/io'

interface BankBadgeProps {
  value: string | number
  bgColor?: string
  borderColor?: string
  textColor?: string
  iconColor?: string
}

export default function BankBadge({
  value,
  bgColor = 'bg-[#FFFDD7]',
  borderColor = 'border-green-700',
  textColor = 'text-gray-500',
  iconColor,
}: BankBadgeProps) {
  return (
    <div
      className={`relative inline-block min-w-[64px] py-1 px-2 font-semibold rounded border-2 ${bgColor} ${borderColor}`}
    >
      {/* <Lock
        className={`absolute top-0 right-0  w-4 h-4 font-bold -translate-y-1/2 translate-x-1/2 text-[#B0B192] ${iconColor}`}
      /> */}
      <IoIosLock
        className={`absolute top-0 right-0  w-4 h-4 font-bold -translate-y-1/2 translate-x-1/2 text-[#B0B192] ${iconColor}`}
      />
      <p className={`${textColor}`}>{value}</p>
    </div>
  )
}
