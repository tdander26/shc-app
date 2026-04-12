import { Routes, Route } from 'react-router-dom'
import { SectionHeader } from '../../components/SectionHeader'
import { MenuButton } from '../../components/MenuButton'
import { ContentBlock } from '../../components/ContentBlock'
import { BackButton } from '../../components/BackButton'

function FemaleHormonesIntro() {
  return (
    <div>
      <SectionHeader
        title="Female Hormones"
        iconSrc="/icons/female-hormones-icon.png"
        subtitle="Supporting hormonal balance for women"
      />

      <div className="space-y-4 mb-6">
        <ContentBlock
          title="Overview"
          content="Many womens' health issues are considered normal, because they're so common. We all just look at PMS as normal and night sweats or hot flashes during menopause as normal. But guess what? They're not. These are all signs and symptoms of health issues that can, and should be addressed. If you're interested in being more normal than not, continue on below!"
          type="overview"
        />
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-shc-text mb-3">Are you:</h3>
        <MenuButton
          title="Premenopausual (Any time before menopause)"
          to="/female-hormones/premenopause"
        />
        <MenuButton
          title="Menopause or Postmenopause"
          to="/female-hormones/menopause"
        />
        <MenuButton
          title="Taking Contraception (Such as an IUD or the Pill)"
          to="/female-hormones/birth-control"
        />
      </div>
    </div>
  )
}

function PremenopauseHub() {
  return (
    <div>
      <BackButton />
      <SectionHeader
        title="Premenopause Issues"
        emoji="👩"
      />

      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-shc-text mb-3">Are you experiencing...?</h3>
        <MenuButton
          title="PMS Symptoms"
          to="/female-hormones/pms-symptoms"
        />
        <MenuButton
          title="Decrease in Sexual Interest"
          to="/female-hormones/decreased-libido"
        />
        <MenuButton
          title="Monthly Cycle Issues"
          to="/female-hormones/cycle-issues"
        />
        <MenuButton
          title="Fertility & Pregnancy Issues"
          to="/female-hormones/fertility"
        />
      </div>
    </div>
  )
}

function PMSSymptoms() {
  return (
    <div>
      <BackButton />
      <SectionHeader
        title="PMS Symptoms"
        emoji="💊"
      />

      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-shc-text mb-3">Which symptoms apply?</h3>
        <MenuButton
          title="Breast Tenderness"
          to="/female-hormones/breast-tenderness"
        />
        <MenuButton
          title="Cramping, Bloating, or Back Pain"
          to="/female-hormones/cramping"
        />
        <MenuButton
          title="Overly Emotional"
          to="/female-hormones/over-emotional"
        />
        <MenuButton
          title="Hot Flashes"
          to="/female-hormones/hot-flash"
        />
        <MenuButton
          title="Acne"
          to="/female-hormones/hormone-acne"
        />
        <MenuButton
          title="Fatigue"
          to="/female-hormones/fatigue"
        />
      </div>
    </div>
  )
}

function BreastTendernessPage() {
  return (
    <div>
      <BackButton />
      <SectionHeader title="Breast Tenderness" emoji="🔥" />
      <div className="space-y-4 mb-6">
        <ContentBlock
          title="Overview"
          content="Breast tenderness is an indicator that you are not properly detoxifying estrogen. Your breasts have a significant amount of estrogen receptors and the increased estrogen in your cycle during ovulation and the last week before your period can result in breast tenderness and pain. This estrogen, like all hormones, must be detoxified by your liver. If your liver is already overwhelmed with other substances it needs to detoxify, then the estrogen must wait its turn, and what better place to hang out than in the breast tissue. The increased water and swelling is what causes the tenderness. Additionally, your breasts should contain a significant amount of iodine and sometimes the deficiency of iodine can result in tenderness."
          type="overview"
        />
        <ContentBlock
          title="Lifestyle"
          content="Lifestyle changes have to do with improving liver detoxification."
          type="lifestyle"
        />
        <ContentBlock
          title="Supplements"
          content="Iodine (if not consuming fish, kelp, or iodized salt), P5P, 5MTHF, B12, CYS, Artichoke."
          type="supplements"
          link="https://www.dssorders.com/drtodd"
        />
      </div>
      <MenuButton title="Liver Detoxification" to="/liver-view" />
    </div>
  )
}

