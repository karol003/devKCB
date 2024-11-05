// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'pink': '#DD007766',
      'purple': '#A80655',
      'cinza': '#FFFCFA',
      'magenta': ' #750833',
      'black': '#070101',
      'branco': ' #FFFCFA',
      'gradient-2-end': '#007ACF',
      'background-1': '#040326',
      'green': '#3CD500',
      'background-3': ' #A0C1D6',
      'white':'#EEEEEE',
      'azul': ' #18134C ',
      'azul-two':'#1D6FA3',
      'amarelou': '#F0E8E0',
      'minipinki': '#FEE8F2',


    },
    backgroundImage: {
      'azul-gradient': 'linear-gradient(180deg, #18134C 0%, #1D6FA3 60%, #FFFFFF 100%)',
    },    
    extend: {},
  },
  plugins: [],
};
