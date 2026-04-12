import { SectionHeader } from '../../../components/SectionHeader'
import { ContentBlock } from '../../../components/ContentBlock'
import { BackButton } from '../../../components/BackButton'

export default function HealthyHabitsPage() {
  const overview = `Healthy sleep hygiene can really affect your sleep and your entire well-being. Keep your bedroom for two things – sex and sleep, not for working, watching TV, and eating. Here are some other tips!`

  const environment = `Dark and cool. The pineal gland which secretes melatonin so you can sleep is turned off by light sources and warm temperatures (typically over 68 degrees Fahrenheit). The darker the room the better. Remove all major electronic sources from your room – particularly the TV and computers and devices. Blue lights from devices suppress melatonin levels. Blue block glasses can be beneficial if you need to do computer work into the evening before bed. If you wake up - don't get on your phone or ipad!`

  const timeToSleep = `Shoot for going to bed around 10pm, or 11pm at the latest. It's true that you'll sleep much better if you sleep more in line with the sun. Sleeping eight hours from 10pm to 6am is much healthier than 1am to 9am. The later you get to sleep past 11pm, the worse off you'll typically be.`

  const mattress = `Hard and firm. Stay away from are the ones that contain magnets, either in the mattress or under, as well as the memory foam type mattresses as they don't allow you to move at night.`

  return (
    <div>
      <BackButton />
      <SectionHeader
        title="Healthy Sleep Habits"
        emoji="😴"
      />

      <div className="space-y-4 mb-6">
        <ContentBlock
          title="Overview"
          content={overview}
          type="overview"
        />
        <ContentBlock
          title="Environment"
          content={environment}
          type="lifestyle"
        />
        <ContentBlock
          title="Time to Sleep"
          content={timeToSleep}
          type="lifestyle"
        />
        <ContentBlock
          title="Mattress"
          content={mattress}
          type="lifestyle"
        />
      </div>
    </div>
  )
}
