import { useNavigate } from 'react-router-dom'
import { BackButton } from '../../../components/BackButton'
import { SectionHeader } from '../../../components/SectionHeader'

export default function MoodQ3() {
  const navigate = useNavigate()

  return (
    <div>
      <div className="mb-4">
        <BackButton />
      </div>

      <SectionHeader title="Mood & Emotional Health" emoji="😊" />

      <div className="card mb-6">
        <h2 className="text-lg font-semibold text-shc-text mb-4">
          Do you often feel overwhelmed or have trouble quieting your mind and perhaps need to sleep with background noise (such as the TV on)?
        </h2>

        <div className="space-y-2">
          <button
            onClick={() => navigate('/mood/gaba')}
            className="w-full px-4 py-3 rounded-shc bg-shc-card border border-shc-border text-shc-text font-semibold hover:bg-shc-bg hover:border-shc-green active:scale-95 transition-all duration-200 text-left"
          >
            Yes
          </button>
          <button
            onClick={() => navigate('/mood/q4')}
            className="w-full px-4 py-3 rounded-shc bg-shc-card border border-shc-border text-shc-text font-semibold hover:bg-shc-bg hover:border-shc-green active:scale-95 transition-all duration-200 text-left"
          >
            No
          </button>
        </div>
      </div>
    </div>
  )
}
