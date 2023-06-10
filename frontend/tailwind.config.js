/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Poppins: "Poppins",
    },
    extend: {
      colors: {
        transparentBlack: "rgba(0,0,0,0.85)", //透明度为 0.85 的黑色，用于创建半透明的背景或文字颜色。
        sunsetOrange: "#FF4F5A", // 日落橙色
        Tangaroa: "#1A2E35",
        Gainsboro: "#E1E1E1", //一种淡灰色，用于创建背景或边框。
        greenTeal: "#22C55E", //绿蓝色
        Gray: "#6B7498", //灰色
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
