import { useNavigate } from 'react-router-dom'
import { BackButton } from '../../components/BackButton'
import { SectionHeader } from '../../components/SectionHeader'
import { MenuButton } from '../../components/MenuButton'

export default function MoodEndPage() {
  const navigate = useNavigate()

  return (
    <div>
      <div className="mb-4">
        <BackButton />
      </div>

      <SectionHeader title="Overall Assessment" emoji="✅" />

      <div className="space-y-4">
        <div className="card">
          <p className="text-shc-muted text-sm leading-relaxed whitespace-pre-line">
            It appears that overall your neurotransmitters are in-check but perhaps you are having other issues that could be affecting your mood and emotional health. Pain from injuries, both chronic and acute, sleep disorders, your hormones, immune system, and digestive system all can greatly affect how you feel. Check out those sections back on the home page.
          </p>
        </div>

        <MenuButton
          title="Home"
          to="/home"
        />
      </div>
    </div>
  )
}
