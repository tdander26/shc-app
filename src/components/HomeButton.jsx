import { Link, useLocation } from 'react-router-dom'

export function HomeButton() {
  const location = useLocation()
  const isHome = location.pathname === '/home'

  if (isHome) {
    return null
  }

  return (
    <Link
      to="/home"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-shc-green hover:bg-shc-green-hover text-black font-bold text-2xl flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110 active:scale-95"
      aria-label="Go to home"
      title="Home"
    >
      🏠
    </Link>
  )
}
