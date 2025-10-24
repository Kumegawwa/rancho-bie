import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        ranch: ['"Fredoka"', 'sans-serif'],
        rustic: ['"Cabin"', 'sans-serif'],
      },
      colors: {
        // CORREÇÃO: O azul primário foi substituído por um marrom escuro (espresso/madeira).
        primary: {
          DEFAULT: "#3e2723", // Tom de café/madeira escura
          foreground: "#fdfbf7", // Tom creme (para texto sobre o marrom)
        },
        // CORREÇÃO: O fundo branco foi substituído por um creme quente.
        background: "#fdfbf7", // Tom creme/papel antigo
        foreground: "#3e2723", // Texto principal agora é o marrom escuro
        
        // CORREÇÃO: O card também usa o fundo creme.
        card: {
          DEFAULT: "#fdfbf7",
          foreground: "#3e2723",
        },

        // Cores mantidas (vermelho do logo)
        accent: {
          DEFAULT: "#dc2626",
          foreground: "#ffffff",
        },
        
        // Cores de UI (tons neutros)
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        'shadow-card': '0 2px 8px rgba(0, 0, 0, 0.05)',
        'shadow-wood': '0 4px 12px rgba(85, 57, 4, 0.2)', // Sombra "quente"
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config