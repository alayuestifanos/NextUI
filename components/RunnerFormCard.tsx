import Image from 'next/image'

export default function RunnerFormCard({ horse }) {
  const last5 = horse["Form"].split(',').map(Number)

  return (
    <div className='w-[200px] bg-white p-4 shadow-2xl border border-gray-100 rounded-lg relative'>
      {/* Header */}
      <div className='flex flex-col items-start gap-2 mb-3 pr-4'>
        <div className='shrink-0  p-1'>
          <Image src={horse.image} alt={horse.name} width={32} height={32} />
        </div>
        <div className='text-sm font-bold text-gray-800 leading-tight'>
          {horse.name}
        </div>
      </div>

      {/* Rating */}
      <div className='flex items-center gap-0.5 text-xs mb-4'>
        <div className='flex text-green-600'>
          {'★'.repeat(Math.round(horse["StarRating"] / 20))}
          <span className='text-gray-200'>
            {'★'.repeat(5 - Math.round(horse["StarRating"] / 20))}
          </span>
        </div>
      </div>

      {/* Chart Area with Padding for Vertical Label */}
      <div className='space-y-6 pr-10 relative'>
        {last5.map((len, i) => (
          <div key={i} className='relative h-6'>
            {/* Solid Green Bar background */}
            <div className='absolute inset-0 flex items-center pr-6'>
              <div className='w-full h-[2px] bg-green-100' />
            </div>

            {/* Decimal Label on the Right */}
            {/* todo */}
            <div className='absolute right-0 top-1/2 -translate-y-1/2 text-[10px] font-bold text-gray-400'>
              {len.toFixed(1)}
            </div>

            {/* Active Progress Line */}
            <div className='absolute inset-0 flex items-center pr-6'>
              <div
                className='h-[2px] bg-green-600'
                style={{ width: `100%` }}
              />
            </div>

            {/* Markers Container */}
            <div
              className='absolute inset-y-0 w-6 -translate-x-1/2'
              style={{ left: `${(8 - len) * 12.5}%` }}
            >
              {/* Value Pin - On Top */}
              <div className='absolute bottom-[14px] left-1/2 -translate-x-1/2 bg-[#737176] text-white text-[10px] px-1  min-w-[16px] text-center font-bold italic'>
                {len}
              </div>

              {/* Dog SVG - On Bottom */}
              <div className='absolute top-[18px] left-1/2 -translate-x-1/2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 67.5 18.1'
                  className='w-6 h-3 text-[#464148]'
                  fill='currentColor'
                >
                  <path d='M64.6,14.5c1,0.4,2.9,0.7,2.9,1.6c0,0.6-1.1,1.1-1.8,1.1c-0.7,0-1.4-0.3-1.9-0.5c-0.7-0.2,0.9,0.7,0.4,1.1c-0.9,0.6-2-0.2-2.8-0.4c-0.2-1-0.8-1.6-1.4-2.3c-2-0.2-4.5-0.2-6.9,0c-1.9,0.1-3.6,0.6-4.8,0c-0.6-0.3-0.8-0.9-1.3-1.4c-0.4-0.4-1-0.7-1.3-1.3c-1.9,0.8-4.5,1.1-6.2,0.4c-0.8-0.4-1.5-1.1-2.1-1.6c-1-0.8-2.1-1.7-3.5-2c-0.4-0.1-0.8,0.1-1.1,0c-0.7-0.1-1.6-0.5-2.8-0.4c-1.2,0.1-2.5,0.6-3.4,1.1c-1.1,0.7-1.9,2.2-3.2,2.9c-0.5,0.3-1.2,0.6-1.8,0.8c-0.8,0.2-1.5-0.1-2.4,0c-0.6,0.1-1.1,0.6-1.8,0.8c-2.2,0.5-4.6-0.1-6.8-0.6c-1.1,0.7-5.7,2.7-5.6-0.5c1-0.6,2.2,0.3,3.2-0.3c-2.3-1.3-5.1,0.9-7.4,0c-0.5-0.6-1.3-1.2-0.9-2.4c1.1-0.5,1.6,0.6,2.7,0.6c0.7,0,1.4-0.5,2.3-0.6c0.6-0.1,1.5-0.2,2.3-0.3c1.9-0.2,2.9-0.2,4,0.6c0.6-0.6,1-1.3,1.9-1.5c2.6,1.3,3.4-0.5,4.5-2.3c0-0.1-0.1-0.3,0-0.4c0.6-0.6,1.6-1.6,2.3-2.3c-4.8,0.2-8.4,2.2-13.6,1.5c-0.8-0.7-2.9-1.1-2-2.7c1.5,0.1,2.1,1.3,3.9,1.4C10,5,12.4,4.2,14.9,3.8c1.1-0.2,2.2-0.4,3.3-0.6c1.1-0.2,2.2-0.4,3.3-0.6c1.2-0.2,2.4-0.3,3.4-0.5c0.5-0.1,0.9-0.4,1.4-0.5c0.4-0.1,0.9,0,1.3,0c0.6-0.1,1.2-0.3,1.8-0.4c1-0.1,2.1,0.1,3.2,0.1c0.9,0,1.8-0.3,2.7-0.4c0.6,0,1.2,0.1,1.8,0c1.2-0.1,2.7-0.8,4-1c2-0.3,4.5-0.7,7.1-0.4c1.4,0.2,2.6,0.9,4.2,1c1.7,0.1,3.6-0.5,5.3-0.5c2.2,0,3.5,1,5.4,1.9c0.6,0.8,1,1.5,2,2.3c0.8,0.6,2.6,1.1,2.7,2.1c0.1,1.1-1.4,1.8-2.9,1.6c-0.8-0.1-1.6-0.5-2.7-0.6c-1.2-0.2-2.4,0-3.3-0.3c-0.8-0.2-1.4-1-2-1.1c-1.1-0.2-2.3,0.3-2.7,1c0.3,1.4-0.1,2.6,0.6,3.4c0.5,0.5,1.9,0.6,3,0.8c1.2,0.2,2.3,0.2,3.4,0.4c1.6,0.2,2.5,1,3.7,0.9C62.2,13.3,63.3,13.9,64.6,14.5z' />
                </svg>
              </div>
            </div>
          </div>
        ))}

        {/* Vertical Side Label centered relative to the lines */}
        <div className='absolute right-[-90px] top-1/2 -translate-y-1/2 rotate-90 text-[14px] font-bold text-gray-500 capitalize tracking-widest whitespace-nowrap w-48 text-center'>
          Length Behind Winner
        </div>
      </div>
    </div>
  )
}
