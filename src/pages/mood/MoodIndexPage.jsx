import { Routes, Route, useNavigate } from 'react-router-dom'
import { SectionHeader } from '../../components/SectionHeader'
import { BackButton } from '../../components/BackButton'
import MoodQ1 from './questions/MoodQ1'
import MoodQ2 from './questions/MoodQ2'
import MoodQ3 from './questions/MoodQ3'
import MoodQ4 from './questions/MoodQ4'
import MoodQ5 from './questions/MoodQ5'
import MoodQ6 from './questions/MoodQ6'
import MoodQ7 from './questions/MoodQ7'
import ConcentrationPage from './ConcentrationPage'
import GABAPage from './GABAPage'
import DopaminePage from './DopaminePage'
import SerotoninPage from './SerotoninPage'
import SADPage from './SADPage'
import MoodEndPage from './MoodEndPage'

function MoodIntro() {
  const navigate = useNavigate()

  return (
    <div>
      <SectionHeader
        title="Mood & Emotional Health"
        iconSrc="/icons/mood-icon.png"
      />

      <div className="space-y-4">
        <div className="card">
          <p className="text-shc-muted text-sm leading-relaxed whitespace-pre-line">
            This section will deal with mental and emotional well-being. Often these problems come from nutritional and dietary imbalances as well as other health problems such as anemia, digestive problems, and hormonal imbalances. Please note that none of the information in this app is a substitute for any medication you may have been prescribed by your physician. However, medications often come with a host of side effects and don't quite address the problem fully.
          </p>
        </div>

        <button
          onClick={() => navigate('/mood/q1')}
          className="w-full px-4 py-3 rounded-shc bg-shc-green text-black font-semibold hover:bg-shc-green-hover active:scale-95 transition-all duration-200 flex items-center justify-center gap-2"
        >
          Begin Assessment
          <span className="text-lg">→</span>
        </button>
      </div>
    </div>
  )
}

export default function MoodIndexPage() {
  return (
    <Routes>
      <Route index element={<MoodIntro />} />
      <Route path="q1" element={<MoodQ1 />} />
      <Route path="q2" element={<MoodQ2 />} />
      <Route path="q3" element={<MoodQ3 />} />
      <Route path="q4" element={<MoodQ4 />} />
      <Route path="q5" element={<MoodQ5 />} />
      <Route path="q6" element={<MoodQ6 />} />
      <Route path="q7" element={<MoodQ7 />} />
      <Route path="concentration" element={<ConcentrationPage />} />
      <Route path="gaba" element={<GABAPage />} />
      <Route path="dopamine" element={<DopaminePage />} />
      <Route path="serotonin" element={<SerotoninPage />} />
      <Route path="sad" element={<SADPage />} />
      <Route path="end" element={<MoodEndPage />} />
    </Routes>
  )
}
