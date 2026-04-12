import { Link } from 'react-router-dom'

export function MenuButton({ title, to, icon, iconSrc, disabled = false }) {
  const iconElement = iconSrc ? (
    <img src={iconSrc} alt="" className="w-6 h-6 object-contain" />
  ) : icon ? (
    <span className="text-lg">{icon}</span>
  ) : null

  if (disabled) {
    return (
      <div
        className="w-full px-4 py-3 rounded-shc bg-shc-card border border-shc-border text-shc-muted font-medium transition-all duration-200 text-center opacity-50 cursor-not-allowed flex items-center justify-center gap-3"
      >
        {iconElement}
        <span>{title}</span>
      </div>
    )
  }

  return (
    <Link
      to={to}
      className="w-full px-4 py-3 rounded-shc bg-shc-card border border-shc-border text-shc-text font-medium transition-all duration-200 text-center hover:bg-shc-bg hover:border-shc-green active:scale-95 flex items-center justify-center gap-3 cursor-pointer"
    >
      {iconElement}
      <span>{title}</span>
    </Link>
  )
}