function CrampingPage() {
  return (
    <div>
      <BackButton />
      <SectionHeader title="Cramping, Bloating, and Back Pain" emoji="😣" />
      <div className="space-y-4 mb-6">
        <ContentBlock
          title="Overview"
          content="Most women get it, expect it, and deal with it, however cramping and back pain, like all PMS symptoms, is abnormal. The bloating and cramping puts a lot of pressure on the abdomen obviously causing distention. This distension can fatigue abdominal muscles resulting in back pain. Deep uterine cramping can be from an imbalance or deficiency of dietary fats or from a lack or utilization of calcium."
          type="overview"
        />
        <ContentBlock
          title="Lifestyle"
          content="Improving dietary fatty acid status to help reduce inflammation can provide significant relief. If you take any anti-inflammatory substance (NSAID) and experience improvement, then you definitely need to improve your fatty acid profile to naturally decrease inflammation."
          type="lifestyle"
        />
        <ContentBlock
          title="Supplements"
          content="Cataplex E (Vitamin E). Plus nutrients dependent upon inflammation or calcium metabolism above."
          type="supplements"
          link="https://www.dssorders.com/drtodd"
          links={[
            { url: 'https://drgangemi.standardprocess.com/products/cataplex-e2', label: 'Cataplex E' }
          ]}
        />
      </div>
      <div className="space-y-3">
        <MenuButton title="NSAIDs" to="/nsaid-view" />
        <MenuButton title="Calcium Metabolism" to="/hcl-view" />
      </div>
    </div>
  )
}

function OverEmotionalPage() {
  return (
    <div>
      <BackButton />
      <SectionHeader title="Overly Emotional" emoji="😢" />
      <div className="space-y-4 mb-6">
        <ContentBlock
          title="Overview"
          content="Irritability whether you know it or someone informs you (like your spouse), is another common but abnormal symptom of PMS. This is most often due to a sugar handling problem and/or a hormonal issue, often involving the thyroid. The thyroid makes the hormone T4, that must be converted to T3 in the liver, kidneys and intestines. Insulin from excess carbohydrates, cortisol for excess stress, and estrogen (well excess estrogen that is not broken down and resulting in PMS symptoms you're learning about here), are the three major hormones that block the conversion of thyroid hormone T4 to its active T3, so you end up with a low functioning thyroid and mood issues."
          type="overview"
        />
        <ContentBlock
          title="Lifestyle"
          content="A diet high in carbohydrates (especially refined), excess caffeine, and a stressful lifestyle will throw off serum and cellular glucose levels resulting in mood swings."
          type="lifestyle"
        />
        <ContentBlock
          title="Supplements"
          content="Depending on above sugar handling or thyroid issues, but also consider symptomatic improvement of mood issues with certain nutrients you can find in the Mood & Emotional section."
          type="supplements"
          link="https://www.dssorders.com/drtodd"
        />
      </div>
      <div className="space-y-3">
        <MenuButton title="Dysglycemia" to="/dysglycemia-view" />
        <MenuButton title="Thyroid" to="/thyroid-view" />
        <MenuButton title="Emotional Section" to="/mood-intro" />
      </div>
    </div>
  )
}

function HotFlashPage() {
  return (
    <div>
      <BackButton />
      <SectionHeader title="Hot Flashes or Sweats" emoji="🔥" />
      <div className="space-y-4 mb-6">
        <ContentBlock
          title="Overview"
          content="Excessive sweating, typically night sweats or hot flashes during the day or night are never normal, at any time during your cycle. This is a sign that your body is not properly detoxifying estrogen or testosterone well, and your body is utilizing your largest organ, the skin, to try and detoxify these hormones more rapidly."
          type="overview"
        />
        <ContentBlock
          title="Lifestyle"
          content="Lifestyle changes have to do with improving detoxification."
          type="lifestyle"
        />
        <ContentBlock
          title="Supplements"
          content="Nutrients that may help include Organically Bound Minerals, Cataplex E (Vitamin E), Vitamin B6, Vitamin B9, Vitamin B12, Cysteine, Artichoke."
          type="supplements"
          link="https://www.dssorders.com/drtodd"
          links={[
            { url: 'https://drgangemi.standardprocess.com/products/organically-bound-minerals', label: 'Organic Minerals' },
            { url: 'https://drgangemi.standardprocess.com/products/cataplex-e2', label: 'Cataplex E' }
          ]}
        />
      </div>
      <MenuButton title="Liver Detoxification" to="/liver-view" />
    </div>
  )
}

