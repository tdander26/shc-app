import { Routes, Route, useNavigate } from 'react-router-dom'
import { SectionHeader } from '../../components/SectionHeader'
import { MenuButton } from '../../components/MenuButton'
import { ContentBlock } from '../../components/ContentBlock'
import { BackButton } from '../../components/BackButton'

function MaleHormonesIntro() {
  const navigate = useNavigate()

  return (
    <div>
      <SectionHeader
        title="Male Hormones"
        iconSrc="/icons/male-hormones-icon.png"
        subtitle="Supporting hormonal balance"
      />

      <div className="space-y-4 mb-6">
        <ContentBlock
          title="Overview"
          content="Most male specific problems involve a diminished level of testosterone due to a variety of reasons as discussed in the sections below. Prostate issues, as well as other hormonal and neurotransmitter imbalances can also make you feel like you're aging much faster than you should be."
          type="overview"
        />
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-shc-text mb-3">Are you experiencing...?</h3>
        <MenuButton
          title="Decreased Sexual Interest"
          to="/male-hormones/decreased-libido"
        />
        <MenuButton
          title="Erection/Sexual Issues"
          to="/male-hormones/erection-issues"
        />
        <MenuButton
          title="Muscle Loss"
          to="/male-hormones/muscle-loss"
        />
        <MenuButton
          title="Hair Loss"
          to="/male-hormones/hair-loss"
        />
        <MenuButton
          title="Prostate Issues"
          to="/male-hormones/prostate-health"
        />
      </div>
    </div>
  )
}

function DecreasedLibidoPage() {
  return (
    <div>
      <BackButton />
      <SectionHeader
        title="Decreased Libido"
        emoji="💔"
      />

      <div className="space-y-4 mb-6">
        <ContentBlock
          title="Overview"
          content="What's that – you're too tired? Got a headache? Just not in the mood? Your libido is a sign of health, both mentally and physically. Assuming you're in a healthy relationship, you should be interested in sex, and more than just the ABCs (anniversay, birthday, and Christmas)."
          type="overview"
        />

        <ContentBlock
          title="Lifestyle"
          content="When it comes to sex, parasympathetic tone is important for the arousal state - basically your ability to obtain and sustain an erection. If your body is too sympathetic dominant then you will most likely not be able to get aroused or sustain that arousal because your body is focused elsewhere. Sympathetic dominance basically occurs when your body is under way too much stress. Perhaps your work or life is an emotional burden, or your diet is very unhealthy, or you exercise way too hard, or you have injuries and pain you're dealing with. These would all contribute to sympathetic excess and you're just not going to be very successful getting in the mood and if you are it's going to be a short session. The sympathetic system is more important for the ever-awesome orgasm, though essentially it's a balance between the two systems of your autonomic nervous system. Yeah, if you just can't achieve an orgasm then it could be because you're too parasympathetic-dominant and it's overriding the sympathetic system, or that you can't muster up the sympathetic tone to finish the job. Basically your nervous system just can't chill-out and let the good times roll. This autonomic nervous system dysfunction, much like conditioning for your sport, means you're training improperly. This also has to do with the balance of aerobic and anaerobic conditioning. Prolonged stress will eventually lead to decreased testosterone levels in men and that will result in poor sexual activity - either due to lackluster erections (or none at all), or decreased interest. Neurotransmitters are those chemicals which communicate information throughout our bodies and are responsible for how we think, feel, and act. They make up a lot of our personality and how we react to just about everything. When it comes to sex, the neurotransmitters serotonin and dopamine are vital."
          type="lifestyle"
        />

        <ContentBlock
          title="Supplements"
          content="Nutrients that may help include Vitamin E, Zinc, Arginex."
          type="supplements"
          link="https://www.dssorders.com/drtodd"
          links={[
            { url: 'https://drgangemi.standardprocess.com/products/arginex', label: 'Arginex' }
          ]}
        />
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-shc-text mb-3">Related Topics</h3>
        <MenuButton title="Sympathetic" to="/sympathetic-view" />
        <MenuButton title="Mood" to="/mood-intro" />
        <MenuButton title="Athletic Performance" to="/athletic-performance" />
        <MenuButton title="Erection Issues" to="/male-hormones/erection-issues" />
      </div>
    </div>
  )
}

