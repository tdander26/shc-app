import { SectionHeader } from '../../../components/SectionHeader'
import { ContentBlock } from '../../../components/ContentBlock'
import { MenuButton } from '../../../components/MenuButton'
import { BackButton } from '../../../components/BackButton'

export default function Wake1To3() {
  const content = `Waking up between this time is typically a liver issue. Your liver is a major detoxifying organ, breaking down everything from hormones your body makes to substances you consume and breathe. This is the most common time someone wakes up at night and it can sometimes be difficult to pinpoint what the culprit may be. Head over to the Liver page to learn more.`

  return (
    <div>
      <BackButton />
      <SectionHeader
        title="Waking up Between 1am-3am"
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
        title="Learn More: Liver"
        to="/landing/liver"
      />
    </div>
  )
}
