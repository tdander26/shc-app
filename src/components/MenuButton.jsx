import { Link } from 'react-router-dom'

export function MenuButton({ title, to, icon, disabled = false }) {
  if (disabled) {
    return (
      <div
        className="w-full px-4 py-3 rounded-shc bg-shc-card border border-shc-border text-shc-muted font-medium transition-all duration-200 text-center opacity-50 cursor-not-allowed flex items-center justify-center gap-2"
      >
        {icon && <span className="text-lg">{icon}</span>}
        <span>{title}</span>
      </div>
    )
  }

  return (
    <Link
      to={to}
      className="w-full px-4 py-3 rounded-shc bg-shc-card border border-shc-border text-shc-text font-medium transition-all duration-200 text-center hover:bg-shc-bg hover:border-shc-green active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
    >
      {icon && <span className="text-lg">{icon}</span>}
      <span>{title}</span>
    </Link>
  )
}
