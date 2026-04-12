import { SectionHeader } from '../../../components/SectionHeader'
import { ContentBlock } from '../../../components/ContentBlock'
import { MenuButton } from '../../../components/MenuButton'
import { BackButton } from '../../../components/BackButton'
import { useNavigate } from 'react-router-dom'

export default function Wake7To9() {
  const navigate = useNavigate()

  const content = `It's not just about the number of hours you sleep, but also the time you're asleep. Your body's natural circadian rhythm is set to wake up typically between 6:30am and 8:30am. So, if you're having trouble getting up around this time and feel like you need more sleep, most likely there are other health problems that need to be addressed. Your body needs more sleep as it's trying to rest more to recover from other health issues that hopefully you'll find some guidance in this app!`

  return (
    <div>
      <BackButton />
      <SectionHeader
        title="Get Up!"
        emoji="🌅"
      />

      <div className="space-y-4 mb-6">
        <ContentBlock
          title="Overview"
          content={content}
          type="overview"
        />
      </div>

      <MenuButton
        title="Home"
        to="/home"
      />
    </div>
  )
}
