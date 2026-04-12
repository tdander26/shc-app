import { SectionHeader } from '../../../components/SectionHeader'
import { ContentBlock } from '../../../components/ContentBlock'
import { MenuButton } from '../../../components/MenuButton'
import { BackButton } from '../../../components/BackButton'

export default function BruxismPage() {
  const content = `Bruxism (teeth grinding and jaw clenching) can be due to an imbalance of fatty acids and/or a mineral deficiency but sometimes it is due to the autonomic nervous system being over-sympathetic or "too hyped up." There is also a close link with bruxism to low levels of the neurotransmitter dopamine. Of course we have to look at stress here – isn't that ultimately the reason for every ailment? Too much stress in one's life creates an imbalance between the parasympathetic (relaxed) nervous system and the sympathetic "fight or flight" system. Ultimately prolonged and excessive stress whether from working too hard, exercising too hard, mental/emotional stress, poor dietary habits, pain, and injuries pushes the nervous system too much to the "fight or flight" mode and bruxism results.

Head over the Excess Sympathetic page to learn more.
To see if you're experiencing some dopamine issues, click below.`

  return (
    <div>
      <BackButton />
      <SectionHeader
        title="Bruxism/Jaw Clenching"
        emoji="😬"
      />

      <div className="space-y-4 mb-6">
        <ContentBlock
          title="Overview"
          content={content}
          type="overview"
        />
      </div>

      <div className="space-y-2">
        <MenuButton
          title="Learn More: Excess Sympathetic"
          to="/landing/sympathetic"
        />
        <MenuButton
          title="Dopamine Issues"
          to="/mood"
        />
      </div>
    </div>
  )
}
