/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // T-Rooms Custom Colors
        obsidian: '#0a0a0b',
        charcoal: '#111114',
        graphite: '#1a1a20',
        steel: '#252530',
        'muted-border': '#3a3a45',
        silver: '#6e6e80',
        ash: '#9a9aaa',
        fog: '#c8c8d4',
        'white-primary': '#f5f5fa',
        gold: '#b8922a',
        'gold-light': '#d4a843',
        'gold-dim': 'rgba(184, 146, 42, 0.12)',
        teal: '#22938f',
      },
      borderRadius: {
        xl: "0px",
        lg: "0px",
        md: "0px",
        sm: "0px",
        xs: "0px",
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        body: ['Barlow', 'sans-serif'],
        condensed: ['Barlow Condensed', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(3.5rem, 7vw, 6.5rem)', { lineHeight: '1.05', fontWeight: '300' }],
        'h1': ['clamp(2.2rem, 4.5vw, 3.8rem)', { lineHeight: '1.1', fontWeight: '300' }],
        'h2': ['clamp(1.8rem, 3.5vw, 2.8rem)', { lineHeight: '1.15', fontWeight: '300' }],
        'h3': ['clamp(1.4rem, 2.5vw, 2rem)', { lineHeight: '1.2', fontWeight: '400' }],
        'body-lg': ['1.05rem', { lineHeight: '1.8' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.85rem', { lineHeight: '1.7' }],
        'label': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.2em' }],
        'label-sm': ['0.65rem', { lineHeight: '1.4', letterSpacing: '0.25em' }],
      },
      spacing: {
        'section': '7rem',
        'section-mobile': '5rem',
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
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "line-pulse": {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        "accordion-up": "accordion-up 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        "fade-up": "fade-up 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "line-pulse": "line-pulse 2s ease-in-out infinite",
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
