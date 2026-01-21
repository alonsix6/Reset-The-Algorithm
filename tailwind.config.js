/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // FitZone Brand Colors - Royal Purple (Premium & Elegant)
        fitzone: {
          // Primarios - Violeta vibrante
          purple: '#7C3AED',        // Violeta principal (premium, energía)
          darkPurple: '#5B21B6',    // Violeta hover/oscuro
          lightPurple: '#A78BFA',   // Violeta claro (acentos)

          // Secundarios - Oscuros (fondos premium)
          charcoal: '#0F0A1A',      // Negro-morado (fondo principal)
          slate: '#1A1432',         // Slate morado (cards)
          darkSlate: '#0A0612',     // Más oscuro (contraste)

          // Acentos tech/datos
          cyan: '#06B6D4',          // Cyan (datos, tech)
          electric: '#22D3EE',      // Cyan brillante (gráficos)

          // Éxito/Positivo
          emerald: '#10B981',       // Esmeralda (éxito, crecimiento)
          green: '#22C55E',         // Verde (positivo)

          // Alerta/Negativo
          red: '#EF4444',           // Rojo (alerta)
          amber: '#F59E0B',         // Ámbar (advertencia)

          // Neutros
          white: '#FFFFFF',
          lightGray: '#F5F5F7',
          textGray: '#9CA3AF',
          mediumGray: '#6B7280',
        },
        // Semantic colors
        success: '#10B981',         // Esmeralda FitZone para éxito
        warning: '#F59E0B',         // Ámbar
        error: '#EF4444',           // Rojo
        info: '#06B6D4',            // Cyan
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
        display: ['Inter', 'Helvetica Neue', 'sans-serif'],
      },
      backgroundImage: {
        // Gradientes FitZone Royal Purple
        'gradient-fitzone': 'linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%)',
        'gradient-fitzone-dark': 'linear-gradient(135deg, #1A1432 0%, #0F0A1A 100%)',
        'gradient-fitzone-energy': 'linear-gradient(135deg, #7C3AED 0%, #10B981 100%)',
        'gradient-fitzone-tech': 'linear-gradient(135deg, #06B6D4 0%, #22D3EE 100%)',
        'gradient-fitzone-premium': 'linear-gradient(135deg, #0F0A1A 0%, #1A1432 50%, #7C3AED 100%)',
        'gradient-hero': 'linear-gradient(180deg, #0F0A1A 0%, #1A1432 100%)',
      },
      boxShadow: {
        'fitzone': '0 20px 50px rgba(124, 58, 237, 0.15)',
        'fitzone-lg': '0 30px 60px rgba(124, 58, 237, 0.25)',
        'fitzone-glow': '0 0 30px rgba(124, 58, 237, 0.4)',
        'card': '0 4px 20px rgba(0, 0, 0, 0.3)',
        'card-hover': '0 8px 30px rgba(124, 58, 237, 0.2)',
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
          '0%, 100%': { boxShadow: '0 0 20px rgba(124, 58, 237, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(124, 58, 237, 0.6)' },
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
