import { SectionHeader } from '../../../components/SectionHeader'
import { ContentBlock } from '../../../components/ContentBlock'
import { MenuButton } from '../../../components/MenuButton'
import { BackButton } from '../../../components/BackButton'

export default function Wake3To5() {
  const content = `It's common that blood sugar levels drop around this time from either high stress hormones (such as cortisol), or from an inadequate diet. Lack of adequate protein or even sufficient carbohydrates consumed during the day will then put the body in a catabolic state resulting in the dropping of blood sugar during sleep and a subsequent rise in stress hormones, resulting in waking up. Head over to the Blood Sugar page to learn more.`

  return (
    <div>
      <BackButton />
      <SectionHeader
        title="Waking up Between 3am-5am"
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
        title="Learn More: Blood Sugar (Dysglycemia)"
        to="/landing/dysglycemia"
      />
    </div>
  )
}
