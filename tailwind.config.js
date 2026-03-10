module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          red: "#E62A41",
          50: "#FEF2F5",
          100: "#FCE5EB",
          200: "#F9CBD7",
          300: "#F5A8B5",
          400: "#F08599",
          500: "#E62A41",
          600: "#CE1D31",
          700: "#A61627",
          800: "#7D101D",
          900: "#550A13",
        },
        secondary: {
          teal: "#1FA7C6",
          50: "#F0F8FB",
          100: "#E1F1F7",
          200: "#C3E3EF",
          300: "#A5D5E7",
          400: "#5FB3D5",
          500: "#1FA7C6",
          600: "#1896AE",
          700: "#117A91",
          800: "#0B5E74",
          900: "#054257",
        },
        accent: {
          green: "#4DAD7A",
          50: "#F1F8F5",
          100: "#E3F1EB",
          200: "#C7E3D7",
          300: "#ABD5C3",
          400: "#7FB9A5",
          500: "#4DAD7A",
          600: "#3D8A61",
          700: "#2E6748",
          800: "#1E442F",
          900: "#0F2216",
        },
        medical: {
          bg: "#F5FAF8",
          border: "#E0E7E4",
          text: "#1F2937",
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.05)',
        'soft-lg': '0 10px 40px rgba(0, 0, 0, 0.08)',
        'soft-xl': '0 20px 60px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'fadeIn': 'fadeIn 0.6s ease-in-out',
        'slideUp': 'slideUp 0.6s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
