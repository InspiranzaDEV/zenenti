/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#3B53A1",
        secondary: "#F28A47",
        tertiary: "#000",
        disabled: "#444444",
        bgMain: "#FFF",
      },
      fontFamily: {
        "alegra-medium": ["AlegreyaSans-Medium"],
        "alegra-regular": ["AlegreyaSans-Regular"],
        "alegra-bold": ["AlegreyaSans-Bold"],
      },
    },
  },
  plugins: [],
};
