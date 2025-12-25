import { Lock } from 'lucide-react'

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
    place: '3.14',
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
    <div className='bg-white rounded-md w-[75%] overflow-hidden'>
      {/* Tabs */}

      {/* Table Head */}
      <div className='grid grid-cols-8 text-xs font-semibold text-gray-500 px-4 py-2 border-b'>
        <div>hh</div>
        <div>NAME</div>
        <div>RATING</div>
        <div>LAST 5</div>
        <div>WIN</div>
        <div>PLACE</div>
        <div>COMBO</div>
        <div>BANK</div>
      </div>

      {/* Rows */}
      {horses.map((horse) => (
        <div
          key={horse.box}
          className='grid grid-cols-7 items-center px-4 py-2 border-b text-sm hover:bg-gray-50'
        >
          {/* Box */}
          <div className='flex items-center gap-2'>
            <span className='w-6 h-6 flex items-center justify-center rounded text-gray-800 text-xs font-bold'>
              {horse.box}
            </span>
          </div>

          {/* Name */}
          <div className='flex items-center gap-2'>
            {horse.flag && (
              <span
                className='flex items-center justify-center
  w-6 h-6
  rounded-full
  bg-orange-500
  text-white
  text-xs
  font-bold
'
              >
                F1
              </span>
            )}
            {horse.name}
          </div>

          {/* Rating */}
          <div className='text-green-500'>
            {'★'.repeat(horse.rating)}
            <span className='text-gray-300'>
              {'★'.repeat(5 - horse.rating)}
            </span>
          </div>

          {/* Last 5 */}
          <div className='text-gray-500'>{horse.last5}</div>

          {/* Win */}
          <div className=' px-2 py-1 rounded text-center font-semibold'>
            {horse.win}
          </div>

          {/* Place */}
          <div className='  py-1 rounded text-center font-semibold bg-red'>
            {horse.place}
          </div>
          <div className=' py-1 rounded text-center font-semibold bg-red'>
            {horse.combo}
          </div>
          <div className='relative py-1 rounded text-center font-semibold bg-red'>
            {/* Lock icon */}
            <Lock className='absolute top-1 right-1 w-4 h-4 text-gray-400' />

            {horse.bank}
          </div>
        </div>
      ))}
    </div>
  )
}