function ErectionIssuesPage() {
  return (
    <div>
      <BackButton />
      <SectionHeader
        title="Erection Issues"
        emoji="🏥"
      />

      <div className="space-y-4 mb-6">
        <ContentBlock
          title="Overview"
          content="Are you waking up with an erection? For the most part, if you're not startled awake, you should be. Sleep-related erections (SREs) are a sign of healthy hormonal health. SREs start when you enter the REM phase of your sleep cycle and last until the next cycle of non-REM sleep. These SREs are linked to levels of testosterone and they're a good predictor of current cardiovascular health as well as future risk of heart attacks and strokes. You should be able to sustain an erection during sex and not experience any premature ejacuation, the inability to sustain an erection for the desired time, or orgasming too quickly, are often signs of either poor hormonal health or low levels of nitric oxide (NO), the compound that increases vascular including blood flow the penis. Medications such as Viagra increase NO levels, but you can improve your NO level, as well as your testosterone levels, via dietary and lifestyle changes."
          type="overview"
        />

        <ContentBlock
          title="Lifestyle"
          content="Lifestyle and nutritional changes can greatly improve your testosterone levels, decrease your estrogen levels, and increase your nitric oxide, all safely and naturally."
          type="lifestyle"
        />
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-shc-text mb-3">Related Topics</h3>
        <MenuButton title="Nitric Oxide Enhancement" to="/male-hormones/nitric-oxide" />
        <MenuButton title="Testosterone Enhancement" to="/male-hormones/testosterone-enhancement" />
        <MenuButton title="Prostate" to="/male-hormones/prostate-health" />
      </div>
    </div>
  )
}

function HairLossPage() {
  return (
    <div>
      <BackButton />
      <SectionHeader
        title="Hair Loss for Males"
        emoji="💇"
      />

      <div className="space-y-4 mb-6">
        <ContentBlock
          title="Overview"
          content="Although there can be a strong and unavoidable genetic connection to male baldness, there is also a hormonal connection that will affect hair growth. Dihydrotestosterone (DHT) is a sex hormone that is made from testosternone via an enzyme called 5-alpha reductatse. DHT can bind to receptors on hair follicles and cause them to shrink and become less able to support hair growth and sustainability. Roughly about ten percent of testosterone converts to DHT. Too much conversion can make you lose hair faster and earlier in your life."
          type="overview"
        />

        <ContentBlock
          title="Lifestyle"
          content="Improving hair growth and decreasing hair loss, like many male health issues, goes back to hormonal health. A healthy testosterone balance that does not over-convert to DHT as well as the health of thyroid and adrenal glands, can often make a significant improvement on new hair growth, or the reduction in hair loss."
          type="lifestyle"
        />

        <ContentBlock
          title="Supplements"
          content="Biotin, Zinc, Saw Palmetto, Rosemary, Cysteine (NAC)."
          type="supplements"
          link="https://www.dssorders.com/drtodd"
        />
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-shc-text mb-3">Related Topics</h3>
        <MenuButton title="Testosterone Enhancement" to="/male-hormones/testosterone-enhancement" />
        <MenuButton title="Adrenal Support" to="/adrenal-view" />
        <MenuButton title="Thyroid Support" to="/thyroid-view" />
      </div>
    </div>
  )
}

function MuscleLossPage() {
  return (
    <div>
      <BackButton />
      <SectionHeader
        title="Muscle Loss"
        emoji="💪"
      />

      <div className="space-y-4 mb-6">
        <ContentBlock
          title="Overview"
          content="Muscle loss, or sarcopenia, is not as normal as you may think. Though you are going to lose a certain amount of muscle naturally as you age, it is hard to say what is normal and therefore healthy. This is one of the more common but not normal health conditions, and many men don't maximize their muscular potential in the first place, so you're often losing more of the little bit that you had."
          type="overview"
        />

        <ContentBlock
          title="Lifestyle"
          content="The two main factors associated with muscle loss is low testosterone and a lack of strength training (essentially you use it or lose it)."
          type="lifestyle"
        />

        <ContentBlock
          title="Supplements"
          content="Protein! Try to consume at least 1 gram of protein per kilogram of bodyweight. High quality protein includes animal products (dairy and meats), eggs, and whey, egg, or collagen protein supplements. Nutrients to help improve testosterone levels are discussed in that specific section."
          type="supplements"
          link="https://www.dssorders.com/drtodd"
        />
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-shc-text mb-3">Related Topics</h3>
        <MenuButton title="Testosterone Enhancement" to="/male-hormones/testosterone-enhancement" />
        <MenuButton title="Athletic Performance" to="/athletic-performance" />
      </div>
    </div>
  )
}

