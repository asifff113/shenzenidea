/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace",
        ],
      },
      colors: {
        ink: {
          50: "#f5f6f8",
          100: "#e8eaef",
          200: "#cbd1dc",
          300: "#9aa3b6",
          400: "#6b7388",
          500: "#3f465a",
          600: "#2a2f3d",
          700: "#1d212c",
          800: "#131720",
          900: "#0b0e15",
          950: "#06080d",
        },
        accent: {
          400: "#6ad7e5",
          500: "#22b3c5",
          600: "#1c92a3",
          700: "#176b78",
        },
        gold: {
          400: "#f0c46c",
          500: "#d9a441",
        },
        risk: {
          low: "#22c55e",
          mid: "#eab308",
          high: "#ef4444",
        },
      },
      boxShadow: {
        soft: "0 1px 2px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)",
        card: "0 1px 3px rgba(0,0,0,0.05), 0 8px 24px rgba(0,0,0,0.06)",
      },
    },
  },
  plugins: [],
};
