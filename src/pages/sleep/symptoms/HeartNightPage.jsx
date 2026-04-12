import { SectionHeader } from '../../../components/SectionHeader'
import { ContentBlock } from '../../../components/ContentBlock'
import { MenuButton } from '../../../components/MenuButton'
import { BackButton } from '../../../components/BackButton'

export default function HeartNightPage() {
  const content = `Can you feel or "hear" your heart beat on your pillow at night? This can be from a stress reaction but also it's relatively common in people who are producing excess thyroid hormone or taking excessive thyroid medication. Taking too much, or not properly metabolizing thyroid hormone medication can result in a pounding heart at night and many times the inability to get to sleep and/or stay asleep. Learn more over at the Thyroid page.`

  return (
    <div>
      <BackButton />
      <SectionHeader
        title="Heart Pounding at Night"
        emoji="💓"
      />

      <div className="space-y-4 mb-6">
        <ContentBlock
          title="Overview"
          content={content}
          type="overview"
        />
      </div>

      <MenuButton
        title="Learn More: Thyroid"
        to="/landing/thyroid"
      />
    </div>
  )
}
