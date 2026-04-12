import { useNavigate } from 'react-router-dom'
import { BackButton } from '../../../components/BackButton'
import { SectionHeader } from '../../../components/SectionHeader'

export default function AnemiaTransition() {
  const navigate = useNavigate()

  return (
    <div>
      <div className="mb-4">
        <BackButton />
      </div>

      <SectionHeader title="Fatigue" emoji="🔋" />

      <div className="card mb-6">
        <p className="text-shc-muted text-sm leading-relaxed whitespace-pre-line mb-6">
          You may be low in red blood building nutrients such as iron and/or vitamin B12
        </p>

        <button
          onClick={() => navigate('/home')}
          className="w-full px-4 py-3 rounded-shc bg-shc-green text-black font-semibold hover:bg-shc-green-hover active:scale-95 transition-all duration-200"
        >
          Continue
        </button>
      </div>
    </div>
  )
}
