import { Routes, Route } from 'react-router-dom'
import { SectionHeader } from '../../components/SectionHeader'
import { MenuButton } from '../../components/MenuButton'
import { ContentBlock } from '../../components/ContentBlock'
import { BackButton } from '../../components/BackButton'

function HeadachesIndexIntro() {
  return (
    <div>
      <SectionHeader
        title="Head Pain"
        iconSrc="/icons/head-pain-icon.svg"
        subtitle="Managing headaches and migraines"
      />

      <div className="space-y-4 mb-6">
        <ContentBlock
          title="Overview"
          content="Headaches and migraines can stem from various sources including tension, blood sugar imbalance, hormonal issues, food sensitivities, and dehydration. Migraines tend to be more chemical or nutritional in nature, with poor hormonal detoxification being the most common reason. Tension headaches are basically from stress, causing tightness in the front and sides of the head. Sinus headaches are most commonly from a fungal infection in the sinus cavity. Understanding the type of headache you experience is the first step toward addressing it."
          type="overview"
        />
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-shc-text mb-3">Select a headache type:</h3>
        <MenuButton title="Post-Injury / Concussion" to="/headaches/post-injury" />
        <MenuButton title="Migraines" to="/headaches/migraines" />
        <MenuButton title="Tension Headaches" to="/headaches/tension" />
        <MenuButton title="Sinus Headaches" to="/headaches/sinus" />
        <MenuButton title="Mouth, Dental & Jaw Issues" to="/headaches/dental" />
      </div>
    </div>
  )
}

function PostInjuryPage() {
  return (
    <div>
      <BackButton />
      <SectionHeader title="Traumatic Head Injuries" emoji="⚠️" />
      <div className="space-y-4 mb-6">
        <ContentBlock
          title="Overview"
          content="Experiencing headaches after some type of head trauma is relatively common. The traumatic insult to the neck muscles and connective tissue can refer pain up the head, resulting in headaches. Improving or eliminating the pain is best accomplished by seeing a qualified manual therapist who works with these types of injuries. You don't have to have had a major head injury or neck trauma to result in pain. Even being rear-ended at a stop sign by a vehicle 'rolling' into the back of your vehicle can be enough to cause head and neck trauma."
          type="overview"
        />
        <ContentBlock
          title="Lifestyle"
          content="The correction of the problem starts with an investigation as to what caused the problem in the first place. It could be a dietary issue in which the patient is eating foods high on the glycemic index (i.e. processed flours, sugars, soda, etc.), skipping meals, or going too long without eating. Often there is an offender either creating or driving the problem. Common offenders in the dysglycemic patient are artificial sweeteners such as aspartame (Nutrasweet) and sucralose (Splenda), as well as caffeine, food allergies, medications, and hormonal stress (cortisol and estrogen are very common). Of course too many sweets and treats can be the problem too, including the highly promoted 'healthy sweeteners' like agave syrup."
          type="lifestyle"
        />
        <ContentBlock
          title="Supplements"
          content="Nutrients that may help include Artichoke Extract, Mg, Zn, or B6."
          type="supplements"
          link="https://www.dssorders.com/drtodd"
        />
      </div>
    </div>
  )
}

function MigrainesPage() {
  return (
    <div>
      <BackButton />
      <SectionHeader title="Migraines" emoji="😖" />
      <div className="space-y-4 mb-6">
        <ContentBlock
          title="Overview"
          content="Migraines are often related to hormonal imbalances or dysglycemia."
          type="overview"
        />
        <ContentBlock
          title="Lifestyle"
          content="The correction of the problem starts with an investigation as to what caused the problem in the first place. It could be a dietary issue in which the patient is eating foods high on the glycemic index (i.e. processed flours, sugars, soda, etc.), skipping meals, or going too long without eating. Often there is an offender either creating or driving the problem. Common offenders in the dysglycemic patient are artificial sweeteners such as aspartame (Nutrasweet) and sucralose (Splenda), as well as caffeine, food allergies, medications, and hormonal stress (cortisol and estrogen are very common). Of course too many sweets and treats can be the problem too, including the highly promoted 'healthy sweeteners' like agave syrup."
          type="lifestyle"
        />
        <ContentBlock
          title="Supplements"
          content="Nutrients such as vitamin B6, folate, B12, mg, and zinc can help with estrogen detoxification. Even in post-menopausal women, migraines can be due to a hormonal imbalance and your body not properly detoxifying the naturally lower levels of estrogen, testosterone, and progesterone."
          type="supplements"
          link="https://www.dssorders.com/drtodd"
        />
      </div>
    </div>
  )
}