function HormoneAcnePage() {
  return (
    <div>
      <BackButton />
      <SectionHeader title="Hormonal Acne" emoji="🧴" />
      <div className="space-y-4 mb-6">
        <ContentBlock
          title="Overview"
          content="Acne, especially breakouts that occur at certain times of your cycle, are a sign of estrogen/progesterone imbalance. You most likely will see your acne flare up during a peak in hormonal output, such as during ovulation (typically, on average, days 12-14) or during the end of your cycle (PMS). High estrogen, low progesterone, or sometimes a deficiency of iodine can cause the acne flare-ups."
          type="overview"
        />
        <ContentBlock
          title="Lifestyle"
          content="Lifestyle changes have to do with improving liver detoxification."
          type="lifestyle"
        />
        <ContentBlock
          title="Supplements"
          content="Nutrients that may help include Iodine (if not consuming fish, kelp, or iodized salt), Vitamin B6, Vitamin B9, Vitamin B12, Cysteine, Artichoke."
          type="supplements"
          link="https://www.dssorders.com/drtodd"
        />
      </div>
      <MenuButton title="Liver Detoxification" to="/liver-view" />
    </div>
  )
}

function FatigueFemalePage() {
  return (
    <div>
      <BackButton />
      <SectionHeader title="Fatigue" emoji="😴" />
      <div className="space-y-4 mb-6">
        <ContentBlock
          title="Overview"
          content="Fatigue before or during the start of your cycle (period) is definitely not normal. Many times if this occurs before (PMS) then it's from the lack of progesterone opposing higher estrogen levels. The progesterone if typically low in women because it is being converted into cortisol, our major stress hormone. Fatigue during your period can be from low iron, or other red blood cell building nutrients."
          type="overview"
        />
        <ContentBlock
          title="Lifestyle"
          content="To improve progesterone levels naturally focus on stress reduction. To improve iron and red blood cell status, consider eating nutrient dense foods containing iron, ideally red meat."
          type="lifestyle"
        />
        <ContentBlock
          title="Supplements"
          content="For red blood cell support: Ferrafood (Iron), Vitamin B12, Folate, Vitamin B6. If no change after 2 cycles consider copper and molybdenum."
          type="supplements"
          link="https://www.dssorders.com/drtodd"
          links={[
            { url: 'https://drgangemi.standardprocess.com/products/ferrafood', label: 'Ferrafood' }
          ]}
        />
      </div>
    </div>
  )
}

function CycleIssuesHub() {
  return (
    <div>
      <BackButton />
      <SectionHeader title="Monthly Cycle Issues" emoji="📅" />
      <div className="space-y-4 mb-6">
        <ContentBlock
          title="Overview"
          content="The length of your cycle is closely related to healthy and sufficient progesterone levels. Typically, a shorter cycle correlates with lower progesterone levels while a longer cycle correlates with excess progesterone. However, it is the balance of estrogen and progesterone that is important and a low progesterone level can be perceived by your body due to estrogen levels that are too high. A low progesterone level can also be due to a low functioning thyroid or adrenal glands. The health of all your hormonal glands as well as your liver play a significant role in your estrogen-progesterone balance and therefore the length of your cycle."
          type="overview"
        />
      </div>
      <div className="space-y-3">
        <MenuButton title="Long Cycle (31 days or more)" to="/female-hormones/long-cycle" />
        <MenuButton title="Short Cycle (27 days or less)" to="/female-hormones/short-cycle" />
        <MenuButton title="Spotting or Long Periods" to="/female-hormones/spotting" />
        <MenuButton title="No Period or Short Period" to="/female-hormones/no-cycle" />
      </div>
    </div>
  )
}

