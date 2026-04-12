import { SectionHeader } from '../../../components/SectionHeader'
import { ContentBlock } from '../../../components/ContentBlock'
import { MenuButton } from '../../../components/MenuButton'
import { BackButton } from '../../../components/BackButton'

export default function RLSPage() {
  const content = `Restless leg syndrome (RLS) can be due to an imbalance of fatty acids and/or a mineral deficiency but sometimes RLS is due to the autonomic nervous system being over-sympathetic or "too hyped up." There is also a close link with RLS to low levels of the neurotransmitter dopamine. Of course we have to look at stress here – isn't that ultimately the reason for every ailment? Too much stress in one's life creates an imbalance between the parasympathetic (relaxed) nervous system and the sympathetic "fight or flight" system. Ultimately prolonged and excessive stress whether from working too hard, exercising too hard, mental/emotional stress, poor dietary habits, pain, and injuries pushes the nervous system too much to the "fight or flight" mode and RLS results.

Typically before RLS begins or gets very bad there are other warning signs that one might not have realized: a twitchy eyelid, a limb that jumps/jerks as you're falling asleep, sensitivity to lights and sounds, or maybe you get dizzy when standing up quickly.

Head over the Excess Sympathetic page to learn more.
To see if you're experiencing some dopamine issues, click below.`

  return (
    <div>
      <BackButton />
      <SectionHeader
        title="Restless Leg Syndrome"
        emoji="🦵"
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
