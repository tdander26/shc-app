import { useNavigate } from 'react-router-dom'

export function BackButton() {
  const navigate = useNavigate()

  return (
    <button
      onClick={() => navigate(-1)}
      className="flex items-center gap-2 px-3 py-2 rounded-shc border border-shc-border text-shc-muted hover:text-shc-text hover:border-shc-green transition-colors duration-200"
      aria-label="Go back"
    >
      <span className="text-lg">←</span>
      <span className="text-sm font-medium">Back</span>
    </button>
  )
}
