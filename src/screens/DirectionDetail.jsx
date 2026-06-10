import { useState } from 'react'
import { trajectories, universityOptionsByDirection, directionDetails } from '../data/mockData'
import WhatIfPanel from '../components/WhatIfPanel'

export default function DirectionDetail() {
  const direction = trajectories.find((t) => t.id === 'creative-tech')
  const universities = universityOptionsByDirection['creative-tech']
  const details = directionDetails['creative-tech']
  const [selectedUni, setSelectedUni] = useState(null)

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-8 py-12">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left column */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-semibold mb-3">{direction.title}</h1>
          <div className="flex flex-wrap gap-2 mb-4">
            {direction.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full bg-elevated text-[#A0A0A0] border border-white/[0.08]"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-sm text-[#A0A0A0] leading-relaxed mb-6">{direction.why}</p>

          <WhatIfPanel />
        </div>

        {/* Right column */}
        <div>
          <h2 className="text-lg font-medium mb-4">Выбери тип учебного заведения</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            {universities.map((uni) => (
              <button
                key={uni.id}
                onClick={() => setSelectedUni(selectedUni === uni.id ? null : uni.id)}
                className={`text-left bg-card border rounded-xl p-5 transition-colors duration-200 hover:border-accent/50 hover:bg-elevated ${
                  selectedUni === uni.id ? 'border-accent bg-elevated' : 'border-white/[0.08]'
                }`}
              >
                <p className="text-xs text-[#606060] mb-1">{uni.type}</p>
                <p className="font-medium mb-2">{uni.name}</p>
                <p className="text-sm text-[#A0A0A0]">{uni.duration}</p>
                <p className="text-sm text-[#A0A0A0]">{uni.cost}</p>
              </button>
            ))}
          </div>

          {selectedUni && (
            <div className="bg-elevated border border-white/[0.08] rounded-xl p-5 mb-6 animate-fadeIn">
              <p className="text-sm text-[#A0A0A0] leading-relaxed">
                {universities.find((u) => u.id === selectedUni).detail}
              </p>
            </div>
          )}

          <div className="bg-card border border-white/[0.08] rounded-xl p-5 mb-4">
            <h3 className="text-base font-semibold mb-3">План на ближайшие 30 дней</h3>
            <ul className="flex flex-col gap-2">
              {details.plan30days.map((item) => (
                <li key={item} className="text-sm text-accent hover:underline cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-card border border-white/[0.08] rounded-xl p-5">
            <h3 className="text-base font-semibold mb-3">О профессии</h3>
            <p className="text-sm mb-2">
              <span className="text-[#606060]">Доход: </span>
              {details.profession.salary}
            </p>
            {details.profession.remote && (
              <span className="inline-block text-xs px-2 py-1 rounded-full bg-accent/15 text-accent border border-accent/30 mb-3">
                Возможна удалённая работа
              </span>
            )}
            <p className="text-xs text-[#606060] mb-2 uppercase tracking-wide">Топ компании</p>
            <div className="flex flex-wrap gap-2">
              {details.profession.companies.map((c) => (
                <span
                  key={c}
                  className="text-xs px-3 py-1 rounded-full bg-elevated text-[#A0A0A0] border border-white/[0.08]"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
