import { useNavigate } from 'react-router-dom'
import { BackButton } from '../../components/BackButton'
import { SectionHeader } from '../../components/SectionHeader'
import { ContentBlock } from '../../components/ContentBlock'
import { MenuButton } from '../../components/MenuButton'

export default function ConcentrationPage() {
  const navigate = useNavigate()

  return (
    <div>
      <div className="mb-4">
        <BackButton />
      </div>

      <SectionHeader title="Acetylcholine Issues" emoji="🧠" />

      <div className="space-y-4">
        <ContentBlock
          title="Overview"
          type="overview"
          content="Poor concentration and focus, lack of creativity, memory lapses, and forgetting people's names or recognize objects can be due to a problem with the neurotransmitter acetylcholine."
        />

        <ContentBlock
          title="Lifestyle"
          type="lifestyle"
          content="Consider a high fat diet from pasture-raised egg yolks, grass-fed meats and dairy, and raw nuts to obtain the nutrient choline which then converts to acetylcholine. If you feel as though your memory is slipping as you're aging then check out the hormonal sections."
        />

        <ContentBlock
          title="Supplements"
          type="supplements"
          content="Cat G, Wheat Germ Oil, Mn, B12"
        />

        <div className="space-y-2 mt-6">
          <MenuButton
            title="Female Hormones"
            to="/female-hormones"
          />
          <MenuButton
            title="Male Hormones"
            to="/male-hormones"
          />
        </div>
      </div>
    </div>
  )
}
