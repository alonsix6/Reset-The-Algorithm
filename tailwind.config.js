/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Honda Brand Colors - Official
        honda: {
          red: '#CC0000',        // Honda Red (color principal oficial)
          darkRed: '#A00000',    // Rojo oscuro
          black: '#000000',      // Negro (secundario)
          gray: '#54565A',       // Gris corporativo
          lightGray: '#E6E6E6',  // Gris claro
          white: '#FFFFFF',      // Blanco
          silver: '#C0C0C0',     // Plateado (tecnología)
          blue: '#0056A3',       // Azul (tecnología/híbrido)
        },
        // Semantic colors
        success: '#0056A3',      // Azul Honda para éxito
        warning: '#F59E0B',
        error: '#CC0000',        // Rojo Honda
        info: '#54565A',         // Gris Honda
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
        display: ['Inter', 'Helvetica Neue', 'sans-serif'],
      },
      backgroundImage: {
        // Gradientes Honda
        'gradient-honda': 'linear-gradient(135deg, #CC0000 0%, #000000 100%)',
        'gradient-honda-light': 'linear-gradient(135deg, #FFFFFF 0%, #E6E6E6 100%)',
        'gradient-hybrid': 'linear-gradient(135deg, #0056A3 0%, #54565A 100%)',
      },
      boxShadow: {
        'honda': '0 20px 50px rgba(204, 0, 0, 0.15)',
        'honda-lg': '0 30px 60px rgba(204, 0, 0, 0.25)',
        'hybrid': '0 15px 40px rgba(0, 86, 163, 0.20)',
      },
      animation: {
        'fadeIn': 'fadeIn 0.5s ease-in-out',
        'slideIn': 'slideIn 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-10px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
