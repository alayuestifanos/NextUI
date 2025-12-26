import Image from 'next/image'

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

const images = [
  raceguimarkers01,
  raceguimarkers02,
  raceguimarkers03,
  raceguimarkers04,
  raceguimarkers05,
  raceguimarkers06,
  raceguimarkers07,
  raceguimarkers08,
]

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
  },
]

export default function RaceCard() {
  return (
    <div className='bg-[#FCFCFC] flex gap-2 max-w-full overflow-x-auto'>
      <table className='w-[75%] table-auto border-collapse'>
        {/* Column sizing */}
        <colgroup>
          <col /> {/* box + image */}
          <col /> {/* name */}
          <col className='w-[28px]' /> {/* flag */}
          <col className='w-[110px]' /> {/* rating */}
          <col className='w-[90px]' /> {/* last 5 */}
          <col className='w-[70px]' /> {/* win */}
          <col className='w-[70px]' /> {/* place */}
          <col className='w-[70px]' /> {/* combo */}
          <col className='w-[70px]' /> {/* bank */}
        </colgroup>

        {/* Header */}
        <thead className='text-xs font-semibold text-gray-500'>
          <tr>
            <th className='px-3 py-2 text-left'></th>
            <th className='px-3 py-2 text-left'>NAME</th>
            <th className='px-1 py-2 text-center'></th>
            <th className='px-2 py-2 text-left whitespace-nowrap'>RATING</th>
            <th className='px-2 py-2 text-left whitespace-nowrap'>LAST 5</th>
            <th className='px-2 py-2 text-center whitespace-nowrap'>WIN</th>
            <th className='px-2 py-2 text-center whitespace-nowrap'>PLACE</th>
            <th className='px-2 py-2 text-center whitespace-nowrap'>COMBO</th>
            <th className='px-2 py-2 text-center whitespace-nowrap'>BANK</th>
          </tr>
        </thead>

        {/* Body */}
        <tbody className=''>
          {horses.map((horse, index) => (
            <tr
              key={horse.box}
              className='border-b border-gray-200 text-sm  relative hover:bg-gray-50'
            >
              {/* Box + Image */}
              <td className='px-3 py-2 flex items-center gap-2 whitespace-nowrap'>
                <span className='text-lg font-bold text-gray-800'>
                  {horse.box}
                </span>
                <span className='shrink-0'>
                  <Image src={images[index]} alt='' width={36} height={36} />
                </span>
              </td>

              {/* Name (flexible column) */}
              <td className='px-3 py-2 max-w-0 overflow-hidden whitespace-nowrap'>
                {horse.name}
              </td>

              {/* Flag */}
              <td className='px-1 py-2 text-center whitespace-nowrap'>
                {horse.flag && (
                  <span className='inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#F86F21] text-white text-[10px] font-bold'>
                    {horse.flag}
                  </span>
                )}
              </td>

              {/* Rating */}
              <td className='px-2 py-2 whitespace-nowrap'>
                {'★'.repeat(horse.rating)}
                <span className='text-gray-300'>
                  {'★'.repeat(5 - horse.rating)}
                </span>
              </td>

              {/* Last 5 */}
              <td className='px-2 py-2 whitespace-nowrap text-gray-500'>
                {horse.last5}
              </td>

              {/* Win */}
              <td className='px-2 py-2 text-center whitespace-nowrap'>
                <BankBadge value={horse.win} />
              </td>

              {/* Place */}
              <td className='px-2 py-2 text-center whitespace-nowrap'>
                <BankBadge value={horse.place} />
              </td>

              {/* Combo */}
              <td className='px-2 py-2 text-center whitespace-nowrap'>
                <BankBadge value={horse.combo} />
              </td>

              {/* Bank */}
              <td className='px-2 py-2 text-center whitespace-nowrap'>
                <BankBadge value={horse.bank} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <BetActions />
    </div>
  )
}
