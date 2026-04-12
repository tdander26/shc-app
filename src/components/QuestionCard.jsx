import { useState } from 'react'

export function QuestionCard({
  question,
  answers = [],
  onAnswer = () => {},
  type = 'multiple', // 'multiple' or 'yesno'
  description = ''
}) {
  const [selected, setSelected] = useState(null)

  const handleAnswer = (answer) => {
    setSelected(answer)
    onAnswer(answer)
  }

  const buttonOptions = type === 'yesno'
    ? ['Yes', 'No']
    : answers

  return (
    <div className="card slide-up">
      <div className="mb-4">
        <h3 className="text-base font-semibold text-shc-text mb-2">{question}</h3>
        {description && (
          <p className="text-sm text-shc-muted">{description}</p>
        )}
      </div>
      <div className="space-y-2">
        {buttonOptions.map((option, idx) => (
          <button
            key={idx}
            onClick={() => handleAnswer(option)}
            className={`w-full px-4 py-3 rounded-shc font-medium transition-all duration-200 text-left ${
              selected === option
                ? 'bg-shc-green text-black border border-shc-green'
                : 'bg-shc-bg border border-shc-border text-shc-text hover:border-shc-green'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}
