/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#2e3192',
          'blue-hover': '#1e2270',
          'blue-light': '#3b3fa8',
          'blue-subtle': '#eef1fd',
          orange: '#ea4800',
          'orange-hover': '#d03f00',
          'orange-light': '#fff3ec',
          dark: '#0a2540',
          body: '#425466',
        },
        clyptus: {
          blue: '#2e3192',
          'blue-hover': '#1e2270',
          orange: '#ea4800',
          'orange-hover': '#d03f00',
        },
        stripe: {
          blurple: '#2e3192',
          'blurple-hover': '#1e2270',
          dark: '#0a2540',
          night: '#051329',
          body: '#425466',
          subdued: '#627d98',
          border: 'rgba(46, 49, 146, 0.08)',
          bg: '#f8fafc',
          cyan: '#0284c7',
          coral: '#ea4800',
          amber: '#ea4800',
          emerald: '#059669',
        },
        background: '#ffffff',
        foreground: '#0a2540',
        muted: {
          DEFAULT: '#f8fafc',
          foreground: '#64748b',
        },
      },
      fontFamily: {
        sans: [
          'Plus Jakarta Sans',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif'
        ],
        mono: [
          'JetBrains Mono',
          'monospace'
        ]
      },
      boxShadow: {
        'stripe': '0 13px 27px -5px rgba(50, 50, 93, 0.1), 0 8px 16px -8px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(50, 50, 93, 0.05)',
        'stripe-hover': '0 20px 40px -8px rgba(46, 49, 146, 0.14), 0 12px 24px -10px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(46, 49, 146, 0.25)',
        'stripe-hero': '0 50px 100px -20px rgba(50, 50, 93, 0.15), 0 30px 60px -30px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(50, 50, 93, 0.06)',
      }
    },
  },
  plugins: [],
}
