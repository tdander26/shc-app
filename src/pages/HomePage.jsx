import { MenuButton } from '../components/MenuButton'

const sections = [
  { title: 'Fatigue', to: '/fatigue', icon: '😴' },
  { title: 'Sleep', to: '/sleep', icon: '🛌' },
  { title: 'Mood', to: '/mood', icon: '😊' },
  { title: 'Skin', to: '/skin', icon: '👨‍🦰' },
  { title: 'Head Pain', to: '/headaches', icon: '🤕' },
  { title: 'Body Pain', to: '/body-pain', icon: '💪' },
  { title: 'Male Hormones', to: '/male-hormones', icon: '⚡' },
  { title: 'Female Hormones', to: '/female-hormones', icon: '🌸' },
  { title: 'Digestion', to: '/digestion', icon: '🍽️' },
  { title: 'Immune', to: '/immune', icon: '🛡️' }
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
            icon={section.icon}
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
