import { useState } from 'react'
import { trajectories } from '../data/mockData'
import WhatIfPanel from '../components/WhatIfPanel'

export default function Results({ onNavigate }) {
  const [expanded, setExpanded] = useState(null)

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-8 py-12">
      <h1 className="text-2xl sm:text-3xl font-semibold text-center mb-2">Карта траекторий</h1>
      <p className="text-[#A0A0A0] text-center mb-10 leading-relaxed">
        Это гипотезы для проверки, а не готовые решения. Их можно менять и уточнять.
      </p>

      <div className="flex flex-col gap-4 mb-10">
        {trajectories.map((t) => {
          const isOpen = expanded === t.id
          return (
            <div
              key={t.id}
              className="bg-card border border-white/[0.08] rounded-xl p-6 transition-colors duration-200"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <h2 className="text-lg font-medium">{t.title}</h2>
                    <span className="text-xs px-2 py-1 rounded-full bg-accent/15 text-accent border border-accent/30">
                      это гипотеза для проверки
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {t.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-elevated text-[#A0A0A0] border border-white/[0.08]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <button
                  onClick={() => setExpanded(isOpen ? null : t.id)}
                  className="shrink-0 w-9 h-9 rounded-lg border border-white/[0.08] flex items-center justify-center text-[#A0A0A0] hover:text-white hover:bg-elevated transition-colors duration-200"
                  aria-label="Развернуть"
                >
                  {isOpen ? '−' : '+'}
                </button>
              </div>

              {isOpen && (
                <div className="mt-2 animate-fadeIn">
                  <p className="text-sm text-[#A0A0A0] leading-relaxed mb-4">{t.why}</p>
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-xs text-[#606060] mb-2 uppercase tracking-wide">
                        Навыки
                      </p>
                      <ul className="text-sm text-[#A0A0A0] space-y-1">
                        {t.skills.map((s) => (
                          <li key={s}>{s}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs text-[#606060] mb-2 uppercase tracking-wide">
                        Школьные предметы
                      </p>
                      <ul className="text-sm text-[#A0A0A0] space-y-1">
                        {t.subjects.map((s) => (
                          <li key={s}>{s}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <p className="text-sm mb-4">
                    <span className="text-[#606060]">Доход: </span>
                    {t.salary}
                  </p>
                  {t.hasDetail && (
                    <button
                      onClick={() => onNavigate('direction')}
                      className="text-accent text-sm font-medium hover:underline"
                    >
                      Подробнее →
                    </button>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>

      <WhatIfPanel />
    </div>
  )
}
