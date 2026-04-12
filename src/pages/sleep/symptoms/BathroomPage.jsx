import { SectionHeader } from '../../../components/SectionHeader'
import { ContentBlock } from '../../../components/ContentBlock'
import { MenuButton } from '../../../components/MenuButton'
import { BackButton } from '../../../components/BackButton'

export default function BathroomPage() {
  const section1 = `Are you waking up multiple times at night and can't get back to sleep until you urinate some? Check out the Sleep Stress page here.`

  const section2 = `Are you a guy having prostate issues? If you are, or aren't sure, head over to the Prostate Health page.`

  return (
    <div>
      <BackButton />
      <SectionHeader
        title="Waking Up to go to the Bathroom"
        emoji="🚽"
      />

      <div className="space-y-4 mb-6">
        <div className="card border-l-4 border-blue-500 bg-blue-500/10">
          <p className="text-shc-muted text-sm leading-relaxed whitespace-pre-line">
            Typically there are two main reasons why you may wake up to urinate at night and this is very rarely related to how much water/liquid you drank later in the evening or close to going to bed. Click on the option below to help guide you.
          </p>
        </div>
      </div>

      <div className="space-y-2">
        <MenuButton
          title="Sleep Stress"
          to="/sleep/sleep-stress"
        />
        <MenuButton
          title="Prostate Health"
          to="/landing/prostate"
        />
      </div>
    </div>
  )
}
