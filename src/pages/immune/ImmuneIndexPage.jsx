import { SectionHeader } from '../../components/SectionHeader'
import { MenuButton } from '../../components/MenuButton'
import { ContentBlock } from '../../components/ContentBlock'

export default function ImmuneIndexPage() {
  return (
    <div>
      <SectionHeader
        title="Immune System"
        emoji="🛡️"
        subtitle="Strengthening immune function"
      />

      <div className="space-y-4 mb-6">
        <ContentBlock
          title="Overview"
          content="Your immune system is your body's defense against infections and disease. A healthy immune system depends on proper nutrition, stress management, sleep, and overall lifestyle choices. When your immune system is compromised, you become susceptible to various infections and illnesses. Supporting immune function is essential for long-term health."
          type="overview"
        />

        <ContentBlock
          title="Key Areas"
          content="Immune health is influenced by: gut health (where 70% of your immune system resides), nutritional status, stress levels, sleep quality, exercise, and overall lifestyle. Addressing all these areas is essential for optimal immune function."
          type="lifestyle"
        />

        <ContentBlock
          title="Nutritional Support"
          content="Key nutrients for immune support include: Vitamin C, Vitamin D, Zinc, Selenium, Iron, B vitamins, Vitamin A, and various antioxidants. Adequate protein intake is also critical for antibody production."
          type="supplements"
          link="https://www.dssorders.com/drtodd"
        />
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-shc-text mb-3">Related Topics</h3>
        <MenuButton
          title="Digestive Health (Gut Immunity)"
          to="/digestion"
        />
        <MenuButton
          title="Sleep Support"
          to="/sleep-view"
        />
        <MenuButton
          title="Stress Management"
          to="/sympathetic-view"
        />
      </div>
    </div>
  )
}
