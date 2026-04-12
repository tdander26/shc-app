import { NavigationBar } from './NavigationBar'
import { useScrollToTop } from '../hooks/useScrollToTop'

export function Layout({ children }) {
  useScrollToTop()

  return (
    <div className="min-h-screen bg-shc-bg text-shc-text">
      {/* Safe area for notched devices */}
      <div className="pt-safe-top pb-safe-bottom">
        {/* Phone-like container centered on desktop */}
        <div className="max-w-md mx-auto min-h-screen bg-shc-bg">
          <main className="px-4 py-6 pb-32 animate-fade-in">
            {children}
          </main>
        </div>
      </div>

      {/* Fixed bottom navigation */}
      <NavigationBar />
    </div>
  )
}
