module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  mode: 'jit',
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Rubik', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        display: ['Oswald'],
        hand: ['Mr De Haviland', 'cursive'],
        icon: ['Material Icons Round'],
      },
      colors: {
        primary: {
          DEFAULT: '#AF1AFF',
          50: '#EFD1FF',
          100: '#E8BDFF',
          200: '#DA94FF',
          300: '#CB6BFF',
          400: '#BD42FF',
          500: '#AF1AFF',
          600: '#9800EB',
          700: '#7B00BD',
          800: '#5D008F',
          900: '#3F0061',
        },
        secundary: {
          DEFAULT: '#2948C7',
          50: '#CAD3F4',
          100: '#B7C2F0',
          200: '#91A2E8',
          300: '#6B82E1',
          400: '#4562D9',
          500: '#2948C7',
          600: '#1D3490',
          700: '#122059',
          800: '#070C22',
          900: '#000000',
        },
        sys: {
          bluelight: 'rgb(0, 122, 255)',
          bluedark: 'rgb(10, 132, 255)',
          cyanlight: 'rgb(50, 173, 230)',
          cyandark: 'rgb(100, 210, 255)',
        },
        linkedin: {
          DEFAULT: '#0077b5',
        },
        twitter: {
          DEFAULT: '#1da1f2',
        },
        pintrest: {
          DEFAULT: '#bd081c',
        },
        facebook: {
          DEFAULT: '#3b5998',
        },
        youtube: {
          DEFAULT: '#ff0000',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
