import { Routes, Route } from 'react-router-dom'
import { SectionHeader } from '../../components/SectionHeader'
import { MenuButton } from '../../components/MenuButton'
import { ContentBlock } from '../../components/ContentBlock'
import { BackButton } from '../../components/BackButton'

function SkinIndexIntro() {
  return (
    <div>
      <SectionHeader
        title="Skin"
        emoji="🧴"
        subtitle="Achieving healthy, clear skin"
      />

      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-shc-text mb-3">Select a skin condition:</h3>
        <MenuButton title="Acne" to="/skin/acne" />
        <MenuButton title="Itchy Skin" to="/skin/itchy" />
        <MenuButton title="Psoriasis" to="/skin/psoriasis" />
        <MenuButton title="Hives" to="/skin/hives" />
        <MenuButton title="Warts" to="/skin/warts" />
        <MenuButton title="Eczema" to="/skin/eczema" />
        <MenuButton title="Cold Sores" to="/skin/cold-sores" />
        <MenuButton title="Canker Sores" to="/skin/canker-sores" />
        <MenuButton title="Moles" to="/skin/moles" />
        <MenuButton title="Nail Health" to="/skin/nails" />
      </div>
    </div>
  )
}

function AcnePage() {
  return (
    <div>
      <BackButton />
      <SectionHeader title="Acne" emoji="🧴" />
      <div className="space-y-4 mb-6">
        <ContentBlock
          title="Overview"
          content="Acne is often either from the liver's inability to properly detoxify hormones (testosterone in men and estrogen in women), or from something taking the digestive tract. Hormones need certain nutrients to break them down in the liver, and if those nutrients are not available, then the skin can break out with acne."
          type="overview"
        />
        <ContentBlock
          title="Lifestyle"
          content="A poor/unhealthy digestive tract can also result in poor hormonal health and therefore acne. Go to the GI section."
          type="lifestyle"
        />
        <ContentBlock
          title="Supplements"
          content="Vitamin B12 (methylcobalamin), folate (5MTHF) , vitamin B6 (pyridoxal 5' phosphate), magnesium, and zinc are the most common nutrients necessary to achieve this."
          type="supplements"
        />
      </div>
    </div>
  )
}

function ItchySkinPage() {
  return (
    <div>
      <BackButton />
      <SectionHeader title="Itchy Skin" emoji="🔥" />
      <div className="space-y-4 mb-6">
        <ContentBlock
          title="Overview"
          content="Provided that there is not a local skin irritation (contact dermatitis), itchy skin can be from excessive histamine due to either an infection or food sensitivity or from an issue with your gallbladder and the metabolism of fats as well as vitamin A, a fat-soluble vitamin. If you are having other gut/digestive symptoms, then you might be dealing with yeast or bacteria in the gut which can cause your skin to be itchy. Go to the GI section. Food sensitivities (allergies) can also cause this. Many people are sensitive to foods due to a poor digestive system. However, you may try removing common foods that many people are sensitive to below."
          type="overview"
        />
        <ContentBlock
          title="Lifestyle"
          content="Digestive symptoms such as burping after you eat or feeling heavy after you eat? Possible gallbladder problem - head to that section and note the need for more vitamin A. Need to also link this in with the GB"
          type="lifestyle"
        />
        <ContentBlock
          title="Supplements"
          content="Nutrients that may help include Vitamin A."
          type="supplements"
        />
      </div>
    </div>
  )
}

function PsoriasisPage() {
  return (
    <div>
      <BackButton />
      <SectionHeader title="Psoriasis" emoji="🧬" />
      <div className="space-y-4 mb-6">
        <ContentBlock
          title="Overview"
          content="Psoriasis is (described briefly) is often the result of an infection taxing the immune system. It's common for this to arise from the gut as the majority of the immune system is located in the digestive tract. GO TO GI SECTION if other gut issues? OR GO to the infection/illness section if other IMMUNE ISSUES."
          type="overview"
        />
        <ContentBlock
          title="Lifestyle"
          content="Supporting immune function and digestive health is key."
          type="lifestyle"
        />
        <ContentBlock
          title="Supplements"
          content="Nutrients that may help include Artichoke Extract, Mg, Zn, or B6."
          type="supplements"
        />
      </div>
    </div>
  )
}

function HivesPage() {
  return (
    <div>
      <BackButton />
      <SectionHeader title="Hives" emoji="🔴" />
      <div className="space-y-4 mb-6">
        <ContentBlock
          title="Overview"
          content="Hives occur from stress or a reaction to eating something or from an infection. It's common for the immune system to react with hives from a long-term, deep-seeded infection such as one from a tick bit (Lyme, babesia, bartonella, Rocky Mountain Spotted Fever) even long after that infection is thought to be gone. These infections can stay around a lot longer than you may think. If you've had immune system issues such as infections like this before then head to that section. If you're having digestive issues often then check out that section to help with your hives. And if you're don't think that either pertains to you then head over to the sympathetic stress section to learn how to better manage stress which may be resulting in hives."
          type="overview"
        />
        <ContentBlock
          title="Lifestyle"
          content="Manage stress and support immune function."
          type="lifestyle"
        />
        <ContentBlock
          title="Supplements"
          content="Cataplex G, Immune Nutrients, and SYM Nutrients"
          type="supplements"
        />
      </div>
    </div>
  )
}

