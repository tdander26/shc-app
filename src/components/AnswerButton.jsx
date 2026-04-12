import { useState } from 'react'

/**
 * Equal-weight answer buttons for decision tree questions.
 * Both options look the same until tapped — then the selected one
 * briefly highlights before navigating.
 */
export function AnswerButtons({ options, className = '' }) {
  const [selected, setSelected] = useState(null)

  const handleClick = (option) => {
    setSelected(option.label)
    // Brief highlight before navigation
    setTimeout(() => {
      option.onClick()
    }, 250)
  }

  return (
    <div className={`space-y-2 ${className}`}>
      {options.map((option) => (
        <button
          key={option.label}
          onClick={() => handleClick(option)}
          disabled={option.disabled}
          className={`w-full px-4 py-3.5 rounded-shc font-semibold transition-all duration-200 text-left flex items-center justify-between ${
            selected === option.label
              ? 'bg-white/10 border-2 border-shc-green text-shc-green scale-[0.98]'
              : 'bg-shc-card border border-shc-border text-shc-text hover:bg-shc-bg hover:border-shc-green/50 active:scale-[0.98]'
          } ${option.disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          <span>{option.label}</span>
          {selected === option.label && (
            <svg className="w-5 h-5 text-shc-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          )}
        </button>
      ))}
    </div>
  )
}
