/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // FitZone Brand Colors - Energetic & Vibrant
        fitzone: {
          // Primarios - Naranja energético
          orange: '#FF6B35',        // Naranja principal (energía, acción)
          darkOrange: '#E85A24',    // Naranja hover/oscuro
          lightOrange: '#FF8F5C',   // Naranja claro (acentos)

          // Secundarios - Oscuros (fondos premium)
          charcoal: '#1A1A2E',      // Casi negro (fondo principal)
          slate: '#2D2D44',         // Gris oscuro (cards)
          darkSlate: '#16162A',     // Más oscuro (contraste)

          // Acentos tech/datos
          electric: '#00D4FF',      // Azul eléctrico (datos, tech)
          cyan: '#00B4D8',          // Cyan (gráficos)

          // Éxito/Positivo
          lime: '#B8FF00',          // Lima neón (éxito, crecimiento)
          green: '#22C55E',         // Verde (positivo)

          // Alerta/Negativo
          red: '#EF4444',           // Rojo (alerta)

          // Neutros
          white: '#FFFFFF',
          lightGray: '#F5F5F7',
          textGray: '#9CA3AF',
          mediumGray: '#6B7280',
        },
        // Semantic colors
        success: '#B8FF00',         // Lima FitZone para éxito
        warning: '#FF6B35',         // Naranja FitZone
        error: '#EF4444',           // Rojo
        info: '#00D4FF',            // Azul eléctrico
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
        display: ['Inter', 'Helvetica Neue', 'sans-serif'],
      },
      backgroundImage: {
        // Gradientes FitZone
        'gradient-fitzone': 'linear-gradient(135deg, #FF6B35 0%, #E85A24 100%)',
        'gradient-fitzone-dark': 'linear-gradient(135deg, #2D2D44 0%, #1A1A2E 100%)',
        'gradient-fitzone-energy': 'linear-gradient(135deg, #FF6B35 0%, #B8FF00 100%)',
        'gradient-fitzone-tech': 'linear-gradient(135deg, #00D4FF 0%, #00B4D8 100%)',
        'gradient-fitzone-premium': 'linear-gradient(135deg, #1A1A2E 0%, #2D2D44 50%, #FF6B35 100%)',
        'gradient-hero': 'linear-gradient(180deg, #1A1A2E 0%, #2D2D44 100%)',
      },
      boxShadow: {
        'fitzone': '0 20px 50px rgba(255, 107, 53, 0.15)',
        'fitzone-lg': '0 30px 60px rgba(255, 107, 53, 0.25)',
        'fitzone-glow': '0 0 30px rgba(255, 107, 53, 0.4)',
        'card': '0 4px 20px rgba(0, 0, 0, 0.3)',
        'card-hover': '0 8px 30px rgba(255, 107, 53, 0.2)',
      },
      animation: {
        'fadeIn': 'fadeIn 0.5s ease-in-out',
        'slideIn': 'slideIn 0.4s ease-out',
        'slideUp': 'slideUp 0.5s ease-out',
        'pulse-glow': 'pulseGlow 2s infinite',
        'bounce-subtle': 'bounceSubtle 2s infinite',
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
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 107, 53, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(255, 107, 53, 0.6)' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
    },
  },
  plugins: [],
}
