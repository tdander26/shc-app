import { MenuButton } from '../components/MenuButton'

const sections = [
  { title: 'Fatigue', to: '/fatigue', iconSrc: '/icons/fatigue-icon.png' },
  { title: 'Sleep', to: '/sleep', iconSrc: '/icons/sleep-icon.png' },
  { title: 'Mood', to: '/mood', iconSrc: '/icons/mood-icon.png' },
  { title: 'Skin', to: '/skin', iconSrc: '/icons/skin-icon.png' },
  { title: 'Head Pain', to: '/headaches', iconSrc: '/icons/head-pain-icon.svg' },
  { title: 'Body Pain', to: '/body-pain', iconSrc: '/icons/body-pain-icon.png' },
  { title: 'Male Hormones', to: '/male-hormones', iconSrc: '/icons/male-hormones-icon.png' },
  { title: 'Female Hormones', to: '/female-hormones', iconSrc: '/icons/female-hormones-icon.png' },
  { title: 'Digestion', to: '/digestion', iconSrc: '/icons/digestion-icon.png' },
  { title: 'Immune', to: '/immune', iconSrc: '/icons/immune-icon.png' }
]

export default function HomePage() {
  return (
    <div className="slide-up">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-shc-text text-center mb-2">Symptoms Solution</h1>
        <p className="text-center text-shc-muted text-sm">Your guide to symptom-based health</p>
      </div>

      <div className="space-y-3 mb-6">
        {sections.map((section) => (
          <MenuButton
            key={section.to}
            title={section.title}
            to={section.to}
            iconSrc={section.iconSrc}
          />
        ))}
      </div>

      <MenuButton
        title="Disclaimer"
        to="/disclaimer"
        icon="⚠️"
      />

      <div className="mt-8 p-4 rounded-shc bg-shc-card border border-shc-border">
        <p className="text-xs text-shc-muted text-center leading-relaxed">
          This app provides general health coaching information. Always consult with a healthcare professional before making changes to your health routine.
        </p>
      </div>
    </div>
  )
}
