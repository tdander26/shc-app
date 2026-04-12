export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        'shc-bg': '#212122',
        'shc-card': '#1B1B1D',
        'shc-green': '#00B03C',
        'shc-green-hover': '#00CC45',
        'shc-text': '#FFFFFF',
        'shc-muted': '#9CA3AF',
        'shc-border': '#2D2D2F'
      },
      backgroundColor: {
        'shc-bg': '#212122',
        'shc-card': '#1B1B1D'
      },
      textColor: {
        'shc-text': '#FFFFFF',
        'shc-muted': '#9CA3AF'
      },
      borderColor: {
        'shc-border': '#2D2D2F'
      },
      borderRadius: {
        'shc': '12px',
        'shc-lg': '16px'
      },
      spacing: {
        'safe-top': 'max(1rem, env(safe-area-inset-top))',
        'safe-bottom': 'max(5rem, env(safe-area-inset-bottom))',
        'safe-left': 'max(1rem, env(safe-area-inset-left))',
        'safe-right': 'max(1rem, env(safe-area-inset-right))'
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in',
        'button-glow': 'buttonGlow 0.6s ease-out',
        'ripple': 'ripple 0.6s ease-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        buttonGlow: {
          '0%': { boxShadow: '0 0 0 0 rgba(0, 176, 60, 0.7)' },
          '70%': { boxShadow: '0 0 0 10px rgba(0, 176, 60, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(0, 176, 60, 0)' }
        },
        ripple: {
          '0%': { transform: 'scale(0)', opacity: '1' },
          '100%': { transform: 'scale(4)', opacity: '0' }
        }
      }
    }
  },
  plugins: []
}
