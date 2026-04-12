import { Routes, Route, useLocation } from 'react-router-dom'
import { Layout } from './components/Layout'
import { ScrollToTop } from './components/ScrollToTop'
import SplashScreen from './pages/SplashScreen'
import HomePage from './pages/HomePage'
import DisclaimerPage from './pages/DisclaimerPage'
import FatigueIndexPage from './pages/fatigue/FatigueIndexPage'
import SleepIndexPage from './pages/sleep/SleepIndexPage'
import MoodIndexPage from './pages/mood/MoodIndexPage'
import SkinIndexPage from './pages/skin/SkinIndexPage'
import HeadachesIndexPage from './pages/headaches/HeadachesIndexPage'
import BodyPainIndexPage from './pages/body-pain/BodyPainIndexPage'
import MaleHormonesIndexPage from './pages/male-hormones/MaleHormonesIndexPage'
import FemaleHormonesIndexPage from './pages/female-hormones/FemaleHormonesIndexPage'
import DigestionIndexPage from './pages/digestion/DigestionIndexPage'
import ImmuneIndexPage from './pages/immune/ImmuneIndexPage'
import LandingPage from './pages/LandingPage'

function AppContent() {
  const location = useLocation()
  const isSplash = location.pathname === '/'

  if (isSplash) {
    return <SplashScreen />
  }

  return (
    <Layout>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/disclaimer" element={<DisclaimerPage />} />

        {/* Fatigue section */}
        <Route path="/fatigue/*" element={<FatigueIndexPage />} />

        {/* Sleep section */}
        <Route path="/sleep/*" element={<SleepIndexPage />} />

        {/* Mood section */}
        <Route path="/mood/*" element={<MoodIndexPage />} />

        {/* Skin section */}
        <Route path="/skin/*" element={<SkinIndexPage />} />

        {/* Head Pain section */}
        <Route path="/headaches/*" element={<HeadachesIndexPage />} />

        {/* Body Pain section */}
        <Route path="/body-pain/*" element={<BodyPainIndexPage />} />

        {/* Male Hormones section */}
        <Route path="/male-hormones/*" element={<MaleHormonesIndexPage />} />

        {/* Female Hormones section */}
        <Route path="/female-hormones/*" element={<FemaleHormonesIndexPage />} />

        {/* Digestion section */}
        <Route path="/digestion/*" element={<DigestionIndexPage />} />

        {/* Immune section */}
        <Route path="/immune/*" element={<ImmuneIndexPage />} />

        {/* Shared landing page route */}
        <Route path="/landing/:pageId" element={<LandingPage />} />
      </Routes>
    </Layout>
  )
}

function App() {
  return (
    <>
      <ScrollToTop />
      <AppContent />
    </>
  )
}

export default App
