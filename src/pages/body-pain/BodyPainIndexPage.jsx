import { Routes, Route } from 'react-router-dom'
import { SectionHeader } from '../../components/SectionHeader'
import { MenuButton } from '../../components/MenuButton'
import { ContentBlock } from '../../components/ContentBlock'
import { BackButton } from '../../components/BackButton'

function BodyPainIndexIntro() {
  return (
    <div>
      <SectionHeader
        title="Body Pain"
        emoji="💪"
        subtitle="Addressing and relieving body pain"
      />

      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-shc-text mb-3">Select a pain type:</h3>
        <MenuButton title="Arthritis" to="/body-pain/arthritis" />
        <MenuButton title="Bursitis" to="/body-pain/bursitis" />
        <MenuButton title="Carpal Tunnel" to="/body-pain/carpal-tunnel" />
        <MenuButton title="Gout" to="/body-pain/gout" />
        <MenuButton title="Sciatica" to="/body-pain/sciatica" />
        <MenuButton title="Tendonitis" to="/body-pain/tendonitis" />
        <MenuButton title="Joint Repair" to="/body-pain/joint-repair" />
      </div>
    </div>
  )
}

function ArthritisPage() {
  return (
    <div>
      <BackButton />
      <SectionHeader title="Arthritis" emoji="🦴" />
      <div className="space-y-4 mb-6">
        <ContentBlock
          title="Overview"
          content="Rheumatoid arthritis is more of a chronic, inflammatory, multiple-site arthritis. The medical society uses analgesics to control pain, corticosteroids, immunosuppressive drugs, NSAIDs, and disease-modifying antirheumatic drugs to help get the patient by day-to-day. All of the information above for OA is also very important and necessary to properly deal with, and overcome, RA. Additionally, since RA is autoimmune in nature, focusing on the immune system in the treatment regimen is extremely important."
          type="overview"
        />
        <ContentBlock
          title="Lifestyle"
          content="Along with treating the specific involved areas, fighting the inflammation naturally, and making sure the necessary nutrient components are available for joint repair, you need to deal with the immune issue of RA. One of the most common immune deterrents is a food allergy or allergies. Eliminating the offender(s) is necessary for success. Since about one-half of the immune system is contained within the healthy bacteria that line the digestive tract, dealing with the digestive system is also important. Sometimes that means supporting with digestive enzymes or replenishing the lost bacteria. The health of the gut can be further investigated through a digestive analysis or an organic acid test."
          type="lifestyle"
        />
      </div>
    </div>
  )
}

function BursitisPage() {
  return (
    <div>
      <BackButton />
      <SectionHeader title="Bursitis" emoji="🔥" />
      <div className="space-y-4 mb-6">
        <ContentBlock
          title="Overview"
          content="You have hundreds of bursa all over your body which can be thought of as little bags of oil that help reduce friction between two joints moving in opposite directions as well as where muscles & tendons slide over bone. Bursitis, or inflammation of a bursa, is often described as 'hot & stabbing' pain, and has some degree of swelling. Bursitis can be caused by a local injury to a joint, such as the elbow or knee, as well as improper repetitive motion between muscles. For example, if your biceps muscle is not functioning properly (there is some muscle 'weakness' – inhibition) then your triceps will work harder due to the opposing muscle inhibition of the biceps. This muscle imbalance will cause stress on the elbow and shoulder joints. If the bursa in the elbow were to become inflamed due to the chronic joint and muscular imbalances, you would have a diagnosis of olecranon bursitis. Trochanteric bursitis in the hip is also a very common spot for bursa problems. Swelling of the bursa behind the knee where the calf and hamstring muscles cross is also very common; this is called a Baker's cyst."
          type="overview"
        />
        <ContentBlock
          title="Lifestyle"
          content="Similar local therapies which help treat tendonitis also help with bursitis, but the nutrition aspects of bursitis is a bit different. Nutritionally, bursitis has to do with calcium, fats, and the acidity of your tissues. Here's the common bursitis 'nutritional' scenario: When you're under too much stress of any kind, especially when there is trauma to the area, your body requires additional protein. This protein can come from your diet as well as muscle breakdown and even from the area around your actual bursa. The robbing of protein from the tissue and bursa creates a more alkaline medium in that area. Calcium is then deposited in the bursa as a result of the alkaline environment to help protect the bursa. Unfortunately, this creates pain and inflammation – bursitis."
          type="lifestyle"
        />
      </div>
    </div>
  )
}

function CarpalTunnelPage() {
  return (
    <div>
      <BackButton />
      <SectionHeader title="Carpal Tunnel" emoji="👋" />
      <div className="space-y-4 mb-6">
        <ContentBlock
          title="Overview"
          content="Carpal tunnel syndrome is a problem that affects the hand and wrist when there is pressure on the median nerve, which supplies sensation to the thumb, index, middle, and half of the ring (4th) finger. People with carpal tunnel syndrome may have a narrowing of the 'tunnel' (made up by the wrist bones) and experience weakness, pain, numbness, and inflammation. The medical approach is to brace up the area, provide life-long anti-inflammatory medications (which will further make the problem worse if you read the arthritis section), and if that doesn't work then surgery is recommended. There is a lot to deal with here – but I will address a few of the reasons for this condition. The function of the muscles of the wrist and hand are most important. Finding out what is causing the weaknesses or over-firing of each individual muscle is taken into consideration. So there is almost always a lot of manual therapy work that needs to be done such as muscle trigger points, muscle fiber injuries, acupressure meridians, and joint mobilization."
          type="overview"
        />
        <ContentBlock
          title="Lifestyle"
          content="Chemically, making sure inflammation is being dealt with as well as making sure the necessary components for joint repair are present is important. You can read about this in the arthritis section and click here for a full article on tissue and joint repair over at my Sock Doc site. Additionally, there is a clinical correlation to carbohydrate intolerance/insulin resistance. When this occurs in many people, the wrist flexors (as well as other muscles) are compromised. This sets the stage for a problem in that area to arise."
          type="lifestyle"
        />
        <ContentBlock
          title="Supplements"
          content="Potential supplements include, but are not limited to, those supporting joint repair and reducing inflammation."
          type="supplements"
        />
      </div>
    </div>
  )
}

