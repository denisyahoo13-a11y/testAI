const screenTitles = {
  landing: 'Траектория',
  diagnostic: 'Диагностика',
  results: 'Карта траекторий',
  direction: 'Направление',
  university: 'Поиск вуза',
}

export default function NavBar({ screen, onBack }) {
  return (
    <div className="sticky top-0 z-20 flex items-center justify-between px-4 sm:px-8 h-16 bg-bg/90 backdrop-blur border-b border-white/[0.08]">
      <div className="flex items-center gap-3 min-w-[40px]">
        {screen !== 'landing' && (
          <button
            onClick={onBack}
            className="w-9 h-9 rounded-lg border border-white/[0.08] flex items-center justify-center text-white/80 hover:bg-elevated transition-colors duration-200"
            aria-label="Назад"
          >
            ←
          </button>
        )}
      </div>
      <div className="text-sm text-[#A0A0A0] font-medium absolute left-1/2 -translate-x-1/2">
        {screenTitles[screen]}
      </div>
      <div className="font-semibold tracking-tight">Траектория</div>
    </div>
  )
}
