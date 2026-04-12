import { useLocation, useNavigate } from 'react-router-dom'
import { BackButton } from './BackButton'

const sectionTitles = {
  '/home': 'Symptoms Solution',
  '/disclaimer': 'Disclaimer',
  '/fatigue': 'Fatigue',
  '/sleep': 'Sleep',
  '/mood': 'Mood',
  '/skin': 'Skin',
  '/headaches': 'Head Pain',
  '/body-pain': 'Body Pain',
  '/male-hormones': 'Male Hormones',
  '/female-hormones': 'Female Hormones',
  '/digestion': 'Digestion',
  '/immune': 'Immune'
}

function getSectionTitle(pathname) {
  const rootPath = pathname.split('/')[1]
  if (rootPath === '' || rootPath === 'home') return 'Symptoms Solution'

  for (const [path, title] of Object.entries(sectionTitles)) {
    if (pathname === path || pathname.startsWith(path + '/')) {
      return title
    }
  }

  return 'Symptoms Solution'
}

export function NavigationBar() {
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/home'
  const title = getSectionTitle(location.pathname)

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-shc-card border-t border-shc-border safe-area-bottom">
      <div className="max-w-md mx-auto px-4 py-3 flex items-center justify-between gap-3">
        {!isHome && <BackButton />}
        <div className={`flex-1 text-center ${isHome ? 'col-span-2' : ''}`}>
          <h2 className="text-sm font-semibold text-shc-text truncate">{title}</h2>
        </div>
        <button
          onClick={() => navigate('/home')}
          className={`p-2 rounded-shc transition-all duration-200 ${
            isHome
              ? 'bg-shc-green text-black'
              : 'bg-shc-bg border border-shc-border text-shc-text hover:border-shc-green'
          }`}
          aria-label="Go to home"
          title="Home"
        >
          🏠
        </button>
      </div>
    </div>
  )
}
