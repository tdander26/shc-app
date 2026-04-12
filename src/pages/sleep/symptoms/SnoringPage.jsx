import { SectionHeader } from '../../../components/SectionHeader'
import { ContentBlock } from '../../../components/ContentBlock'
import { MenuButton } from '../../../components/MenuButton'
import { BackButton } from '../../../components/BackButton'

export default function SnoringPage() {
  const content = `Snoring is a sign of distress and when you stop breathing while sleeping (apnea) is a sign of significant health distress. If you're to the point where you need a CPAP machine, well, you've got some work to do to really improve your health. This stressful breathing can result from many problems – but it is not right and needs to be corrected. When someone's health improves, so does the snoring. I'd suggest you head on over the Breathing page to learn more about breathing and health.`

  return (
    <div>
      <BackButton />
      <SectionHeader
        title="Snoring or Sleep Apnea"
        emoji="😴"
      />

      <div className="space-y-4 mb-6">
        <ContentBlock
          title="Overview"
          content={content}
          type="overview"
        />
      </div>

      <MenuButton
        title="Learn More: Breathing"
        to="/landing/breathing"
      />
    </div>
  )
}
