const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "ananda-orange": "#FF6600",
        "ananda-yellow": "#FFD700",
        "ananda-blue": "#0077FF",
      },
      textShadow: {
        glow: "0 0 5px rgba(255, 255, 255, 0.7), 0 0 10px rgba(255, 255, 255, 0.5)",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        serif: ["Merriweather", "serif"],
        heading: ["Montserrat", "sans-serif"],
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.8s ease-out",
        float: "float 3s ease-in-out infinite",
        breathe: "breathe 4s ease-in-out infinite",
        ripple: "ripple 0.7s linear",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        breathe: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
        ripple: {
          "0%": { transform: "scale(0)", opacity: "1" },
          "100%": { transform: "scale(4)", opacity: "0" },
        },
        typewriter: {
          to: { width: "100%" },
        },
        blink: {
          "50%": { "border-color": "transparent" },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-textshadow"),
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".parallax": {
          "background-attachment": "fixed",
          "background-position": "center",
          "background-repeat": "no-repeat",
          "background-size": "cover",
        },
        ".clip-path-blob": {
          "clip-path":
            "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};
