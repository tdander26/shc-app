import { SectionHeader } from '../../../components/SectionHeader'
import { ContentBlock } from '../../../components/ContentBlock'
import { MenuButton } from '../../../components/MenuButton'
import { BackButton } from '../../../components/BackButton'

export default function NumbnessPage() {
  const content = `Numb arms, hands, or finders can be from unstable blood sugar levels or from some nerve entrapment or irritation in the neck (cervical) or upper back (thoracic) area. Are you able to relieve the hand numbness by moving your arms in different positions? For example, if your right hand is numb and you move your right arm/shoulder to another position does the numbness go away? Is so, that would signify some connective tissue issue causing some nerve entrapment. Seeking out a chiropractor, physical therapist, acupuncturist, or other qualified manual therapist may provide relief.

Hand numbness can also come from inflammation to the connective tissue affecting your nerves. This is common with blood sugar handling issues. Learn more how to stabilize your blood sugar at the Dysglycemia page.`

  return (
    <div>
      <BackButton />
      <SectionHeader
        title="Numbness at Night"
        emoji="🤚"
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
