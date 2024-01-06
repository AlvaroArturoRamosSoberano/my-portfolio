/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        steel: {
          50: "#f3f6fc",
          100: "#e7edf7",
          200: "#c9d9ee",
          300: "#9ab9df",
          400: "#6494cc",
          500: "#427bbd",
          600: "#2f5e9a",
          700: "#274c7d",
          800: "#244168",
          900: "#223858",
          950: "#17243a"
        },
        white: {
          50: "#ffffff",
          100: "#efefef",
          200: "#dcdcdc",
          300: "#bdbdbd",
          400: "#989898",
          500: "#7c7c7c",
          600: "#656565",
          700: "#525252",
          800: "#464646",
          900: "#3d3d3d",
          950: "#292929"
        },
        cornflower: {
          50: "#f2f5fc",
          100: "#e1eaf8",
          200: "#c9daf4",
          300: "#a5c2eb",
          400: "#7aa2e0",
          500: "#678cda",
          600: "#4667ca",
          700: "#3c56b9",
          800: "#364797",
          900: "#303f78",
          950: "#21284a"
        },
        shark: {
          50: "#f6f7f9",
          100: "#ededf1",
          200: "#d7d9e0",
          300: "#b3b7c6",
          400: "#8a90a6",
          500: "#6c738b",
          600: "#565c73",
          700: "#474b5d",
          800: "#3d414f",
          900: "#363944",
          950: "#1b1c22"
        }
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"]
      }
    }
  },
  plugins: []
};
