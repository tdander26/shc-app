import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BackButton } from '../../../components/BackButton'
import { SectionHeader } from '../../../components/SectionHeader'
import { AnswerButtons } from '../../../components/AnswerButton'
import { ProgressBar } from '../../../components/ProgressBar'

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

      <ProgressBar current={5} total={9} />

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

        <AnswerButtons
          options={[
            { label: `Yes (${countChecked}+)`, onClick: handleYes, disabled: countChecked < 2 },
            { label: 'No (Less than 2)', onClick: handleNo }
          ]}
        />
      </div>
    </div>
  )
}
