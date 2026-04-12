import { Routes, Route, useNavigate } from 'react-router-dom'
import { SectionHeader } from '../../components/SectionHeader'
import { BackButton } from '../../components/BackButton'
import FatigueQ1 from './questions/FatigueQ1'
import FatigueQ2Y from './questions/FatigueQ2Y'
import FatigueQ3Y from './questions/FatigueQ3Y'
import FatigueQ4 from './questions/FatigueQ4'
import FatigueQ4Y from './questions/FatigueQ4Y'
import FatigueQ5 from './questions/FatigueQ5'
import FatigueQ6 from './questions/FatigueQ6'
import FatigueQ6Y from './questions/FatigueQ6Y'
import FatigueQ7 from './questions/FatigueQ7'
import FatigueQ7N from './questions/FatigueQ7N'
import FatigueQ8 from './questions/FatigueQ8'
import FatigueQ9 from './questions/FatigueQ9'
import AnemiaCalculator from './AnemiaCalculator'
import AnemiaTransition from './transitions/AnemiaTransition'
import ImmuneTransition from './transitions/ImmuneTransition'
import GetThatDone from './GetThatDone'

function FatigueIntro() {
  const navigate = useNavigate()

  return (
    <div>
      <SectionHeader
        title="Fatigue"
        iconSrc="/icons/fatigue-icon.png"
      />

      <div className="space-y-4">
        <div className="card">
          <p className="text-shc-muted text-sm leading-relaxed whitespace-pre-line">
            Are you tired for some of or all of the day? Are you lacking enough energy to perform your daily activities? You may lack the energy you should have due to poor dietary and lifestyle habits. Hormonal imbalances, red blood cell issues, digestive problems, biochemical inadequacies, and even various toxicities can also result in fatigue. Click through this section to see why your energy may be low and steps you can make to improve it!
          </p>
        </div>

        <div className="space-y-2">
          <button
            onClick={() => navigate('/fatigue/q1')}
            className="w-full px-4 py-3 rounded-shc bg-shc-green text-black font-semibold hover:bg-shc-green-hover active:scale-95 transition-all duration-200 flex items-center justify-center gap-2"
          >
            Begin Assessment
            <span className="text-lg">→</span>
          </button>
          <button
            onClick={() => navigate('/fatigue/anemia-input')}
            className="w-full px-4 py-3 rounded-shc bg-shc-card border border-shc-border text-shc-text font-semibold hover:bg-shc-bg hover:border-shc-green active:scale-95 transition-all duration-200"
          >
            Anemia Calculator
          </button>
        </div>
      </div>
    </div>
  )
}

export default function FatigueIndexPage() {
  return (
    <Routes>
      <Route index element={<FatigueIntro />} />
      <Route path="q1" element={<FatigueQ1 />} />
      <Route path="q2y" element={<FatigueQ2Y />} />
      <Route path="q3y" element={<FatigueQ3Y />} />
      <Route path="q4" element={<FatigueQ4 />} />
      <Route path="q4y" element={<FatigueQ4Y />} />
      <Route path="q5" element={<FatigueQ5 />} />
      <Route path="q6" element={<FatigueQ6 />} />
      <Route path="q6y" element={<FatigueQ6Y />} />
      <Route path="q7" element={<FatigueQ7 />} />
      <Route path="q7n" element={<FatigueQ7N />} />
      <Route path="q8" element={<FatigueQ8 />} />
      <Route path="q9" element={<FatigueQ9 />} />
      <Route path="anemia-input" element={<AnemiaCalculator />} />
      <Route path="anemia-transition" element={<AnemiaTransition />} />
      <Route path="immune-transition" element={<ImmuneTransition />} />
      <Route path="get-that-done" element={<GetThatDone />} />
    </Routes>
  )
}
