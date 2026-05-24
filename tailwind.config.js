export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      colors: {
        'primary': '#2B1B3D',
        'accent': '#8A4FFF',
        'light': '#FAF8FF',
        'pastel-lavender': '#DCC6FF',
        'pastel-pink': '#FFD6E8',
        'pastel-blue': '#D6F0FF',
        'pastel-green': '#D8F3DC',
        'pastel-peach': '#FFE5B4',
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'pastel': '0 10px 30px -5px rgba(138, 79, 255, 0.15)',
        'pastel-blue-glow': '0 10px 30px -5px rgba(214, 240, 255, 0.5)',
        'pastel-pink-glow': '0 10px 30px -5px rgba(255, 214, 232, 0.5)',
        'pastel-lavender-glow': '0 10px 30px -5px rgba(220, 198, 255, 0.5)',
      }
    },
  },
  plugins: [],
}
