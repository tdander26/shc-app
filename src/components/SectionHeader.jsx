export function SectionHeader({ title, subtitle = '', emoji = null }) {
  return (
    <div className="slide-up mb-6">
      <div className="text-center">
        {emoji && <div className="text-4xl mb-3">{emoji}</div>}
        <h1 className="text-2xl font-bold text-shc-text mb-2">{title}</h1>
        {subtitle && (
          <p className="text-shc-muted text-sm">{subtitle}</p>
        )}
      </div>
    </div>
  )
}
