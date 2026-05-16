/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary:        '#78427F',
        'primary-light':'#9A5BAA',
        'primary-dark': '#5A2E66',
        secondary:      '#CDA540',
        'secondary-light':'#DFB855',
        'secondary-dark':'#B08A28',
        cream:          '#F2EDE5',
        'cream-mid':    '#E8DDD0',
        violet:         '#2D1535',
      },
      fontFamily: {
        heading: ['Georgia', 'Times New Roman', 'serif'],
        body:    ['"Segoe UI"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      animation: {
        'fade-up':    'fadeUp 0.6s ease forwards',
        'fade-in':    'fadeIn 0.5s ease forwards',
        'pulse-slow': 'pulseSlow 3s ease-in-out infinite',
        'float':      'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp:    { from: { opacity: 0, transform: 'translateY(24px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
        fadeIn:    { from: { opacity: 0 }, to: { opacity: 1 } },
        pulseSlow: { '0%,100%': { opacity: 1 }, '50%': { opacity: 0.6 } },
        float:     { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-8px)' } },
      },
      boxShadow: {
        'card':  '0 4px 24px rgba(120,66,127,0.10)',
        'hover': '0 12px 40px rgba(120,66,127,0.18)',
        'gold':  '0 4px 20px rgba(205,165,64,0.25)',
      },
    },
  },
  plugins: [],
}
