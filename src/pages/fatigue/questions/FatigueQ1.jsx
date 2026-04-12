import { useNavigate } from 'react-router-dom'
import { BackButton } from '../../../components/BackButton'
import { SectionHeader } from '../../../components/SectionHeader'

export default function FatigueQ1() {
  const navigate = useNavigate()

  return (
    <div>
      <div className="mb-4">
        <BackButton />
      </div>

      <SectionHeader title="Fatigue" emoji="🔋" />

      <div className="card mb-6">
        <h2 className="text-lg font-semibold text-shc-text mb-4">
          Does eating food give you energy?
        </h2>

        <div className="space-y-2">
          <button
            onClick={() => navigate('/landing/dysglycemia')}
            className="w-full px-4 py-3 rounded-shc bg-shc-green text-black font-semibold hover:bg-shc-green-hover active:scale-95 transition-all duration-200 text-left"
          >
            Yes
          </button>
          <button
            onClick={() => navigate('/fatigue/q2y')}
            className="w-full px-4 py-3 rounded-shc bg-shc-card border border-shc-border text-shc-text font-semibold hover:bg-shc-bg hover:border-shc-green active:scale-95 transition-all duration-200 text-left"
          >
            No
          </button>
        </div>
      </div>
    </div>
  )
}
