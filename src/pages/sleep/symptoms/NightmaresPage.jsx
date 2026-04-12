import { SectionHeader } from '../../../components/SectionHeader'
import { ContentBlock } from '../../../components/ContentBlock'
import { MenuButton } from '../../../components/MenuButton'
import { BackButton } from '../../../components/BackButton'

export default function NightmaresPage() {
  const content = `Nightmares and especially night terrors are from a liver detoxification problem. This is your liver's inability to properly break down certain substances such as medications, hormones (such as estrogen or insulin), toxic substances you may have been exposed to, or even certain foods you've consumed or substances you've breathed. Head over to the Liver page to learn more.`

  return (
    <div>
      <BackButton />
      <SectionHeader
        title="Nightmares / Night Terrors"
        emoji="😰"
      />

      <div className="space-y-4 mb-6">
        <ContentBlock
          title="Overview"
          content={content}
          type="overview"
        />
      </div>

      <MenuButton
        title="Learn More: Liver"
        to="/landing/liver"
      />
    </div>
  )
}
