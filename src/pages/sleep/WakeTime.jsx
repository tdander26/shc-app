import { SectionHeader } from '../../components/SectionHeader'
import { MenuButton } from '../../components/MenuButton'
import { BackButton } from '../../components/BackButton'

export default function WakeTime() {
  const times = [
    { label: '11pm - 1am', to: '/sleep/wake-11-1' },
    { label: '1am - 3am', to: '/sleep/wake-1-3' },
    { label: '3am - 5am', to: '/sleep/wake-3-5' },
    { label: '5am - 7am', to: '/sleep/wake-5-7' },
    { label: '7am - 9am', to: '/sleep/wake-7-9' },
  ]

  return (
    <div>
      <BackButton />
      <SectionHeader
        title="Waking Up at A Certain Time"
        emoji="🕐"
      />

      <div className="space-y-4 mb-6">
        <div className="card border-l-4 border-blue-500 bg-blue-500/10">
          <p className="text-shc-muted text-sm leading-relaxed whitespace-pre-line">
            Please select the time that fits within the list below.
          </p>
        </div>
      </div>

      <div className="space-y-2">
        {times.map((time, idx) => (
          <MenuButton
            key={idx}
            title={time.label}
            to={time.to}
          />
        ))}
      </div>
    </div>
  )
}
