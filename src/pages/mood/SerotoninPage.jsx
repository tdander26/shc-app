import { useNavigate } from 'react-router-dom'
import { BackButton } from '../../components/BackButton'
import { SectionHeader } from '../../components/SectionHeader'
import { ContentBlock } from '../../components/ContentBlock'
import { MenuButton } from '../../components/MenuButton'

export default function SerotoninPage() {
  const navigate = useNavigate()

  return (
    <div>
      <div className="mb-4">
        <BackButton />
      </div>

      <SectionHeader title="Serotonin Issues" emoji="🌞" />

      <div className="space-y-4">
        <ContentBlock
          title="Overview"
          type="overview"
          content={'Feelings of depression affect a vast amount of people throughout the world and is a leading cause of disability. Therefore, a multitude of medications are available to "treat" this condition which is most often due in some part to an imbalance of the neurotransmitter serotonin. Paxil, Zoloft, Prozac, and Lexapro are just some of the many "go-to" medications people take to alter their serotonin levels. These medications don\'t make more of the neurotransmitter, but help to keep more of it available for your body to use longer.'}
        />

        <ContentBlock
          title="Lifestyle"
          type="lifestyle"
          content="High carbohydrate diets are known to lower serotonin levels. So, check out the blood sugar section below for more there if this pertains to you. If at least half of your diet is sugar or foods such as fruit, breads, potatoes, rice, or other carbohydrates, then it probably does. Estrogen levels greatly affect serotonin levels in men and women. If you're noting hormonal symptoms as you age (or if you're not sure) then check out that section. Over 95% of serotonin is actually made in your gut, so refer to the digestion section below for help if you're having any gut issues. Get outside! Nature and sunshine will naturally help you feel better and improve your serotonin levels. Serotonin is needed for healthy melatonin levels and vice-versa so if you're not sleeping well check out the sleep section."
        />

        <ContentBlock
          title="Supplements"
          type="supplements"
          content={'MethylB12, 5MTHF, P5P, Zn, Mg. Consider anemia: lack of iron or other red blood cell nutrients (a complete blood count "CBC" lab test would screen for this). Also, the herb St. John\'s wort can be very beneficial for improved serotonin health. However, please be aware if you are also taking a MAOI medication such as Marplan or Nardil as a condition called "serotonin syndrome" can occur (headaches, confusion, cardiovascular and digestive problems).'}
        />

        <div className="space-y-2 mt-6">
          <MenuButton
            title="Dysglycemia?"
            to="/landing/dysglycemia"
          />
          <MenuButton
            title="Female Hormones"
            to="/female-hormones"
          />
          <MenuButton
            title="Male Hormones"
            to="/male-hormones"
          />
          <MenuButton
            title="Sleep"
            to="/sleep"
          />
          <MenuButton
            title="Digestion"
            to="/digestion"
          />
        </div>
      </div>
    </div>
  )
}
