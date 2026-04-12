import { SectionHeader } from '../../../components/SectionHeader'
import { ContentBlock } from '../../../components/ContentBlock'
import { MenuButton } from '../../../components/MenuButton'
import { BackButton } from '../../../components/BackButton'

export default function WakingMultiplePage() {
  const content = `Provided you don't have all your pets on your bed, tossing and turning all night is usually due to spikes from the adrenal gland's hormone cortisol or epinephrine which is a result of too much emotional, nutritional, or physical stress. Your body increases epinephrine levels when your blood sugar drops too low so it can pull glucose (sugar) from glycogen (stored sugar) from your liver. Your body will increase cortisol to break down valuable anabolic (tissue building) amino acids from protein to convert into glucose to elevate your blood sugar. That surge in either stress hormone will wake you up, typically around 1-3am but for some people it's often throughout the night. The main nutritional stress is often too much sugar, and a close second is caffeine, even if you only drink coffee/caffeine it in the morning. Learn more how to stabilize your blood sugar at the Dysglycemia page.`

  return (
    <div>
      <BackButton />
      <SectionHeader
        title="Waking Up at Multiple Times"
        emoji="🌙"
      />

      <div className="space-y-4 mb-6">
        <ContentBlock
          title="Overview"
          content={content}
          type="overview"
        />
      </div>

      <MenuButton
        title="Learn More: Dysglycemia"
        to="/landing/dysglycemia"
      />
    </div>
  )
}
