/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: [
    "./app/components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./app/pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app/app.vue",
    "./error.vue",
  ],
  theme: {
    screens: {
      xs: "425px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1024px",
      "2xl": "1200px",
      "3xl": "1500px",
      "4xl": "1700px",
    },
    container: {
      center: true,
      padding: "1.5rem",
    },
    fontFamily: {
      sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      display: ["Archia", "sans-serif"],
    },
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: "#5EAF90",
        body: "#f2f2f2",
        "light-green": "#BED8AC",
        yellow: "#F9F6BD",
        white: "#ffffff",
        black: "#000000",
        pink: "#FF7A87",
        "error-red": "#dc3545",
        "success-green": "#198754",
        "light-gray": "#F4F4F4",
        "gray-placeholder": "#A9A9A9",
      },
      animation: {
        "spin-chat": "spin 8s linear reverse infinite",
        "fade-in-out": "fadeInOut 4s ease-in-out infinite",
        "fade-in-out-brusque": "fadeInOutBrusque 4s ease-in-out infinite",
        "slide-down": "slideDown 0.3s ease-in-out forwards",
        "slide-up": "slideUp 0.3s ease-in-out forwards",
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
        bannermove: "bannermove 40s linear infinite",
        cta1: "ctaOn 8s forwards 3s infinite",
        cta2: "ctaOff 8s forwards 3s infinite",
        "sticky-pulse": "stickyPulse 4s forwards infinite",
        zoomCta: "zoomCta 1s linear",
      },
      keyframes: {
        fadeInOut: {
          "0%, 100%": { opacity: "0" },
          "50%": { opacity: "1" },
        },
        fadeInOutBrusque: {
          "0%, 20%": { opacity: "0" },
          "21%, 80%": { opacity: "1" },
          "81%, 100%": { opacity: "0" },
        },
        slideDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0%)" },
        },
        slideUp: {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(-100%)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        bannermove: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-3300px)" },
        },
        ctaOn: {
          "0%": { opacity: "1" },
          "10%": { opacity: "0" },
          "60%": { opacity: "0" },
          "70%": { opacity: "1" },
          "100%": { opacity: "1" },
        },
        ctaOff: {
          "0%": { opacity: "0" },
          "10%": { opacity: "1" },
          "60%": { opacity: "1" },
          "70%": { opacity: "0" },
          "100%": { opacity: "0" },
        },
        stickyPulse: {
          "10%": { transform: "scale(1)" },
          "20%": { transform: "scale(1.05)" },
          "30%": { transform: "scale(1)" },
          "100%": { transform: "scale(1)" },
        },
        zoomCta: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
          "100%": { transform: "scale(1)" },
        },
      },
      boxShadow: {
        form: "1px 5px 19px 6px rgba(0, 0, 0, 0.25)",
        card: "0px 0px 24px 0px rgba(0, 0, 0, 0.25)",
      },
    },
  },
};
