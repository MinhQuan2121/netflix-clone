/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.{html,js}'],
  theme: {
    extend: {
      fontSize: {
        'heading-h1': '56px',
        'heading-h2': '48px',
        'heading-h3': '1.5rem',
        'body-1': '18px',
        'body-2': '16px',
        'body-3': '14px',
      },
      colors: {
        primary: 'rgb(229, 9, 20)',
        body: '#ffffff',
        darker: 'rgba(255, 255, 255, 0.7);',
      },
    },
  },
  plugins: [],
};
