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
    rating: 2,
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
    rating: 1,
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
    rating: 4,
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
    rating: 5,
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
        <table className='w-full min-w-[600px] table-auto border-collapse'>
          <thead className='text-xs font-semibold text-gray-500'>
            <tr>
              <th className='w-28 px-3 py-2 text-left'></th>
              <th className='w-[10%] py-2'></th>
              <th className='px-3 py-2 text-left whitespace-nowrap'>NAME</th>
              <th className='w-[70%] py-2'></th>
              <th className='w-10 py-2 text-center'></th>
              <th className='w-[20%] py-2'></th>
              <th className='w-14 px-0.5 py-2 text-center'>RATING</th>
              <th className='w-16 px-0.5 py-2 text-left whitespace-nowrap'>
                LAST 5
              </th>
              <th className='w-20 px-1 py-2 text-center whitespace-nowrap'>
                WIN
              </th>
              <th className='w-20 px-1 py-2 text-center whitespace-nowrap'>
                PLACE
              </th>
              <th className='w-20 px-1 py-2 text-center whitespace-nowrap'>
                COMBO
              </th>
              <th className='w-20 px-1 py-2 text-center whitespace-nowrap'>
                BANK
              </th>
            </tr>
          </thead>
          <tbody>
            {horses.map((horse, index) => (
              <tr
                key={horse.box}
                className='border-b border-gray-200 text-sm hover:bg-gray-50'
              >
                <td className='px-3 py-2 flex items-center gap-2 shrink-0'>
                  <span className='text-lg font-bold'>{horse.box}</span>
                  <Image
                    src={horse.image}
                    alt=''
                    width={36}
                    height={36}
                    className='shrink-0'
                  />
                </td>

                <td className='w-[10%] py-2'></td>
                <td className='px-3 py-2 whitespace-nowrap'>{horse.name}</td>
                <td className='w-[70%] py-2'></td>
                <td className='w-10 py-2 text-center whitespace-nowrap'>
                  {horse.flag && (
                    <span className='inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#F86F21] text-white text-[10px] font-bold'>
                      {horse.flag}
                    </span>
                  )}
                </td>
                <td className='w-[20%] py-2'></td>
                <td
                  className='px-0.5 py-2 whitespace-nowrap'
                  onMouseEnter={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect()
                    setHovered({ horse, rect })
                  }}
                  onMouseLeave={() => setHovered(null)}
                >
                  <span className='text-green-600'>
                    {'★'.repeat(horse.rating)}
                  </span>
                  <span className='text-gray-300'>
                    {'★'.repeat(5 - horse.rating)}
                  </span>
                </td>

                <td className='px-0.5 py-2 text-gray-500'>{horse.last5}</td>

                <td className='px-2 py-2'>
                  <BankBadge
                    value={horse.win}
                    {...(index === 5
                      ? {
                        bgColor: 'bg-[#717171]',
                        textColor: 'text-white',
                        iconColor: 'text-[#464148]',
                        borderColor: 'border-black',
                      }
                      : {})}
                  />
                </td>

                <td className='px-2 py-2'>
                  <BankBadge
                    value={horse.place}
                    {...(index === 3 || index === 5 || index === 6
                      ? {
                        bgColor: 'bg-[#717171]',
                        textColor: 'text-white',
                        iconColor: 'text-[#464148]',
                        borderColor: 'border-black',
                      }
                      : {})}
                  />
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

        <div className='mt-8'>
          <BetActions />
        </div>
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