function ProstateHealthPage() {
  return (
    <div>
      <BackButton />
      <SectionHeader
        title="Prostate Health"
        emoji="⚕️"
      />

      <div className="space-y-4 mb-6">
        <ContentBlock
          title="Overview"
          content="Prostate symptoms are common in men as you age and it's said that the majority of men will have some form of prostate cancer developing during some stage in their lifespan. Your prostate is loaded with receptors to hormones such as testosterone, dihydrotestosterone (DHT), estrogen, and insulin, and it is typically an imbalance of these types of hormones that then result in prostate symptoms. Prostate infections are also not uncommon, resulting in symptoms noted below. Benign prostate hypertrophy (BPH) is an enlarged prostate that will give you some annoying, perhaps daily, symptoms. As with any health condition you should always seek out the advice of a qualified medical practitioner to diagnose your health condition, in this case being a prostate issue. Often the prostate can become enlarged not just from hormonal imbalances or infections, but also nutritional imbalances too. Some common signs and symptoms of prostate issues: Frequent urination, especially at night. Blood in urine or semen. Painful or burning urination or ejaculation. Pain or stiffness in lower back, hips, or pelvic region. Dribbling of urine or inability to fully empty the bladder"
          type="overview"
        />

        <ContentBlock
          title="Lifestyle"
          content="Lifestyle and nutritional changes can greatly improve your prostate health. Though these DO NOT substitute for medical intervention when necessary, they can even help with prostate cancers and prostate symptoms that many men still have after a prostate removal surgery. Your pelvic diaphragm is the area around your pelvis that should move in sync with your main (breathing) diaphragm. When these diaphragms are out of sync, problems can arise. Therefore, improving your breathing can improve your pelvic diaphragm and greatly improve prostate issues you may be experiencing. Of course, it is advised you discuss all natural treatments with your medical doctor."
          type="lifestyle"
        />

        <ContentBlock
          title="Supplements"
          content="Prost X, Prostate PMG, Cataplex E, Selenium, Saw Palmetto, Zinc, Vitamin D."
          type="supplements"
          link="https://www.dssorders.com/drtodd"
          links={[
            { url: 'https://drgangemi.standardprocess.com/products/prost-x', label: 'Prost X' },
            { url: 'https://drgangemi.standardprocess.com/products/cataplex-e2', label: 'Cataplex E' }
          ]}
        />
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-shc-text mb-3">Related Topics</h3>
        <MenuButton title="Testosterone Enhancement" to="/male-hormones/testosterone-enhancement" />
        <MenuButton title="Breathe!" to="/breathe-view" />
      </div>
    </div>
  )
}

function NitricOxidePage() {
  return (
    <div>
      <BackButton />
      <SectionHeader
        title="Nitric Oxide"
        emoji="💨"
      />

      <div className="space-y-4 mb-6">
        <ContentBlock
          title="Overview"
          content="Nitric oxide (NO) is a powerful molecule that allows smooth muscles to relax resulting in vasodilation (increased blood flow). It also exhibits powerful immunopathological properties as an antiviral and anti-inflammatory compound. For male (and female too!) reproduction/sexual health, increased NO means less inflammation and more blood flow to sexual organs. Basically, nitric oxide is your natural Viagra without the side effects."
          type="overview"
        />

        <ContentBlock
          title="Lifestyle"
          content="Breathe! Proper (nasal) breathing will increase your NO levels substantially. Proper exercise will too."
          type="lifestyle"
        />

        <ContentBlock
          title="Supplements"
          content="To improve nitric oxide levels try: ARG/ORT/CIT aminos, arginex, 5MTHF, Cat G, niacinamide, P5P"
          type="supplements"
          link="https://www.dssorders.com/drtodd"
          links={[
            { url: 'https://drgangemi.standardprocess.com/products/arginex', label: 'Arginex' },
            { url: 'https://drgangemi.standardprocess.com/products/cataplex-g', label: 'Cataplex G' }
          ]}
        />
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-shc-text mb-3">Related Topics</h3>
        <MenuButton title="Athletic Performance" to="/athletic-performance" />
        <MenuButton title="Breathe!" to="/breathe-view" />
      </div>
    </div>
  )
}

