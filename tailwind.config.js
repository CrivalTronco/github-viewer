module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.{js,jsx,ts,tsx}', 
    './public/index.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
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
