'use client'
import Image from 'next/image'
import { useState } from 'react'
import { createPortal } from 'react-dom'

import BankBadge from './BankBage'
import raceguimarkers01 from '@/public/raceguimarkers01.png'
import raceguimarkers02 from '@/public/raceguimarkers02.png'
import raceguimarkers03 from '@/public/raceguimarkers03.png'
import raceguimarkers04 from '@/public/raceguimarkers04.png'
import raceguimarkers05 from '@/public/raceguimarkers05.png'
import raceguimarkers06 from '@/public/raceguimarkers06.png'
import raceguimarkers07 from '@/public/raceguimarkers07.png'
import raceguimarkers08 from '@/public/raceguimarkers08.png'
import BetActions from './BetActions'
import RunnerFormCard from './RunnerFormCard'

const horses = [
  {
    box: 1,
    name: 'Mirage',
    rating: 3,
    last5: '4,2,2,6,4',
    win: '7.15',
    place: '2.23',
    combo: '3.4',
    bank: '10.00',
    image: raceguimarkers01,
  },
  {
    box: 2,
    name: 'Autumn Storm',
    rating: 4,
    last5: '1,3,6,2,8',
    win: '3.00',
    place: '1.56',
    flag: 'F1',
    combo: '3.4',
    bank: '10.00',
    image: raceguimarkers02,
  },
  {
    box: 3,
    name: 'Pepperoni',
    rating: 3,
    last5: '6,2,7,6,5',
    win: '16.54',
    place: '3.14',
    combo: '3.4',
    bank: '10.00',
    image: raceguimarkers03,
  },
  {
    box: 4,
    name: 'Pepperoni',
    rating: 3,
    last5: '6,2,7,6,5',
    win: '16.54',
    place: '2.58',
    combo: '3.4',
    bank: '10.00',
    image: raceguimarkers04,
  },
  {
    box: 5,
    name: 'Pepperoni',
    rating: 3,
    last5: '6,2,7,6,5',
    win: '16.54',
    place: '3.14',
    combo: '3.4',
    bank: '10.00',
    image: raceguimarkers05,
  },
  {
    box: 6,
    name: 'Pepperoni',
    rating: 3,
    last5: '6,2,7,6,5',
    win: '16.54',
    place: '3.14',
    combo: '3.4',
    bank: '10.00',
    image: raceguimarkers06,
  },
  {
    box: 7,
    name: 'Pepperoni',
    rating: 3,
    last5: '6,2,7,6,5',
    win: '16.54',
    place: '3.14',
    combo: '3.4',
    bank: '10.00',
    image: raceguimarkers07,
  },
  {
    box: 8,
    name: 'Pepperoni',
    rating: 3,
    last5: '6,2,7,6,5',
    win: '16.54',
    place: '3.14',
    combo: '3.4',
    bank: '10.00',
    image: raceguimarkers08,
  },
]

export default function RaceCard() {
  const [hovered, setHovered] = useState(null)

  return (
    <>
      <div className='bg-[#FCFCFC] flex gap-2 max-w-full overflow-x-auto'>
        <table className='w-[75%] table-auto border-collapse'>
          <tbody>
            {horses.map((horse, index) => (
              <tr
                key={horse.box}
                className='border-b border-gray-200 text-sm hover:bg-gray-50'
              >
                <td className='px-3 py-2 flex items-center gap-2'>
                  <span className='text-lg font-bold'>{horse.box}</span>
                  <Image src={horse.image} alt='' width={36} height={36} />
                </td>

                <td className='px-3 py-2 whitespace-nowrap'>{horse.name}</td>

                <td
                  className='px-2 py-2 text-green-600'
                  onMouseEnter={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect()
                    setHovered({ horse, rect })
                  }}
                  onMouseLeave={() => setHovered(null)}
                >
                  {'★'.repeat(horse.rating)}
                </td>

                <td className='px-2 py-2 text-gray-500'>{horse.last5}</td>

                <td className='px-2 py-2'>
                  <BankBadge value={horse.win} />
                </td>

                <td className='px-2 py-2'>
                  <BankBadge value={horse.place} />
                </td>

                <td className='px-2 py-2'>
                  <BankBadge value={horse.combo} />
                </td>

                <td className='px-2 py-2'>
                  <BankBadge value={horse.bank} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <BetActions />
      </div>

      {/* ✅ POPUP VIA PORTAL */}
      {hovered &&
        createPortal(
          <div
            className='fixed z-[9999]'
            style={{
              top: hovered.rect.top + hovered.rect.height / 2,
              left: hovered.rect.right + 12,
              transform: 'translateY(-50%)',
            }}
          >
            <RunnerFormCard horse={hovered.horse} />
          </div>,
          document.body
        )}
    </>
  )
}
