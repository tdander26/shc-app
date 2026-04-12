import { useNavigate } from 'react-router-dom'
import { BackButton } from '../../../components/BackButton'
import { SectionHeader } from '../../../components/SectionHeader'

export default function FatigueQ3Y() {
  const navigate = useNavigate()

  const options = [
    {
      label: 'Protein',
      description: 'Examples would include fish, chicken, and soyburgers.',
      destination: '/landing/hcl'
    },
    {
      label: 'Carbs',
      description: 'Examples would include fish, chicken, and soyburgers.',
      destination: '/landing/insulin-resistance'
    },
    {
      label: 'Fats',
      description: 'Examples would include fish, chicken, and soyburgers.',
      destination: '/landing/fat-metabolism'
    },
    {
      label: 'Uncertain',
      description: 'Examples would include fish, chicken, and soyburgers.',
      destination: '/landing/allergy'
    }
  ]

  return (
    <div>
      <div className="mb-4">
        <BackButton />
      </div>

      <SectionHeader title="Fatigue" emoji="🔋" />

      <div className="card mb-6">
        <h2 className="text-lg font-semibold text-shc-text mb-4">
          Which of the following do you feel more symptoms after eating?
        </h2>

        <div className="space-y-2">
          {options.map((option) => (
            <button
              key={option.label}
              onClick={() => navigate(option.destination)}
              className="w-full p-3 rounded-shc bg-shc-card border border-shc-border text-shc-text hover:bg-shc-bg hover:border-shc-green active:scale-95 transition-all duration-200 text-left"
            >
              <div className="font-semibold">{option.label}</div>
              <div className="text-xs text-shc-muted mt-1">{option.description}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