function GoutPage() {
  return (
    <div>
      <BackButton />
      <SectionHeader title="Gout" emoji="🍒" />
      <div className="space-y-4 mb-6">
        <ContentBlock
          title="Overview"
          content="Gout is a form of arthritis characterized by severe inflammatory attacks."
          type="overview"
        />
        <ContentBlock
          title="Lifestyle"
          content="Nutritionally manage inflammation and support joint health. Reduce purine-rich foods."
          type="lifestyle"
        />
        <ContentBlock
          title="Supplements"
          content="Wild cherry juice, 5-MTHF, EFAs, and various antioxidants"
          type="supplements"
        />
      </div>
    </div>
  )
}

function SciaticaPage() {
  return (
    <div>
      <BackButton />
      <SectionHeader title="Sciatica" emoji="📍" />
      <div className="space-y-4 mb-6">
        <ContentBlock
          title="Overview"
          content="Sciatica is pain radiating along the sciatic nerve from the lower back through the legs."
          type="overview"
        />
        <ContentBlock
          title="Lifestyle"
          content="Address underlying muscular and structural issues."
          type="lifestyle"
        />
        <ContentBlock
          title="Supplements"
          content="Nutritional support for nerve health and inflammation management."
          type="supplements"
        />
      </div>
    </div>
  )
}

function TendonitisPage() {
  return (
    <div>
      <BackButton />
      <SectionHeader title="Tendonitis" emoji="💪" />
      <div className="space-y-4 mb-6">
        <ContentBlock
          title="Overview"
          content="Tendonitis is inflammation of a tendon, which is where a muscle connects to a bone. This is probably the biggest complaint that athletes have in regards to injuries. It is also one of the most used diagnoses, and perhaps sometimes incorrectly. For example, many physicians now think of Achilles tendonitis as Achilles tendonosis (also spelled tendinosis) – which is a chronic degenerative condition with some micro-tearing of the tissues without inflammation. Resolving tendonitis (as well as a tendonosis) involves both local and global 'systemic' treatment."
          type="overview"
        />
        <ContentBlock
          title="Lifestyle"
          content="Nonsteroidal anti-inflammatory drugs (NSAIDs) are often prescribed for many 'itis' problems. Guess what? These will also deplete sulfur from your body because that's how your liver detoxifies them, so overall healing is even further delayed. If you ever feel better from taking a NDAID it's a sure sign that you have a fatty acid metabolism problem occurring in your body. If there was no fatty acid metabolism problem or imbalance, you'd see no benefit taking the drug. If there actually isn't inflammation to be treated and you're dealing with an 'osis' rather than 'itis' you may not see a NSAID benefit. However I'd say it's very rare for a person to have a chronic injury that their body can't heal and not have some degree of inflammation. More on fats, NSAIDs, and inflammation below."
          type="lifestyle"
        />
        <ContentBlock
          title="Supplements"
          content="Your adrenal glands, pancreas, and liver are the three major organs involved in tendonitis problems. The adrenal glands are your hormonal glands that deal with stress. They will secrete excess cortisol when there is too much dietary, physical, or emotional stress. Over time, the beneficial hormone DHEA, also made in the adrenal glands, will become depleted with persistent chronic stress, resulting in low sex hormone levels such as testosterone and estrogen, as those are made from DHEA. This constant cortisol burden will tax the liver, which must detoxify the hormone, and much of this is done via a process known as sulfation. When your body uses up sulfur, it has less available to heal injured tendons as well as your cartilage (joints) where they attach to. So chronic stress leads to chronic cortisol leads to chronic inflammation and the inability to heal. The increased cortisol also plays off the pancreas, creating a constant tug-of-war between the two organs (the pancreas and the adrenals) as they try to keep blood sugar levels from swinging out of control all day long as you work, exercise, and sleep. This, as discussed here, will create insulin and carbohydrate sensitivities, and in turn create even more inflammation."
          type="supplements"
        />
      </div>
    </div>
  )
}

function JointRepairPage() {
  return (
    <div>
      <BackButton />
      <SectionHeader title="Tissue and Joint Repair" emoji="🧬" />
      <div className="space-y-4 mb-6">
        <ContentBlock
          title="Overview"
          content="Proper joint and tissue repair requires adequate nutrition and reduced inflammation."
          type="overview"
        />
        <ContentBlock
          title="Lifestyle"
          content="Focus on anti-inflammatory diet and stress reduction."
          type="lifestyle"
        />
        <ContentBlock
          title="Supplements"
          content="Collagen, glucosamine, minerals, and omega-3 fatty acids support joint repair (GAG)."
          type="supplements"
        />
      </div>
    </div>
  )
}

export default function BodyPainIndexPage() {
  return (
    <Routes>
      <Route index element={<BodyPainIndexIntro />} />
      <Route path="arthritis" element={<ArthritisPage />} />
      <Route path="bursitis" element={<BursitisPage />} />
      <Route path="carpal-tunnel" element={<CarpalTunnelPage />} />
      <Route path="gout" element={<GoutPage />} />
      <Route path="sciatica" element={<SciaticaPage />} />
      <Route path="tendonitis" element={<TendonitisPage />} />
      <Route path="joint-repair" element={<JointRepairPage />} />
    </Routes>
  )
}
