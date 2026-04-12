import { SectionHeader } from '../../../components/SectionHeader'
import { ContentBlock } from '../../../components/ContentBlock'
import { MenuButton } from '../../../components/MenuButton'
import { BackButton } from '../../../components/BackButton'

export default function NightSweatsPage() {
  const content = `Night sweats are due to your body's inability to properly detoxify certain substances, typically hormones, through your liver, so it relies on your skin to "flush" them out. This is more common in women, especially during menopause. If you're under a lot of stress and can't get back to sleep after waking up then most likely your stress hormone, cortisol, is too high. Head over to the Liver page to learn more how to break these hormones down so your liver works better and you stop the excessive sweating.`

  return (
    <div>
      <BackButton />
      <SectionHeader
        title="Night Sweats"
        emoji="💦"
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
