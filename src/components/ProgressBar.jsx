export function ProgressBar({ current, total }) {
  const percentage = (current / total) * 100
  return (
    <div className="mb-4">
      <div className="flex justify-between text-xs text-shc-muted mb-1">
        <span>Question {current} of {total}</span>
        <span>{Math.round(percentage)}%</span>
      </div>
      <div className="w-full h-1.5 bg-shc-border rounded-full overflow-hidden">
        <div
          className="h-full bg-shc-green rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}
