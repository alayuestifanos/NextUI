'use client'
import Image from 'next/image'
import { useState } from 'react'
import { createPortal } from 'react-dom'

import type { StaticImageData } from 'next/image'
import BankBadge from './BankBage'
import BetActions from './BetActions'
import RunnerFormCard from './RunnerFormCard'

export interface Horse {
  box: number
  name: string
  rating: number
  last5: string
  win: string
  place: string
  combo: string
  bank: string
  image: StaticImageData
  flag?: string
}

interface RaceCardProps {
  horses: Horse[]
}

export default function RaceCard({ horses }: RaceCardProps) {
  const [hovered, setHovered] = useState(null)

  return (
    <>
      <div className='bg-[#FCFCFC] flex gap-2 max-w-full overflow-x-auto'>
        <table className='w-full min-w-[600px] table-auto border-collapse'>
          <thead className='text-xs font-semibold text-gray-500'>
            <tr>
              <th className='w-28 px-3  text-left'></th>
              <th className='w-[10%] '></th>
              {/* for all table head font-normal p-0 uppercase text-[0.75em] text-[#4c4c4c] m-0 */}
              <th className='px-3  text-left  '>NAME</th>
              <th className='w-[70%] '></th>
              <th className='w-10  text-center'></th>
              <th className='w-[20%] '></th>
              <th className='w-14 px-0.5  text-center'>RATING</th>
              <th className='w-16 px-0.5  text-left '>
                LAST 5
              </th>
              <th className='w-20 px-1  text-center '>
                WIN
              </th>
              <th className='w-20 px-1  text-center '>
                PLACE
              </th>
              <th className='w-20 px-1 py-2 text-center '>
                COMBO
              </th>
              <th className='w-20 px-1  text-center '>
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
                <td className='px-3 flex items-center gap-2 shrink-0'>
                  <span className='text-lg text-gray-400 font-bold'>{horse.box}</span>
                  <Image
                    src={horse.image}
                    alt=''
                    width={36}
                    height={36}
                    className='shrink-0'
                  />
                </td>

                <td className='w-[10%] '></td>
                <td className='px-3  font-light text-base text-[#727272] '>{horse.name}</td>
                <td className='w-[70%] '></td>
                <td className='w-10  text-center '>
                  {horse.flag && (
                    <span className='inline-block text-white border border-white bg-[#ff6100] rounded-full w-[15px] h-[15px] p-[4px] text-[0.8em] text-center box-content'>
                      {horse.flag}
                    </span>
                  )}
                </td>
                <td className='w-[20%] '></td>
                <td
                  className='m-0 px-[3px] align-middle'
                  onMouseEnter={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect()
                    setHovered({ horse, rect })
                  }}
                  onMouseLeave={() => setHovered(null)}
                >
                  <span className='text-green-600 text-xl'>
                    {'★'.repeat(Math.round(horse.rating / 20))}
                  </span>
                  <span className='text-gray-300 text-xl'>
                    {'★'.repeat(5 - Math.round(horse.rating / 20))}
                  </span>
                </td>

                <td className='m-0 px-[3px] align-middle '>{horse.last5}</td>

                <td className='m-0 px-[3px] align-middle  '>
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

                <td className='m-0 px-[3px] align-middle '>
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

                <td className='m-0 px-[3px] align-middle  '>
                  <BankBadge value={horse.combo} />
                </td>

                <td className='m-0 px-[3px] align-middle  '>
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

      {hovered && hovered.rect &&
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
