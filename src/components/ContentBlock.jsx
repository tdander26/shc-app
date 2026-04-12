const typeConfig = {
  overview: {
    borderColor: 'border-blue-500',
    icon: 'ℹ️',
    bgAccent: 'bg-blue-500/10'
  },
  lifestyle: {
    borderColor: 'border-shc-green',
    icon: '🌿',
    bgAccent: 'bg-shc-green/10'
  },
  supplements: {
    borderColor: 'border-yellow-500',
    icon: '💊',
    bgAccent: 'bg-yellow-500/10'
  }
}

export function ContentBlock({ title, content, type = 'overview' }) {
  const config = typeConfig[type] || typeConfig.overview

  return (
    <div className={`card card-hover border-l-4 ${config.borderColor} ${config.bgAccent}`}>
      <div className="flex items-start gap-3 mb-3">
        <span className="text-lg flex-shrink-0">{config.icon}</span>
        <h3 className="text-base font-semibold text-shc-text flex-1">{title}</h3>
      </div>
      <div className="text-shc-muted text-sm leading-relaxed whitespace-pre-wrap">
        {content}
      </div>
    </div>
  )
}
