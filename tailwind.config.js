/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.{html,js}'],
  theme: {
    extend: {
      fontSize: {
        'heading-h1': '56px',
        'heading-h2': '48px',
        'heading-h3': '24px',
        'body-1': '18px',
        'body-2': '16px',
        'body-3': '14px',
      },
      colors: {
        primary: '#5E3BEE',
        heading: '#282938',
        dribble: '#E62872',
        body: '#1C1E53',
      },
    },
  },
  plugins: [],
};