function TensionPage() {
  return (
    <div>
      <BackButton />
      <SectionHeader title="Tension Headaches" emoji="😰" />
      <div className="space-y-4 mb-6">
        <ContentBlock
          title="Overview"
          content="Tension headaches are basically from stress, causing a tightness in the front and sides of the head. Check out the SYM section for infor and relief ideas."
          type="overview"
        />
        <ContentBlock
          title="Lifestyle"
          content="Stress management and relaxation techniques are key."
          type="lifestyle"
        />
        <ContentBlock
          title="Supplements"
          content="Nutrients that may help include Artichoke Extract, Mg, Zn, or B6."
          type="supplements"
          link="https://www.dssorders.com/drtodd"
        />
      </div>
    </div>
  )
}

function SinusPage() {
  return (
    <div>
      <BackButton />
      <SectionHeader title="Sinus Headaches" emoji="👃" />
      <div className="space-y-4 mb-6">
        <ContentBlock
          title="Overview"
          content="Sinus headaches are from well, you guessed it - the sinuses. The most common reason for sinus issues is a fungi infection in the sinus cavity. Herbs such as (list common here) can help relieve/correct the problem. Allergies can be an important consideration here too."
          type="overview"
        />
        <ContentBlock
          title="Lifestyle"
          content="Address underlying sinus infections and allergies."
          type="lifestyle"
        />
        <ContentBlock
          title="Supplements"
          content="Nutrients that may help include Artichoke Extract, Mg, Zn, or B6."
          type="supplements"
          link="https://www.dssorders.com/drtodd"
        />
      </div>
    </div>
  )
}

function DentalHub() {
  return (
    <div>
      <BackButton />
      <SectionHeader title="Mouth, Dental & Jaw Issues" emoji="🦷" />
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-shc-text mb-3">Select an issue:</h3>
        <MenuButton title="TMJ / Jaw Pain" to="/headaches/tmj" />
        <MenuButton title="Bruxism (Teeth Grinding)" to="/headaches/bruxism" />
        <MenuButton title="Tooth Decay" to="/headaches/tooth-decay" />
        <MenuButton title="Tartar Buildup" to="/headaches/tartar" />
        <MenuButton title="Root Canals" to="/headaches/root-canals" />
        <MenuButton title="Bleeding Gums" to="/headaches/bleeding-gums" />
      </div>
    </div>
  )
}

function TMJPage() {
  return (
    <div>
      <BackButton />
      <SectionHeader title="TMJ / Jaw Pain" emoji="😣" />
      <div className="space-y-4 mb-6">
        <ContentBlock
          title="Overview"
          content="TMJ issues can cause referred pain to the head and neck."
          type="overview"
        />
        <ContentBlock
          title="Lifestyle"
          content="Stress management and proper jaw alignment are important."
          type="lifestyle"
        />
        <ContentBlock
          title="Supplements"
          content="Minerals and magnesium for muscle relaxation."
          type="supplements"
          link="https://www.dssorders.com/drtodd"
        />
      </div>
    </div>
  )
}

function BruxismPage() {
  return (
    <div>
      <BackButton />
      <SectionHeader title="Bruxism (Teeth Grinding)" emoji="😬" />
      <div className="space-y-4 mb-6">
        <ContentBlock
          title="Overview"
          content="Bruxism – it's the clenching of the jaw and grinding of the teeth sometimes to the point of actually breaking a tooth. When you're awake and conscious the force your body can produce by grinding your teeth together is around 250 psi (pounds per square inch) in the back molars and 85 psi in the front teeth. That may seem like a lot but many are able to easily triple that pressure, achieving around 800-900 psi while they're sleeping. This of course is when bruxism, (officially referred to as sleep or nocturnal bruxism), becomes more of a problem. If you think it's amazing that the body can provide that much pressure during what should be a restful period, it can even double that force to around 2,000 psi if you're on certain antidepressant (mood-altering) medications. Pressure that high is teeth-breaking, tissue-damaging force along with a whole lot of pain and discomfort to the head, neck, and jaw region. Though bruxism can be due to a variety of health problems, in a nutshell it comes down to one thing – too much stress to the body. At a time when your body should be relaxing and recovering (sleeping), the nervous system is actually unable to calm down into this parasympathetic (relaxed) state. Rather, it remains in sympathetic dominance (flight-or-fight); perhaps the worst time your body can be in such a state as the jaw clenches and grinds as if your body is fighting a battle for survival. Ultimately hormones and neurochemicals such as dopamine are altered as you're grinding away."
          type="overview"
        />
        <ContentBlock
          title="Lifestyle"
          content="Stress management, sleep optimization, and nervous system support are crucial."
          type="lifestyle"
        />
        <ContentBlock
          title="Supplements"
          content="GABA, magnesium, and other relaxation-supporting nutrients."
          type="supplements"
          link="https://www.dssorders.com/drtodd"
        />
      </div>
    </div>
  )
}

