'use client'
import { useState } from 'react'
import CollapsibleRace from '@/components/CollapsibleRace'
import RaceCard from '@/components/RaceCard'
import raceguimarkers01 from '@/public/raceguimarkers01.png'
import raceguimarkers02 from '@/public/raceguimarkers02.png'
import raceguimarkers03 from '@/public/raceguimarkers03.png'
import raceguimarkers04 from '@/public/raceguimarkers04.png'
import raceguimarkers05 from '@/public/raceguimarkers05.png'
import raceguimarkers06 from '@/public/raceguimarkers06.png'
import raceguimarkers07 from '@/public/raceguimarkers07.png'
import raceguimarkers08 from '@/public/raceguimarkers08.png'

const defaultHorses = [
  { box: 1, name: 'Mirage', rating: 65, last5: '4,2,2,6,4', win: '7.15', place: '2.23', combo: '3.4', bank: '10.00', image: raceguimarkers01 },
  { box: 2, name: 'Autumn Storm', rating: 85, last5: '1,3,6,2,8', win: '3.00', place: '1.56', flag: 'F1', combo: '3.4', bank: '10.00', image: raceguimarkers02 },
  { box: 3, name: 'Pepperoni', rating: 42, last5: '6,2,7,6,5', win: '16.54', place: '3.14', combo: '3.4', bank: '10.00', image: raceguimarkers03 },
  { box: 4, name: 'Pepperoni', rating: 72, last5: '6,2,7,6,5', win: '16.54', place: '2.58', combo: '3.4', bank: '10.00', image: raceguimarkers04 },
  { box: 5, name: 'Pepperoni', rating: 15, last5: '6,2,7,6,5', win: '16.54', place: '3.14', combo: '3.4', flag: 'F2', bank: '10.00', image: raceguimarkers05 },
  { box: 6, name: 'Pepperoni', rating: 92, last5: '6,2,7,6,5', win: '16.54', place: '3.14', combo: '3.4', bank: '10.00', image: raceguimarkers06 },
  { box: 7, name: 'Pepperoni', rating: 55, last5: '6,2,7,6,5', win: '16.54', place: '3.14', flag: 'F3', combo: '3.4', bank: '10.00', image: raceguimarkers07 },
  { box: 8, name: 'Pepperoni', rating: 100, last5: '6,2,7,6,5', win: '16.54', place: '3.14', combo: '3.4', bank: '10.00', image: raceguimarkers08 },
]

const raceData = [
  { title: '10:11 CRAWFORD PARK (DAY) 360', subtitle: 'ID 2045', horses: defaultHorses },
  { title: '10:11 CRAWFORD PARK (DAY) 360', subtitle: 'ID 2045', horses: defaultHorses },
  { title: 'LIVE 10:21 CRAWFORD PARK (NIGHT) 720', subtitle: 'ID 2046', horses: defaultHorses },
  { title: '09:37 / 10:31 SUMMERSET PARK 720', subtitle: 'ID 2047', horses: defaultHorses },
]

export default function Home() {
  const [activeTab, setActiveTab] = useState('MAIN')

  const handleTabClick = (tab: string) => {
    setActiveTab(tab)
    console.log(`Tab: ${tab}`)
  }

  return (
    <main className='py-6 space-y-4 ml-6 min-h-screen w-[70%]'>
      <div className='inline-flex overflow-hidden text-xs font-semibold'>
        {['MAIN', 'ALT', 'HEAD TO HEAD', 'SUM'].map((tab, idx) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`px-3 py-2 text-center text-gray-300 cursor-pointer font-bold border border-[#36B250] ${activeTab === tab ? 'bg-[#36B250] text-white' : 'text-gray-600'
              } ${idx !== 0 ? '-ml-[1px]' : ''}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {raceData.map((race, index) => (
        <CollapsibleRace key={index} title={race.title} subtitle={race.subtitle} defaultOpen={index === 0}>
          <RaceCard horses={race.horses} />
        </CollapsibleRace>
      ))}
    </main>
  )
}
