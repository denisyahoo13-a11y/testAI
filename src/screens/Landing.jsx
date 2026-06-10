const cards = [
  {
    id: 'unknown',
    title: 'Я не знаю, кем хочу быть',
    description: 'Пройди спокойную диагностику — без правильных и неправильных ответов.',
    target: 'diagnostic-full',
  },
  {
    id: 'direction',
    title: 'Я знаю направление, но не знаю что делать',
    description: 'Несколько вопросов, чтобы уточнить детали и собрать план действий.',
    target: 'diagnostic-light',
  },
  {
    id: 'university',
    title: 'Я знаю куда поступать — помоги собрать информацию',
    description: 'Сразу перейти к подбору университетов и условий поступления.',
    target: 'university',
  },
]

export default function Landing({ onNavigate }) {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-8 py-12 sm:py-20">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-3">Траектория</h1>
        <p className="text-[#A0A0A0] max-w-md mx-auto leading-relaxed">
          Спокойный помощник в выборе образовательного пути. Без срочности — только варианты для
          размышления.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        {cards.map((card) => (
          <button
            key={card.id}
            onClick={() => onNavigate(card.target)}
            className="text-left bg-card border border-white/[0.08] rounded-xl p-6 hover:border-accent/50 hover:bg-elevated transition-colors duration-200"
          >
            <h2 className="text-lg font-medium mb-2">{card.title}</h2>
            <p className="text-sm text-[#A0A0A0] leading-relaxed">{card.description}</p>
          </button>
        ))}
      </div>
    </div>
  )
}
