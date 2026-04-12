import { useParams } from 'react-router-dom'
import { SectionHeader } from '../components/SectionHeader'
import { ContentBlock } from '../components/ContentBlock'
import { BackButton } from '../components/BackButton'

// Helper function to get supplement link based on page ID
const getSupplementLink = (pageId) => {
  const nsaidProductLinks = {
    omega3: 'https://drgangemi.standardprocess.com/products/tuna-omega-3-oil',
    zinc: 'https://drgangemi.standardprocess.com/products/zinc-chelate',
    magnesium: 'https://drgangemi.standardprocess.com/products/magnesium-lactate'
  }

  const insulinResistanceLinks = {
    magnesium: 'https://drgangemi.standardprocess.com/products/magnesium-lactate',
    garlic: 'https://drgangemi.standardprocess.com/products/garlic-forte'
  }

  if (pageId === 'nsaid') {
    return nsaidProductLinks
  } else if (pageId === 'insulin-resistance') {
    return insulinResistanceLinks
  }

  return 'https://www.dssorders.com/drtodd'
}

const landingPageContent = {
  'allergy': {
    title: 'Allergies',
    emoji: '🤧',
    overview: 'Are you tired for some of or all of the day? Are you lacking enough energy to perform your daily activities? You may lack the energy you should have due to poor dietary and lifestyle habits. Hormonal imbalances, red blood cell issues, digestive problems, biochemical inadequacies, and even various toxicities can also result in fatigue. Click through this section to see why your energy may be low and steps you can make to improve it!',
    lifestyle: 'Are you tired for some of or all of the day? Are you lacking enough energy to perform your daily activities? You may lack the energy you should have due to poor dietary and lifestyle habits. Hormonal imbalances, red blood cell issues, digestive problems, biochemical inadequacies, and even various toxicities can also result in fatigue. Click through this section to see why your energy may be low and steps you can make to improve it!',
    supplements: ''
  },
  'asthma': {
    title: 'Asthma',
    emoji: '💨',
    overview: 'Are you tired for some of or all of the day? Are you lacking enough energy to perform your daily activities? You may lack the energy you should have due to poor dietary and lifestyle habits. Hormonal imbalances, red blood cell issues, digestive problems, biochemical inadequacies, and even various toxicities can also result in fatigue. Click through this section to see why your energy may be low and steps you can make to improve it!',
    lifestyle: 'Leukotrienes can be several hundred times more inflammatory than prostaglandins and are known to be common triggers of asthma.',
    supplements: 'Are you tired for some of or all of the day? Are you lacking enough energy to perform your daily activities? You may lack the energy you should have due to poor dietary and lifestyle habits. Hormonal imbalances, red blood cell issues, digestive problems, biochemical inadequacies, and even various toxicities can also result in fatigue. Click through this section to see why your energy may be low and steps you can make to improve it!'
  },
  'exercise-asthma': {
    title: 'Asthma Induced Exercise',
    emoji: '🏃',
    overview: 'Are you tired for some of or all of the day? Are you lacking enough energy to perform your daily activities? You may lack the energy you should have due to poor dietary and lifestyle habits. Hormonal imbalances, red blood cell issues, digestive problems, biochemical inadequacies, and even various toxicities can also result in fatigue. Click through this section to see why your energy may be low and steps you can make to improve it!',
    lifestyle: 'Are you tired for some of or all of the day? Are you lacking enough energy to perform your daily activities? You may lack the energy you should have due to poor dietary and lifestyle habits. Hormonal imbalances, red blood cell issues, digestive problems, biochemical inadequacies, and even various toxicities can also result in fatigue. Click through this section to see why your energy may be low and steps you can make to improve it!',
    supplements: 'Are you tired for some of or all of the day? Are you lacking enough energy to perform your daily activities? You may lack the energy you should have due to poor dietary and lifestyle habits. Hormonal imbalances, red blood cell issues, digestive problems, biochemical inadequacies, and even various toxicities can also result in fatigue. Click through this section to see why your energy may be low and steps you can make to improve it!'
  },
  'calcium': {
    title: 'Calcium in all the Right Places',
    emoji: '🥛',
    overview: 'Breakthrough bleeding, or spotting, is often associated with higher than ideal estrogen levels. This estrogen dominance is often from poor liver detoxification, excess body fat, or the consumption of phytoestrogens found in foods and drinks from plastic containers (especially hot products) as well as soy products.',
    lifestyle: 'Removing phytoestrogens from the diet.',
    supplements: '5MTHF, P5P, Methyl B12, CYS, Artichoke'
  },
  'dysglycemia': {
    title: 'Dysglycemia',
    emoji: '🩺',
    overview: 'Dysglycemia is a disorder of blood sugar metabolism. An individual may have a normal blood glucose reading, whether fasting or not, yet present at the time of blood testing or even some other time during the day with symptoms resembling altered sugar handling (i.e. headaches, shakiness, unclear thinking, fatigue). There are many factors that contribute to balancing blood sugar, and although hormones such as thyroxine and growth hormone are involved to some degree, the majority of the work lies in the balance between the pancreas and the adrenal glands.',
    lifestyle: 'The correction of the problem starts with an investigation as to what caused the problem in the first place. It could be a dietary issue in which the patient is eating foods high on the glycemic index (i.e. processed flours, sugars, soda, etc.), skipping meals, or going too long without eating. Often there is an offender either creating or driving the problem. Common offenders in the dysglycemic patient are artificial sweeteners such as aspartame (Nutrasweet) and sucralose (Splenda), as well as caffeine, food allergies, medications, and hormonal stress (cortisol and estrogen are very common). Of course too many sweets and treats can be the problem too, including the highly promoted \'healthy sweeteners\' like agave syrup.',
    supplements: ''
  },
  'fat-metabolism': {
    title: 'Gallbladder',
    emoji: '🔋',
    overview: 'Gallbladder problems including gallbladder attacks are very common reasons for which people seek medical care. The pain and discomfort can unfortunately result in the removal of the little green organ followed by dietary restrictions (often low fat). But of course, all of our organs are there for one reason or another and although one can live without a gallbladder, removing it is simply removing a symptom of a problem, not the actual cause.\n\nThe surgical removal of the gallbladder is called a cholecystectomy. Some people who have had their gallbladder removed will see absolutely no change in their symptoms while others may have their symptoms 100% resolved. Others who have had a cholecystectomy may no longer be able to eat high fat foods as their body is unable to handle too much fat digestion at once due to the removal of their bile storage tank. However, the body in its infinite wisdom can often form a new little storage pouch in the area of the common bile duct to store some bile for when it\'s needed.\n\nSo how do you know if your gallbladder is at the point of becoming a life threatening emergency or you\'re simply experiencing gallbladder troubles that perhaps can be dealt with in a non-surgical manner? Well, without giving specific medical advice for every situation, a good rule is to look at the severity of the signs and symptoms. Someone who is having a gallstone attack typically has pain in the upper right side of the abdomen and/or pain in-between the shoulder blades, more often below the right shoulder blade (your scapula). Sometimes nausea and vomiting can occur which can last for minutes to hours. Now if the pain and vomiting continue to get worse then you should of course seek medical attention. (Gallbladder attacks and heart attacks can have very similar symptoms – heart attacks don\'t always have pain down the left arm only.) Typically gallbladder attacks don\'t just come out of nowhere where you never had any symptoms of a gallbladder problem and now all of a sudden you have a huge stone lodged in your bile duct. Being aware of some symptoms of poor gallbladder function so you can address the issue before it gets too out of hand is a plus!',
    lifestyle: '',
    supplements: 'Cholacol (especially for constipation), Betafood, Choline, BodyGuard (gallstones), Ginger, vitamin A, EPA/DHA'
  },
  'insulin-resistance': {
    title: 'Insulin Resistance',
    emoji: '🍗',
    overview: '',
    lifestyle: 'Follow the \'two-week test\' to see your carbohydrate tolerance level, check out the paleo diet, consume adequate healthy fats (eggs, avocado, coconut, butter, red meat, nuts & seeds) to sustain your energy for several hours, evaluate need for nutrients: chromium, vanadium, zinc, and sesame seed oil., exercise aerobically until you have a sufficient aerobic base; then consider anaerobic endurance training, weight lifting/strength training.',
    supplements: ''
  },
  'nsaid': {
    title: 'Relief with NSAIDs',
    emoji: '💊',
    overview: '',
    lifestyle: 'Are you tired for some of or all of the day? Are you lacking enough energy to perform your daily activities? You may lack the energy you should have due to poor dietary and lifestyle habits. Hormonal imbalances, red blood cell issues, digestive problems, biochemical inadequacies, and even various toxicities can also result in fatigue. Click through this section to see why your energy may be low and steps you can make to improve it!',
    supplements: ''
  },
  'parasympathetic': {
    title: 'Parasympathetic Dominance',
    emoji: '😴',
    overview: 'Are you tired for some of or all of the day? Are you lacking enough energy to perform your daily activities? You may lack the energy you should have due to poor dietary and lifestyle habits. Hormonal imbalances, red blood cell issues, digestive problems, biochemical inadequacies, and even various toxicities can also result in fatigue. Click through this section to see why your energy may be low and steps you can make to improve it!',
    lifestyle: 'Are you tired for some of or all of the day? Are you lacking enough energy to perform your daily activities? You may lack the energy you should have due to poor dietary and lifestyle habits. Hormonal imbalances, red blood cell issues, digestive problems, biochemical inadequacies, and even various toxicities can also result in fatigue. Click through this section to see why your energy may be low and steps you can make to improve it!',
    supplements: 'Are you tired for some of or all of the day? Are you lacking enough energy to perform your daily activities? You may lack the energy you should have due to poor dietary and lifestyle habits. Hormonal imbalances, red blood cell issues, digestive problems, biochemical inadequacies, and even various toxicities can also result in fatigue. Click through this section to see why your energy may be low and steps you can make to improve it!'
  },
  'sick-a-lot': {
    title: 'Sick A Lot',
    emoji: '🤒',
    overview: 'Are you tired for some of or all of the day? Are you lacking enough energy to perform your daily activities? You may lack the energy you should have due to poor dietary and lifestyle habits. Hormonal imbalances, red blood cell issues, digestive problems, biochemical inadequacies, and even various toxicities can also result in fatigue. Click through this section to see why your energy may be low and steps you can make to improve it!',
    lifestyle: 'Are you tired for some of or all of the day? Are you lacking enough energy to perform your daily activities? You may lack the energy you should have due to poor dietary and lifestyle habits. Hormonal imbalances, red blood cell issues, digestive problems, biochemical inadequacies, and even various toxicities can also result in fatigue. Click through this section to see why your energy may be low and steps you can make to improve it!',
    supplements: 'Are you tired for some of or all of the day? Are you lacking enough energy to perform your daily activities? You may lack the energy you should have due to poor dietary and lifestyle habits. Hormonal imbalances, red blood cell issues, digestive problems, biochemical inadequacies, and even various toxicities can also result in fatigue. Click through this section to see why your energy may be low and steps you can make to improve it!'
  },
  'sympathetic': {
    title: 'Sympathetic Dominance',
    emoji: '⚡',
    overview: 'Are you tired for some of or all of the day? Are you lacking enough energy to perform your daily activities? You may lack the energy you should have due to poor dietary and lifestyle habits. Hormonal imbalances, red blood cell issues, digestive problems, biochemical inadequacies, and even various toxicities can also result in fatigue. Click through this section to see why your energy may be low and steps you can make to improve it!',
    lifestyle: 'Are you tired for some of or all of the day? Are you lacking enough energy to perform your daily activities? You may lack the energy you should have due to poor dietary and lifestyle habits. Hormonal imbalances, red blood cell issues, digestive problems, biochemical inadequacies, and even various toxicities can also result in fatigue. Click through this section to see why your energy may be low and steps you can make to improve it!',
    supplements: 'Are you tired for some of or all of the day? Are you lacking enough energy to perform your daily activities? You may lack the energy you should have due to poor dietary and lifestyle habits. Hormonal imbalances, red blood cell issues, digestive problems, biochemical inadequacies, and even various toxicities can also result in fatigue. Click through this section to see why your energy may be low and steps you can make to improve it!'
  },
  'thyroid': {
    title: 'Thyroid',
    emoji: '🦋',
    overview: 'UPDATE Thyroid is a disorder of blood sugar metabolism. An individual may have a normal blood glucose reading, whether fasting or not, yet present at the time of blood testing or even some other time during the day with symptoms resembling altered sugar handling (i.e. headaches, shakiness, unclear thinking, fatigue). There are many factors that contribute to balancing blood sugar, and although hormones such as thyroxine and growth hormone are involved to some degree, the majority of the work lies in the balance between the pancreas and the adrenal glands.',
    lifestyle: 'The correction of the problem starts with an investigation as to what caused the problem in the first place. It could be a dietary issue in which the patient is eating foods high on the glycemic index (i.e. processed flours, sugars, soda, etc.), skipping meals, or going too long without eating. Often there is an offender either creating or driving the problem. Common offenders in the dysglycemic patient are artificial sweeteners such as aspartame (Nutrasweet) and sucralose (Splenda), as well as caffeine, food allergies, medications, and hormonal stress (cortisol and estrogen are very common). Of course too many sweets and treats can be the problem too, including the highly promoted \'healthy sweeteners\' like agave syrup.',
    supplements: 'Nutrients that may help include Artichoke Extract, Mg, Zn, or B6.'
  },
  'toxicity': {
    title: 'Toxicity',
    emoji: '☠️',
    overview: 'Are you tired for some of or all of the day? Are you lacking enough energy to perform your daily activities? You may lack the energy you should have due to poor dietary and lifestyle habits. Hormonal imbalances, red blood cell issues, digestive problems, biochemical inadequacies, and even various toxicities can also result in fatigue. Click through this section to see why your energy may be low and steps you can make to improve it!',
    lifestyle: 'Are you tired for some of or all of the day? Are you lacking enough energy to perform your daily activities? You may lack the energy you should have due to poor dietary and lifestyle habits. Hormonal imbalances, red blood cell issues, digestive problems, biochemical inadequacies, and even various toxicities can also result in fatigue. Click through this section to see why your energy may be low and steps you can make to improve it!',
    supplements: 'Are you tired for some of or all of the day? Are you lacking enough energy to perform your daily activities? You may lack the energy you should have due to poor dietary and lifestyle habits. Hormonal imbalances, red blood cell issues, digestive problems, biochemical inadequacies, and even various toxicities can also result in fatigue. Click through this section to see why your energy may be low and steps you can make to improve it!'
  },
  'two-week-test': {
    title: 'Two Week Test',
    emoji: '🧪',
    overview: 'The Two-Week Test (TWT) was originally developed by Dr. Phil Maffetone – NOT Dr. Atkins or the doc who uses a very \'similar\' diet in his \'South Beach Diet.\' Many doctors and dietary advisers have \'used\' Maffetone\'s dietary idea over the years but his original concept is still the best. The TWT is only a test as the name states. Therefore, at the end of the two weeks, it is not advised to continue the diet further without alterations unless your physician advises you to do so. I actually like to think of this as a Four-Week Test. The reason is because the first two weeks will assess your carbohydrate intolerance and the second two weeks will assess your tolerance to certain carbs as you re-introduce them back into the diet. I\'ve seen many people over the years screw up the test after the first two weeks. They go back to eating the way they originally were and never learned what carbohydrates they could tolerate and to what degree. So think FOUR WEEKS! The test will help you decide if you really have a carbohydrate intolerance, and if you do, it will help you find the right level of carbohydrate intake for you.Writing down all your symptoms before you start the Two-Week Test (TWT) is recommended. This will give you a reference point to see how your symptoms have changed, if at all. Many people forget the severity of their problems after they no longer have them. You may also want to record your weight and any body fat measurements, as applicable.',
    lifestyle: '',
    supplements: ''
  },
  'liver': {
    title: 'Liver Detoxification',
    emoji: '🫘',
    overview: 'Leg cramps at night, especially the excruciating \'Charley Horse\' cramps that occur in the calves, are most commonly due to poor tissue calcium utilization. Calcium, as most know, is important for bone and joint health, but it is also extremely important for the muscles. Calcium aids in muscle contraction and if low, can lead to muscle cramping. Most people get enough calcium in their daily diet, but they do not use it efficiently. If essential fats in the diet are off in combination with other health problems such as poor digestion, these issues must be addressed for calcium to work for you. Other signs of calcium tissue \'starvation\' are: cold sores/fever blisters, canker sores, bursitis, achy muscles especially in spring/summer during the first few days of yard work, itchy skin, and bursitis, to name a few. Head to the Calcium page to learn more about this process and sleep through the night cramp free!',
    lifestyle: '',
    supplements: ''
  },
  'adrenal': {
    title: 'Adrenal Support',
    emoji: '💪',
    overview: 'Your adrenal glands are responsible for stress response and producing hormones like cortisol.',
    lifestyle: 'Supporting adrenal function through stress management and proper nutrition.',
    supplements: 'Key nutrients for adrenal support.'
  },
  'breathing': {
    title: 'Breathe!',
    emoji: '💨',
    overview: 'Proper breathing techniques can improve oxygen delivery and reduce stress.',
    lifestyle: 'Focus on diaphragmatic breathing and nasal breathing.',
    supplements: 'Supporting respiratory health.'
  },
  'gallbladder': {
    title: 'Gallbladder Health',
    emoji: '💛',
    overview: 'The gallbladder stores bile and aids in fat digestion.',
    lifestyle: 'Support gallbladder function with proper nutrition.',
    supplements: 'Cholacol, Betafood, and other supporting nutrients.'
  },
  'athletic-performance': {
    title: 'Athletic Performance',
    emoji: '🏆',
    overview: 'Optimize physical performance through proper nutrition and training.',
    lifestyle: 'Combination of aerobic and anaerobic training with proper recovery.',
    supplements: 'Nutrients to support athletic performance and recovery.'
  }
}

export default function LandingPage() {
  const { pageId } = useParams()
  const page = landingPageContent[pageId]

  if (!page) {
    return (
      <div>
        <BackButton />
        <SectionHeader
          title="Coming Soon"
          emoji="⏰"
          subtitle="This page is being prepared"
        />
        <div className="card">
          <p className="text-shc-muted text-sm">
            The page with ID "{pageId}" is not yet available. Please check back soon!
          </p>
        </div>
      </div>
    )
  }

  return (
    <div>
      <BackButton />
      <SectionHeader
        title={page.title}
        emoji={page.emoji}
      />
      <div className="space-y-4">
        {page.overview && (
          <ContentBlock
            title="Overview"
            content={page.overview}
            type="overview"
          />
        )}
        {page.lifestyle && (
          <ContentBlock
            title="Lifestyle"
            content={page.lifestyle}
            type="lifestyle"
          />
        )}
        {page.supplements && (
          <ContentBlock
            title="Supplements"
            content={page.supplements}
            type="supplements"
            link={getSupplementLink(pageId)}
          />
        )}
      </div>
    </div>
  )
}
