/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    `components/**/*.{vue,js,ts}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `composables/**/*.{js,ts}`,
    `plugins/**/*.{js,ts}`,
    `utils/**/*.{js,ts}`,
    `App.{js,ts,vue}`,
    `app.{js,ts,vue}`,
    `Error.{js,ts,vue}`,
    `error.{js,ts,vue}`
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        lg: '1.25rem'
      }
    },
    extend: {
      maxWidth: {
        '8xl': '90rem', // 1440px
      },
      fontFamily: {
        byekan: ['Byekan', 'sans-serif'], // Add Byekan family here
      },
      screens: {
        sm: '700px', // Ensure this exists (default Tailwind value)
      },
      fontSize: {
        '2.5xl': '1.625rem', // Adjust this value as per your design spec
      },
      colors: {
        primary: {
          DEFAULT: '#314f81',
          50: '#f4f6fb',
          100: '#e8ecf6',
          200: '#ccd8eb',
          300: '#9fb7da',
          400: '#6b91c5',
          500: '#4873af',
          600: '#375a92',
          700: '#314f81',
          750: '#313A48',
          800: '#293f63',
          900: '#263754',
          950: '#192438'
        },
        secondary: {
          DEFAULT: '#2e91b4',
          50: '#f0fafb',
          100: '#d8f0f5',
          200: '#b5e0ec',
          300: '#82c8de',
          400: '#48a8c8',
          500: '#2e91b4',
          600: '#287292',
          700: '#265d78',
          800: '#274e63',
          900: '#244155',
          950: '#132a39'
        },
        tertiary: {
          DEFAULT: '#bb133e',
          50: '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd4',
          300: '#fca5b0',
          400: '#fa7288',
          500: '#f34061',
          600: '#e01e4b',
          700: '#bb133e',
          800: '#9e133b',
          900: '#871438',
          950: '#4c051a'
        },
        panel:{
          500:'#03315D',
          800:'#002547',
          100:'#2887E033',
          50:'#2887E01A',
        },
        panelGreen:{
          500:'#27A89624',
        },
        panelRed:{
          500:'#FF79261F',
        },
        themeGreen:{
          500:'#27A896'
        },

        theme300: 'var(--color-300)',
        mainColor: 'var(--color-800)',
        bgSend: 'var(--bg-send)',
        bgReceive: 'var(--bg-receive)',
        bg: 'var(--bg-color)',
        bgChat: 'var(--bg-chat-color)',
        text: 'var(--text-color)',
      }
    }
  },
  variants: {
    extend: {
      backgroundColor: ['dark'], // Ensure that dark is included
    },
  },
  plugins: []
}



