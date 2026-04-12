import { useNavigate } from 'react-router-dom'
import { BackButton } from '../../components/BackButton'
import { SectionHeader } from '../../components/SectionHeader'
import { ContentBlock } from '../../components/ContentBlock'

export default function SADPage() {
  const navigate = useNavigate()

  return (
    <div>
      <div className="mb-4">
        <BackButton />
      </div>

      <SectionHeader title="Seasonal Affective Disorder" emoji="🌙" />

      <div className="space-y-4">
        <ContentBlock
          title="Overview"
          type="overview"
          content="This condition is very common due to shorted hours of daylight resulting in an imbalance of our circadian rhythm, our \"body clock.\" For some people, it is also the lack of vitamin D, which we make from the sun's UVB rays."
        />

        <ContentBlock
          title="Lifestyle"
          type="lifestyle"
          content="Get outside! Nature and sunshine will naturally help you feel better and improve your serotonin levels. Although the light from the sun will help improve your body clock, for many parts of the world there are little to no UVB rays to make vitamin D during the winter months as it is based off of the latitude of location and therefore the angle of the sun. Fun tip: If your shadow is longer than you are tall then the sun is too low to give you the UVB that you need for vitamin D. If the sun is high and now your shadow is shorter than you, then you are most likely getting some UVB rays as long as your skin is exposed (torso, thighs, and arms most ideal). If you're unable to get outside then perhaps consider a sunlamp. There are many on the market but you want one that mimics sunshine and the UVB rays. Follow the guidelines on the specific product."
        />

        <ContentBlock
          title="Supplements"
          type="supplements"
          content="Vitamin D, EPA."
        />

        <button
          onClick={() => navigate('/mood')}
          className="w-full mt-6 px-4 py-3 rounded-shc bg-shc-green text-black font-semibold hover:bg-shc-green-hover active:scale-95 transition-all duration-200"
        >
          Back to Mood
        </button>
      </div>
    </div>
  )
}
