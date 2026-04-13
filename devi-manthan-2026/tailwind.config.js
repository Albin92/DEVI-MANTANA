/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#C0392B', light: '#E74C3C' },
        gold:    { DEFAULT: '#D4AF37', light: '#F5D76E', pale: '#FFF8DC' },
        accent:  { DEFAULT: '#8E44AD', teal: '#1ABC9C' },
        bg:      { dark: '#0A0409', card: '#110818', surface: '#1A0E24' },
        border:  { gold: 'rgba(212,175,55,0.4)' }
      },
      fontFamily: {
        cinzel: ['Cinzel Decorative', 'serif'],
        cinzelPlain: ['Cinzel', 'serif'],
        raleway: ['Raleway', 'sans-serif'],
      },
      animation: {
        'spin-slow':    'spin 8s linear infinite',
        'float-up':     'floatUp 3s ease-in-out infinite',
        'glow-pulse':   'glowPulse 2s ease-in-out infinite',
        'wave-slide':   'waveSlide 6s linear infinite',
        'fadeInUp':     'fadeInUp 0.8s ease forwards',
        'shimmer':      'shimmer 2.5s linear infinite',
      },
      keyframes: {
        floatUp:   { '0%,100%': {transform:'translateY(0)'}, '50%': {transform:'translateY(-12px)'} },
        glowPulse: { '0%,100%': {boxShadow:'0 0 15px rgba(212,175,55,0.3)'}, '50%': {boxShadow:'0 0 40px rgba(212,175,55,0.8)'} },
        waveSlide: { '0%': {transform:'translateX(0)'}, '100%': {transform:'translateX(-50%)'} },
        fadeInUp:  { from: {opacity:'0',transform:'translateY(30px)'}, to: {opacity:'1',transform:'translateY(0)'} },
        shimmer:   { '0%': {backgroundPosition:'-200% 0'}, '100%': {backgroundPosition:'200% 0'} },
      }
    },
  },
  plugins: [],
}