function LongCyclePage() {
  return (
    <div>
      <BackButton />
      <SectionHeader title="Long Cycle" emoji="📈" />
      <div className="space-y-4 mb-6">
        <ContentBlock
          title="Overview"
          content="Long cycles are usually due to excess stress to the adrenal glands. The first half of the cycle, (the follicular phase), depends on sufficient progesterone levels from the adrenal glands. Therefore, if there is too much stress impairing adrenal gland function and there forefore progesterone levels, ovulation will occur later in the month thus pushing the cycle longer. There needs to be at least ten days between ovulation and the end of the cycle (day before your period starts)."
          type="overview"
        />
        <ContentBlock
          title="Lifestyle"
          content="Addressing stress levels is of utmost priority."
          type="lifestyle"
        />
        <ContentBlock
          title="Supplements"
          content="Min Tran, Vitamin E, Tulsi, Ashwagandha, Cat B"
          type="supplements"
          link="https://www.dssorders.com/drtodd"
          links={[
            { url: 'https://drgangemi.standardprocess.com/products/min-tran', label: 'Min Tran' },
            { url: 'https://drgangemi.standardprocess.com/products/cataplex-b', label: 'Cataplex B' }
          ]}
        />
      </div>
      <MenuButton title="Sympathetic" to="/sympathetic-view" />
    </div>
  )
}

function ShortCyclePage() {
  return (
    <div>
      <BackButton />
      <SectionHeader title="Short Cycle Issues" emoji="📉" />
      <div className="space-y-4 mb-6">
        <ContentBlock
          title="Overview"
          content="Short cycles are usually due to low progesterone levels or an under-functioning thyroid. Progesterone is necessary to make sufficient thyroid hormones and a properly functioning thyroid allows adequate amounts of progesterone to be synthesized."
          type="overview"
        />
        <ContentBlock
          title="Lifestyle"
          content="Progesterone is most often low due to either an insufficient production of the hormone, or due to high stress levels as your body will make the common stress hormone, cortisol, either in place of or from progesterone. So, addressing stress levels is of utmost priority."
          type="lifestyle"
        />
        <ContentBlock
          title="Supplements"
          content="Vitamin E, Fish Oil, Zinc, Vitamin A"
          type="supplements"
          link="https://www.dssorders.com/drtodd"
        />
      </div>
      <MenuButton title="Sympathetic" to="/sympathetic-view" />
    </div>
  )
}

function SpottingPage() {
  return (
    <div>
      <BackButton />
      <SectionHeader title="Spotting Issues" emoji="🩸" />
      <div className="space-y-4 mb-6">
        <ContentBlock
          title="Overview"
          content="Breakthrough bleeding, or spotting, is often associated with higher than ideal estrogen levels. This estrogen dominance is often from poor liver detoxification, excess body fat, or the consumption of phytoestrogens found in foods and drinks from plastic containers (especially hot products) as well as soy products."
          type="overview"
        />
        <ContentBlock
          title="Lifestyle"
          content="Removing phytoestrogens from the diet."
          type="lifestyle"
        />
        <ContentBlock
          title="Supplements"
          content="5MTHF, P5P, Methyl B12, CYS, Artichoke"
          type="supplements"
          link="https://www.dssorders.com/drtodd"
        />
      </div>
    </div>
  )
}

function NoCyclePage() {
  return (
    <div>
      <BackButton />
      <SectionHeader title="Anovulation or Short Periods" emoji="⛔" />
      <div className="space-y-4 mb-6">
        <ContentBlock
          title="Overview"
          content="Insufficient hormonal levels will result in lack of ovulation. A balance of ALL hormonal glands is important which especially includes the pituitary gland, the thyroid gland, the adrenal glands, and the ovaries."
          type="overview"
        />
        <ContentBlock
          title="Lifestyle"
          content="Stress is once again a key player here and high levels of chronic stress or sudden dramatic acute stress levels (such as drastic emotional stress or physical stress) can affect your body to the point that ovulation will stop since health is not sufficient to procreate."
          type="lifestyle"
        />
        <ContentBlock
          title="Supplements"
          content="Pituitary PMG, Ovex P, Ashwagandha, Tulsi, Iodine, Cat E"
          type="supplements"
          link="https://www.dssorders.com/drtodd"
          links={[
            { url: 'https://drgangemi.standardprocess.com/products/pituitary-pmg', label: 'Pituitary PMG' },
            { url: 'https://drgangemi.standardprocess.com/products/ovex-p', label: 'Ovex P' },
            { url: 'https://drgangemi.standardprocess.com/products/cataplex-e2', label: 'Cataplex E' }
          ]}
        />
      </div>
      <MenuButton title="Fertility Section" to="/female-hormones/fertility" />
    </div>
  )
}

