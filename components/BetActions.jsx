import { Trash2 } from 'lucide-react'

export default function BetActions() {
  return (
    <div className='w-[260px] flex flex-col gap-3'>
      {/* Grid of green buttons */}
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
        <BetButton
          title='QUINELLA'
          subtitle='2 any order'
          meta='2 combinations'
        />
        <BetButton title='TRIO' subtitle='3 any order' meta='1 combinations' />
        <BetButton title='EXACTA' subtitle='2 in order' meta='2 combinations' />
        <BetButton
          title='TRIFECTA'
          subtitle='3 in order'
          meta='2 combinations'
        />
        <BetButton
          title='SWINGER'
          subtitle='2 in 3 any order'
          meta='2 combinations'
        />
      </div>

      {/* Clear */}
      <button className='w-fit flex items-center gap-2 bg-red-200 text-white px-4 py-2 text-sm font-semibold hover:bg-red-300 transition'>
        CLEAR
        <Trash2 size={16} />
      </button>
    </div>
  )
}

function BetButton({ title, subtitle, meta }) {
  return (
    <button className='bg-green-600 text-white p-3 flex flex-col items-center justify-center text-center shadow'>
      <div className='text-sm font-bold'>{title}</div>
      <div className='text-xs opacity-90'>{subtitle}</div>
      <div className='text-[11px] opacity-80'>{meta}</div>
    </button>
  )
}
