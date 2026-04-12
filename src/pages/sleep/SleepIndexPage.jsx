import { Routes, Route, useNavigate } from 'react-router-dom'
import { SectionHeader } from '../../components/SectionHeader'
import { MenuButton } from '../../components/MenuButton'
import { BackButton } from '../../components/BackButton'
import SleepProblems from './SleepProblems'
import WakeTime from './WakeTime'
import NightmaresPage from './symptoms/NightmaresPage'
import InsomniaPage from './symptoms/InsomniaPage'
import WakingMultiplePage from './symptoms/WakingMultiplePage'
import NumbnessPage from './symptoms/NumbnessPage'
import HeartNightPage from './symptoms/HeartNightPage'
import RLSPage from './symptoms/RLSPage'
import CrampsPage from './symptoms/CrampsPage'
import NightSweatsPage from './symptoms/NightSweatsPage'
import SnoringPage from './symptoms/SnoringPage'
import BruxismPage from './symptoms/BruxismPage'
import BathroomPage from './symptoms/BathroomPage'
import SleepStressPage from './symptoms/SleepStressPage'
import HealthyHabitsPage from './symptoms/HealthyHabitsPage'
import Wake11To1 from './wakeTime/Wake11To1'
import Wake1To3 from './wakeTime/Wake1To3'
import Wake3To5 from './wakeTime/Wake3To5'
import Wake5To7 from './wakeTime/Wake5To7'
import Wake7To9 from './wakeTime/Wake7To9'

// Intro Page
function SleepIntroPage() {
  const navigate = useNavigate()

  return (
    <div>
      <BackButton />
      <SectionHeader
        title="Problems with Sleep"
        iconSrc="/icons/sleep-icon.png"
        accentColor="#6366F1"
      />

      <div className="space-y-4 mb-6">
        <div className="card border-l-4 border-blue-500 bg-blue-500/10">
          <p className="text-shc-muted text-sm leading-relaxed whitespace-pre-line">
            Sleep is perhaps the most neglected health habit, often taken for granted and sometimes even being touted as a weakness by those who work more and sleep less. Sleep is a time of body rejuvenation and recovery, and the lack of sleep quality and quantity can seriously impair your health both physically and mentally. If you are able to fall asleep within fifteen minutes, stay asleep throughout the night without waking, and wake up feeling rested and pain-free, then you probably don't need help from this section. But if you're like millions of people who don't sleep well but would like to, continue on.
          </p>
        </div>
      </div>

      <MenuButton
        title="Click to Begin"
        to="/sleep/problems"
      />
    </div>
  )
}

export default function SleepIndexPage() {
  return (
    <Routes>
      <Route index element={<SleepIntroPage />} />
      <Route path="problems" element={<SleepProblems />} />
      <Route path="wake-time" element={<WakeTime />} />

      {/* Symptom pages */}
      <Route path="nightmares" element={<NightmaresPage />} />
      <Route path="insomnia" element={<InsomniaPage />} />
      <Route path="waking-multiple" element={<WakingMultiplePage />} />
      <Route path="numbness" element={<NumbnessPage />} />
      <Route path="heart-night" element={<HeartNightPage />} />
      <Route path="rls" element={<RLSPage />} />
      <Route path="cramps" element={<CrampsPage />} />
      <Route path="night-sweats" element={<NightSweatsPage />} />
      <Route path="snoring" element={<SnoringPage />} />
      <Route path="bruxism" element={<BruxismPage />} />
      <Route path="bathroom" element={<BathroomPage />} />
      <Route path="sleep-stress" element={<SleepStressPage />} />
      <Route path="healthy-habits" element={<HealthyHabitsPage />} />

      {/* Wake time pages */}
      <Route path="wake-11-1" element={<Wake11To1 />} />
      <Route path="wake-1-3" element={<Wake1To3 />} />
      <Route path="wake-3-5" element={<Wake3To5 />} />
      <Route path="wake-5-7" element={<Wake5To7 />} />
      <Route path="wake-7-9" element={<Wake7To9 />} />
    </Routes>
  )
}