function DecreasedLibidoFemale() {
  return (
    <div>
      <BackButton />
      <SectionHeader title="Decreased Libido" emoji="💔" />
      <div className="space-y-4 mb-6">
        <ContentBlock
          title="Overview"
          content="What's that – you're too tired? Got a headache? Just not in the mood? Your libido is a sign of health, both mentally and physically. Assuming you're in a healthy relationship, you should be interested in sex, and more than just the ABCs (anniversay, birthday, and Christmas)."
          type="overview"
        />
        <ContentBlock
          title="Lifestyle"
          content="When it comes to sex, parasympathetic tone is important for the arousal state. No need to get into specifics for each gender here; you hopefully get the picture. If your body is too sympathetic dominant then you will most likely not be able to get aroused or sustain that arousal because your body is focused elsewhere. Sympathetic dominance basically occurs when your body is under way too much stress. Perhaps your work or life is an emotional burden, or your diet is very unhealthy, or you exercise way too hard, or you have injuries and pain you're dealing with. These would all contribute to sympathetic excess and you're just not going to be very successful getting in the mood and if you are it's going to be a short session. The sympathetic system is more important for the ever-awesome orgasm, though essentially it's a balance between the two systems of your autonomic nervous system. Yeah, if you just can't achieve an orgasm then it could be because you're too parasympathetic-dominant and it's overriding the sympathetic system, or that you can't muster up the sympathetic tone to finish the job. Basically your nervous system just can't chill-out and let the good times roll. This autonomic nervous system dysfunction, much like conditioning for your sport, means you're training improperly. This also has to do with the balance of aerobic and anaerobic conditioning. Neurotransmitters are those chemicals which communicate information throughout our bodies and are responsible for how we think, feel, and act. They make up a lot of our personality and how we react to just about everything. When it comes to sex, the neurotransmitters serotonin and dopamine are vital."
          type="lifestyle"
        />
        <ContentBlock
          title="Supplements"
          content="Vitamin E, Zinc, Arginex"
          type="supplements"
          link="https://www.dssorders.com/drtodd"
          links={[
            { url: 'https://drgangemi.standardprocess.com/products/arginex', label: 'Arginex' }
          ]}
        />
      </div>
      <div className="space-y-3">
        <MenuButton title="Sympathetic" to="/sympathetic-view" />
        <MenuButton title="Mood" to="/mood-intro" />
        <MenuButton title="Athletic Performance" to="/athletic-performance" />
      </div>
    </div>
  )
}

function FertilityHub() {
  return (
    <div>
      <BackButton />
      <SectionHeader title="Fertility & Pregnancy Issues" emoji="👶" />
      <div className="space-y-3">
        <MenuButton title="Trouble Getting Pregnant" to="/female-hormones/trouble-getting-preg" />
        <MenuButton title="Trouble Sustaining Pregnancy" to="/female-hormones/trouble-sustain-preg" />
        <MenuButton title="Morning Sickness" to="/female-hormones/morning-sickness" />
        <MenuButton title="Postpartum Depression" to="/female-hormones/postpartum-depress" />
      </div>
    </div>
  )
}

function TroubleGettingPage() {
  return (
    <div>
      <BackButton />
      <SectionHeader title="Trouble Getting Pregnant" emoji="❓" />
      <div className="space-y-4 mb-6">
        <ContentBlock
          title="Overview"
          content="Insufficient hormonal levels will result in lack of ovulation. A balance of ALL hormonal glands is important which especially includes the pituitary gland, the thyroid gland, the adrenal glands, and the ovaries."
          type="overview"
        />
        <ContentBlock
          title="Lifestyle"
          content="Stress is once again a key player here and high levels of chronic stress or sudden dramatic acute stress levels (such as drastic emotional stress or physical stress) can affect your body to the point that ovulation will stop since health is not sufficient to procreate."
          type="lifestyle"
        />
        <ContentBlock
          title="Supplements"
          content="Nutrients that may help include Pituitary PMG, Ovex P, Ashwagandha, Tulsi, Iodine, Vitamin E."
          type="supplements"
          link="https://www.dssorders.com/drtodd"
          links={[
            { url: 'https://drgangemi.standardprocess.com/products/pituitary-pmg', label: 'Pituitary PMG' },
            { url: 'https://drgangemi.standardprocess.com/products/ovex-p', label: 'Ovex P' }
          ]}
        />
      </div>
      <div className="space-y-3">
        <MenuButton title="Sleep!" to="/sleep-view" />
        <MenuButton title="Breathe!" to="/breathe-view" />
      </div>
    </div>
  )
}

