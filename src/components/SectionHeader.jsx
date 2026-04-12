export function SectionHeader({ title, subtitle = '', emoji = null, iconSrc = null, accentColor = null }) {
  return (
    <div className="slide-up mb-6">
      <div className="text-center">
        {emoji && !iconSrc && <div className="text-4xl mb-3">{emoji}</div>}
        <h1 className="text-2xl font-bold text-shc-text mb-2">{title}</h1>
        {accentColor && (
          <div
            className="h-1 w-16 mx-auto rounded-full mb-3"
            style={{ backgroundColor: accentColor }}
          />
        )}
        {iconSrc && (
          <div className="flex justify-center my-3">
            <img
              src={iconSrc}
              alt={title}
              className="w-16 h-16 object-contain drop-shadow-lg"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </div>
        )}
        {subtitle && (
          <p className="text-shc-muted text-sm">{subtitle}</p>
        )}
      </div>
    </div>
  )
}
