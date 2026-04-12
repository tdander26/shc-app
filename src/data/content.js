/**
 * Comprehensive content data module for SHC app
 * Merges all extracted JSON content from Swift files
 * Includes sections, screens, landing pages, and helper functions
 */

// Main sections with metadata
export const sections = [
  {
    id: 'fatigue',
    title: 'Fatigue',
    icon: '🔋',
    route: '/fatigue',
    description: 'Low energy, tiredness, and fatigue issues',
    color: '#FFD700'
  },
  {
    id: 'sleep',
    title: 'Sleep',
    icon: '😴',
    route: '/sleep',
    description: 'Sleep problems and sleep quality issues',
    color: '#4B0082'
  },
  {
    id: 'mood',
    title: 'Mood & Emotions',
    icon: '🧠',
    route: '/mood',
    description: 'Mental health, emotional wellbeing, neurotransmitters',
    color: '#FF69B4'
  },
  {
    id: 'skin',
    title: 'Skin Health',
    icon: '✨',
    route: '/skin',
    description: 'Skin conditions and skin health issues',
    color: '#FFB6C1'
  },
  {
    id: 'headaches',
    title: 'Headaches & Head Pain',
    icon: '🤕',
    route: '/headaches',
    description: 'Migraines, tension headaches, and other head pain',
    color: '#FF6347'
  },
  {
    id: 'body-pain',
    title: 'Body Pain',
    icon: '💪',
    route: '/body-pain',
    description: 'Joint pain, muscle pain, arthritis, and injuries',
    color: '#DC143C'
  },
  {
    id: 'male-hormones',
    title: 'Male Hormones',
    icon: '♂️',
    route: '/male-hormones',
    description: 'Testosterone, sexual health, prostate health',
    color: '#4169E1'
  },
  {
    id: 'female-hormones',
    title: 'Female Hormones',
    icon: '♀️',
    route: '/female-hormones',
    description: 'Estrogen, progesterone, menopause, PMS',
    color: '#FF1493'
  },
  {
    id: 'digestion',
    title: 'Digestion',
    icon: '🫃',
    route: '/digestion',
    description: 'Digestive health, stomach, GI issues',
    color: '#8B4513'
  },
  {
    id: 'immune',
    title: 'Immune Health',
    icon: '🛡️',
    route: '/immune',
    description: 'Immune system, infections, immunity',
    color: '#228B22'
  }
];

