'use client'
import Image from 'next/image'
import { useState } from 'react'
import { createPortal } from 'react-dom'


import BankBadge from './BankBage'
import BetActions from './BetActions'
import RunnerFormCard from './RunnerFormCard'

import raceguimarkers01 from '@/public/raceguimarkers01.png'
import raceguimarkers02 from '@/public/raceguimarkers02.png'
import raceguimarkers03 from '@/public/raceguimarkers03.png'
import raceguimarkers04 from '@/public/raceguimarkers04.png'
import raceguimarkers05 from '@/public/raceguimarkers05.png'
import raceguimarkers06 from '@/public/raceguimarkers06.png'
import raceguimarkers07 from '@/public/raceguimarkers07.png'
import raceguimarkers08 from '@/public/raceguimarkers08.png'

const images = [raceguimarkers01, raceguimarkers02, raceguimarkers03, raceguimarkers04, raceguimarkers05, raceguimarkers06, raceguimarkers07, raceguimarkers08]



export default function RaceCard({ horses, type }: { horses: any[], type?: string }) {
  const [hovered, setHovered] = useState(null)

  return (
    <>
      <div className='flex gap-2 max-w-full overflow-x-auto'>
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
                key={horse["FeedId"]}
                className='border-b border-gray-200 text-sm px-1 '
              >
                <td className="align-middle">
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-lg text-gray-400 font-bold">
                      {horse["Draw"]}
                    </span>
                    <Image
                      src={images[index]}
                      alt="this is alt"
                      width={36}
                      height={36}
                      className="shrink-0"
                    />
                  </div>
                </td>

                <td className='w-[10%] '></td>
                <td className='px-3 w-[20%] font-normal text-base text-[#727272] '>{horse["Name"]}</td>
                <td className='w-[70%] '></td>
                <td className='w-10  text-center '>
                  {horse["Favorite"] && (
                    <span className='inline-block text-white border border-white bg-[#ff6100] rounded-full w-[15px] h-[15px] p-[4px] text-[0.8em] text-center box-content'>
                      {`F${horse["Favorite"]}`}
                    </span>
                  )}
                </td>
                <td className='w-[20%] '></td>
                <td
                  className='m-0 px-[3px] align-middle cursor-pointer'
                  onMouseEnter={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect()
                    setHovered({ horse, rect })
                  }}
                  onMouseLeave={() => setHovered(null)}
                >
                  <span className='text-green-600 text-xl'>
                    {'★'.repeat(Math.round(horse["StarRating"] / 20))}
                  </span>
                  <span className='text-gray-300 text-xl'>
                    {'★'.repeat(5 - Math.round(horse["StarRating"] / 20))}
                  </span>
                </td>

                <td className='m-0 px-[3px] align-middle '>{horse["Form"]}</td>
                {/* <td className="m-0 px-[3px] align-middle">
  <div className="flex gap-1">
    {horse.Form.split(',').map((num, i) => (
      <span
        key={i}
        className="cursor-pointer hover:text-green-600"
      >
        {num}
      </span>
    ))}
  </div>
</td> */}

                <td className='m-0 px-[3px] align-middle  '>
                  <BankBadge
                    value={horse["WinOdds"]}
                    className={type === 'past' || type === 'next' ? 'opacity-100' : ''}
                    showLock={type !== 'next'}
                    disabled={type === 'next' ? false : true}
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
                    value={horse["PlaceOdds"]}
                    className={type === 'past' || type === 'next' ? 'opacity-100' : ''}
                    showLock={type !== 'next'}
                    disabled={type === 'next' ? false : true}
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
                  <BankBadge
                    value={horse["RacesSincePlace"]}
                    className={
                      type === 'past' ? 'opacity-100' :
                        type === 'next' ? 'opacity-100 hover:bg-[#36B250] hover:text-white' : ''
                    }
                    showLock={type !== 'next'}
                    disabled={type === 'next' ? false : true}
                  />
                </td>

                <td className='m-0 px-[3px] align-middle  '>
                  <BankBadge
                    value={horse["RacesSincePlace"]}
                    className={type === 'next' ? 'opacity-100' : ''}
                    showLock={type !== 'next'}
                    disabled={true}
                  />
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
