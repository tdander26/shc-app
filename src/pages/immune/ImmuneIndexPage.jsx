import { SectionHeader } from '../../components/SectionHeader'
import { MenuButton } from '../../components/MenuButton'
import { ContentBlock } from '../../components/ContentBlock'

export default function ImmuneIndexPage() {
  return (
    <div>
      <SectionHeader
        title="Immune System"
        iconSrc="/icons/immune-icon.png"
        subtitle="Strengthening immune function"
        accentColor="#14B8A6"
      />

      <div className="space-y-4 mb-6">
        <ContentBlock
          title="Overview"
          content="Getting sick is typically an immune issue. The immune system is largely composed of the thymus, spleen, and lymph tissue, and half comprises the friendly bacteria that line the digestive tract. An increase in stress hormones, primarily cortisol from the adrenal glands, causes the immune system to function sub-optimally. Sugar is also a big detriment to immune system health. The health of the gut is very important since it is a major part of your immune system. A poor diet, especially one containing allergenic foods, in conjunction with unhealthy bacteria and fungus from past antibiotic therapies, will significantly decrease healthy bacteria."
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
