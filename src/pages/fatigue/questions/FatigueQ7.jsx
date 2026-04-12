import { useNavigate } from 'react-router-dom'
import { BackButton } from '../../../components/BackButton'
import { SectionHeader } from '../../../components/SectionHeader'
import { AnswerButtons } from '../../../components/AnswerButton'
import { ProgressBar } from '../../../components/ProgressBar'

export default function FatigueQ7() {
  const navigate = useNavigate()

  return (
    <div>
      <div className="mb-4">
        <BackButton />
      </div>

      <ProgressBar current={7} total={9} />

      <SectionHeader title="Fatigue" emoji="🔋" />

      <div className="card mb-6">
        <h2 className="text-lg font-semibold text-shc-text mb-4">
          Do you get sick often?
        </h2>

        <AnswerButtons
          options={[
            { label: 'Yes', onClick: () => navigate('/fatigue/immune-transition') },
            { label: 'No', onClick: () => navigate('/fatigue/q7n') }
          ]}
        />
      </div>
    </div>
  )
}