function ToothDecayPage() {
  return (
    <div>
      <BackButton />
      <SectionHeader title="Tooth Decay" emoji="🦷" />
      <div className="space-y-4 mb-6">
        <ContentBlock
          title="Overview"
          content="Tooth decay is often related to minerals and dietary factors."
          type="overview"
        />
        <ContentBlock
          title="Lifestyle"
          content="Reduce sugar, improve oral hygiene, and support mineral absorption."
          type="lifestyle"
        />
        <ContentBlock
          title="Supplements"
          content="Nutrients that may help include Trace Minerals."
          type="supplements"
          link="https://www.dssorders.com/drtodd"
        />
      </div>
    </div>
  )
}

function TartarPage() {
  return (
    <div>
      <BackButton />
      <SectionHeader title="Excessive Tartar" emoji="✨" />
      <div className="space-y-4 mb-6">
        <ContentBlock
          title="Overview"
          content="Excessive tartar buildup is often related to mineral imbalances."
          type="overview"
        />
        <ContentBlock
          title="Lifestyle"
          content="Focus on mineral balance, particularly phosphorus."
          type="lifestyle"
        />
        <ContentBlock
          title="Supplements"
          content="Nutrients that may help include Phosfood Liquid or Trace Minerals"
          type="supplements"
          link="https://www.dssorders.com/drtodd"
          links={[
            { url: 'https://drgangemi.standardprocess.com/products/phosfood-liquid', label: 'Phosfood' }
          ]}
        />
      </div>
    </div>
  )
}

function RootCanalPage() {
  return (
    <div>
      <BackButton />
      <SectionHeader title="Root Canals" emoji="🔧" />
      <div className="space-y-4 mb-6">
        <ContentBlock
          title="Overview"
          content="Root canal issues are often due to deep infections that need professional dental care."
          type="overview"
        />
        <ContentBlock
          title="Lifestyle"
          content="Professional dental care is essential."
          type="lifestyle"
        />
        <ContentBlock
          title="Supplements"
          content="Herbs that may help (uva ursi - others we can get)"
          type="supplements"
          link="https://www.dssorders.com/drtodd"
        />
      </div>
    </div>
  )
}

function BleedingGumsPage() {
  return (
    <div>
      <BackButton />
      <SectionHeader title="Bleeding Gums" emoji="🩸" />
      <div className="space-y-4 mb-6">
        <ContentBlock
          title="Overview"
          content="Bleeding gums often indicate nutritional deficiencies."
          type="overview"
        />
        <ContentBlock
          title="Lifestyle"
          content="Improve nutrition and oral health practices."
          type="lifestyle"
        />
        <ContentBlock
          title="Supplements"
          content="Cyruta Plus, Cat C"
          type="supplements"
          link="https://www.dssorders.com/drtodd"
          links={[
            { url: 'https://drgangemi.standardprocess.com/products/cyruta-plus', label: 'Cyruta Plus' },
            { url: 'https://drgangemi.standardprocess.com/products/cataplex-c', label: 'Cataplex C' }
          ]}
        />
      </div>
    </div>
  )
}

export default function HeadachesIndexPage() {
  return (
    <Routes>
      <Route index element={<HeadachesIndexIntro />} />
      <Route path="post-injury" element={<PostInjuryPage />} />
      <Route path="migraines" element={<MigrainesPage />} />
      <Route path="tension" element={<TensionPage />} />
      <Route path="sinus" element={<SinusPage />} />
      <Route path="dental" element={<DentalHub />} />
      <Route path="tmj" element={<TMJPage />} />
      <Route path="bruxism" element={<BruxismPage />} />
      <Route path="tooth-decay" element={<ToothDecayPage />} />
      <Route path="tartar" element={<TartarPage />} />
      <Route path="root-canals" element={<RootCanalPage />} />
      <Route path="bleeding-gums" element={<BleedingGumsPage />} />
    </Routes>
  )
}
