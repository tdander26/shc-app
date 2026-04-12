import { SectionHeader } from '../../components/SectionHeader'
import { MenuButton } from '../../components/MenuButton'
import { BackButton } from '../../components/BackButton'

export default function SleepProblems() {
  const problems = [
    { label: 'Waking up at a Certain Time', to: '/sleep/wake-time' },
    { label: 'Nightmares or Night Terrors', to: '/sleep/nightmares' },
    { label: 'Insomnia or Trouble Falling Asleep', to: '/sleep/insomnia' },
    { label: 'Waking Up Multiple Times', to: '/sleep/waking-multiple' },
    { label: 'Hands Go Numb', to: '/sleep/numbness' },
    { label: 'Heart Pounding at Night', to: '/sleep/heart-night' },
    { label: 'Restless Leg Syndrome', to: '/sleep/rls' },
    { label: 'Cramping at Night', to: '/sleep/cramps' },
    { label: 'Night Sweats', to: '/sleep/night-sweats' },
    { label: 'Snoring or Sleep Apnea', to: '/sleep/snoring' },
    { label: 'Bruxism/Jaw Clenching', to: '/sleep/bruxism' },
    { label: 'Waking up to go to the Bathroom', to: '/sleep/bathroom' },
  ]

  return (
    <div>
      <BackButton />
      <SectionHeader
        title="Problems with Sleep"
        emoji="🛌"
      />

      <div className="space-y-2 mb-8">
        {problems.map((problem, idx) => (
          <MenuButton
            key={idx}
            title={problem.label}
            to={problem.to}
          />
        ))}
      </div>

      <div className="space-y-2">
        <MenuButton
          title="Healthy Sleep Habits"
          to="/sleep/healthy-habits"
        />
      </div>
    </div>
  )
}
