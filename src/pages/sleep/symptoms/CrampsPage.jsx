import { SectionHeader } from '../../../components/SectionHeader'
import { ContentBlock } from '../../../components/ContentBlock'
import { MenuButton } from '../../../components/MenuButton'
import { BackButton } from '../../../components/BackButton'

export default function CrampsPage() {
  const content = `Leg cramps at night, especially the excruciating "Charley Horse" cramps that occur in the calves, are most commonly due to poor tissue calcium utilization. Calcium, as most know, is important for bone and joint health, but it is also extremely important for the muscles. Calcium aids in muscle contraction and if low, can lead to muscle cramping. Most people get enough calcium in their daily diet, but they do not use it efficiently. If essential fats in the diet are off in combination with other health problems such as poor digestion, these issues must be addressed for calcium to work for you. Other signs of calcium tissue "starvation" are: cold sores/fever blisters, canker sores, bursitis, achy muscles especially in spring/summer during the first few days of yard work, itchy skin, and bursitis, to name a few. Head to the Calcium page to learn more about this process and sleep through the night cramp free!`

  return (
    <div>
      <BackButton />
      <SectionHeader
        title="Cramps at Night"
        emoji="😣"
      />

      <div className="space-y-4 mb-6">
        <ContentBlock
          title="Overview"
          content={content}
          type="overview"
        />
      </div>

      <MenuButton
        title="Learn More: Calcium"
        to="/landing/calcium"
      />
    </div>
  )
}
