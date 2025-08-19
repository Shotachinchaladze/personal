/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        sm: "100%",
        md: "100%",
        lg: "100%",
        xl: "1440px",
      },
    },

    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "810px",
      // => @media (min-width: 810px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1440px",
      // => @media (min-width: 1440px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        current: "currentColor",
        transparent: "transparent",
        white: "#FFFFFF",
        black: "#1e1e1e",
        dark: "#1e1e1e",
        primary: "#8bdb00",
        "primary-dark": "#7bc500",
        secondary: "#1e1e1e",
        accent: {
          blue: "#5664db",
          yellow: "#edde16",
          green: "#8bdb00",
        },
        "bg-light": "#f4f3ee",
        "bg-section": "#ebe9e4",
        "bg-color-dark": "#1e1e1e",
        "body-color": {
          DEFAULT: "#2e2e2e",
          dark: "#e0e0e0",
        },
        stroke: {
          stroke: "#e0e0e0",
          dark: "#2a2a2a",
        },
        gray: {
          ...colors.gray,
          50: "#fafafa",
          100: "#f4f4f4",
          200: "#e0e0e0",
          300: "#d0d0d0",
          400: "#b0b0b0",
          500: "#808080",
          600: "#606060",
          700: "#404040",
          800: "#2e2e2e",
          900: "#1e1e1e",
        },
        lime: {
          50: "#f7ffe5",
          100: "#ebffb3",
          200: "#dfff80",
          300: "#d3ff4d",
          400: "#c7ff1a",
          500: "#8bdb00",
          600: "#7bc500",
          700: "#6aa800",
          800: "#598c00",
          900: "#476f00",
        },
        navy: {
          50: "#e6e8ff",
          100: "#b3baff",
          200: "#808cff",
          300: "#6673ff",
          400: "#5664db",
          500: "#4655c7",
          600: "#3646b3",
          700: "#26379f",
          800: "#16288b",
          900: "#061977",
        },
      },

      boxShadow: {
        'xs': "0px 1px 2px rgba(0, 0, 0, 0.05)",
        'sm': "0px 2px 4px rgba(0, 0, 0, 0.06)",
        'md': "0px 4px 6px rgba(0, 0, 0, 0.07)",
        'lg': "0px 10px 15px rgba(0, 0, 0, 0.1)",
        'xl': "0px 20px 25px rgba(0, 0, 0, 0.1)",
        '2xl': "0px 25px 50px rgba(0, 0, 0, 0.12)",
        'subtle': "0px 2px 8px rgba(30, 30, 30, 0.04)",
        'card': "0px 4px 12px rgba(30, 30, 30, 0.08)",
        'card-hover': "0px 8px 24px rgba(30, 30, 30, 0.12)",
        'sticky': "inset 0 -1px 0 0 rgba(30, 30, 30, 0.1)",
        'sticky-dark': "inset 0 -1px 0 0 rgba(255, 255, 255, 0.1)",
        'btn': "0px 2px 4px rgba(30, 30, 30, 0.12)",
        'btn-hover': "0px 4px 8px rgba(30, 30, 30, 0.16)",
      },
      dropShadow: {
        three: "0px 5px 15px rgba(6, 8, 15, 0.05)",
      },
      borderRadius: {
        'sm': '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '20px',
        '2xl': '24px',
        '3xl': '32px',
        '4xl': '40px',
        '5xl': '50px',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
        '42': '10.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        'fade-up': 'fadeUp 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-in': 'slideIn 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        'scale-in': 'scaleIn 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-up': 'slideUp 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce-in': 'bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(100%)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        bounceIn: {
          '0%': { transform: 'scale(0.3)', opacity: '0' },
          '50%': { transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      fontFamily: {
        'sans': ['"Fedra Sans GeL Variable"', '"Helvetica Neue LT GEO"', 'Inter', 'system-ui', 'sans-serif'],
        'display': ['"Helvetica Neue LT GEO"', '"Fedra Sans GeL Variable"', 'Inter', 'system-ui', 'sans-serif'],
        'georgian': ['"Fedra Sans GeL Variable"', '"BPG Arial"', '"DejaVu Sans"', 'system-ui', 'sans-serif'],
        'georgian-display': ['"Helvetica Neue LT GEO"', '"BPG Nino Mtavruli"', '"DejaVu Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};