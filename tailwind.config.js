/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgFirst: "#FCFCFC",
        primary: "#1D2027",
        Grey: "#CCCCCC",
        secondary: "#13C93E",
        Tertiary: "#EFF1F3",
        Text2: "#989898",
        Text3: "#47924B",
        "Text3'": "#32BE4B",
        white: "#FFFFFF",
        bg2: "var(--Bg2, #494B4E)",
        bg2End: "var(--Bg2End, #1D2027)",
      },
      screens: {
        s: { max: "639px" },
        // => @media (max-width: 639px) { ... }
        m: { min: "640px", max: "768px" },
        // => @media (max-width: 639px) { ... }
        md: { min: "769px" },
        // => @media (max-width: 639px) { ... }
        ss: { min: "320px", max: "418px" },
        // => @media (max-width: 639px) { ... }
      },
    },
  },
  variants: {},
  plugins: [],
};
