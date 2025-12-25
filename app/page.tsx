import CollapsibleRace from '@/components/CollapsibleRace'
import RaceCard from '@/components/RaceCard'

export default function Home() {
  return (
    <main className='py-6 space-y-4 ml-6 min-h-screen w-[75%]'>
      <div className='flex p-2 text-xs font-semibold'>
        {['MAIN', 'ALT', 'HEAD TO HEAD', 'SUM'].map((tab) => (
          <button
            key={tab}
            className={`px-3 py-1 rounded ${
              tab === 'MAIN'
                ? 'bg-green-500 text-white'
                : 'border text-gray-600'
            }`}
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
