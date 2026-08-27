/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        iron: '#23262B',
        ironLight: '#2F333A',
        manila: '#F1EAD9',
        manilaDark: '#E3D8BE',
        brass: '#C08A3E',
        brassLight: '#D8A559',
        rust: '#A63D2F',
        denim: '#3E5C69',
        ink: '#1B1B18',
      },
      fontFamily: {
        stencil: ['var(--font-stencil)'],
        body: ['var(--font-body)'],
        mono: ['var(--font-mono)'],
      },
      backgroundImage: {
        grain: "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.06) 1px, transparent 0)",
      },
    },
  },
  plugins: [],
};
