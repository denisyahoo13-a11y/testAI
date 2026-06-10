import { useState } from 'react'
import { whatIfOptions } from '../data/mockData'

export default function WhatIfPanel() {
  const [active, setActive] = useState(null)

  return (
    <div className="bg-card border border-white/[0.08] rounded-xl p-5">
      <h3 className="text-base font-semibold mb-3">А что если...?</h3>
      <div className="flex flex-wrap gap-2">
        {whatIfOptions.map((opt) => (
          <button
            key={opt.id}
            onClick={() => setActive(active === opt.id ? null : opt.id)}
            className={`px-4 py-2 rounded-full text-sm border transition-colors duration-200 ${
              active === opt.id
                ? 'bg-accent text-white border-accent'
                : 'border-white/[0.08] text-[#A0A0A0] hover:text-white hover:border-white/20'
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>
      {active && (
        <div className="mt-4 bg-elevated border border-white/[0.08] rounded-lg p-4 text-sm text-[#A0A0A0] leading-relaxed animate-fadeIn">
          {whatIfOptions.find((o) => o.id === active).response}
        </div>
      )}
    </div>
  )
}
