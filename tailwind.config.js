/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'neon-pink': '#FF0099',
        'neon-cyan': '#00FFE0',
        'neon-purple': '#7000FF',
      },
      animation: {
        'glitch': 'glitch 1s linear infinite',
        'scan': 'scan 3s linear infinite',
        'border-rotate': 'borderRotate 4s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '33%': { transform: 'translate(5px, -5px)' },
          '66%': { transform: 'translate(-5px, 5px)' },
        },
        scan: {
          '0%': { backgroundPosition: '0% -100%' },
          '100%': { backgroundPosition: '0% 100%' },
        },
        borderRotate: {
          '100%': { transform: 'rotate(360deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backgroundImage: {
        'cyber-gradient': 'linear-gradient(90deg, var(--neon-pink), var(--neon-cyan))',
      },
    },
  },
  plugins: [],
};