import { SectionHeader } from '../../../components/SectionHeader'
import { ContentBlock } from '../../../components/ContentBlock'
import { MenuButton } from '../../../components/MenuButton'
import { BackButton } from '../../../components/BackButton'

export default function InsomniaPage() {
  const content = `Does it take you more than fifteen minutes to fall asleep? This is most commonly due to high cortisol levels at night. Cortisol, one of the hormones secreted by the adrenal glands, should normally be low at night. High levels due to stress will keep you up. Cortisol and melatonin (the hormone that helps you get to sleep), are inversely related to one another. So high cortisol levels mean suppressed melatonin levels, and that hormone needs to elevate at night to provide restful sleep. The stress can be emotional/mental, chemical/nutritional (too much sugar or caffeine are very common – even if you only consume caffeine in the early part of the day that can affect your sleep many hours later), as well as physical (working out too hard, pain and injuries). If you are having trouble falling asleep at a certain time then go back and check out those time sections but if you just can't get to sleep then head over the Excess Sympathetic page to learn more.`

  return (
    <div>
      <BackButton />
      <SectionHeader
        title="Insomnia/Inability to Fall Asleep"
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
        title="Learn More: Excess Sympathetic"
        to="/landing/sympathetic"
      />
    </div>
  )
}
