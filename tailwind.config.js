module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.{js,jsx,ts,tsx}', 
    './public/index.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      height: {
        'px70': '70px',
        'cph': 'calc(100vh - 70px)',
        'uch': 'calc(100vh - 149px)',
      },
      width: {
        'px60': '60px',
      },
      inset: {
        '70': '70px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
