import CollapsibleRace from '@/components/CollapsibleRace'
import RaceCard from '@/components/RaceCard'

export default function Home() {
  return (
    <main className='py-6 space-y-4 ml-6 min-h-screen w-[75%]'>
      <div className='inline-flex   overflow-hidden text-xs font-semibold'>
        {['MAIN', 'ALT', 'HEAD TO HEAD', 'SUM'].map((tab, idx) => (
          <button
            key={tab}
            className={`px-3 py-2 text-center cursor-pointer ${
              tab === 'MAIN' ? 'bg-[#36B250] text-white' : 'text-gray-600'
            } ${idx !== 0 ? 'border border-[#36B250]' : ' border-collapse'}`}
          >
            {tab}
          </button>
        ))}
      </div>

      <CollapsibleRace
        title='10:11 CRAWFORD PARK (DAY) 360'
        subtitle='ID 2045'
        color='green'
      >
        <RaceCard />
      </CollapsibleRace>

      <CollapsibleRace
        title='LIVE 10:21 CRAWFORD PARK (NIGHT) 720'
        subtitle='ID 2046'
        color='red'
      >
        <RaceCard />
      </CollapsibleRace>

      <CollapsibleRace
        title='09:37 / 10:31 SUMMERSET PARK 720'
        subtitle='ID 2047'
        color='green'
      >
        <RaceCard />
      </CollapsibleRace>
    </main>
  )
}