function TestosteroneEnhancementPage() {
  return (
    <div>
      <BackButton />
      <SectionHeader
        title="Testosterone Enhancement"
        emoji="🏋️"
      />

      <div className="space-y-4 mb-6">
        <ContentBlock
          title="Overview"
          content="Making sufficient testosterone is important, but for many men, keeping it is the real issue. Testosterone ideally breaks down into a substance called hydroxytestosterone to be eliminated from your body. But testosterone also breaks down into the hormone dihydrotestosterone (DHT), as discussed in the hair loss and prostate sections, as well as estrogen. Yes - estrogen. Actually many men today are having their masculine characteristics replaced with feminine ones due to low testosterone and high estrogen hormonal levels. Signs and symptoms of low testosterone/high estrogen: Increased body fat, Loss of muscle tone, Fatigue, Enlarged prostate, Erectile dysfunction/low libido, Emotional issues such as depression or anxiety, Poor sports performance. Testosterone impacts dopamine (a neurotransmitter) receptors in men and those dopamine receptors then impact testosterone levels. Testosterone also increases serotonin sensitivity in men. Therefore, unstable moods, depression, agitation, and other mood concerns can be affected by testosterone, but also affect testosterone."
          type="overview"
        />

        <ContentBlock
          title="Lifestyle"
          content="Clean it up! (Your diet, that is). Xenoestrogens are chemical mimickers of estrogen that act as hormone distributors, thus increasing estrogen and decreasing testosterone levels. These compounds should be avoided as much as possible. They include: PCBs (polychlorinated biphenyl) - plastics, sealants, adhesives, fire retardants. BPA (Bisphenol A) - plastics. Phthalates - plastics, stabilizers, sealants (everything from toys to cleaners to body care products). Parabens. Insecticides and herbicides. Phytoestrogens are plant based estrogen mimickers. For most people, this is soy consumption especially those fake meat products that have hydrolyzed and autolyzed soy isolates as ingredients. Soy isoflavones bind to the body's estrogen receptors and create estrogen-like effects. Fermented soy such as tempeh, miso, natto, and soy sauce are okay, in moderation. Mold exposure can also increase estrogens as the mycotoxins from the molds act as mycoestrogens. Additionally, following a low carbohydrate, high fat diet will improve your T:E ratio. High insulin levels not only result in fatigue, weight gain and inflammation, but an increase in estrogen. You can also naturally improve your T:DHT ratio as well as your T:E ratio by focusing on strength training and proper aerobic conditioning as well as healthy sleep and stress reduction practices."
          type="lifestyle"
        />

        <ContentBlock
          title="Supplements"
          content="To reduce testosterone breakdown into DHT and estrogen: Zinc, Saw Palmetto, Rosemary, Cysteine/NAC, 5MTHF, MethylB12, P5P. To help make testosterone: Selenium, Zinc, Vitamin A and E, Saturated Fats, Protein"
          type="supplements"
          link="https://www.dssorders.com/drtodd"
        />
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-shc-text mb-3">Related Topics</h3>
        <MenuButton title="Sympathetic Issues" to="/sympathetic-view" />
        <MenuButton title="Dysglycemia" to="/dysglycemia-view" />
        <MenuButton title="Athletic Performance" to="/athletic-performance" />
        <MenuButton title="Mood" to="/mood-intro" />
      </div>
    </div>
  )
}

export default function MaleHormonesIndexPage() {
  return (
    <Routes>
      <Route index element={<MaleHormonesIntro />} />
      <Route path="decreased-libido" element={<DecreasedLibidoPage />} />
      <Route path="erection-issues" element={<ErectionIssuesPage />} />
      <Route path="hair-loss" element={<HairLossPage />} />
      <Route path="muscle-loss" element={<MuscleLossPage />} />
      <Route path="prostate-health" element={<ProstateHealthPage />} />
      <Route path="nitric-oxide" element={<NitricOxidePage />} />
      <Route path="testosterone-enhancement" element={<TestosteroneEnhancementPage />} />
    </Routes>
  )
}