// All screens organized by section
export const screens = {
  // FATIGUE SECTION
  'fatigue-intro': {
    id: 'fatigue-intro',
    sectionId: 'fatigue',
    title: 'Fatigue',
    type: 'intro',
    content: {
      text: 'Are you tired for some of or all of the day? Are you lacking enough energy to perform your daily activities? You may lack the energy you should have due to poor dietary and lifestyle habits. Hormonal imbalances, red blood cell issues, digestive problems, biochemical inadequacies, and even various toxicities can also result in fatigue. Click through this section to see why your energy may be low and steps you can make to improve it!'
    },
    options: [
      { label: 'Anemia Calculator', destination: '/fatigue/anemia-input' },
      { label: 'Continue', destination: '/fatigue/q1' }
    ]
  },
  'fatigue-q1': {
    id: 'fatigue-q1',
    sectionId: 'fatigue',
    title: 'Does eating food give you energy?',
    type: 'question',
    content: { question: 'Does eating food give you energy?' },
    options: [
      { label: 'Yes', destination: '/landing/dysglycemia' },
      { label: 'No', destination: '/fatigue/q2y' }
    ]
  },
  'fatigue-q2y': {
    id: 'fatigue-q2y',
    sectionId: 'fatigue',
    title: 'Does eating cause you to be more tired?',
    type: 'question',
    content: { question: 'Does eating cause you too be more tired?' },
    options: [
      { label: 'Yes', destination: '/fatigue/q3y' },
      { label: 'No', destination: '/fatigue/q4' }
    ]
  },
  'fatigue-q3y': {
    id: 'fatigue-q3y',
    sectionId: 'fatigue',
    title: 'Which of the following do you feel more symptoms after eating?',
    type: 'question',
    content: { question: 'Which of the following do you feel more symptoms after eating?' },
    options: [
      { label: 'Protein', description: 'Examples would include fish, chicken, and soyburgers.', destination: '/landing/hcl' },
      { label: 'Carbs', description: 'Examples would include fish, chicken, and soyburgers.', destination: '/landing/insulin-resistance' },
      { label: 'Fats', description: 'Examples would include fish, chicken, and soyburgers.', destination: '/landing/fat-metabolism' },
      { label: 'Uncertain', description: 'Examples would include fish, chicken, and soyburgers.', destination: '/landing/allergy' }
    ]
  },
  'fatigue-q4': {
    id: 'fatigue-q4',
    sectionId: 'fatigue',
    title: 'Do you ever experience sudden changes in heart beat or rate?',
    type: 'question',
    content: { question: 'Do you ever experience sudden changes in heart beat or rate?' },
    options: [
      { label: 'Yes', destination: '/fatigue/q3y' },
      { label: 'No', destination: '/fatigue/q5' }
    ]
  },
  'fatigue-q4y': {
    id: 'fatigue-q4y',
    sectionId: 'fatigue',
    title: 'Do these changes occur after eating?',
    type: 'question',
    content: { question: 'Do these changes occur after eating?' },
    options: [
      { label: 'Yes', destination: '/landing/allergy' },
      { label: 'No', destination: '/fatigue/q5' }
    ]
  },
  'fatigue-q5': {
    id: 'fatigue-q5',
    sectionId: 'fatigue',
    title: 'Do you feel like you have two or more of the following?',
    type: 'question',
    content: {
      question: 'Do you feel like you have two or more of the following?',
      symptoms: [
        'Headaches around the front of your head as if you were wearing a hat.',
        'Tired after eatting.',
        'Sugar or Salt Cravings.',
        'Burning low legs and feet, or feet tire easily while standing.',
        'Irregular heartbeat/palpitations.',
        'Need to get up more than once at night to urinate.'
      ]
    },
    options: [
      { label: 'Yes', destination: '/landing/parasympathetic' },
      { label: 'No', destination: '/fatigue/q6' }
    ]
  },
  'fatigue-q6': {
    id: 'fatigue-q6',
    sectionId: 'fatigue',
    title: 'Do you ever feel short of breath or have trouble breathing?',
    type: 'question',
    content: { question: 'Do you ever feel short of breath or have trouble breathing?' },
    options: [
      { label: 'Yes', destination: '/fatigue/q6y' },
      { label: 'No', destination: '/fatigue/q7' }
    ]
  },
  'fatigue-q6y': {
    id: 'fatigue-q6y',
    sectionId: 'fatigue',
    title: 'Is the breathing trouble following exercise?',
    type: 'question',
    content: { question: 'Is the breathing trouble following exercise?' },
    options: [
      { label: 'Yes', destination: '/landing/asthma-exercise' },
      { label: 'No', destination: '/landing/asthma' }
    ]
  },
  'fatigue-q7': {
    id: 'fatigue-q7',
    sectionId: 'fatigue',
    title: 'Do you get sick often?',
    type: 'question',
    content: { question: 'Do you get sick often?' },
    options: [
      { label: 'Yes', destination: '/fatigue/immune-transition' },
      { label: 'No', destination: '/fatigue/q7n' }
    ]
  },
  'fatigue-q7n': {
    id: 'fatigue-q7n',
    sectionId: 'fatigue',
    title: 'Do you feel tired most of the day and always want to sleep?',
    type: 'question',
    content: { question: 'Do you feel tired most of the day and always want to sleep?' },
    options: [
      { label: 'Yes', destination: '/landing/toxicity' },
      { label: 'No', destination: '/fatigue/q8' }
    ]
  },
  'fatigue-q8': {
    id: 'fatigue-q8',
    sectionId: 'fatigue',
    title: 'Do you crave red meat or are you a vegan or vegetarian?',
    type: 'question',
    content: { question: 'Do you crave red meat or are you a vegan or vegetarian?' },
    options: [
      { label: 'Yes', destination: '/fatigue/anemia-transition' },
      { label: 'No', destination: '/fatigue/q9' }
    ]
  },
  'fatigue-q9': {
    id: 'fatigue-q9',
    sectionId: 'fatigue',
    title: 'Have you had recent blood work?',
    type: 'question',
    content: { question: 'Have you had recent blood work?' },
    options: [
      { label: 'Yes', destination: '/fatigue/anemia-input' },
      { label: 'No', destination: '/fatigue/get-that-shit-done' }
    ]
  },
  'anemia-input': {
    id: 'anemia-input',
    sectionId: 'fatigue',
    title: 'Anemia Calculator',
    type: 'calculator',
    content: {
      description: 'Anemia Calculator',
      inputs: [
        { label: 'Select Gender', type: 'picker', options: ['Male', 'Female'] },
        { label: 'Serum Iron', type: 'decimal' },
        { label: 'RBC', type: 'decimal' },
        { label: 'Hemoglobin', type: 'decimal' },
        { label: 'Hematocrit', type: 'decimal' },
        { label: 'MCV', type: 'decimal' },
        { label: 'MCH', type: 'decimal' },
        { label: 'MCHC', type: 'decimal' }
      ],
      resultTypes: {
        female: {
          pathologicalIronDeficiency: 'Iron < 27 OR RBC < 3.77 OR Hemoglobin < 11.1 OR Hematocrit < 34 OR MCV < 79 OR MCHC < 31.5 OR MCH < 26.6',
          functionalIronDeficiency: 'Iron < 85 OR RBC < 3.9 OR Hemoglobin < 13.5 OR Hematocrit < 37 OR MCV < 85 OR MCHC < 32 OR MCH < 27.7',
          pathologicalB12FolicAcid: 'MCV > 97 OR MCHC > 33 OR MCH > 35.7',
          functionalB12FolicAcid: 'MCV > 92 OR MCHC > 32 OR MCH > 36'
        },
        male: {
          pathologicalIronDeficiency: 'Iron < 40 OR RBC < 4.1 OR Hemoglobin < 12.5 OR Hematocrit < 36 OR MCV < 79 OR MCHC < 31.5 OR MCH < 26.6',
          functionalIronDeficiency: 'Iron < 85 OR RBC < 4.4 OR Hemoglobin < 14 OR Hematocrit < 39 OR MCV < 85 OR MCHC < 32 OR MCH < 27.7',
          pathologicalB12FolicAcid: 'MCV > 97 OR MCHC > 33 OR MCH > 35.7',
          functionalB12FolicAcid: 'MCV > 92 OR MCHC > 32 OR MCH > 36'
        }
      },
      possibleResults: [
        'Pathological Iron Deficiency Anemic',
        'Functional Iron Deficiency Anemia',
        'Pathologic B12 or Folic Acid Deficiency (Macrocyctic Anemia)',
        'Functional B12 or Folic Acid Deficiency (Macrocyctic Anemia)',
        'Within Normal Functional and Pathological Ranges'
      ]
    },
    options: []
  },
  'fatigue-anemia-transition': {
    id: 'fatigue-anemia-transition',
    sectionId: 'fatigue',
    title: 'Anemia Transition',
    type: 'transition',
    content: { text: 'You may be low in red blood building nutrients such as iron and/or vitamin B12' },
    options: [{ label: 'Continue', destination: '/' }]
  },
  'fatigue-immune-transition': {
    id: 'fatigue-immune-transition',
    sectionId: 'fatigue',
    title: 'Immune Transition',
    type: 'transition',
    content: { text: 'This could very well be something taxing your immune system.' },
    options: [{ label: 'Continue', destination: '/immune/intro' }]
  },
  'get-that-shit-done': {
    id: 'get-that-shit-done',
    sectionId: 'fatigue',
    title: 'Get that SHIT DONE!',
    type: 'content',
    content: { text: 'Get that SHIT DONE!' },
    options: []
  },

  // SLEEP SECTION
  'sleep-intro': {
    id: 'sleep-intro',
    sectionId: 'sleep',
    title: 'Problems with Sleep',
    type: 'hub',
    content: { overview: 'Sleep is important.' },
    options: [
      { label: 'Wakinging up at a Certain Time', destination: '/sleep/time' },
      { label: 'Nightmares or Night Terrors', destination: '/sleep/nightmare' },
      { label: 'Insomnia or Trouble Falling Asleep', destination: '/sleep/insomnia' },
      { label: 'Waking Up Multiple Times', destination: '/sleep/waking-up-multiple' },
      { label: 'Hands Go Numb', destination: '/sleep/numbness-sleeping' },
      { label: 'Heart Pounding at Night', destination: '/sleep/heart-at-night' },
      { label: 'Restless Leg Syndrome', destination: '/sleep/rls' },
      { label: 'Cramping at Night', destination: '/sleep/cramps-at-night' },
      { label: 'Night Sweats', destination: '/sleep/night-sweats' },
      { label: 'Snoring or Sleep Apnea', destination: '/sleep/snoring' },
      { label: 'Bruxism/Jaw Clenching', destination: '/sleep/bruxism' },
      { label: 'Waking up to go to the Bathroom', destination: '/sleep/wake-up-bathroom' },
      { label: 'Healthy Sleep Habits', destination: '/sleep/healthy-sleep-habits' }
    ]
  },
  'sleep-time': {
    id: 'sleep-time',
    sectionId: 'sleep',
    title: 'Waking Up at A Certain Time',
    type: 'question',
    content: { text: 'Please select the time that fits within the list below.' },
    options: [
      { label: '11pm - 1am', destination: '/sleep/gb-sleep-trans' },
      { label: '1am - 3am', destination: '/sleep/liver-sleep-trans' },
      { label: '3am - 5am', destination: '/sleep/sugar-sleep-trans' },
      { label: '5am - 7am', destination: '/sleep/digestion-sleep-trans' },
      { label: '7am - 9am', destination: '/sleep/get-up' }
    ]
  },
  'nightmare': {
    id: 'nightmare',
    sectionId: 'sleep',
    title: 'Nightmares / Night Terrors',
    type: 'content',
    content: {
      overview: 'Nightmares and especially night terrors are from a liver detoxification problem. This is your liver\'s inability to properly break down certain substances such as medications, hormones (such as estrogen or insulin), toxic substances you may have been exposed to, or even certain foods you\'ve consumed or substances you\'ve breathed. Head over to the Liver page to learn more.'
    },
    options: [{ label: 'Liver', destination: '/landing/liver' }]
  },
  'insomnia': {
    id: 'insomnia',
    sectionId: 'sleep',
    title: 'Insomnia/Inability to Fall Asleep',
    type: 'content',
    content: {
      overview: 'Does it take you more than fifteen minutes to fall asleep? This is most commonly due to high cortisol levels at night. Cortisol, one of the hormones secreted by the adrenal glands, should normally be low at night. High levels due to stress will keep you up. Cortisol and melatonin (the hormone that helps you get to sleep), are inversely related to one another. So high cortisol levels mean suppressed melatonin levels, and that hormone needs to elevate at night to provide restful sleep. The stress can be emotional/mental, chemical/nutritional (too much sugar or caffeine are very common – even if you only consume caffeine in the early part of the day that can affect your sleep many hours later), as well as physical (working out too hard, pain and injuries). If you are having trouble falling asleep at a certain time then go back and check out those time sections but if you just can\'t get to sleep then head over the Excess Sympathetic page to learn more.'
    },
    options: [{ label: 'Excess Sympathetic', destination: '/landing/excess-sympathetic' }]
  },
  'waking-up-multiple': {
    id: 'waking-up-multiple',
    sectionId: 'sleep',
    title: 'Waking Up at Multiple Times',
    type: 'content',
    content: {
      overview: 'Provided you don\'t have all your pets on your bed, tossing and turning all night is usually due to spikes from the adrenal gland\'s hormone cortisol or epinephrine which is a result of too much emotional, nutritional, or physical stress. Your body increases epinephrine levels when your blood sugar drops too low so it can pull glucose (sugar) from glycogen (stored sugar) from your liver. Your body will increase cortisol to break down valuable anabolic (tissue building) amino acids from protein to convert into glucose to elevate your blood sugar. That surge in either stress hormone will wake you up, typically around 1-3am but for some people it\'s often throughout the night. The main nutritional stress is often too much sugar, and a close second is caffeine, even if you only drink coffee/caffeine it in the morning. Learn more how to stabilize your blood sugar at the Dysglycemia page.'
    },
    options: [{ label: 'Dysglycemia', destination: '/landing/dysglycemia' }]
  },
  'numbness-sleeping': {
    id: 'numbness-sleeping',
    sectionId: 'sleep',
    title: 'Numbness at Night',
    type: 'content',
    content: {
      overview: 'Numb arms, hands, or finders can be from unstable blood sugar levels or from some nerve entrapment or irritation in the neck (cervical) or upper back (thoracic) area. Are you able to relieve the hand numbness by moving your arms in different positions? For example, if your right hand is numb and you move your right arm/shoulder to another position does the numbness go away? Is so, that would signify some connective tissue issue causing some nerve entrapment. Seeking out a chiropractor, physical therapist, acupuncturist, or other qualified manual therapist may provide relief.\n\nHand numbness can also come from inflammation to the connective tissue affecting your nerves. This is common with blood sugar handling issues. Learn more how to stabilize your blood sugar at the Dysglycemia page.'
    },
    options: [{ label: 'Dysglycemia', destination: '/landing/dysglycemia' }]
  },
  'heart-at-night': {
    id: 'heart-at-night',
    sectionId: 'sleep',
    title: 'Heart Pounding at Night',
    type: 'content',
    content: {
      overview: 'Can you feel or "hear" your heart beat on your pillow at night? This can be from a stress reaction but also it\'s relatively common in people who are producing excess thyroid hormone or taking excessive thyroid medication. Taking too much, or not properly metabolizing thyroid hormone medication can result in a pounding heart at night and many times the inability to get to sleep and/or stay asleep. Learn more over at the Thyroid page.'
    },
    options: [{ label: 'Thyroid', destination: '/landing/thyroid' }]
  },
  'rls': {
    id: 'rls',
    sectionId: 'sleep',
    title: 'Restless Leg Syndrome',
    type: 'content',
    content: {
      overview: 'Restless leg syndrome (RLS) can be due to an imbalance of fatty acids and/or a mineral deficiency but sometimes RLS is due to the autonomic nervous system being over-sympathetic or "too hyped up." There is also a close link with RLS to low levels of the neurotransmitter dopamine. Of course we have to look at stress here – isn\'t that ultimately the reason for every ailment? Too much stress in one\'s life creates an imbalance between the parasympathetic (relaxed) nervous system and the sympathetic "fight or flight" system. Ultimately prolonged and excessive stress whether from working too hard, exercising too hard, mental/emotional stress, poor dietary habits, pain, and injuries pushes the nervous system too much to the "fight or flight" mode and RLS results.\n\nTypically before RLS begins or gets very bad there are other warning signs that one might not have realized: a twitchy eyelid, a limb that jumps/jerks as you\'re falling asleep, sensitivity to lights and sounds, or maybe you get dizzy when standing up quickly.\n\nHead over the Excess Sympathetic page to learn more.\nTo see if you\'re experiencing some dopamine issues, click below.'
    },
    options: [
      { label: 'Dopamine', destination: '/mood/dopamine' },
      { label: 'Sympathetic Excess', destination: '/landing/sympathetic-excess' }
    ]
  },
  'cramps-at-night': {
    id: 'cramps-at-night',
    sectionId: 'sleep',
    title: 'Cramps at Night',
    type: 'content',
    content: {
      overview: 'Leg cramps at night, especially the excruciating "Charley Horse" cramps that occur in the calves, are most commonly due to poor tissue calcium utilization. Calcium, as most know, is important for bone and joint health, but it is also extremely important for the muscles. Calcium aids in muscle contraction and if low, can lead to muscle cramping. Most people get enough calcium in their daily diet, but they do not use it efficiently. If essential fats in the diet are off in combination with other health problems such as poor digestion, these issues must be addressed for calcium to work for you. Other signs of calcium tissue "starvation" are: cold sores/fever blisters, canker sores, bursitis, achy muscles especially in spring/summer during the first few days of yard work, itchy skin, and bursitis, to name a few. Head to the Calcium page to learn more about this process and sleep through the night cramp free!'
    },
    options: [{ label: 'Calcium', destination: '/landing/calcium' }]
  },
  'night-sweats': {
    id: 'night-sweats',
    sectionId: 'sleep',
    title: 'Night Sweats',
    type: 'content',
    content: {
      overview: 'Night sweats are due to your body\'s inability to properly detoxify certain substances, typically hormones, through your liver, so it relies on your skin to "flush" them out. This is more common in women, especially during menopause. If you\'re under a lot of stress and can\'t get back to sleep after waking up then most likely your stress hormone, cortisol, is too high. Head over to the Liver page to learn more how to break these hormones down so your liver works better and you stop the excessive sweating.'
    },
    options: [{ label: 'Liver', destination: '/landing/liver' }]
  },
  'snoring': {
    id: 'snoring',
    sectionId: 'sleep',
    title: 'Waking Up to go to the Bathroom',
    type: 'content',
    content: {
      overview: 'Snoring is a sign of distress and when you stop breathing while sleeping (apnea) is a sign of significant health distress. If you\'re to the point where you need a CPAP machine, well, you\'ve got some work to do to really improve your health. This stressful breathing can result from many problems – but it is not right and needs to be corrected. When someone\'s health improves, so does the snoring. I\'d suggest you head on over the Breathing page to learn more about breathing and health.'
    },
    options: [{ label: 'Breathing', destination: '/landing/breathing' }]
  },
  'wake-up-bathroom': {
    id: 'wake-up-bathroom',
    sectionId: 'sleep',
    title: 'Waking Up to go to the Bathroom',
    type: 'content',
    content: {
      overview: 'Typically there are two main reasons why you may wake up to urinate at night and this is very rarely related to how much water/liquid you drank later in the evening or close to going to bed. Click on the option below to help guide you.',
      section1: 'Are you waking up multiple times at night and can\'t get back to sleep until you urinate some? Check out the Sleep Stress page here.',
      section2: 'Chemically, making sure inflammation is being dealt with as well as making sure the necessary components for joint repair are present is important. You can read about this in the arthritis section and click here for a full article on tissue and joint repair over at my Sock Doc site. Additionally, there is a clinical correlation to carbohydrate intolerance/insulin resistance. When this occurs in many people, the wrist flexors (as well as other muscles) are compromised. This sets the stage for a problem in that area to arise.'
    },
    options: [{ label: 'Sleep Stress', destination: '/sleep/sleep-stress' }]
  },
  'healthy-sleep-habits': {
    id: 'healthy-sleep-habits',
    sectionId: 'sleep',
    title: 'Healthy Sleep Habits',
    type: 'content',
    content: {
      overview: 'Healthy sleep hygiene can really affect your sleep and your entire well-being. Keep your bedroom for two things – sex and sleep, not for working, watching TV, and eating. Here are some other tips!',
      environment: 'Dark and cool. The pineal gland which secretes melatonin so you can sleep is turned off by light sources and warm temperatures (typically over 68 degrees Fahrenheit). The darker the room the better. Remove all major electronic sources from your room – particularly the TV and computers and devices. Blue lights from devices suppress melatonin levels. Blue block glasses can be beneficial if you need to do computer work into the evening before bed. If you wake up - don\'t get on your phone or ipad!',
      time_to_sleep: 'Shoot for going to bed around 10pm, or 11pm at the latest. It\'s true that you\'ll sleep much better if you sleep more in line with the sun. Sleeping eight hours from 10pm to 6am is much healthier than 1am to 9am. The later you get to sleep past 11pm, the worse off you\'ll typically be.',
      mattress: 'Hard and firm. Stay away from are the ones that contain magnets, either in the mattress or under, as well as the memory foam type mattresses as they don\'t allow you to move at night.'
    },
    options: []
  },
  'sleep-stress': {
    id: 'sleep-stress',
    sectionId: 'sleep',
    title: 'Sleep Stress',
    type: 'content',
    content: {
      overview: 'Although many people think this is normal because they drank a lot of water before bed, it usually isn\'t. If you drank a lot of water before going to bed, waking up once to urinate is still not necessarily warranted, and waking at night to urinate more than once or after drinking a reasonable amount of fluid is a common sign of abnormal aldosterone levels. Aldosterone is a hormone secreted by the adrenal glands to regulate electrolytes in your body, primarily sodium and potassium. Low aldosterone levels correlate with a lower level of sodium (more lost through the urine and sweat), and higher aldosterone levels correlate with higher sodium, lower potassium. Aldosterone levels are normally lower during the day than they are at night. This results in you having to urinate more. At night the levels should be higher, causing fluid and therefore urine, retention. Since this is an adrenal secreted hormone, adrenal problems will cause this to function abnormally.',
      section2: 'Are you waking up multiple times at night and can\'t get back to sleep until you urinate some? Check out the Sleep Stress page here.',
      section3: 'Are you a guy having prostate issues? If you are, or aren\'t sure, head over to the Prostate Health page.',
      lifestyle: 'If your intake of salt (sea salt is ideal) is low during the day, consider increasing. Excess caffeine can also result in excessive urination, so consider cutting that back or eliminating for a few days to see if it helps your sleep. Also, histamines (from allergic reactions) can irritate the bladder resulting in excessive nighttime urination. Check out the Allergy page below to learn more.',
      supplements: 'Cat B, Org Mins, Phosfood, Cyruta Plus.'
    },
    options: [
      { label: 'Sleep Stress', destination: '/sleep/sleep-stress' },
      { label: 'Prostate Health', destination: '/landing/prostate-health' },
      { label: 'Allergy', destination: '/landing/allergy' }
    ]
  },
  'gb-sleep-trans': {
    id: 'gb-sleep-trans',
    sectionId: 'sleep',
    title: 'Galbladder and Sleep Connection',
    type: 'transition',
    content: { text: 'The inability to fall asleep before 1am, or if you\'re asleep before 11pm and you wake up between 11pm-1am, typically indicates something stressing out your gallbladder, (or if your gallbladder has been removed, then your bile ducts). Head over to the Gallbladder page to learn more.' },
    options: [{ label: 'Continue', destination: '/landing/fat-metabolism' }]
  },
  'liver-sleep-trans': {
    id: 'liver-sleep-trans',
    sectionId: 'sleep',
    title: 'Liver and Sleep Connection',
    type: 'transition',
    content: { text: 'Waking up between this time is typically a liver issue. Your liver is a major detoxifying organ, breaking down everything from hormones your body makes to substances you consume and breathe. This is the most common time someone wakes up at night and it can sometimes be difficult to pinpoint what the culprit may be. Head over to the Liver page to learn more.' },
    options: [{ label: 'Continue', destination: '/landing/liver' }]
  },
  'sugar-sleep-trans': {
    id: 'sugar-sleep-trans',
    sectionId: 'sleep',
    title: 'Blood Sugar and Sleep Connection',
    type: 'transition',
    content: { text: 'It\'s common that blood sugar levels drop around this time from either high stress hormones (such as cortisol), or from an inadequate diet. Lack of adequate protein or even sufficient carbohydrates consumed during the day will then put the body in a catabolic state resulting in the dropping of blood sugar during sleep and a subsequent rise in stress hormones, resulting in waking up. Head over to the Blood Sugar page to learn more.' },
    options: [{ label: 'Continue', destination: '/landing/dysglycemia' }]
  },
  'digestion-sleep-trans': {
    id: 'digestion-sleep-trans',
    sectionId: 'sleep',
    title: 'Digestion and Sleep Connection',
    type: 'transition',
    content: { text: 'Something affecting your digestion in a negative way will often cause you to wake up during this time and be up for the rest of the night (well, now morning). Food sensitivities as well as unhealthy gut bacteria and other microbes can impair gut function and throw off your early morning sleep. Check out the digestion section to learn more.' },
    options: [{ label: 'Continue', destination: '/digestion/intro' }]
  },
  'get-up': {
    id: 'get-up',
    sectionId: 'sleep',
    title: 'Get Up!',
    type: 'transition',
    content: { text: 'It\'s not just about the number of hours you sleep, but also the time you\'re asleep. Your body\'s natural circadian rhythm is set to wake up typically between 6:30am and 8:30am. So, if you\'re having trouble getting up around this time and feel like you need more sleep, most likely there are other health problems that need to be addressed. Your body needs more sleep as it\'s trying to rest more to recover from other health issues that hopefully you\'ll find some guidance in this app!' },
    options: [{ label: 'Home', destination: '/' }]
  },

  // MOOD SECTION
  'mood-intro': {
    id: 'mood-intro',
    sectionId: 'mood',
    title: 'Mood & Emotional Health',
    type: 'intro',
    content: {
      overview: 'This section will deal with mental and emotional well-being. Often these problems come from nutritional and dietary imbalances as well as other health problems such as anemia, digestive problems, and hormonal imbalances. Please note that none of the information in this app is a substitute for any medication you may have been prescribed by your physician. However, medications often come with a host of side effects and don\'t quite address the problem fully.'
    },
    options: [{ label: 'Continue', destination: '/mood/q1' }]
  },
  'mood-q1': {
    id: 'mood-q1',
    sectionId: 'mood',
    title: 'How\'s your concentration and ability to focus?',
    type: 'question',
    content: {},
    options: [
      { label: 'Ok, but it could be better.', destination: '/mood/concentration' },
      { label: 'Ok, but I need a medication like Adderall, Vyvanse, Ritalin, or similar medication.', destination: '/mood/amphetamine' },
      { label: 'Great! No Issues.', destination: '/mood/q2' }
    ]
  },
  'mood-q2': {
    id: 'mood-q2',
    sectionId: 'mood',
    title: 'Do you often get feelings of anxiousness, panic, tension?',
    type: 'question',
    content: {},
    options: [
      { label: 'Yes', destination: '/mood/gaba' },
      { label: 'No', destination: '/mood/q3' },
      { label: 'Ok, but I need an Agonist Modulators like Xanax, Valium, Ambien, Lunesta, or similar medication.', destination: '/mood/amphetamine' }
    ]
  },
  'mood-q3': {
    id: 'mood-q3',
    sectionId: 'mood',
    title: 'Do you often feel overwhelmed or have trouble quieting your mind and perhaps need to sleep with background noise (such as the TV on)?',
    type: 'question',
    content: {},
    options: [
      { label: 'Yes', destination: '/mood/gaba' },
      { label: 'No', destination: '/mood/q4' }
    ]
  },
  'mood-q4': {
    id: 'mood-q4',
    sectionId: 'mood',
    title: 'Do you have poor motivation or lack of interest in activities or lack of concern for others?',
    type: 'question',
    content: {},
    options: [
      { label: 'Yes', destination: '/mood/dopamine' },
      { label: 'No', destination: '/mood/q5' },
      { label: 'I need a Dopamine medication like Wellbutrin XL, or similar medication.', destination: '/mood/amphetamine' }
    ]
  },
  'mood-q5': {
    id: 'mood-q5',
    sectionId: 'mood',
    title: 'Do you have feelings of hopelessness, get agitated easily and have trouble handling stress?',
    type: 'question',
    content: {},
    options: [
      { label: 'Yes', destination: '/mood/dopamine' },
      { label: 'No', destination: '/mood/q6' }
    ]
  },
  'mood-q6': {
    id: 'mood-q6',
    sectionId: 'mood',
    title: 'Do you easily lose your temper or have any addiction issues?',
    type: 'question',
    content: {},
    options: [
      { label: 'Yes', destination: '/mood/dopamine' },
      { label: 'No', destination: '/mood/q7' }
    ]
  },
  'mood-q7': {
    id: 'mood-q7',
    sectionId: 'mood',
    title: 'Do you ever feel down in the dumps, depressed (or been diagnosed with depression), or have little to no interest in life/activities?',
    type: 'question',
    content: {},
    options: [
      { label: 'Yes', destination: '/mood/serotonin' },
      { label: 'No', destination: '/mood/end' },
      { label: 'Ok, but I need a Serotonin modulator medication such as Paxil, Zoloft, Prozac, Celexa, Lexapro, Cymbalta, Serzone, Pristiq, or Effexor.', destination: '/mood/amphetamine' },
      { label: 'Yes, but only in the winter months.', destination: '/mood/sad' }
    ]
  },
  'concentration': {
    id: 'concentration',
    sectionId: 'mood',
    title: 'Acetylcholine Issues',
    type: 'content',
    content: {
      overview: 'Poor concentration and focus, lack of creativity, memory lapses, and forgetting people\'s names or recognize objects can be due to a problem with the neurotransmitter acetylcholine.',
      lifestyle: 'Consider a high fat diet from pasture-raised egg yolks, grass-fed meats and dairy, and raw nuts to obtain the nutrient choline which then converts to acetylcholine. If you feel as though your memory is slipping as you\'re aging then check out the hormonal sections.',
      supplements: 'Cat G, Wheat Germ Oil, Mn, B12'
    },
    options: [
      { label: 'Female Hormones', destination: '/female-hormones/intro' },
      { label: 'Male Hormones', destination: '/male-hormones/intro' }
    ]
  },
  'gaba': {
    id: 'gaba',
    sectionId: 'mood',
    title: 'GABA Issues',
    type: 'content',
    content: {
      overview: 'These symptoms are often associated with the neurotransmitter GABA, our most powerful inhibitory neurotransmitter. GABA greatly affects your sleep and your overall ability to relax. If you feel like you need to have some alcohol at night to chill-out then you most likely aren\'t supporting healthy GABA levels.',
      lifestyle: 'It\'s very important to stay away from the excitatory amino acids and their chemical derivatives as they will override your inhibitory GABA levels. These two substances are glutamates, commonly found as MSG (monosodium glutamate), asparates, commonly known as NutraSweet, commonly found in diet drinks and foods (and that blue packet Equal). MSG is also hidden under the names "hydrolyzed" and "autolyzed", so be sure to read ingredients. Check out the other health tips in the Sleep section as without sufficient GABA levels, you won\'t sleep well. Breathe! Learn healthy breathing tips to naturally calm down your nervous system.',
      supplements: 'Mn, Zn, P5P, Passion Flower, Valerian Root. Also, for faster relief Taurine, L-Theanine, and GABA'
    },
    options: [
      { label: 'Sleep!', destination: '/sleep/intro' },
      { label: 'Breathe!', destination: '/landing/breathe' }
    ]
  },
  'dopamine': {
    id: 'dopamine',
    sectionId: 'mood',
    title: 'Dopamine Issues',
    type: 'content',
    content: {
      overview: 'These symptoms are often associated with the neurotransmitter dopamine, which is greatly affected by gut health and hormonal health, specifically testosterone levels in men and progesterone levels in women.',
      lifestyle: 'Meats, eggs, and cheeses contain high levels of the amino acid phenylalanine, which can help the body make more dopamine. Passionate relationships (ie: having a good love life) and greatly improve dopamine levels. Check out the hormone sections below for more hormonal health suggestions. Also, since the majority of dopamine is actually made in your gut, you may want to see the digestion section if you\'re having any gut issues.',
      supplements: 'MethylB12, 5MTHF, P5P, Zn, Mg. Consider anemia: lack of iron or other red blood cell nutrients (a complete blood count "CBC" lab test would screen for this).'
    },
    options: [
      { label: 'Digestion', destination: '/digestion/intro' },
      { label: 'Female Hormones', destination: '/female-hormones/intro' },
      { label: 'Male Hormones', destination: '/male-hormones/intro' }
    ]
  },
  'serotonin': {
    id: 'serotonin',
    sectionId: 'mood',
    title: 'Serotonin Issues',
    type: 'content',
    content: {
      overview: 'Feelings of depression affect a vast amount of people throughout the world and is a leading cause of disability. Therefore, a multitude of medications are available to "treat" this condition which is most often due in some part to an imbalance of the neurotransmitter serotonin. Paxil, Zoloft, Prozac, and Lexapro are just some of the many "go-to" medications people take to alter their serotonin levels. These medications don\'t make more of the neurotransmitter, but help to keep more of it available for your body to use longer.',
      lifestyle: 'High carbohydrate diets are known to lower serotonin levels. So, check out the blood sugar section below for more there if this pertains to you. If at least half of your diet is sugar or foods such as fruit, breads, potatoes, rice, or other carbohydrates, then it probably does. Estrogen levels greatly affect serotonin levels in men and women. If you\'re noting hormonal symptoms as you age (or if you\'re not sure) then check out that section. Over 95% of serotonin is actually made in your gut, so refer to the digestion section below for help if you\'re having any gut issues. Get outside! Nature and sunshine will naturally help you feel better and improve your serotonin levels. Serotonin is needed for healthy melatonin levels and vice-versa so if you\'re not sleeping well check out the sleep section.',
      supplements: 'MethylB12, 5MTHF, P5P, Zn, Mg. Consider anemia: lack of iron or other red blood cell nutrients (a complete blood count "CBC" lab test would screen for this). Also, the herb St. John\'s wort can be very beneficial for improved serotonin health. However, please be aware if you are also taking a MAOI medication such as Marplan or Nardil as a condition called "serotonin syndrome" can occur (headaches, confusion, cardiovascular and digestive problems).'
    },
    options: [
      { label: 'Dysglycemia?', destination: '/landing/dysglycemia' },
      { label: 'Female Hormones', destination: '/female-hormones/intro' },
      { label: 'Male Hormones', destination: '/male-hormones/intro' },
      { label: 'Sleep', destination: '/sleep/intro' },
      { label: 'Digestion', destination: '/digestion/intro' }
    ]
  },
  'sad': {
    id: 'sad',
    sectionId: 'mood',
    title: 'Seasonal Affective Disorder',
    type: 'content',
    content: {
      overview: 'This condition is very common due to shorted hours of daylight resulting in an imbalance of our circadian rhythm, our "body clock." For some people, it is also the lack of vitamin D, which we make from the sun\'s UVB rays.',
      lifestyle: 'Get outside! Nature and sunshine will naturally help you feel better and improve your serotonin levels. Although the light from the sun will help improve your body clock, for many parts of the world there are little to no UVB rays to make vitamin D during the winter months as it is based off of the latitude of location and therefore the angle of the sun. Fun tip: If your shadow is longer than you are tall then the sun is too low to give you the UVB that you need for vitamin D. If the sun is high and now your shadow is shorter than you, then you are most likely getting some UVB rays as long as your skin is exposed (torso, thighs, and arms most ideal). If you\'re unable to get outside then perhaps consider a sunlamp. There are many on the market but you want one that mimics sunshine and the UVB rays. Follow the guidelines on the specific product.',
      supplements: 'Vitamin D, EPA.'
    },
    options: []
  },
  'amphetamine': {
    id: 'amphetamine',
    sectionId: 'mood',
    title: 'Drugs',
    type: 'transition',
    content: { text: 'This section discusses pharmaceutical interventions for mood and focus issues.' },
    options: []
  },
  'mood-end': {
    id: 'mood-end',
    sectionId: 'mood',
    title: 'Overall Assessment',
    type: 'transition',
    content: { text: 'It appears that overall your neurotransmitters are in-check but perhaps you are having other issues that could be affecting your mood and emotional health. Pain from injuries, both chronic and acute, sleep disorders, your hormones, immune system, and digestive system all can greatly affect how you feel. Check out those sections back on the home page.' },
    options: [{ label: 'Home', destination: '/' }]
  },

  // MALE HORMONES SECTION
  'male-hormone-intro': {
    id: 'male-hormone-intro',
    sectionId: 'male-hormones',
    title: 'Male Hormones',
    type: 'intro',
    content: {
      text: 'Male Hormones',
      overview: 'Most male specific problems involve a diminished level of testosterone due to a variety of reasons as discussed in the sections below. Prostate issues, as well as other hormonal and neurotransmitter imbalances can also make you feel like you\'re aging much faster than you should be.'
    },
    options: [{ label: 'Continue', destination: '/male-hormones/q1' }]
  },
  'male-hormone-q1': {
    id: 'male-hormone-q1',
    sectionId: 'male-hormones',
    title: 'Are you experiencing...?',
    type: 'question',
    content: { text: 'Are you experiencing...?' },
    options: [
      { label: 'Decreased Sexual Interest', destination: '/landing/decreased-libido-male' },
      { label: 'Erection/Sexual Issues', destination: '/landing/erection-issues' },
      { label: 'Prostate Issues', destination: '/landing/prostate-health' },
      { label: 'Muscle Loss', destination: '/landing/muscle-loss' },
      { label: 'Hair Loss', destination: '/landing/hair-loss-male' }
    ]
  },

  // FEMALE HORMONES SECTION
  'female-hormone-intro': {
    id: 'female-hormone-intro',
    sectionId: 'female-hormones',
    title: 'Female Hormones',
    type: 'intro',
    content: {
      text: 'Female Hormones',
      overview: 'Many womens\' health issues are considered normal, because they\'re so common. We all just look at PMS as normal and night sweats or hot flashes during menopause as normal. But guess what? They\'re not. These are all signs and symptoms of health issues that can, and should be addressed. If you\'re interested in being more normal than not, continue on below!'
    },
    options: [{ label: 'Continue', destination: '/female-hormones/q1' }]
  },
  'female-hormone-q1': {
    id: 'female-hormone-q1',
    sectionId: 'female-hormones',
    title: 'Are you:',
    type: 'question',
    content: { text: 'Are you:' },
    options: [
      { label: 'Premenopausual (Any time before menopause)', destination: '/female-hormones/premen-q1' },
      { label: 'Menopause or Postmenopause (Maybe a definition?)', destination: '/female-hormones/menopause-q1' },
      { label: 'Taking Contraception (Such as an IUD or the Pill)', destination: '/female-hormones/birth-control' }
    ]
  },
  'premen-q1': {
    id: 'premen-q1',
    sectionId: 'female-hormones',
    title: 'Are you experiencing...?',
    type: 'question',
    content: { text: 'Are you experiencing...?' },
    options: [
      { label: 'PMS (Breast tenderness, Cramping/bloating/back pain, Over-emotional, Fatigue, Sweats or hot flashes, or acne)', destination: '/female-hormones/pms-view' },
      { label: 'Decrease in Sexual Interest', destination: '/landing/decreased-libido-female' },
      { label: 'Monthly Cycle Issues (Short / long cycle length, or Spotting)', destination: '/female-hormones/cycle-length-view' },
      { label: 'Fertility & Pregnancy Issues (Trouble getting pregnant, trouble sustaining pregnancy, morning sickness, or postpartum depression)', destination: '/female-hormones/fertility-picker' }
    ]
  },
  'pms-view': {
    id: 'pms-view',
    sectionId: 'female-hormones',
    title: 'Which of the Following PMS Symptoms Apply?',
    type: 'question',
    content: { text: 'Which of the Following PMS Symptoms Apply?' },
    options: [
      { label: 'Breast Tenderness', destination: '/landing/breast-tenderness' },
      { label: 'Cramping, Bloating, or Back Pain', destination: '/landing/cramping' },
      { label: 'Overly Emotional', destination: '/landing/over-emotional' },
      { label: 'Hot Flashes', destination: '/landing/hot-flash' },
      { label: 'Acne', destination: '/landing/hormone-acne' },
      { label: 'Fatigue', destination: '/landing/fatigue-female' }
    ]
  },
  'cycle-length-view': {
    id: 'cycle-length-view',
    sectionId: 'female-hormones',
    title: 'Monthly Cycle Issues',
    type: 'question',
    content: {
      text: 'The length of your cycle is closely related to healthy and sufficient progesterone levels. Typically, a shorter cycle correlates with lower progesterone levels while a longer cycle correlates with excess progesterone. However, it is the balance of estrogen and progesterone that is important and a low progesterone level can be perceived by your body due to estrogen levels that are too high. A low progesterone level can also be due to a low functioning thyroid or adrenal glands. The health of all your hormonal glands as well as your liver play a significant role in your estrogen-progesterone balance and therefore the length of your cycle.'
    },
    options: [
      { label: 'Long Cycle (31 days or more)', destination: '/landing/long-cycle' },
      { label: 'Short Cycle (27 days or less)', destination: '/landing/short-cycle' },
      { label: 'Spotting (at any time pre-period) or long periods (6 or more days)', destination: '/landing/spotting' },
      { label: 'No period (anovulation) or short period (3 days or less)', destination: '/landing/no-cycle' }
    ]
  },
  'fertility-picker': {
    id: 'fertility-picker',
    sectionId: 'female-hormones',
    title: 'Which of the Following Symptoms Apply?',
    type: 'question',
    content: { text: 'Which of the Following Symptoms Apply?' },
    options: [
      { label: 'Trouble Getting Pregnant', destination: '/landing/trouble-getting-preg' },
      { label: 'Trouble Sustaining Pregnancy', destination: '/landing/trouble-sustain-preg' },
      { label: 'Morning Sickness', destination: '/landing/morning-sickness' },
      { label: 'Postpartum Depression', destination: '/landing/postpartum-depress' }
    ]
  },
  'menopause-q1': {
    id: 'menopause-q1',
    sectionId: 'female-hormones',
    title: 'Are you experiencing...?',
    type: 'question',
    content: { text: 'Are you experiencing...?' },
    options: [
      { label: 'Sleep Issues', destination: '/sleep/intro' },
      { label: 'Night Sweats', destination: '/sleep/night-sweats' },
      { label: 'Decreased Sexual Interest', destination: '/landing/decreased-libido-female' },
      { label: 'Dry Skin/Tissues', destination: '/landing/dry-tissues' },
      { label: 'Emotional Issues', destination: '/mood/intro' },
      { label: 'Hot Flashes', destination: '/landing/hot-flash' },
      { label: 'Do you take any hormone replacement therapy (HRT)?', destination: '/female-hormones/hrt-female' }
    ]
  },
  'birth-control': {
    id: 'birth-control',
    sectionId: 'female-hormones',
    title: 'Birth Control',
    type: 'content',
    content: {
      overview: 'These symptoms are often associated with the neurotransmitter GABA, our most powerful inhibitory neurotransmitter. GABA greatly affects your sleep and your overall ability to relax. If you feel like you need to have some alcohol at night to chill-out then you most likely aren\'t supporting healthy GABA levels.',
      lifestyle: 'It\'s very important to stay away from the excitatory amino acids and their chemical derivatives as they will override your inhibitory GABA levels. These two substances are glutamates, commonly found as MSG (monosodium glutamate), asparates, commonly known as NutraSweet, commonly found in diet drinks and foods (and that blue packet Equal). MSG is also hidden under the names hydrolyzed and autolyzed, so be sure to read ingredients. Check out the other health tips in the Sleep section as without sufficient GABA levels, you won\'t sleep well.',
      supplements: 'Mn, Zn, P5P, Passion Flower, Valerian Root. Also, for faster relief Taurine, L-Theanine, and GABA'
    },
    options: [
      { label: 'Sleep!', destination: '/sleep/intro' },
      { label: 'Breathe!', destination: '/landing/breathe' }
    ]
  },
  'hrt-female': {
    id: 'hrt-female',
    sectionId: 'female-hormones',
    title: 'Female HRT',
    type: 'content',
    content: {
      overview: 'These symptoms are often associated with the neurotransmitter GABA, our most powerful inhibitory neurotransmitter. GABA greatly affects your sleep and your overall ability to relax. If you feel like you need to have some alcohol at night to chill-out then you most likely aren\'t supporting healthy GABA levels.',
      lifestyle: 'It\'s very important to stay away from the excitatory amino acids and their chemical derivatives as they will override your inhibitory GABA levels. These two substances are glutamates, commonly found as MSG (monosodium glutamate), asparates, commonly known as NutraSweet, commonly found in diet drinks and foods (and that blue packet Equal). MSG is also hidden under the names hydrolyzed and autolyzed, so be sure to read ingredients. Check out the other health tips in the Sleep section as without sufficient GABA levels, you won\'t sleep well.',
      supplements: 'Mn, Zn, P5P, Passion Flower, Valerian Root. Also, for faster relief Taurine, L-Theanine, and GABA'
    },
    options: [
      { label: 'Sleep!', destination: '/sleep/intro' },
      { label: 'Breathe!', destination: '/landing/breathe' }
    ]
  },

  // SKIN SECTION
  'acne': {
    id: 'acne',
    sectionId: 'skin',
    title: 'Acne',
    type: 'content',
    content: {
      overview: 'Acne is often either from the liver\'s inability to properly detoxify hormones (testosterone in men and estrogen in women), or from something taking the digestive tract. Hormones need certain nutrients to break them down in the liver, and if those nutrients are not available, then the skin can break out with acne.',
      lifestyle: 'A poor/unhealthy digestive tract can also result in poor hormonal health and therefore acne. Go to the GI section.',
      supplements: 'Vitamin B12 (methylcobalamin), folate (5MTHF) , vitamin B6 (pyridoxal 5\' phosphate), magnesium, and zinc are the most common nutrients necessary to achieve this.'
    },
    options: [{ label: 'Nutritional Supplementation', destination: 'https://www.dssorders.com/drtodd' }]
  },
  'cold-sore': {
    id: 'cold-sore',
    sectionId: 'skin',
    title: 'Cold Sores / Fever Blisters',
    type: 'content',
    content: {
      overview: 'Although commonly caused by the herpes virus, these erupt under stress or when the tissue is starved of calcium. If you commonly get a cold sore or fever blister when you\'re sick or run down - head to the IMMUNE Page.',
      lifestyle: 'If you get them from sun exposure then head to PAGE with Canker sores/cramp/etc.',
      supplements: 'Nutrients that may help include Ca.'
    },
    options: [{ label: 'Nutritional Supplementation', destination: 'https://www.dssorders.com/drtodd' }]
  },
  'eczema': {
    id: 'eczema',
    sectionId: 'skin',
    title: 'Eczema',
    type: 'content',
    content: {
      overview: 'Eczema is almost always from a digestive problem, which can sometimes either be caused by a food allergy/sensitivity or resulting in one. Check out the GI section as well as the FOOD Allergy Page for more.',
      lifestyle: 'More Placeholder text here.',
      supplements: 'Nutrients that may help include Artichoke Extract, Mg, Zn, or B6.'
    },
    options: [{ label: 'Nutritional Supplementation', destination: 'https://www.dssorders.com/drtodd' }]
  },
  'hives': {
    id: 'hives',
    sectionId: 'skin',
    title: 'Hives',
    type: 'content',
    content: {
      overview: 'Hives occur from stress or a reaction to eating something or from an infection. It\'s common for the immune system to react with hives from a long-term, deep-seeded infection such as one from a tick bit (Lyme, babesia, bartonella, Rocky Mountain Spotted Fever) even long after that infection is thought to be gone. These infections can stay around a lot longer than you may think. If you\'ve had immune system issues such as infections like this before then head to that section. If you\'re having digestive issues often then check out that section to help with your hives. And if you\'re don\'t think that either pertains to you then head over to the sympathetic stress section to learn how to better manage stress which may be resulting in hives.',
      lifestyle: 'Place Holder',
      supplements: 'Cataplex G, Immune Nutrients?, and SYM Nutrients'
    },
    options: [{ label: 'Nutritional Supplementation', destination: 'https://www.dssorders.com/drtodd' }]
  },
  'itchy-skin': {
    id: 'itchy-skin',
    sectionId: 'skin',
    title: 'Itchy Skin',
    type: 'content',
    content: {
      overview: 'Provided that there is not a local skin irritation (contact dermatitis), itchy skin can be from excessive histamine due to either an infection or food sensitivity or from an issue with your gallbladder and the metabolism of fats as well as vitamin A, a fat-soluble vitamin. If you are having other gut/digestive symptoms, then you might be dealing with yeast or bacteria in the gut which can cause your skin to be itchy. Go to the GI section. Food sensitivities (allergies) can also cause this. Many people are sensitive to foods due to a poor digestive system. However, you may try removing common foods that many people are sensitive to below.)',
      lifestyle: 'Digestive symptoms such as burping after you eat or feeling heavy after you eat? Possible gallbladder problem - head to that section and note the need for more vitamin A. Need to also link this in with the GB',
      supplements: 'Nutrients that may help include Vitamin A.'
    },
    options: [{ label: 'Nutritional Supplementation', destination: 'https://www.dssorders.com/drtodd' }]
  },
  'psoriasis': {
    id: 'psoriasis',
    sectionId: 'skin',
    title: 'Psoriasis',
    type: 'content',
    content: {
      overview: 'Psoriasis is (described briefly) is often the result of an infection taxing the immune system. It\'s common for this to arise from the gut as the majority of the immune system is located in the digestive tract. GO TO GI SECTION if other gut issues? OR GO to the infection/illness section if other IMMUNE ISSUES.',
      lifestyle: 'Place Holder, Again Horizontal or Vertical.',
      supplements: 'Nutrients that may help include Artichoke Extract, Mg, Zn, or B6.'
    },
    options: [{ label: 'Nutritional Supplementation', destination: 'https://www.dssorders.com/drtodd' }]
  },

  // HEADACHES SECTION
  'tension-headache': {
    id: 'tension-headache',
    sectionId: 'headaches',
    title: 'Tension Headaches',
    type: 'content',
    content: {
      overview: 'Tension headaches are basically from stress, causing a tightness in the front and sides of the head. Check out the SYM section for infor and relief ideas.',
      lifestyle: 'Nothing yet.',
      supplements: 'Nutrients that may help include Artichoke Extract, Mg, Zn, or B6.'
    },
    options: [{ label: 'Nutritional Supplementation', destination: 'https://www.dssorders.com/drtodd' }]
  },
  'sinus-headache': {
    id: 'sinus-headache',
    sectionId: 'headaches',
    title: 'Sinus Headaches',
    type: 'content',
    content: {
      overview: 'Sinus headaches are from well, you guessed it - the sinuses. The most common reason for sinus issues is a fungi infection in the sinus cavity. Herbs such as (list common here) can help relieve/correct the problem. Allergies can be an important consideration here too.',
      lifestyle: 'Placeholder text.',
      supplements: 'Nutrients that may help include Artichoke Extract, Mg, Zn, or B6.'
    },
    options: [{ label: 'Nutritional Supplementation', destination: 'https://www.dssorders.com/drtodd' }]
  },
  'migraine': {
    id: 'migraine',
    sectionId: 'headaches',
    title: 'Migraines',
    type: 'content',
    content: {
      overview: '',
      lifestyle: 'The correction of the problem starts with an investigation as to what caused the problem in the first place. It could be a dietary issue in which the patient is eating foods high on the glycemic index (i.e. processed flours, sugars, soda, etc.), skipping meals, or going too long without eating. Often there is an offender either creating or driving the problem. Common offenders in the dysglycemic patient are artificial sweeteners such as aspartame (Nutrasweet) and sucralose (Splenda), as well as caffeine, food allergies, medications, and hormonal stress (cortisol and estrogen are very common). Of course too many sweets and treats can be the problem too, including the highly promoted "healthy sweeteners" like agave syrup.',
      supplements: 'Nutrients such as vitamin B6, folate, B12, mg, and zinc can help with estrogen detoxification. Even in post-menopausal women, migraines can be due to a hormonal imbalance and your body not properly detoxifying the naturally lower levels of estrogen, testosterone, and progesterone.'
    },
    options: [{ label: 'Nutritional Supplementation', destination: 'https://www.dssorders.com/drtodd' }]
  },
  'bruxism': {
    id: 'bruxism',
    sectionId: 'headaches',
    title: 'Bruxism',
    type: 'content',
    content: {
      overview: 'Bruxism – it\'s the clenching of the jaw and grinding of the teeth sometimes to the point of actually breaking a tooth. When you\'re awake and conscious the force your body can produce by grinding your teeth together is around 250 psi (pounds per square inch) in the back molars and 85 psi in the front teeth. That may seem like a lot but many are able to easily triple that pressure, achieving around 800-900 psi while they\'re sleeping. This of course is when bruxism, (officially referred to as sleep or nocturnal bruxism), becomes more of a problem. If you think it\'s amazing that the body can provide that much pressure during what should be a restful period, it can even double that force to around 2,000 psi if you\'re on certain antidepressant (mood-altering) medications. Pressure that high is teeth-breaking, tissue-damaging force along with a whole lot of pain and discomfort to the head, neck, and jaw region. Though bruxism can be due to a variety of health problems, in a nutshell it comes down to one thing – too much stress to the body. At a time when your body should be relaxing and recovering (sleeping), the nervous system is actually unable to calm down into this parasympathetic (relaxed) state. Rather, it remains in sympathetic dominance (flight-or-fight); perhaps the worst time your body can be in such a state as the jaw clenches and grinds as if your body is fighting a battle for survival. Ultimately hormones and neurochemicals such as dopamine are altered as you\'re grinding away. Head over the Excess Sympathetic page to learn more.\nTo see if you\'re experiencing some dopamine issues, click below.',
      lifestyle: '',
      supplements: ''
    },
    options: []
  },

  // BODY PAIN SECTION
  'arthritis': {
    id: 'arthritis',
    sectionId: 'body-pain',
    title: 'Arthritis',
    type: 'content',
    content: {
      overview: 'Rheumatoid arthritis is more of a chronic, inflammatory, multiple-site arthritis. The medical society uses analgesics to control pain, corticosteroids, immunosuppressive drugs, NSAIDs, and disease-modifying antirheumatic drugs to help get the patient by day-to-day. All of the information above for OA is also very important and necessary to properly deal with, and overcome, RA. Additionally, since RA is autoimmune in nature, focusing on the immune system in the treatment regimen is extremely important.',
      lifestyle: 'Along with treating the specific involved areas, fighting the inflammation naturally, and making sure the necessary nutrient components are available for joint repair, you need to deal with the immune issue of RA. One of the most common immune deterrents is a food allergy or allergies. Eliminating the offender(s) is necessary for success. Since about one-half of the immune system is contained within the healthy bacteria that line the digestive tract, dealing with the digestive system is also important. Sometimes that means supporting with digestive enzymes or replenishing the lost bacteria. The health of the gut can be further investigated through a digestive analysis or an organic acid test.',
      supplements: ''
    },
    options: [{ label: 'Get Here', destination: 'https://www.dssorders.com/drtodd' }]
  },
  'bursitis': {
    id: 'bursitis',
    sectionId: 'body-pain',
    title: 'Bursitis',
    type: 'content',
    content: {
      overview: 'You have hundreds of bursa all over your body which can be thought of as little bags of oil that help reduce friction between two joints moving in opposite directions as well as where muscles & tendons slide over bone. Bursitis, or inflammation of a bursa, is often described as "hot & stabbing" pain, and has some degree of swelling. Bursitis can be caused by a local injury to a joint, such as the elbow or knee, as well as improper repetitive motion between muscles. For example, if your biceps muscle is not functioning properly (there is some muscle "weakness" – inhibition) then your triceps will work harder due to the opposing muscle inhibition of the biceps. This muscle imbalance will cause stress on the elbow and shoulder joints. If the bursa in the elbow were to become inflamed due to the chronic joint and muscular imbalances, you would have a diagnosis of olecranon bursitis. Trochanteric bursitis in the hip is also a very common spot for bursa problems. Swelling of the bursa behind the knee where the calf and hamstring muscles cross is also very common; this is called a Baker\'s cyst.',
      lifestyle: 'Similar local therapies which help treat tendonitis also help with bursitis, but the nutrition aspects of bursitis is a bit different. Nutritionally, bursitis has to do with calcium, fats, and the acidity of your tissues. Here\'s the common bursitis "nutritional" scenario: When you\'re under too much stress of any kind, especially when there is trauma to the area, your body requires additional protein. This protein can come from your diet as well as muscle breakdown and even from the area around your actual bursa. The robbing of protein from the tissue and bursa creates a more alkaline medium in that area. Calcium is then deposited in the bursa as a result of the alkaline environment to help protect the bursa. Unfortunately, this creates pain and inflammation – bursitis.',
      supplements: ''
    },
    options: []
  },
  'carpal-tunnel': {
    id: 'carpal-tunnel',
    sectionId: 'body-pain',
    title: 'Carpal Tunnel',
    type: 'content',
    content: {
      overview: 'Carpal tunnel syndrome is a problem that affects the hand and wrist when there is pressure on the median nerve, which supplies sensation to the thumb, index, middle, and half of the ring (4th) finger. People with carpal tunnel syndrome may have a narrowing of the "tunnel" (made up by the wrist bones) and experience weakness, pain, numbness, and inflammation. The medical approach is to brace up the area, provide life-long anti-inflammatory medications (which will further make the problem worse if you read the arthritis section), and if that doesn\'t work then surgery is recommended. There is a lot to deal with here – but I will address a few of the reasons for this condition. The function of the muscles of the wrist and hand are most important. Finding out what is causing the weaknesses or over-firing of each individual muscle is taken into consideration. So there is almost always a lot of manual therapy work that needs to be done such as muscle trigger points, muscle fiber injuries, acupressure meridians, and joint mobilization.',
      lifestyle: 'Chemically, making sure inflammation is being dealt with as well as making sure the necessary components for joint repair are present is important. You can read about this in the arthritis section and click here for a full article on tissue and joint repair over at my Sock Doc site. Additionally, there is a clinical correlation to carbohydrate intolerance/insulin resistance. When this occurs in many people, the wrist flexors (as well as other muscles) are compromised. This sets the stage for a problem in that area to arise.',
      supplements: 'Potential supplements include, but are not limited to, etc.'
    },
    options: [{ label: 'Get Here', destination: 'https://www.dssorders.com/drtodd' }]
  },
  'gout': {
    id: 'gout',
    sectionId: 'body-pain',
    title: 'Gout',
    type: 'content',
    content: {
      overview: '',
      lifestyle: 'Similar local therapies which help treat tendonitis also help with bursitis, but the nutrition aspects of bursitis is a bit different. Nutritionally, bursitis has to do with calcium, fats, and the acidity of your tissues. Here\'s the common bursitis "nutritional" scenario: When you\'re under too much stress of any kind, especially when there is trauma to the area, your body requires additional protein. This protein can come from your diet as well as muscle breakdown and even from the area around your actual bursa. The robbing of protein from the tissue and bursa creates a more alkaline medium in that area. Calcium is then deposited in the bursa as a result of the alkaline environment to help protect the bursa. Unfortunately, this creates pain and inflammation – bursitis.',
      supplements: 'Wild cherry juice, 5-MTHF, EFAs, and various antioxidants'
    },
    options: [{ label: 'Get Here', destination: 'https://www.dssorders.com/drtodd' }]
  },
  'tendonitis': {
    id: 'tendonitis',
    sectionId: 'body-pain',
    title: 'Tendonitis',
    type: 'content',
    content: {
      overview: 'Tendonitis is inflammation of a tendon, which is where a muscle connects to a bone. This is probably the biggest complaint that athletes have in regards to injuries. It is also one of the most used diagnoses, and perhaps sometimes incorrectly. For example, many physicians now think of Achilles tendonitis as Achilles tendonosis (also spelled tendinosis) – which is a chronic degenerative condition with some micro-tearing of the tissues without inflammation. Resolving tendonitis (as well as a tendonosis) involves both local and global "systemic" treatment.',
      lifestyle: 'Nonsteroidal anti-inflammatory drugs (NSAIDs) are often prescribed for many "itis" problems. Guess what? These will also deplete sulfur from your body because that\'s how your liver detoxifies them, so overall healing is even further delayed. If you ever feel better from taking a NDAID it\'s a sure sign that you have a fatty acid metabolism problem occurring in your body. If there was no fatty acid metabolism problem or imbalance, you\'d see no benefit taking the drug. If there actually isn\'t inflammation to be treated and you\'re dealing with an "osis" rather than "itis" you may not see a NSAID benefit. However I\'d say it\'s very rare for a person to have a chronic injury that their body can\'t heal and not have some degree of inflammation. More on fats, NSAIDs, and inflammation below.',
      supplements: 'Your adrenal glands, pancreas, and liver are the three major organs involved in tendonitis problems. The adrenal glands are your hormonal glands that deal with stress. They will secrete excess cortisol when there is too much dietary, physical, or emotional stress. Over time, the beneficial hormone DHEA, also made in the adrenal glands, will become depleted with persistent chronic stress, resulting in low sex hormone levels such as testosterone and estrogen, as those are made from DHEA. This constant cortisol burden will tax the liver, which must detoxify the hormone, and much of this is done via a process known as sulfation. When your body uses up sulfur, it has less available to heal injured tendons as well as your cartilage (joints) where they attach to. So chronic stress leads to chronic cortisol leads to chronic inflammation and the inability to heal. The increased cortisol also plays off the pancreas, creating a constant tug-of-war between the two organs (the pancreas and the adrenals) as they try to keep blood sugar levels from swinging out of control all day long as you work, exercise, and sleep. This, as discussed here, will create insulin and carbohydrate sensitivities, and in turn create even more inflammation.'
    },
    options: [{ label: 'Get Here', destination: 'https://www.dssorders.com/drtodd' }]
  },

  // DIGESTION SECTION
  'hcl-view': {
    id: 'hcl-view',
    sectionId: 'digestion',
    title: 'HCl and Protein',
    type: 'content',
    content: {
      overview: 'GERD, heartburn, eosinophilic esophagitis, Barrett\'s esophagus, and the many other diagnoses given to those with stomach problems lead to those patients being prescribed antacids, proton pump inhibitors, and H2 antagonist medications (histamine blockers) to reduce gastric acid production (parietal cells secreting HCl). These medications will further provoke many stomach problems, possibly resulting in nutrient absorption issues – specifically of iron, calcium, magnesium, and B12. Infections can also occur and thrive as the acid is not available to sterilize the stomach and its contents. Most stomach issues are from a lack of, rather than excess, stomach acid.',
      lifestyle: 'Betaine HCl can be used to acidify the tissues for conditions such as hives, allergies, and bursitis. Sometimes the addition of calcium is needed as well as fats. Acidifying the body will push calcium into the tissues, provided that there are adequate fats in the diet. So, you may need to take calcium with betaine HCl as well as other fats (e.g. EPA, DHA, palmitic acid, stearic acid, etc.) and vitamin D.',
      supplements: 'EPA, DHA, palmitic acid, stearic acid, etc.) and vitamin D.'
    },
    options: [{ label: 'Get Here', destination: 'https://www.dssorders.com/drtodd' }]
  }
};

