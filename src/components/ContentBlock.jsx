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

export function ContentBlock({ title, content, type = 'overview', link, linkLabel = 'Get Here' }) {
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
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 rounded-shc bg-shc-green text-black font-semibold text-sm hover:bg-shc-green-hover active:scale-95 transition-all duration-200"
        >
          {linkLabel}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      )}
    </div>
  )
}
