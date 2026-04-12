import { useNavigate } from 'react-router-dom'
import { BackButton } from '../../components/BackButton'
import { SectionHeader } from '../../components/SectionHeader'

export default function GetThatDone() {
  const navigate = useNavigate()

  return (
    <div>
      <div className="mb-4">
        <BackButton />
      </div>

      <SectionHeader title="Fatigue" emoji="🔋" />

      <div className="card mb-6">
        <h2 className="text-lg font-semibold text-shc-text mb-4">
          Get that SHIT DONE!
        </h2>

        <p className="text-shc-muted text-sm leading-relaxed mb-6">
          Get that SHIT DONE!
        </p>

        <button
          onClick={() => navigate('/')}
          className="w-full px-4 py-3 rounded-shc bg-shc-green text-black font-semibold hover:bg-shc-green-hover active:scale-95 transition-all duration-200"
        >
          Back Home
        </button>
      </div>
    </div>
  )
}
