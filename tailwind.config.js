/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        dark: { 900: '#0a0a0a', 800: '#111111', 700: '#1a1a1a', 600: '#222222' },
        green: { 400: '#4ade80', 500: '#22c55e', 600: '#16a34a' }
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
        sans: ['"Inter"', 'system-ui', 'sans-serif']
      },
      keyframes: {
        'pulse-green': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(34, 197, 94, 0.4)' },
          '50%': { boxShadow: '0 0 20px 5px rgba(34, 197, 94, 0.15)' }
        },
        blink: {
          '0%, 100%': { borderColor: '#22c55e' },
          '50%': { borderColor: 'transparent' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        glitch: {
          '0%, 100%': { textShadow: '2px 0 #22c55e, -2px 0 #4ade80' },
          '25%': { textShadow: '-2px 0 #22c55e, 2px 0 #4ade80' },
          '50%': { textShadow: '2px 2px #22c55e, -2px -2px #4ade80' },
          '75%': { textShadow: '-2px 2px #22c55e, 2px -2px #4ade80' }
        },
        'matrix-rain': {
          '0%': { transform: 'translateY(-100%)', opacity: '1' },
          '100%': { transform: 'translateY(100vh)', opacity: '0' }
        }
      },
      animation: {
        'pulse-green': 'pulse-green 3s infinite',
        float: 'float 4s ease-in-out infinite',
        glitch: 'glitch 0.3s ease-in-out'
      }
    }
  },
  plugins: []
}