function WartsPage() {
  return (
    <div>
      <BackButton />
      <SectionHeader title="Warts" emoji="🦠" />
      <div className="space-y-4 mb-6">
        <ContentBlock
          title="Overview"
          content="Warts are oten from a viral infection, but other infections such as fungi and bacteria can tax (impair) the immune system so your body is unable to deal with the viral infection causing your wart. See the IMMUNE and GI section for more info."
          type="overview"
        />
        <ContentBlock
          title="Lifestyle"
          content="Support your immune system and improve digestive health."
          type="lifestyle"
        />
        <ContentBlock
          title="Supplements"
          content="See immune and digestive sections above for specific recommendations."
          type="supplements"
        />
      </div>
    </div>
  )
}

function EczemaPage() {
  return (
    <div>
      <BackButton />
      <SectionHeader title="Eczema" emoji="💧" />
      <div className="space-y-4 mb-6">
        <ContentBlock
          title="Overview"
          content="Eczema is almost always from a digestive problem, which can sometimes either be caused by a food allergy/sensitivity or resulting in one. Check out the GI section as well as the FOOD Allergy Page for more."
          type="overview"
        />
        <ContentBlock
          title="Lifestyle"
          content="Focus on healing the digestive system and identifying food triggers."
          type="lifestyle"
        />
        <ContentBlock
          title="Supplements"
          content="Nutrients that may help include Artichoke Extract, Mg, Zn, or B6."
          type="supplements"
        />
      </div>
    </div>
  )
}

function ColdSoresPage() {
  return (
    <div>
      <BackButton />
      <SectionHeader title="Cold Sores / Fever Blisters" emoji="🤧" />
      <div className="space-y-4 mb-6">
        <ContentBlock
          title="Overview"
          content="Although commonly caused by the herpes virus, these erupt under stress or when the tissue is starved of calcium. If you commonly get a cold sore or fever blister when you're sick or run down - head to the IMMUNE Page."
          type="overview"
        />
        <ContentBlock
          title="Lifestyle"
          content="If you get them from sun exposure then head to PAGE with Canker sores/cramp/etc. Manage stress and support calcium absorption."
          type="lifestyle"
        />
        <ContentBlock
          title="Supplements"
          content="Nutrients that may help include Ca."
          type="supplements"
        />
      </div>
    </div>
  )
}

function CankerSoresPage() {
  return (
    <div>
      <BackButton />
      <SectionHeader title="Canker Sores" emoji="👅" />
      <div className="space-y-4 mb-6">
        <ContentBlock
          title="Overview"
          content="Canker sores are often associated with calcium deficiency or digestive issues."
          type="overview"
        />
        <ContentBlock
          title="Lifestyle"
          content="Focus on calcium metabolism and digestive health."
          type="lifestyle"
        />
        <ContentBlock
          title="Supplements"
          content="Ca, D3, and Good Fats."
          type="supplements"
        />
      </div>
    </div>
  )
}

function MolesPage() {
  return (
    <div>
      <BackButton />
      <SectionHeader title="Moles" emoji="⭕" />
      <div className="space-y-4 mb-6">
        <ContentBlock
          title="Overview"
          content="List the ABCs of moles and to visit a dermatologist but note antioxidant and immune relevance here. HEAD to IMMUNE SECTION."
          type="overview"
        />
        <ContentBlock
          title="Lifestyle"
          content="Protect from sun exposure and support immune function."
          type="lifestyle"
        />
        <ContentBlock
          title="Supplements"
          content="Nutrients that may help include Immune System support."
          type="supplements"
        />
      </div>
    </div>
  )
}

function NailsPage() {
  return (
    <div>
      <BackButton />
      <SectionHeader title="Nail Health" emoji="💅" />
      <div className="space-y-4 mb-6">
        <ContentBlock
          title="Overview"
          content="Healthy nails are a sign of overall nutritional status and proper protein intake."
          type="overview"
        />
        <ContentBlock
          title="Lifestyle"
          content="Focus on protein intake and micronutrient absorption."
          type="lifestyle"
        />
        <ContentBlock
          title="Supplements"
          content="Biotin, Zinc, and other minerals important for keratin production."
          type="supplements"
        />
      </div>
    </div>
  )
}

export default function SkinIndexPage() {
  return (
    <Routes>
      <Route index element={<SkinIndexIntro />} />
      <Route path="acne" element={<AcnePage />} />
      <Route path="itchy" element={<ItchySkinPage />} />
      <Route path="psoriasis" element={<PsoriasisPage />} />
      <Route path="hives" element={<HivesPage />} />
      <Route path="warts" element={<WartsPage />} />
      <Route path="eczema" element={<EczemaPage />} />
      <Route path="cold-sores" element={<ColdSoresPage />} />
      <Route path="canker-sores" element={<CankerSoresPage />} />
      <Route path="moles" element={<MolesPage />} />
      <Route path="nails" element={<NailsPage />} />
    </Routes>
  )
}
