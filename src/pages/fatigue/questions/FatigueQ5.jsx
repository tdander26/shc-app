import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BackButton } from '../../../components/BackButton'
import { SectionHeader } from '../../../components/SectionHeader'

export default function FatigueQ5() {
  const navigate = useNavigate()
  const [checked, setChecked] = useState({})

  const symptoms = [
    'Headaches around the front of your head as if you were wearing a hat.',
    'Tired after eating.',
    'Sugar or Salt Cravings.',
    'Burning low legs and feet, or feet tire easily while standing.',
    'Irregular heartbeat/palpitations.',
    'Need to get up more than once at night to urinate.'
  ]

  const toggleSymptom = (index) => {
    setChecked(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  const countChecked = Object.values(checked).filter(Boolean).length

  const handleYes = () => {
    if (countChecked >= 2) {
      navigate('/landing/parasympathetic')
    }
  }

  const handleNo = () => {
    navigate('/fatigue/q6')
  }

  return (
    <div>
      <div className="mb-4">
        <BackButton />
      </div>

      <SectionHeader title="Fatigue" emoji="🔋" />

      <div className="card mb-6">
        <h2 className="text-lg font-semibold text-shc-text mb-4">
          Do you feel like you have two or more of the following?
        </h2>

        <div className="space-y-3 mb-6">
          {symptoms.map((symptom, idx) => (
            <label
              key={idx}
              className="flex items-start gap-3 p-3 rounded-shc border border-shc-border cursor-pointer hover:bg-shc-bg transition-colors"
            >
              <input
                type="checkbox"
                checked={checked[idx] || false}
                onChange={() => toggleSymptom(idx)}
                className="mt-1 w-5 h-5 accent-shc-green cursor-pointer"
              />
              <span className="text-sm text-shc-text">{symptom}</span>
            </label>
          ))}
        </div>

        <div className="text-sm text-shc-muted mb-4">
          Selected: {countChecked} / 6
        </div>

        <div className="space-y-2">
          <button
            onClick={handleYes}
            disabled={countChecked < 2}
            className="w-full px-4 py-3 rounded-shc bg-shc-green text-black font-semibold hover:bg-shc-green-hover active:scale-95 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-left"
          >
            Yes ({countChecked}+)
          </button>
          <button
            onClick={handleNo}
            className="w-full px-4 py-3 rounded-shc bg-shc-card border border-shc-border text-shc-text font-semibold hover:bg-shc-bg hover:border-shc-green active:scale-95 transition-all duration-200 text-left"
          >
            No (Less than 2)
          </button>
        </div>
      </div>
    </div>
  )
}
