import { useNavigate } from 'react-router-dom'
import { BackButton } from '../../components/BackButton'
import { SectionHeader } from '../../components/SectionHeader'
import { ContentBlock } from '../../components/ContentBlock'
import { MenuButton } from '../../components/MenuButton'

export default function GABAPage() {
  const navigate = useNavigate()

  return (
    <div>
      <div className="mb-4">
        <BackButton />
      </div>

      <SectionHeader title="GABA Issues" emoji="😌" />

      <div className="space-y-4">
        <ContentBlock
          title="Overview"
          type="overview"
          content="These symptoms are often associated with the neurotransmitter GABA, our most powerful inhibitory neurotransmitter. GABA greatly affects your sleep and your overall ability to relax. If you feel like you need to have some alcohol at night to chill-out then you most likely aren't supporting healthy GABA levels."
        />

        <ContentBlock
          title="Lifestyle"
          type="lifestyle"
          content={'It\'s very important to stay away from the excitatory amino acids and their chemical derivatives as they will override your inhibitory GABA levels. These two substances are glutamates, commonly found as MSG (monosodium glutamate), asparates, commonly known as NutraSweet, commonly found in diet drinks and foods (and that blue packet Equal). MSG is also hidden under the names "hydrolyzed" and "autolyzed", so be sure to read ingredients. Check out the other health tips in the Sleep section as without sufficient GABA levels, you won\'t sleep well. Breathe! Learn healthy breathing tips to naturally calm down your nervous system.'}
        />

        <ContentBlock
          title="Supplements"
          type="supplements"
          content="Mn, Zn, P5P, Passion Flower, Valerian Root. Also, for faster relief Taurine, L-Theanine, and GABA"
          link="https://www.dssorders.com/drtodd"
        />

        <div className="space-y-2 mt-6">
          <MenuButton
            title="Sleep!"
            to="/sleep"
          />
          <MenuButton
            title="Breathe!"
            to="/landing/breathing"
          />
        </div>
      </div>
    </div>
  )
}
