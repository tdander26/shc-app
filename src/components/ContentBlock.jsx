import { useState } from 'react'

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

export function ContentBlock({ title, content, type = 'overview', link, linkLabel = 'Get Here', links = [] }) {
  const config = typeConfig[type] || typeConfig.overview

  // Default to open for overview, closed for others
  const [isOpen, setIsOpen] = useState(type === 'overview')

  // Combine single link prop with links array for backwards compatibility
  const allLinks = [
    ...(link ? [{ url: link, label: linkLabel }] : []),
    ...links
  ]

  return (
    <div className={`card card-hover border-l-4 ${config.borderColor} ${config.bgAccent}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-start gap-3 mb-3 cursor-pointer hover:opacity-80 transition-opacity duration-200 bg-none border-none p-0"
      >
        <span className="text-lg flex-shrink-0">{config.icon}</span>
        <h3 className="text-base font-semibold text-shc-text flex-1 text-left">{title}</h3>
        <div className="flex-shrink-0 flex items-center">
          <svg
            className={`w-5 h-5 text-shc-muted transition-transform duration-300 ${
              isOpen ? 'rotate-180' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </button>

      <div
        className="overflow-hidden transition-all duration-300"
        style={{
          maxHeight: isOpen ? '1000px' : '0px',
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="text-shc-muted text-sm leading-relaxed whitespace-pre-wrap">
          {content}
        </div>
        {allLinks.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {allLinks.map((l, i) => (
              <a
                key={i}
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-shc font-semibold text-sm active:scale-95 transition-all duration-200 ${
                  i === 0
                    ? 'bg-shc-green text-black hover:bg-shc-green-hover'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {l.label}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
