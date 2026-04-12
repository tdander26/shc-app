import { Routes, Route } from 'react-router-dom'
import { SectionHeader } from '../../components/SectionHeader'
import { MenuButton } from '../../components/MenuButton'
import { ContentBlock } from '../../components/ContentBlock'
import { BackButton } from '../../components/BackButton'

function DigestionIndexIntro() {
  return (
    <div>
      <SectionHeader
        title="Digestion"
        emoji="🍽️"
        subtitle="Supporting digestive health"
      />

      <div className="space-y-4 mb-6">
        <ContentBlock
          title="Overview"
          content="Healthy digestion is the foundation for overall health. Your digestive system breaks down food, absorbs nutrients, and eliminates waste. When digestion is compromised, it can lead to nutrient deficiencies and various health issues."
          type="overview"
        />
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-shc-text mb-3">Select a topic:</h3>
        <MenuButton
          title="HCl and Protein Digestion"
          to="/digestion/hcl"
        />
      </div>
    </div>
  )
}

function HCLPage() {
  return (
    <div>
      <BackButton />
      <SectionHeader title="HCl and Protein Digestion" emoji="🧪" />
      <div className="space-y-4 mb-6">
        <ContentBlock
          title="Overview"
          content="GERD, heartburn, eosinophilic esophagitis, Barrett's esophagus, and the many other diagnoses given to those with stomach problems lead to those patients being prescribed antacids, proton pump inhibitors, and H2 antagonist medications (histamine blockers) to reduce gastric acid production (parietal cells secreting HCl). These medications will further provoke many stomach problems, possibly resulting in nutrient absorption issues – specifically of iron, calcium, magnesium, and B12. Infections can also occur and thrive as the acid is not available to sterilize the stomach and its contents. Most stomach issues are from a lack of, rather than excess, stomach acid."
          type="overview"
        />
        <ContentBlock
          title="Lifestyle"
          content="Betaine HCl can be used to acidify the tissues for conditions such as hives, allergies, and bursitis. Sometimes the addition of calcium is needed as well as fats. Acidifying the body will push calcium into the tissues, provided that there are adequate fats in the diet. So, you may need to take calcium with betaine HCl as well as other fats (e.g. EPA, DHA, palmitic acid, stearic acid, etc.) and vitamin D."
          type="lifestyle"
        />
        <ContentBlock
          title="Supplements"
          content="EPA, DHA, palmitic acid, stearic acid, vitamin D, Betaine HCl, and many others listed in the supplementation resources."
          type="supplements"
        />
      </div>
    </div>
  )
}

export default function DigestionIndexPage() {
  return (
    <Routes>
      <Route index element={<DigestionIndexIntro />} />
      <Route path="hcl" element={<HCLPage />} />
    </Routes>
  )
}
