import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SplashScreen() {
  const navigate = useNavigate()
  const [phase, setPhase] = useState('enter') // enter, visible, exit

  useEffect(() => {
    // Phase 1: elements animate in
    const visibleTimer = setTimeout(() => setPhase('visible'), 100)
    // Phase 2: hold for a moment, then fade out
    const exitTimer = setTimeout(() => setPhase('exit'), 2800)
    // Phase 3: navigate to home
    const navTimer = setTimeout(() => navigate('/home', { replace: true }), 3500)

    return () => {
      clearTimeout(visibleTimer)
      clearTimeout(exitTimer)
      clearTimeout(navTimer)
    }
  }, [navigate])

  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center"
      style={{
        background: 'linear-gradient(180deg, #1a1a1c 0%, #212122 40%, #1a2e1f 100%)',
        transition: 'opacity 0.7s ease',
        opacity: phase === 'exit' ? 0 : 1,
      }}
    >
      {/* Subtle glow behind the icon */}
      <div
        className="absolute rounded-full"
        style={{
          width: 200,
          height: 200,
          background: 'radial-gradient(circle, rgba(0,176,60,0.15) 0%, transparent 70%)',
          transition: 'opacity 1.5s ease, transform 1.5s ease',
          opacity: phase !== 'enter' ? 1 : 0,
          transform: phase !== 'enter' ? 'scale(1)' : 'scale(0.5)',
        }}
      />

      {/* App icon / pulse circle */}
      <div
        style={{
          width: 90,
          height: 90,
          borderRadius: 22,
          background: 'linear-gradient(135deg, #00B03C 0%, #00CC45 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'opacity 0.8s ease, transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
          opacity: phase !== 'enter' ? 1 : 0,
          transform: phase !== 'enter' ? 'scale(1)' : 'scale(0.6)',
          boxShadow: '0 8px 32px rgba(0,176,60,0.3)',
        }}
      >
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          {/* Heart with pulse line */}
          <path
            d="M24 42s-16-9.5-16-21c0-5.5 4.5-10 10-10 3.5 0 6 2 6 2s2.5-2 6-2c5.5 0 10 4.5 10 10 0 11.5-16 21-16 21z"
            fill="none"
            stroke="#000"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 24h6l3-6 4 12 3-6h8"
            fill="none"
            stroke="#000"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* App title */}
      <h1
        className="text-3xl font-bold mt-6 text-center px-4"
        style={{
          color: '#FFFFFF',
          letterSpacing: '0.05em',
          transition: 'opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s',
          opacity: phase !== 'enter' ? 1 : 0,
          transform: phase !== 'enter' ? 'translateY(0)' : 'translateY(12px)',
        }}
      >
        Symptoms Solution
      </h1>

      {/* Subtitle */}
      <p
        className="text-sm mt-2"
        style={{
          color: '#9CA3AF',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          transition: 'opacity 0.8s ease 0.5s, transform 0.8s ease 0.5s',
          opacity: phase !== 'enter' ? 1 : 0,
          transform: phase !== 'enter' ? 'translateY(0)' : 'translateY(12px)',
        }}
      >
        Your guide to symptom-based health
      </p>

      {/* Tagline */}
      <p
        className="text-xs mt-6"
        style={{
          color: '#00B03C',
          fontWeight: 500,
          transition: 'opacity 0.8s ease 0.8s',
          opacity: phase !== 'enter' ? 0.8 : 0,
        }}
      >
        Your health, your way
      </p>

      {/* Disclaimer */}
      <p
        className="absolute bottom-12 text-center px-8"
        style={{
          color: 'rgba(156,163,175,0.45)',
          fontSize: '0.6rem',
          lineHeight: '1.4',
          maxWidth: 340,
          transition: 'opacity 0.8s ease 1s',
          opacity: phase !== 'enter' ? 1 : 0,
        }}
      >
        This app is intended to help individuals become better informed consumers of health care. The information presented gives general advice and is not intended to treat, diagnose, prescribe, or replace any health care visit. Consult your qualified health care professional.
      </p>
    </div>
  )
}
