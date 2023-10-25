/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "DMSansRegular",
      },
      animation: {
        'fade': 'fade 1s linear infinite',
      },
      keyframes: {
        fade: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
      transitionProperty: {
        'height': 'height'
      }
    },
  },
  plugins: [],
};
