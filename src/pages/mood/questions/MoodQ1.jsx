import { useNavigate } from 'react-router-dom'
import { BackButton } from '../../../components/BackButton'
import { SectionHeader } from '../../../components/SectionHeader'

export default function MoodQ1() {
  const navigate = useNavigate()

  return (
    <div>
      <div className="mb-4">
        <BackButton />
      </div>

      <SectionHeader title="Mood & Emotional Health" emoji="😊" />

      <div className="card mb-6">
        <h2 className="text-lg font-semibold text-shc-text mb-4">
          How's your concentration and ability to focus?
        </h2>

        <div className="space-y-2">
          <button
            onClick={() => navigate('/mood/concentration')}
            className="w-full px-4 py-3 rounded-shc bg-shc-card border border-shc-border text-shc-text font-semibold hover:bg-shc-bg hover:border-shc-green active:scale-95 transition-all duration-200 text-left"
          >
            Ok, but it could be better.
          </button>
          <button
            onClick={() => navigate('/mood/q2')}
            className="w-full px-4 py-3 rounded-shc bg-shc-card border border-shc-border text-shc-text font-semibold hover:bg-shc-bg hover:border-shc-green active:scale-95 transition-all duration-200 text-left"
          >
            Great! No Issues.
          </button>
        </div>
      </div>
    </div>
  )
}
