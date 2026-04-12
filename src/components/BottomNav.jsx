import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { SearchOverlay } from './SearchOverlay'

export function BottomNav() {
  const location = useLocation()
  const navigate = useNavigate()
  const [showSearch, setShowSearch] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSearchClick = () => {
    setShowSearch(true)
  }

  const closeSearch = () => {
    setShowSearch(false)
  }

  const isHome = location.pathname === '/home'

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-shc-card border-t border-shc-border backdrop-blur-sm safe-area-bottom">
        <div className="max-w-md mx-auto px-4 py-4 flex items-center justify-around gap-6">
          {/* Home Icon */}
          <button
            onClick={() => navigate('/home')}
            className={`p-3 rounded-shc transition-all duration-200 flex items-center justify-center ${
              isHome
                ? 'bg-shc-green text-black'
                : 'text-shc-text hover:text-shc-green'
            }`}
            aria-label="Home"
            title="Home"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </svg>
          </button>

          {/* Search Icon */}
          <button
            onClick={handleSearchClick}
            className="p-3 rounded-shc transition-all duration-200 text-shc-text hover:text-shc-green flex items-center justify-center"
            aria-label="Search"
            title="Search"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>

          {/* Scroll to Top Icon */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-shc transition-all duration-200 text-shc-text hover:text-shc-green flex items-center justify-center"
            aria-label="Scroll to top"
            title="Scroll to top"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16V4m0 0L3 8m4-4l4 4m10 0v12m0 0l4-4m-4 4l-4-4"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Search Overlay */}
      {showSearch && <SearchOverlay onClose={closeSearch} />}
    </>
  )
}