function TroubleSustainPage() {
  return (
    <div>
      <BackButton />
      <SectionHeader title="Trouble Sustaining Pregnancy" emoji="⚠️" />
      <div className="space-y-4 mb-6">
        <ContentBlock
          title="Overview"
          content="These symptoms are often associated with the neurotransmitter GABA, our most powerful inhibitory neurotransmitter. GABA greatly affects your sleep and your overall ability to relax. If you feel like you need to have some alcohol at night to chill-out then you most likely aren't supporting healthy GABA levels."
          type="overview"
        />
        <ContentBlock
          title="Lifestyle"
          content="It's very important to stay away from the excitatory amino acids and their chemical derivatives as they will override your inhibitory GABA levels. These two substances are glutamates, commonly found as MSG (monosodium glutamate), asparates, commonly known as NutraSweet, commonly found in diet drinks and foods (and that blue packet Equal). MSG is also hidden under the names hydrolyzed and autolyzed, so be sure to read ingredients. Check out the other health tips in the Sleep section as without sufficient GABA levels, you won't sleep well."
          type="lifestyle"
        />
        <ContentBlock
          title="Supplements"
          content="Mn, Zn, P5P, Passion Flower, Valerian Root. Also, for faster relief Taurine, L-Theanine, and GABA"
          type="supplements"
          link="https://www.dssorders.com/drtodd"
        />
      </div>
      <div className="space-y-3">
        <MenuButton title="Sleep!" to="/sleep-view" />
        <MenuButton title="Breathe!" to="/breathe-view" />
      </div>
    </div>
  )
}

function MorningSicknessPage() {
  return (
    <div>
      <BackButton />
      <SectionHeader title="Morning Sickness" emoji="🤢" />
      <div className="space-y-4 mb-6">
        <ContentBlock
          title="Overview"
          content="These symptoms are often associated with the neurotransmitter GABA, our most powerful inhibitory neurotransmitter. GABA greatly affects your sleep and your overall ability to relax. If you feel like you need to have some alcohol at night to chill-out then you most likely aren't supporting healthy GABA levels."
          type="overview"
        />
        <ContentBlock
          title="Lifestyle"
          content="It's very important to stay away from the excitatory amino acids and their chemical derivatives as they will override your inhibitory GABA levels. These two substances are glutamates, commonly found as MSG (monosodium glutamate), asparates, commonly known as NutraSweet, commonly found in diet drinks and foods (and that blue packet Equal). MSG is also hidden under the names hydrolyzed and autolyzed, so be sure to read ingredients. Check out the other health tips in the Sleep section as without sufficient GABA levels, you won't sleep well."
          type="lifestyle"
        />
        <ContentBlock
          title="Supplements"
          content="Mn, Zn, P5P, Passion Flower, Valerian Root. Also, for faster relief Taurine, L-Theanine, and GABA"
          type="supplements"
          link="https://www.dssorders.com/drtodd"
        />
      </div>
      <div className="space-y-3">
        <MenuButton title="Sleep!" to="/sleep-view" />
        <MenuButton title="Breathe!" to="/breathe-view" />
      </div>
    </div>
  )
}

function PostpartumPage() {
  return (
    <div>
      <BackButton />
      <SectionHeader title="Postpartum Depression" emoji="😔" />
      <div className="space-y-4 mb-6">
        <ContentBlock
          title="Overview"
          content="These symptoms are often associated with the neurotransmitter GABA, our most powerful inhibitory neurotransmitter. GABA greatly affects your sleep and your overall ability to relax. If you feel like you need to have some alcohol at night to chill-out then you most likely aren't supporting healthy GABA levels."
          type="overview"
        />
        <ContentBlock
          title="Lifestyle"
          content="It's very important to stay away from the excitatory amino acids and their chemical derivatives as they will override your inhibitory GABA levels. These two substances are glutamates, commonly found as MSG (monosodium glutamate), asparates, commonly known as NutraSweet, commonly found in diet drinks and foods (and that blue packet Equal). MSG is also hidden under the names hydrolyzed and autolyzed, so be sure to read ingredients. Check out the other health tips in the Sleep section as without sufficient GABA levels, you won't sleep well."
          type="lifestyle"
        />
        <ContentBlock
          title="Supplements"
          content="Mn, Zn, P5P, Passion Flower, Valerian Root. Also, for faster relief Taurine, L-Theanine, and GABA"
          type="supplements"
          link="https://www.dssorders.com/drtodd"
        />
      </div>
      <div className="space-y-3">
        <MenuButton title="Sleep!" to="/sleep-view" />
        <MenuButton title="Breathe!" to="/breathe-view" />
      </div>
    </div>
  )
}