// Landing page data
export const landingPages = {
  'dysglycemia': {
    id: 'dysglycemia',
    title: 'Dysglycemia',
    type: 'content',
    content: {
      overview: 'Dysglycemia is a disorder of blood sugar metabolism. An individual may have a normal blood glucose reading, whether fasting or not, yet present at the time of blood testing or even some other time during the day with symptoms resembling altered sugar handling (i.e. headaches, shakiness, unclear thinking, fatigue). There are many factors that contribute to balancing blood sugar, and although hormones such as thyroxine and growth hormone are involved to some degree, the majority of the work lies in the balance between the pancreas and the adrenal glands.',
      lifestyle: 'The correction of the problem starts with an investigation as to what caused the problem in the first place. It could be a dietary issue in which the patient is eating foods high on the glycemic index (i.e. processed flours, sugars, soda, etc.), skipping meals, or going too long without eating. Often there is an offender either creating or driving the problem. Common offenders in the dysglycemic patient are artificial sweeteners such as aspartame (Nutrasweet) and sucralose (Splenda), as well as caffeine, food allergies, medications, and hormonal stress (cortisol and estrogen are very common). Of course too many sweets and treats can be the problem too, including the highly promoted "healthy sweeteners" like agave syrup.',
      supplements: ''
    }
  },
  'allergy': {
    id: 'allergy',
    title: 'Allergies',
    type: 'content',
    content: {
      overview: 'Are you tired for some of or all of the day? Are you lacking enough energy to perform your daily activities? You may lack the energy you should have due to poor dietary and lifestyle habits. Hormonal imbalances, red blood cell issues, digestive problems, biochemical inadequacies, and even various toxicities can also result in fatigue. Click through this section to see why your energy may be low and steps you can make to improve it!',
      lifestyle: 'Are you tired for some of or all of the day? Are you lacking enough energy to perform your daily activities? You may lack the energy you should have due to poor dietary and lifestyle habits. Hormonal imbalances, red blood cell issues, digestive problems, biochemical inadequacies, and even various toxicities can also result in fatigue. Click through this section to see why your energy may be low and steps you can make to improve it!',
      supplements: ''
    }
  },
  'asthma': {
    id: 'asthma',
    title: 'Asthma',
    type: 'content',
    content: {
      overview: 'Are you tired for some of or all of the day? Are you lacking enough energy to perform your daily activities? You may lack the energy you should have due to poor dietary and lifestyle habits. Hormonal imbalances, red blood cell issues, digestive problems, biochemical inadequacies, and even various toxicities can also result in fatigue. Click through this section to see why your energy may be low and steps you can make to improve it!',
      lifestyle: 'Leukotrienes can be several hundred times more inflammatory than prostaglandins and are known to be common triggers of asthma.',
      supplements: 'Are you tired for some of or all of the day? Are you lacking enough energy to perform your daily activities? You may lack the energy you should have due to poor dietary and lifestyle habits. Hormonal imbalances, red blood cell issues, digestive problems, biochemical inadequacies, and even various toxicities can also result in fatigue. Click through this section to see why your energy may be low and steps you can make to improve it!'
    }
  },
  'asthma-exercise': {
    id: 'asthma-exercise',
    title: 'Asthma Induced Exercise',
    type: 'content',
    content: {
      overview: 'Are you tired for some of or all of the day? Are you lacking enough energy to perform your daily activities? You may lack the energy you should have due to poor dietary and lifestyle habits. Hormonal imbalances, red blood cell issues, digestive problems, biochemical inadequacies, and even various toxicities can also result in fatigue. Click through this section to see why your energy may be low and steps you can make to improve it!',
      lifestyle: 'Are you tired for some of or all of the day? Are you lacking enough energy to perform your daily activities? You may lack the energy you should have due to poor dietary and lifestyle habits. Hormonal imbalances, red blood cell issues, digestive problems, biochemical inadequacies, and even various toxicities can also result in fatigue. Click through this section to see why your energy may be low and steps you can make to improve it!',
      supplements: 'Are you tired for some of or all of the day? Are you lacking enough energy to perform your daily activities? You may lack the energy you should have due to poor dietary and lifestyle habits. Hormonal imbalances, red blood cell issues, digestive problems, biochemical inadequacies, and even various toxicities can also result in fatigue. Click through this section to see why your energy may be low and steps you can make to improve it!'
    }
  },
  'fat-metabolism': {
    id: 'fat-metabolism',
    title: 'Gallbladder',
    type: 'content',
    content: {
      overview: 'Gallbladder problems including gallbladder attacks are very common reasons for which people seek medical care. The pain and discomfort can unfortunately result in the removal of the little green organ followed by dietary restrictions (often low fat). But of course, all of our organs are there for one reason or another and although one can live without a gallbladder, removing it is simply removing a symptom of a problem, not the actual cause. \n\nThe surgical removal of the gallbladder is called a cholecystectomy. Some people who have had their gallbladder removed will see absolutely no change in their symptoms while others may have their symptoms 100% resolved. Others who have had a cholecystectomy may no longer be able to eat high fat foods as their body is unable to handle too much fat digestion at once due to the removal of their bile storage tank. However, the body in its infinite wisdom can often form a new little storage pouch in the area of the common bile duct to store some bile for when it\'s needed. \n\nSo how do you know if your gallbladder is at the point of becoming a life threatening emergency or you\'re simply experiencing gallbladder troubles that perhaps can be dealt with in a non-surgical manner? Well, without giving specific medical advice for every situation, a good rule is to look at the severity of the signs and symptoms. Someone who is having a gallstone attack typically has pain in the upper right side of the abdomen and/or pain in-between the shoulder blades, more often below the right shoulder blade (your scapula). Sometimes nausea and vomiting can occur which can last for minutes to hours. Now if the pain and vomiting continue to get worse then you should of course seek medical attention. (Gallbladder attacks and heart attacks can have very similar symptoms – heart attacks don\'t always have pain down the left arm only.) Typically gallbladder attacks don\'t just come out of nowhere where you never had any symptoms of a gallbladder problem and now all of a sudden you have a huge stone lodged in your bile duct. Being aware of some symptoms of poor gallbladder function so you can address the issue before it gets too out of hand is a plus!',
      lifestyle: '',
      supplements: 'Cholacol (especially for constipation), Betafood, Choline, BodyGuard (gallstones), Ginger, vitamin A, EPA/DHA'
    }
  },
  'parasympathetic': {
    id: 'parasympathetic',
    title: 'Parasympathetic Dominance',
    type: 'content',
    content: {
      overview: 'Are you tired for some of or all of the day? Are you lacking enough energy to perform your daily activities? You may lack the energy you should have due to poor dietary and lifestyle habits. Hormonal imbalances, red blood cell issues, digestive problems, biochemical inadequacies, and even various toxicities can also result in fatigue. Click through this section to see why your energy may be low and steps you can make to improve it!',
      lifestyle: 'Are you tired for some of or all of the day? Are you lacking enough energy to perform your daily activities? You may lack the energy you should have due to poor dietary and lifestyle habits. Hormonal imbalances, red blood cell issues, digestive problems, biochemical inadequacies, and even various toxicities can also result in fatigue. Click through this section to see why your energy may be low and steps you can make to improve it!',
      supplements: 'Are you tired for some of or all of the day? Are you lacking enough energy to perform your daily activities? You may lack the energy you should have due to poor dietary and lifestyle habits. Hormonal imbalances, red blood cell issues, digestive problems, biochemical inadequacies, and even various toxicities can also result in fatigue. Click through this section to see why your energy may be low and steps you can make to improve it!'
    }
  },
  'toxicity': {
    id: 'toxicity',
    title: 'Toxicity',
    type: 'content',
    content: {
      overview: 'Are you tired for some of or all of the day? Are you lacking enough energy to perform your daily activities? You may lack the energy you should have due to poor dietary and lifestyle habits. Hormonal imbalances, red blood cell issues, digestive problems, biochemical inadequacies, and even various toxicities can also result in fatigue. Click through this section to see why your energy may be low and steps you can make to improve it!',
      lifestyle: 'Are you tired for some of or all of the day? Are you lacking enough energy to perform your daily activities? You may lack the energy you should have due to poor dietary and lifestyle habits. Hormonal imbalances, red blood cell issues, digestive problems, biochemical inadequacies, and even various toxicities can also result in fatigue. Click through this section to see why your energy may be low and steps you can make to improve it!',
      supplements: 'Are you tired for some of or all of the day? Are you lacking enough energy to perform your daily activities? You may lack the energy you should have due to poor dietary and lifestyle habits. Hormonal imbalances, red blood cell issues, digestive problems, biochemical inadequacies, and even various toxicities can also result in fatigue. Click through this section to see why your energy may be low and steps you can make to improve it!'
    }
  },
  'insulin-resistance': {
    id: 'insulin-resistance',
    title: 'Insulin Resistance',
    type: 'content',
    content: {
      overview: '',
      lifestyle: 'Follow the "two-week test" to see your carbohydrate tolerance level, check out the paleo diet, consume adequate healthy fats (eggs, avocado, coconut, butter, red meat, nuts & seeds) to sustain your energy for several hours, evaluate need for nutrients: chromium, vanadium, zinc, and sesame seed oil., exercise aerobically until you have a sufficient aerobic base; then consider anaerobic endurance training, weight lifting/strength training.',
      supplements: ''
    }
  },
  'liver': {
    id: 'liver',
    title: 'Liver - EMPTY',
    type: 'content',
    content: {
      overview: 'Leg cramps at night, especially the excruciating "Charley Horse" cramps that occur in the calves, are most commonly due to poor tissue calcium utilization. Calcium, as most know, is important for bone and joint health, but it is also extremely important for the muscles. Calcium aids in muscle contraction and if low, can lead to muscle cramping. Most people get enough calcium in their daily diet, but they do not use it efficiently. If essential fats in the diet are off in combination with other health problems such as poor digestion, these issues must be addressed for calcium to work for you. Other signs of calcium tissue "starvation" are: cold sores/fever blisters, canker sores, bursitis, achy muscles especially in spring/summer during the first few days of yard work, itchy skin, and bursitis, to name a few. Head to the Calcium page to learn more about this process and sleep through the night cramp free!',
      lifestyle: '',
      supplements: ''
    }
  },
  'thyroid': {
    id: 'thyroid',
    title: 'Thyroid',
    type: 'content',
    content: {
      overview: 'UPDATE Thyroid is a disorder of blood sugar metabolism. An individual may have a normal blood glucose reading, whether fasting or not, yet present at the time of blood testing or even some other time during the day with symptoms resembling altered sugar handling (i.e. headaches, shakiness, unclear thinking, fatigue). There are many factors that contribute to balancing blood sugar, and although hormones such as thyroxine and growth hormone are involved to some degree, the majority of the work lies in the balance between the pancreas and the adrenal glands.',
      lifestyle: 'The correction of the problem starts with an investigation as to what caused the problem in the first place. It could be a dietary issue in which the patient is eating foods high on the glycemic index (i.e. processed flours, sugars, soda, etc.), skipping meals, or going too long without eating. Often there is an offender either creating or driving the problem. Common offenders in the dysglycemic patient are artificial sweeteners such as aspartame (Nutrasweet) and sucralose (Splenda), as well as caffeine, food allergies, medications, and hormonal stress (cortisol and estrogen are very common). Of course too many sweets and treats can be the problem too, including the highly promoted "healthy sweeteners" like agave syrup.',
      supplements: 'Nutrients that may help include Artichoke Extract, Mg, Zn, or B6.'
    }
  },
  'hcl': {
    id: 'hcl',
    title: 'HCl and Protein',
    type: 'content',
    content: {
      overview: 'GERD, heartburn, eosinophilic esophagitis, Barrett\'s esophagus, and the many other diagnoses given to those with stomach problems lead to those patients being prescribed antacids, proton pump inhibitors, and H2 antagonist medications (histamine blockers) to reduce gastric acid production (parietal cells secreting HCl). These medications will further provoke many stomach problems, possibly resulting in nutrient absorption issues – specifically of iron, calcium, magnesium, and B12. Infections can also occur and thrive as the acid is not available to sterilize the stomach and its contents. Most stomach issues are from a lack of, rather than excess, stomach acid.',
      lifestyle: 'Betaine HCl can be used to acidify the tissues for conditions such as hives, allergies, and bursitis. Sometimes the addition of calcium is needed as well as fats. Acidifying the body will push calcium into the tissues, provided that there are adequate fats in the diet. So, you may need to take calcium with betaine HCl as well as other fats (e.g. EPA, DHA, palmitic acid, stearic acid, etc.) and vitamin D.',
      supplements: 'EPA, DHA, palmitic acid, stearic acid, etc.) and vitamin D.'
    }
  },
  'two-week-test': {
    id: 'two-week-test',
    title: 'Two Week Test',
    type: 'content',
    content: {
      overview: 'The Two-Week Test (TWT) was originally developed by Dr. Phil Maffetone – NOT Dr. Atkins or the doc who uses a very "similar" diet in his "South Beach Diet." Many doctors and dietary advisers have "used" Maffetone\'s dietary idea over the years but his original concept is still the best. The TWT is only a test as the name states. Therefore, at the end of the two weeks, it is not advised to continue the diet further without alterations unless your physician advises you to do so. I actually like to think of this as a Four-Week Test. The reason is because the first two weeks will assess your carbohydrate intolerance and the second two weeks will assess your tolerance to certain carbs as you re-introduce them back into the diet. I\'ve seen many people over the years screw up the test after the first two weeks. They go back to eating the way they originally were and never learned what carbohydrates they could tolerate and to what degree. So think FOUR WEEKS! The test will help you decide if you really have a carbohydrate intolerance, and if you do, it will help you find the right level of carbohydrate intake for you.Writing down all your symptoms before you start the Two-Week Test (TWT) is recommended. This will give you a reference point to see how your symptoms have changed, if at all. Many people forget the severity of their problems after they no longer have them. You may also want to record your weight and any body fat measurements, as applicable.',
      lifestyle: '',
      supplements: ''
    }
  },
  'breath': {
    id: 'breath',
    title: 'Breathing',
    type: 'content',
    content: {
      overview: '',
      lifestyle: '',
      supplements: ''
    }
  },
  'excess-sympathetic': {
    id: 'excess-sympathetic',
    title: 'Excess Sympathetic',
    type: 'content',
    content: {
      overview: '',
      lifestyle: '',
      supplements: ''
    }
  },
  'prostate-health': {
    id: 'prostate-health',
    title: 'Prostate Health',
    type: 'content',
    content: {
      overview: '',
      lifestyle: '',
      supplements: ''
    }
  },
  'calcium': {
    id: 'calcium',
    title: 'Calcium in all the Right Places',
    type: 'content',
    content: {
      overview: 'Breakthrough bleeding, or spotting, is often associated with higher than ideal estrogen levels. This estrogen dominance is often from poor liver detoxification, excess body fat, or the consumption of phytoestrogens found in foods and drinks from plastic containers (especially hot products) as well as soy products.',
      lifestyle: 'Removing phytoestrogens from the diet.',
      supplements: '5MTHF, P5P, Methyl B12, CYS, Artichoke'
    }
  },
  'decreased-libido-male': {
    id: 'decreased-libido-male',
    title: 'Decreased Libido',
    type: 'content',
    content: {
      overview: 'What\'s that – you\'re too tired? Got a headache? Just not in the mood? Your libido is a sign of health, both mentally and physically. Assuming you\'re in a healthy relationship, you should be interested in sex, and more than just the ABCs (anniversay, birthday, and Christmas).',
      lifestyle: 'When it comes to sex, parasympathetic tone is important for the arousal state - basically your ability to obtain and sustain an erection. If your body is too sympathetic dominant then you will most likely not be able to get aroused or sustain that arousal because your body is focused elsewhere. Sympathetic dominance basically occurs when your body is under way too much stress. Perhaps your work or life is an emotional burden, or your diet is very unhealthy, or you exercise way too hard, or you have injuries and pain you\'re dealing with. These would all contribute to sympathetic excess and you\'re just not going to be very successful getting in the mood and if you are it\'s going to be a short session. The sympathetic system is more important for the ever-awesome orgasm, though essentially it\'s a balance between the two systems of your autonomic nervous system. Yeah, if you just can\'t achieve an orgasm then it could be because you\'re too parasympathetic-dominant and it\'s overriding the sympathetic system, or that you can\'t muster up the sympathetic tone to finish the job. Basically your nervous system just can\'t chill-out and let the good times roll. This autonomic nervous system dysfunction, much like conditioning for your sport, means you\'re training improperly. This also has to do with the balance of aerobic and anaerobic conditioning. Prolonged stress will eventually lead to decreased testosterone levels in men and that will result in poor sexual activity - either due to lackluster erections (or none at all), or decreased interest. Neurotransmitters are those chemicals which communicate information throughout our bodies and are responsible for how we think, feel, and act. They make up a lot of our personality and how we react to just about everything. When it comes to sex, the neurotransmitters serotonin and dopamine are vital.',
      supplements: 'Nutrients that may help include Vitamin E, Zinc, Arginex.'
    }
  },
  'erection-issues': {
    id: 'erection-issues',
    title: 'Erection Issues',
    type: 'content',
    content: {
      overview: 'Are you waking up with an erection? For the most part, if you\'re not startled awake, you should be. Sleep-related erections (SREs) are a sign of healthy hormonal health. SREs start when you enter the REM phase of your sleep cycle and last until the next cycle of non-REM sleep. These SREs are linked to levels of testosterone and they\'re a good predictor of current cardiovascular health as well as future risk of heart attacks and strokes. You should be able to sustain an erection during sex and not experience any premature ejacuation, the inability to sustain an erection for the desired time, or orgasming too quickly, are often signs of either poor hormonal health or low levels of nitric oxide (NO), the compound that increases vascular including blood flow the penis. Medications such as Viagra increase NO levels, but you can improve your NO level, as well as your testosterone levels, via dietary and lifestyle changes.',
      lifestyle: 'Lifestyle and nutritional changes can greatly improve your testosterone levels, decrease your estrogen levels, and increase your nitric oxide, all safely and naturally.'
    }
  },
  'muscle-loss': {
    id: 'muscle-loss',
    title: 'Muscle Loss',
    type: 'content',
    content: {
      overview: 'Muscle loss, or sarcopenia, is not as normal as you may think. Though you are going to lose a certain amount of muscle naturally as you age, it is hard to say what is normal and therefore healthy. This is one of the more common but not normal health conditions, and many men don\'t maximize their muscular potential in the first place, so you\'re often losing more of the little bit that you had.',
      lifestyle: 'The two main factors associated with muscle loss is low testosterone and a lack of strength training (essentially you use it or lose it).',
      supplements: 'Protein! Try to consume at least 1 gram of protein per kilogram of bodyweight. High quality protein includes animal products (dairy and meats), eggs, and whey, egg, or collagen protein supplements. Nutrients to help improve testosterone levels are discussed in that specific section.'
    }
  },
  'hair-loss-male': {
    id: 'hair-loss-male',
    title: 'Hair Loss for Males',
    type: 'content',
    content: {
      overview: 'Although there can be a strong and unavoidable genetic connection to male baldness, there is also a hormonal connection that will affect hair growth. Dihydrotestosterone (DHT) is a sex hormone that is made from testosternone via an enzyme called 5-alpha reductatse. DHT can bind to receptors on hair follicles and cause them to shrink and become less able to support hair growth and sustainability. Roughly about ten percent of testosterone converts to DHT. Too much conversion can make you lose hair faster and earlier in your life.',
      lifestyle: 'Improving hair growth and decreasing hair loss, like many male health issues, goes back to hormonal health. A healthy testosterone balance that does not over-convert to DHT as well as the health of thyroid and adrenal glands, can often make a significant improvement on new hair growth, or the reduction in hair loss.',
      supplements: 'Biotin, Zinc, Saw Palmetto, Rosemary, Cysteine (NAC).'
    }
  },
  'decreased-libido-female': {
    id: 'decreased-libido-female',
    title: 'Decreased Libido',
    type: 'content',
    content: {
      overview: 'What\'s that – you\'re too tired? Got a headache? Just not in the mood? Your libido is a sign of health, both mentally and physically. Assuming you\'re in a healthy relationship, you should be interested in sex, and more than just the ABCs (anniversay, birthday, and Christmas).',
      lifestyle: 'When it comes to sex, parasympathetic tone is important for the arousal state. No need to get into specifics for each gender here; you hopefully get the picture. If your body is too sympathetic dominant then you will most likely not be able to get aroused or sustain that arousal because your body is focused elsewhere. Sympathetic dominance basically occurs when your body is under way too much stress. Perhaps your work or life is an emotional burden, or your diet is very unhealthy, or you exercise way too hard, or you have injuries and pain you\'re dealing with. These would all contribute to sympathetic excess and you\'re just not going to be very successful getting in the mood and if you are it\'s going to be a short session. The sympathetic system is more important for the ever-awesome orgasm, though essentially it\'s a balance between the two systems of your autonomic nervous system. Yeah, if you just can\'t achieve an orgasm then it could be because you\'re too parasympathetic-dominant and it\'s overriding the sympathetic system, or that you can\'t muster up the sympathetic tone to finish the job. Basically your nervous system just can\'t chill-out and let the good times roll. This autonomic nervous system dysfunction, much like conditioning for your sport, means you\'re training improperly. This also has to do with the balance of aerobic and anaerobic conditioning. Neurotransmitters are those chemicals which communicate information throughout our bodies and are responsible for how we think, feel, and act. They make up a lot of our personality and how we react to just about everything. When it comes to sex, the neurotransmitters serotonin and dopamine are vital.',
      supplements: 'Vitamin E, Zinc, Arginex'
    }
  },
  'breast-tenderness': {
    id: 'breast-tenderness',
    title: 'Breast Tenderness',
    type: 'content',
    content: {
      overview: 'Breast tenderness is an indicator that you are not properly detoxifying estrogen. Your breasts have a significant amount of estrogen receptors and the increased estrogen in your cycle during ovulation and the last week before your period can result in breast tenderness and pain. This estrogen, like all hormones, must be detoxified by your liver. If your liver is already overwhelmed with other substances it needs to detoxify, then the estrogen must wait its turn, and what better place to hang out than in the breast tissue. The increased water and swelling is what causes the tenderness. Additionally, your breasts should contain a significant amount of iodine and sometimes the deficiency of iodine can result in tenderness.',
      lifestyle: 'Lifestyle changes have to do with improving liver detoxification.',
      supplements: 'Iodine (if not consuming fish, kelp, or iodized salt), P5P, 5MTHF, B12, CYS, Artichoke.'
    }
  },
  'cramping': {
    id: 'cramping',
    title: 'Cramping, Bloating, and Back Pain',
    type: 'content',
    content: {
      overview: 'Most women get it, expect it, and deal with it, however cramping and back pain, like all PMS symptoms, is abnormal. The bloating and cramping puts a lot of pressure on the abdomen obviously causing distention. This distension can fatigue abdominal muscles resulting in back pain. Deep uterine cramping can be from an imbalance or deficiency of dietary fats or from a lack or utilization of calcium.',
      lifestyle: 'Improving dietary fatty acid status to help reduce inflammation can provide significant relief. If you take any anti-inflammatory substance (NSAID) and experience improvement, then you definitely need to improve your fatty acid profile to naturally decrease inflammation.',
      supplements: 'Vitamin E. Plus nutrients dependent upon inflammation or calcium above.'
    }
  },
  'over-emotional': {
    id: 'over-emotional',
    title: 'Overly Emotional',
    type: 'content',
    content: {
      overview: 'Irritability whether you know it or someone informs you (like your spouse), is another common but abnormal symptom of PMS. This is most often due to a sugar handling problem and/or a hormonal issue, often involving the thyroid. The thyroid makes the hormone T4, that must be converted to T3 in the liver, kidneys and intestines. Insulin from excess carbohydrates, cortisol for excess stress, and estrogen (well excess estrogen that is not broken down and resulting in PMS symptoms you\'re learning about here), are the three major hormones that block the conversion of thyroid hormone T4 to its active T3, so you end up with a low functioning thyroid and mood issues.',
      lifestyle: 'A diet high in carbohydrates (especially refined), excess caffeine, and a stressful lifestyle will throw off serum and cellular glucose levels resulting in mood swings.',
      supplements: 'Depending on above sugar handling or thyroid issues, but also consider symptomatic improvement of mood issues with certain nutrients you can find in the Mood & Emotional section.'
    }
  },
  'hot-flash': {
    id: 'hot-flash',
    title: 'Hot Flashes or Sweats',
    type: 'content',
    content: {
      overview: 'Excessive sweating, typically night sweats or hot flashes during the day or night are never normal, at any time during your cycle. This is a sign that your body is not properly detoxifying estrogen or testosterone well, and your body is utilizing your largest organ, the skin, to try and detoxify these hormones more rapidly.',
      lifestyle: 'Lifestyle changes have to do with improving detoxification.',
      supplements: 'Nutrients that may help include Organically Bound Minerals, Vitamin E, Vitamin B6, Vitamin B9, Vitamin B12, Cysteine, Artichoke.'
    }
  },
  'hormone-acne': {
    id: 'hormone-acne',
    title: 'Hormonal Acne',
    type: 'content',
    content: {
      overview: 'Acne, especially breakouts that occur at certain times of your cycle, are a sign of estrogen/progesterone imbalance. You most likely will see your acne flare up during a peak in hormonal output, such as during ovulation (typically, on average, days 12-14) or during the end of your cycle (PMS). High estrogen, low progesterone, or sometimes a deficiency of iodine can cause the acne flare-ups.',
      lifestyle: 'Lifestyle changes have to do with improving liver detoxification.',
      supplements: 'Nutrients that may help include Iodine (if not consuming fish, kelp, or iodized salt), Vitamin B6, Vitamin B9, Vitamin B12, Cysteine, Artichoke.'
    }
  },
  'fatigue-female': {
    id: 'fatigue-female',
    title: 'Fatigue',
    type: 'content',
    content: {
      overview: 'Fatigue before or during the start of your cycle (period) is definitely not normal. Many times if this occurs before (PMS) then it\'s from the lack of progesterone opposing higher estrogen levels. The progesterone if typically low in women because it is being converted into cortisol, our major stress hormone. Fatigue during your period can be from low iron, or other red blood cell building nutrients.',
      lifestyle: 'To improve progesterone levels naturally focus on stress reduction. To improve iron and red blood cell status, consider eating nutrient dense foods containing iron, ideally red meat.',
      supplements: 'Nutrients that may help include RBCs: Iron, Vitamin B12, Vitamin B9, Vitamin B6. If no change after 2 cycles consider copper and molybdenum.'
    }
  },
  'long-cycle': {
    id: 'long-cycle',
    title: 'Long Cycle',
    type: 'content',
    content: {
      overview: 'Long cycles are usually due to excess stress to the adrenal glands. The first half of the cycle, (the follicular phase), depends on sufficient progesterone levels from the adrenal glands. Therefore, if there is too much stress impairing adrenal gland function and there forefore progesterone levels, ovulation will occur later in the month thus pushing the cycle longer. There needs to be at least ten days between ovulation and the end of the cycle (day before your period starts).',
      lifestyle: 'Addressing stress levels is of utmost priority.',
      supplements: 'Min Tran, Vitamin E, Tulsi, Ashwagandha, Cat B'
    }
  },
  'short-cycle': {
    id: 'short-cycle',
    title: 'Short Cycle Issues',
    type: 'content',
    content: {
      overview: 'Short cycles are usually due to low progesterone levels or an under-functioning thyroid. Progesterone is necessary to make sufficient thyroid hormones and a properly functioning thyroid allows adequate amounts of progesterone to be synthesized.',
      lifestyle: 'Progesterone is most often low due to either an insufficient production of the hormone, or due to high stress levels as your body will make the common stress hormone, cortisol, either in place of or from progesterone. So, addressing stress levels is of utmost priority.',
      supplements: 'Vitamin E, Fish Oil, Zinc, Vitamin A'
    }
  },
  'spotting': {
    id: 'spotting',
    title: 'Spotting Issues',
    type: 'content',
    content: {
      overview: 'Breakthrough bleeding, or spotting, is often associated with higher than ideal estrogen levels. This estrogen dominance is often from poor liver detoxification, excess body fat, or the consumption of phytoestrogens found in foods and drinks from plastic containers (especially hot products) as well as soy products.',
      lifestyle: 'Removing phytoestrogens from the diet.',
      supplements: '5MTHF, P5P, Methyl B12, CYS, Artichoke'
    }
  },
  'no-cycle': {
    id: 'no-cycle',
    title: 'Anovulation or Short Periods',
    type: 'content',
    content: {
      overview: 'Insufficient hormonal levels will result in lack of ovulation. A balance of ALL hormonal glands is important which especially includes the pituitary gland, the thyroid gland, the adrenal glands, and the ovaries.',
      lifestyle: 'Stress is once again a key player here and high levels of chronic stress or sudden dramatic acute stress levels (such as drastic emotional stress or physical stress) can affect your body to the point that ovulation will stop since health is not sufficient to procreate.',
      supplements: 'Pituitary PMG, Ovex P, Ashwagandha, Tulsi, Iodine, Cat E'
    }
  },
  'trouble-getting-preg': {
    id: 'trouble-getting-preg',
    title: 'Trouble Getting Pregnant',
    type: 'content',
    content: {
      overview: 'Insufficient hormonal levels will result in lack of ovulation. A balance of ALL hormonal glands is important which especially includes the pituitary gland, the thyroid gland, the adrenal glands, and the ovaries.',
      lifestyle: 'Stress is once again a key player here and high levels of chronic stress or sudden dramatic acute stress levels (such as drastic emotional stress or physical stress) can affect your body to the point that ovulation will stop since health is not sufficient to procreate.',
      supplements: 'Nutrients that may help include Pituitary PMG, Ovex P, Ashwagandha, Tulsi, Iodine, Vitamin E.'
    }
  },
  'trouble-sustain-preg': {
    id: 'trouble-sustain-preg',
    title: 'Trouble Sustaining Pregnancy',
    type: 'content',
    content: {
      overview: 'These symptoms are often associated with the neurotransmitter GABA, our most powerful inhibitory neurotransmitter. GABA greatly affects your sleep and your overall ability to relax. If you feel like you need to have some alcohol at night to chill-out then you most likely aren\'t supporting healthy GABA levels.',
      lifestyle: 'It\'s very important to stay away from the excitatory amino acids and their chemical derivatives as they will override your inhibitory GABA levels. These two substances are glutamates, commonly found as MSG (monosodium glutamate), asparates, commonly known as NutraSweet, commonly found in diet drinks and foods (and that blue packet Equal). MSG is also hidden under the names hydrolyzed and autolyzed, so be sure to read ingredients. Check out the other health tips in the Sleep section as without sufficient GABA levels, you won\'t sleep well.',
      supplements: 'Mn, Zn, P5P, Passion Flower, Valerian Root. Also, for faster relief Taurine, L-Theanine, and GABA'
    }
  },
  'morning-sickness': {
    id: 'morning-sickness',
    title: 'Morning Sickness',
    type: 'content',
    content: {
      overview: 'These symptoms are often associated with the neurotransmitter GABA, our most powerful inhibitory neurotransmitter. GABA greatly affects your sleep and your overall ability to relax. If you feel like you need to have some alcohol at night to chill-out then you most likely aren\'t supporting healthy GABA levels.',
      lifestyle: 'It\'s very important to stay away from the excitatory amino acids and their chemical derivatives as they will override your inhibitory GABA levels. These two substances are glutamates, commonly found as MSG (monosodium glutamate), asparates, commonly known as NutraSweet, commonly found in diet drinks and foods (and that blue packet Equal). MSG is also hidden under the names hydrolyzed and autolyzed, so be sure to read ingredients. Check out the other health tips in the Sleep section as without sufficient GABA levels, you won\'t sleep well.',
      supplements: 'Mn, Zn, P5P, Passion Flower, Valerian Root. Also, for faster relief Taurine, L-Theanine, and GABA'
    }
  },
  'postpartum-depress': {
    id: 'postpartum-depress',
    title: 'Postpartum Depression',
    type: 'content',
    content: {
      overview: 'These symptoms are often associated with the neurotransmitter GABA, our most powerful inhibitory neurotransmitter. GABA greatly affects your sleep and your overall ability to relax. If you feel like you need to have some alcohol at night to chill-out then you most likely aren\'t supporting healthy GABA levels.',
      lifestyle: 'It\'s very important to stay away from the excitatory amino acids and their chemical derivatives as they will override your inhibitory GABA levels. These two substances are glutamates, commonly found as MSG (monosodium glutamate), asparates, commonly known as NutraSweet, commonly found in diet drinks and foods (and that blue packet Equal). MSG is also hidden under the names hydrolyzed and autolyzed, so be sure to read ingredients. Check out the other health tips in the Sleep section as without sufficient GABA levels, you won\'t sleep well.',
      supplements: 'Mn, Zn, P5P, Passion Flower, Valerian Root. Also, for faster relief Taurine, L-Theanine, and GABA'
    }
  },
  'dry-tissues': {
    id: 'dry-tissues',
    title: 'Dry Tissues',
    type: 'content',
    content: {
      overview: 'Dry skin, and especially vaginal dryness, is common when the body is perceiving low estrogen levels. It\'s perceiving them because it\'s actually from the change from higher a premenopausal hormonal level to the much lower one that you\'re now experiencing but that doesn\'t mean you\'re deficient. Most women are estrogen dominant and this estrogen can affect everything from bone health to provoking certain cancers - so it\'s not a matter of getting enough estrogen but using what you have efficiently. You\'re meant to have a lower amount of estrogen after your cycling years and you\'ll still make some via your adrenal glands and in your adipose (fat) tissue. So this is more of an issue with balance, and getting sufficient progesterone in the body, which when needed, can convert to estrogen.',
      lifestyle: 'Progesterone is most often low due to either an insufficient production of the hormone, or due to high stress levels as your body will make the common stress hormone, cortisol, either in place of or from progesterone. So, addressing stress levels is of utmost priority. The health of your adrenal glands will determine your estrogen/progesterone balance through the rest of your life. Excess estrogen is often from poor liver detoxification, excess body fat, or the consumption of phytoestrogens found in foods and drinks from plastic containers (especially hot products) as well as soy products.',
      supplements: 'Vitamin E, Zinc, Fish Oil'
    }
  }
};

// Helper functions
export function getScreen(sectionId, screenId) {
  const screen = screens[screenId];
  if (!screen || screen.sectionId !== sectionId) {
    return null;
  }
  return screen;
}

export function getLandingPage(pageId) {
  return landingPages[pageId] || null;
}

export function getSectionScreens(sectionId) {
  return Object.values(screens).filter(screen => screen.sectionId === sectionId);
}

export function getSection(sectionId) {
  return sections.find(s => s.id === sectionId) || null;
}

export function getAllScreensForPath(path) {
  // Helper to get screens based on path structure
  const parts = path.split('/').filter(Boolean);
  if (parts.length === 0) return null;

  const sectionId = parts[0];
  const screenId = parts[1] ? `${sectionId}-${parts[1]}` : null;

  if (!screenId) return getSectionScreens(sectionId);
  return getScreen(sectionId, screenId);
}
