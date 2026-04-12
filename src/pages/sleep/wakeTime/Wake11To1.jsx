import { SectionHeader } from '../../../components/SectionHeader'
import { ContentBlock } from '../../../components/ContentBlock'
import { MenuButton } from '../../../components/MenuButton'
import { BackButton } from '../../../components/BackButton'

export default function Wake11To1() {
  const content = `The inability to fall asleep before 1am, or if you're asleep before 11pm and you wake up between 11pm-1am, typically indicates something stressing out your gallbladder, (or if your gallbladder has been removed, then your bile ducts). Head over to the Gallbladder page to learn more.`

  return (
    <div>
      <BackButton />
      <SectionHeader
        title="Waking up Between 11pm-1am"
        emoji="🕐"
      />

      <div className="space-y-4 mb-6">
        <ContentBlock
          title="Overview"
          content={content}
          type="overview"
        />
      </div>

      <MenuButton
        title="Learn More: Gallbladder"
        to="/landing/gallbladder"
      />
    </div>
  )
}
