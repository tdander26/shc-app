import { SectionHeader } from '../../../components/SectionHeader'
import { ContentBlock } from '../../../components/ContentBlock'
import { MenuButton } from '../../../components/MenuButton'
import { BackButton } from '../../../components/BackButton'

export default function SleepStressPage() {
  const overview = `Although many people think this is normal because they drank a lot of water before bed, it usually isn't. If you drank a lot of water before going to bed, waking up once to urinate is still not necessarily warranted, and waking at night to urinate more than once or after drinking a reasonable amount of fluid is a common sign of abnormal aldosterone levels. Aldosterone is a hormone secreted by the adrenal glands to regulate electrolytes in your body, primarily sodium and potassium. Low aldosterone levels correlate with a lower level of sodium (more lost through the urine and sweat), and higher aldosterone levels correlate with higher sodium, lower potassium. Aldosterone levels are normally lower during the day than they are at night. This results in you having to urinate more. At night the levels should be higher, causing fluid and therefore urine, retention. Since this is an adrenal secreted hormone, adrenal problems will cause this to function abnormally.`

  const lifestyle = `If your intake of salt (sea salt is ideal) is low during the day, consider increasing. Excess caffeine can also result in excessive urination, so consider cutting that back or eliminating for a few days to see if it helps your sleep. Also, histamines (from allergic reactions) can irritate the bladder resulting in excessive nighttime urination. Check out the Allergy page below to learn more.`

  const supplements = `Cat B, Org Mins, Phosfood, Cyruta Plus.`

  return (
    <div>
      <BackButton />
      <SectionHeader
        title="Sleep Stress"
        emoji="⏰"
      />

      <div className="space-y-4 mb-6">
        <ContentBlock
          title="Overview"
          content={overview}
          type="overview"
        />
        <ContentBlock
          title="Lifestyle"
          content={lifestyle}
          type="lifestyle"
        />
        <ContentBlock
          title="Supplements"
          content={supplements}
          type="supplements"
        />
      </div>

      <div className="space-y-2">
        <MenuButton
          title="Prostate Health"
          to="/landing/prostate"
        />
        <MenuButton
          title="Allergy Info"
          to="/landing/allergy"
        />
      </div>
    </div>
  )
}
