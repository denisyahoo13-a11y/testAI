import { useState } from 'react'
import { universities } from '../data/mockData'

const filters = ['Все', 'Бюджет', 'Контракт', 'Москва', 'Питер']

export default function UniversitySearch() {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('Все')

  const filtered = universities.filter((uni) => {
    const matchesQuery =
      uni.name.toLowerCase().includes(query.toLowerCase()) ||
      uni.direction.toLowerCase().includes(query.toLowerCase())

    let matchesFilter = true
    if (filter === 'Бюджет') matchesFilter = uni.budget
    if (filter === 'Москва') matchesFilter = uni.city === 'Москва'
    if (filter === 'Питер') matchesFilter = uni.city === 'Санкт-Петербург'

    return matchesQuery && matchesFilter
  })

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-8 py-12">
      <h1 className="text-2xl sm:text-3xl font-semibold text-center mb-6">Поиск университета</h1>

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Поиск по названию или направлению..."
        className="w-full bg-card border border-white/[0.08] rounded-xl px-4 py-3 mb-4 text-white placeholder:text-[#606060] focus:outline-none focus:border-accent transition-colors duration-200"
      />

      <div className="flex flex-wrap gap-2 mb-6">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-full text-sm border transition-colors duration-200 ${
              filter === f
                ? 'bg-accent text-white border-accent'
                : 'border-white/[0.08] text-[#A0A0A0] hover:text-white hover:border-white/20'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-4">
        {filtered.map((uni) => (
          <div
            key={uni.id}
            className="bg-card border border-white/[0.08] rounded-xl p-6 transition-colors duration-200"
          >
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <h2 className="text-lg font-medium">{uni.name}</h2>
                <p className="text-sm text-[#A0A0A0]">{uni.direction}</p>
              </div>
              <span className="text-xs px-3 py-1 rounded-full bg-elevated text-[#A0A0A0] border border-white/[0.08] shrink-0">
                {uni.city}
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4 text-sm">
              <div>
                <p className="text-xs text-[#606060] mb-1">Баллы ЕГЭ</p>
                <p>{uni.score}</p>
              </div>
              <div>
                <p className="text-xs text-[#606060] mb-1">Бюджет</p>
                <p>{uni.budget ? `${uni.budgetSpots} мест` : 'нет'}</p>
              </div>
              <div className="col-span-2 sm:col-span-2">
                <p className="text-xs text-[#606060] mb-1">Контракт</p>
                <p>{uni.contractCost}</p>
              </div>
            </div>
            <button className="text-accent text-sm font-medium hover:underline">
              Подробнее →
            </button>
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="text-center text-[#606060] py-8">Ничего не найдено</p>
        )}
      </div>
    </div>
  )
}
