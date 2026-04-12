import { SectionHeader } from '../../../components/SectionHeader'
import { ContentBlock } from '../../../components/ContentBlock'
import { MenuButton } from '../../../components/MenuButton'
import { BackButton } from '../../../components/BackButton'

export default function Wake5To7() {
  const content = `Something affecting your digestion in a negative way will often cause you to wake up during this time and be up for the rest of the night (well, now morning). Food sensitivities as well as unhealthy gut bacteria and other microbes can impair gut function and throw off your early morning sleep. Check out the digestion section to learn more.`

  return (
    <div>
      <BackButton />
      <SectionHeader
        title="Waking up Between 5am-7am"
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
        title="Learn More: Digestion"
        to="/digestion"
      />
    </div>
  )
}
