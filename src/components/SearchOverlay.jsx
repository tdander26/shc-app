import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const SEARCHABLE_PAGES = [
  { title: 'Fatigue', route: '/fatigue' },
  { title: 'Sleep', route: '/sleep' },
  { title: 'Mood & Emotional Health', route: '/mood' },
  { title: 'Skin', route: '/skin' },
  { title: 'Head Pain', route: '/headaches' },
  { title: 'Body Pain', route: '/body-pain' },
  { title: 'Male Hormones', route: '/male-hormones' },
  { title: 'Female Hormones', route: '/female-hormones' },
  { title: 'Digestion', route: '/digestion' },
  { title: 'Immune System', route: '/immune' },
  { title: 'Acne', route: '/skin/acne' },
  { title: 'Itchy Skin', route: '/skin/itchy' },
  { title: 'Psoriasis', route: '/skin/psoriasis' },
  { title: 'Hives', route: '/skin/hives' },
  { title: 'Eczema', route: '/skin/eczema' },
  { title: 'Cold Sores', route: '/skin/cold-sores' },
  { title: 'Canker Sores', route: '/skin/canker-sores' },
  { title: 'Arthritis', route: '/body-pain/arthritis' },
  { title: 'Bursitis', route: '/body-pain/bursitis' },
  { title: 'Carpal Tunnel', route: '/body-pain/carpal-tunnel' },
  { title: 'Gout', route: '/body-pain/gout' },
  { title: 'Sciatica', route: '/body-pain/sciatica' },
  { title: 'Tendonitis', route: '/body-pain/tendonitis' },
  { title: 'Joint Repair', route: '/body-pain/joint-repair' },
  { title: 'Migraines', route: '/headaches/migraines' },
  { title: 'Tension Headaches', route: '/headaches/tension' },
  { title: 'Sinus Headaches', route: '/headaches/sinus' },
  { title: 'GABA / Anxiety', route: '/mood/gaba' },
  { title: 'Dopamine', route: '/mood/dopamine' },
  { title: 'Serotonin / Depression', route: '/mood/serotonin' },
  { title: 'Concentration / Focus', route: '/mood/concentration' },
  { title: 'Seasonal Affective Disorder', route: '/mood/sad' },
  { title: 'Testosterone', route: '/male-hormones/testosterone-enhancement' },
  { title: 'Nitric Oxide', route: '/male-hormones/nitric-oxide' },
  { title: 'Prostate Health', route: '/male-hormones/prostate-health' },
  { title: 'PMS Symptoms', route: '/female-hormones/pms' },
  { title: 'Monthly Cycle Issues', route: '/female-hormones/cycle-issues' },
  { title: 'Fertility', route: '/female-hormones/fertility' },
  { title: 'Menopause', route: '/female-hormones/menopause' },
  { title: 'Gallbladder', route: '/gallbladder-view' },
  { title: 'Cataplex B', route: '/sleep/sleep-stress' },
  { title: 'Cataplex G', route: '/mood/concentration' },
  { title: 'Arginex', route: '/male-hormones/nitric-oxide' }
]

export function SearchOverlay({ onClose }) {
  const navigate = useNavigate()
  const inputRef = useRef(null)
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])

  useEffect(() => {
    // Autofocus on mount
    inputRef.current?.focus()
  }, [])

  useEffect(() => {
    // Handle escape key
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  useEffect(() => {
    // Search functionality
    if (query.trim() === '') {
      setResults([])
      return
    }

    const searchTerm = query.toLowerCase()
    const filtered = SEARCHABLE_PAGES.filter(
      (page) =>
        page.title.toLowerCase().includes(searchTerm) ||
        page.route.toLowerCase().includes(searchTerm)
    )
    setResults(filtered)
  }, [query])

  const handleResultClick = (route) => {
    navigate(route)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-start justify-center pt-12 animate-fade-in">
      <div className="w-full max-w-md mx-4 rounded-shc bg-shc-card border border-shc-border shadow-lg">
        {/* Search Input */}
        <div className="p-4 border-b border-shc-border">
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search pages..."
            className="w-full px-4 py-3 rounded-shc bg-shc-bg border border-shc-border text-shc-text placeholder-shc-muted focus:outline-none focus:border-shc-green focus:ring-1 focus:ring-shc-green"
          />
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto">
          {results.length > 0 ? (
            <ul className="py-2">
              {results.map((result, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleResultClick(result.route)}
                    className="w-full text-left px-4 py-3 hover:bg-shc-bg transition-colors duration-150 flex items-center justify-between group"
                  >
                    <span className="text-shc-text group-hover:text-shc-green transition-colors">
                      {result.title}
                    </span>
                    <span className="text-shc-muted text-xs group-hover:text-shc-green transition-colors">
                      {result.route}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          ) : query.trim() !== '' ? (
            <div className="px-4 py-8 text-center text-shc-muted">
              No results found for "{query}"
            </div>
          ) : (
            <div className="px-4 py-8 text-center text-shc-muted">
              Start typing to search...
            </div>
          )}
        </div>

        {/* Close Button */}
        <div className="p-4 border-t border-shc-border flex justify-center">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-shc bg-shc-bg border border-shc-border text-shc-text hover:border-shc-green hover:text-shc-green transition-all duration-200"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
