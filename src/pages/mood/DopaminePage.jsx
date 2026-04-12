import { useNavigate } from 'react-router-dom'
import { BackButton } from '../../components/BackButton'
import { SectionHeader } from '../../components/SectionHeader'
import { ContentBlock } from '../../components/ContentBlock'
import { MenuButton } from '../../components/MenuButton'

export default function DopaminePage() {
  const navigate = useNavigate()

  return (
    <div>
      <div className="mb-4">
        <BackButton />
      </div>

      <SectionHeader title="Dopamine Issues" emoji="⚡" />

      <div className="space-y-4">
        <ContentBlock
          title="Overview"
          type="overview"
          content="These symptoms are often associated with the neurotransmitter dopamine, which is greatly affected by gut health and hormonal health, specifically testosterone levels in men and progesterone levels in women."
        />

        <ContentBlock
          title="Lifestyle"
          type="lifestyle"
          content="Meats, eggs, and cheeses contain high levels of the amino acid phenylalanine, which can help the body make more dopamine. Passionate relationships (ie: having a good love life) and greatly improve dopamine levels. Check out the hormone sections below for more hormonal health suggestions. Also, since the majority of dopamine is actually made in your gut, you may want to see the digestion section if you're having any gut issues."
        />

        <ContentBlock
          title="Supplements"
          type="supplements"
          content={'MethylB12, 5MTHF, P5P, Zn, Mg. Consider anemia: lack of iron or other red blood cell nutrients (a complete blood count "CBC" lab test would screen for this).'}
          link="https://www.dssorders.com/drtodd"
        />

        <div className="space-y-2 mt-6">
          <MenuButton
            title="Digestion"
            to="/digestion"
          />
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
