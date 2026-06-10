import { useState } from 'react'
import { diagnosticQuestions, contextOptions } from '../data/mockData'

export default function Diagnostic({ mode, onComplete }) {
  const questions = mode === 'light' ? [] : diagnosticQuestions
  const totalSteps = questions.length + 1
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState({})
  const [context, setContext] = useState({ city: null, budget: null, relocation: null })

  const isContextStep = step === questions.length
  const contextComplete = context.city && context.budget && context.relocation

  const selectAnswer = (questionId, optionId) => {
    setAnswers((prev) => ({ ...prev, [questionId]: optionId }))
    setTimeout(() => setStep((s) => s + 1), 150)
  }

  const selectContext = (key, value) => {
    setContext((prev) => ({ ...prev, [key]: value }))
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-8 py-12 sm:py-16">
      <div className="flex justify-center gap-2 mb-12">
        {Array.from({ length: totalSteps }).map((_, i) => (
          <span
            key={i}
            className={`w-2.5 h-2.5 rounded-full transition-colors duration-200 ${
              i <= step ? 'bg-accent' : 'bg-white/15'
            }`}
          />
        ))}
      </div>

      {!isContextStep && (
        <div key={step} className="animate-fadeIn">
          <h2 className="text-xl sm:text-2xl font-medium text-center mb-8">
            {questions[step].question}
          </h2>
          <div className="flex flex-col gap-4">
            {questions[step].options.map((opt) => (
              <button
                key={opt.id}
                onClick={() => selectAnswer(questions[step].id, opt.id)}
                className={`text-left bg-card border rounded-xl p-6 transition-colors duration-200 hover:border-accent/50 hover:bg-elevated ${
                  answers[questions[step].id] === opt.id
                    ? 'border-accent bg-elevated'
                    : 'border-white/[0.08]'
                }`}
              >
                {opt.text}
              </button>
            ))}
          </div>
        </div>
      )}

      {isContextStep && (
        <div key="context" className="animate-fadeIn">
          <h2 className="text-xl sm:text-2xl font-medium text-center mb-8">
            Расскажите немного о планах
          </h2>

          <ContextGroup
            label="Город"
            options={contextOptions.city}
            selected={context.city}
            onSelect={(v) => selectContext('city', v)}
          />
          <ContextGroup
            label="Бюджет на образование"
            options={contextOptions.budget}
            selected={context.budget}
            onSelect={(v) => selectContext('budget', v)}
          />
          <ContextGroup
            label="Готовность к переезду"
            options={contextOptions.relocation}
            selected={context.relocation}
            onSelect={(v) => selectContext('relocation', v)}
          />

          <button
            onClick={onComplete}
            disabled={!contextComplete}
            className={`w-full mt-4 py-4 rounded-xl font-medium transition-colors duration-200 ${
              contextComplete
                ? 'bg-accent text-white hover:bg-accent/90'
                : 'bg-elevated text-[#606060] cursor-not-allowed'
            }`}
          >
            Смотреть результат →
          </button>
        </div>
      )}
    </div>
  )
}

function ContextGroup({ label, options, selected, onSelect }) {
  return (
    <div className="mb-6">
      <p className="text-sm text-[#A0A0A0] mb-3">{label}</p>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => onSelect(opt)}
            className={`px-4 py-2 rounded-full text-sm border transition-colors duration-200 ${
              selected === opt
                ? 'bg-accent text-white border-accent'
                : 'border-white/[0.08] text-[#A0A0A0] hover:text-white hover:border-white/20'
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  )
}
