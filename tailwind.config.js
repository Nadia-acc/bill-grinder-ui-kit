#### `tailwind.config.js`
```js
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF",
        secondary: "#E0E7FF",
        destructive: "#DC2626",
        background: "#F9FAFB",
        surface: "#FFFFFF"
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"]
      }
    },
  },
  plugins: [],
};
