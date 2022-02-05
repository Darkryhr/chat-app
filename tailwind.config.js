module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        charcoal: {
          50: '#464747',
          100: '#3c3d3d',
          200: '#323333',
          300: '#282929',
          400: '#1e1f1f',
          500: '#141515',
          600: '#0a0b0b',
          700: '#000101',
          800: '#000000',
        },
        gray: {
          50: '#ECEDEE',
          100: '#DCDDDE',
          200: '#B9BBBE',
          300: '#8E9297',
          400: '#72767D',
          500: '#5C6067',
          600: '#464950',
          700: '#36393F',
          800: '#2F3136',
          900: '#202225',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