function MenopauseHub() {
  return (
    <div>
      <BackButton />
      <SectionHeader title="Menopause or Postmenopause" emoji="🌡️" />
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-shc-text mb-3">Are you experiencing...?</h3>
        <MenuButton title="Sleep Issues" to="/sleep-view" />
        <MenuButton title="Night Sweats" to="/female-hormones/night-sweats" />
        <MenuButton title="Decreased Sexual Interest" to="/female-hormones/decreased-libido" />
        <MenuButton title="Dry Skin/Tissues" to="/female-hormones/dry-tissues" />
        <MenuButton title="Emotional Issues" to="/mood-intro" />
        <MenuButton title="Hot Flashes" to="/female-hormones/hot-flash" />
        <MenuButton title="HRT Information" to="/female-hormones/hrt" />
      </div>
    </div>
  )
}

function NightSweatsPage() {
  return (
    <div>
      <BackButton />
      <SectionHeader title="Night Sweats" emoji="💦" />
      <div className="space-y-4 mb-6">
        <ContentBlock
          title="Overview"
          content="Night sweats during menopause are a sign of hormonal fluctuation and improper detoxification of hormones."
          type="overview"
        />
        <ContentBlock
          title="Lifestyle"
          content="Support your liver and overall detoxification processes."
          type="lifestyle"
        />
        <ContentBlock
          title="Supplements"
          content="Vitamin E, B vitamins, Artichoke Extract"
          type="supplements"
          link="https://www.dssorders.com/drtodd"
        />
      </div>
    </div>
  )
}

function DryTissuesPage() {
  return (
    <div>
      <BackButton />
      <SectionHeader title="Dry Tissues" emoji="💧" />
      <div className="space-y-4 mb-6">
        <ContentBlock
          title="Overview"
          content="Dry skin, and especially vaginal dryness, is common when the body is perceiving low estrogen levels. It's perceiving them because it's actually from the change from higher a premenopausal hormonal level to the much lower one that you're now experiencing but that doesn't mean you're deficient. Most women are estrogen dominant and this estrogen can affect everything from bone health to provoking certain cancers - so it's not a matter of getting enough estrogen but using what you have efficiently. You're meant to have a lower amount of estrogen after your cycling years and you'll still make some via your adrenal glands and in your adipose (fat) tissue. So this is more of an issue with balance, and getting sufficient progesterone in the body, which when needed, can convert to estrogen."
          type="overview"
        />
        <ContentBlock
          title="Lifestyle"
          content="Progesterone is most often low due to either an insufficient production of the hormone, or due to high stress levels as your body will make the common stress hormone, cortisol, either in place of or from progesterone. So, addressing stress levels is of utmost priority. The health of your adrenal glands will determine your estrogen/progesterone balance through the rest of your life. Excess estrogen is often from poor liver detoxification, excess body fat, or the consumption of phytoestrogens found in foods and drinks from plastic containers (especially hot products) as well as soy products."
          type="lifestyle"
        />
        <ContentBlock
          title="Supplements"
          content="Vitamin E, Zinc, Fish Oil"
          type="supplements"
          link="https://www.dssorders.com/drtodd"
        />
      </div>
      <div className="space-y-3">
        <MenuButton title="Adrenal Information" to="/adrenal-view" />
        <MenuButton title="Liver Information" to="/liver-view" />
      </div>
    </div>
  )
}

