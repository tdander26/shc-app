import { useNavigate } from 'react-router-dom'
import { BackButton } from '../../../components/BackButton'
import { SectionHeader } from '../../../components/SectionHeader'
import { AnswerButtons } from '../../../components/AnswerButton'

export default function FatigueQ9() {
  const navigate = useNavigate()

  return (
    <div>
      <div className="mb-4">
        <BackButton />
      </div>

      <SectionHeader title="Fatigue" emoji="🔋" />

      <div className="card mb-6">
        <h2 className="text-lg font-semibold text-shc-text mb-4">
          Have you had recent blood work?
        </h2>

        <AnswerButtons
          options={[
            { label: 'Yes', onClick: () => navigate('/fatigue/anemia-input') },
            { label: 'No', onClick: () => navigate('/fatigue/get-that-done') }
          ]}
        />
      </div>
    </div>
  )
}
