/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // colors: {
      //   customBeige: "#E5CDAA",
      // },
      // aspectRatio: {
      //   golden: "1.618", // 黄金比のカスタムクラス
      // },
    },
  },
  plugins: [],
};