function HRTPage() {
  return (
    <div>
      <BackButton />
      <SectionHeader title="Female HRT & Birth Control" emoji="💊" />
      <div className="space-y-4 mb-6">
        <ContentBlock
          title="Overview"
          content="Hormone replacement therapy (HRT) and contraception decisions should be made with your healthcare provider. These symptoms are often associated with the neurotransmitter GABA, our most powerful inhibitory neurotransmitter. GABA greatly affects your sleep and your overall ability to relax. If you feel like you need to have some alcohol at night to chill-out then you most likely aren't supporting healthy GABA levels."
          type="overview"
        />
        <ContentBlock
          title="Lifestyle"
          content="It's very important to stay away from the excitatory amino acids and their chemical derivatives as they will override your inhibitory GABA levels. These two substances are glutamates, commonly found as MSG (monosodium glutamate), asparates, commonly known as NutraSweet, commonly found in diet drinks and foods (and that blue packet Equal). MSG is also hidden under the names hydrolyzed and autolyzed, so be sure to read ingredients. Check out the other health tips in the Sleep section as without sufficient GABA levels, you won't sleep well."
          type="lifestyle"
        />
        <ContentBlock
          title="Supplements"
          content="Mn, Zn, P5P, Passion Flower, Valerian Root. Also, for faster relief Taurine, L-Theanine, and GABA"
          type="supplements"
          link="https://www.dssorders.com/drtodd"
        />
      </div>
      <div className="space-y-3">
        <MenuButton title="Sleep!" to="/sleep-view" />
        <MenuButton title="Breathe!" to="/breathe-view" />
      </div>
    </div>
  )
}

function BirthControlPage() {
  return (
    <div>
      <BackButton />
      <SectionHeader title="Birth Control & Hormonal Health" emoji="⚖️" />
      <div className="space-y-4 mb-6">
        <ContentBlock
          title="Overview"
          content="These symptoms are often associated with the neurotransmitter GABA, our most powerful inhibitory neurotransmitter. GABA greatly affects your sleep and your overall ability to relax. If you feel like you need to have some alcohol at night to chill-out then you most likely aren't supporting healthy GABA levels."
          type="overview"
        />
        <ContentBlock
          title="Lifestyle"
          content="It's very important to stay away from the excitatory amino acids and their chemical derivatives as they will override your inhibitory GABA levels. These two substances are glutamates, commonly found as MSG (monosodium glutamate), asparates, commonly known as NutraSweet, commonly found in diet drinks and foods (and that blue packet Equal). MSG is also hidden under the names hydrolyzed and autolyzed, so be sure to read ingredients. Check out the other health tips in the Sleep section as without sufficient GABA levels, you won't sleep well."
          type="lifestyle"
        />
        <ContentBlock
          title="Supplements"
          content="Mn, Zn, P5P, Passion Flower, Valerian Root. Also, for faster relief Taurine, L-Theanine, and GABA"
          type="supplements"
          link="https://www.dssorders.com/drtodd"
        />
      </div>
      <div className="space-y-3">
        <MenuButton title="Sleep!" to="/sleep-view" />
        <MenuButton title="Breathe!" to="/breathe-view" />
      </div>
    </div>
  )
}

export default function FemaleHormonesIndexPage() {
  return (
    <Routes>
      <Route index element={<FemaleHormonesIntro />} />
      <Route path="premenopause" element={<PremenopauseHub />} />
      <Route path="pms-symptoms" element={<PMSSymptoms />} />
      <Route path="breast-tenderness" element={<BreastTendernessPage />} />
      <Route path="cramping" element={<CrampingPage />} />
      <Route path="over-emotional" element={<OverEmotionalPage />} />
      <Route path="hot-flash" element={<HotFlashPage />} />
      <Route path="hormone-acne" element={<HormoneAcnePage />} />
      <Route path="fatigue" element={<FatigueFemalePage />} />
      <Route path="cycle-issues" element={<CycleIssuesHub />} />
      <Route path="long-cycle" element={<LongCyclePage />} />
      <Route path="short-cycle" element={<ShortCyclePage />} />
      <Route path="spotting" element={<SpottingPage />} />
      <Route path="no-cycle" element={<NoCyclePage />} />
      <Route path="decreased-libido" element={<DecreasedLibidoFemale />} />
      <Route path="fertility" element={<FertilityHub />} />
      <Route path="trouble-getting-preg" element={<TroubleGettingPage />} />
      <Route path="trouble-sustain-preg" element={<TroubleSustainPage />} />
      <Route path="morning-sickness" element={<MorningSicknessPage />} />
      <Route path="postpartum-depress" element={<PostpartumPage />} />
      <Route path="menopause" element={<MenopauseHub />} />
      <Route path="night-sweats" element={<NightSweatsPage />} />
      <Route path="dry-tissues" element={<DryTissuesPage />} />
      <Route path="hrt" element={<HRTPage />} />
      <Route path="birth-control" element={<BirthControlPage />} />
    </Routes>
  )
}
