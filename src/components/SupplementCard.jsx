export function SupplementCard({ name, link, dosage = '' }) {
  return (
    <div className="card border border-shc-border bg-shc-bg">
      <div className="flex items-center justify-between gap-3">
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-semibold text-shc-text truncate">{name}</h4>
          {dosage && (
            <p className="text-xs text-shc-muted mt-1">{dosage}</p>
          )}
        </div>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 px-3 py-1 rounded-full bg-shc-green text-black text-xs font-medium hover:bg-shc-green-hover transition-colors duration-200"
          >
            Learn
          </a>
        )}
      </div>
    </div>
  )
}
