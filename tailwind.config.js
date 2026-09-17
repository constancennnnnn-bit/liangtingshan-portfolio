/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // 背景色
        paper: '#FAFAF7',
        paper2: '#F2F0EB',
        paper3: '#EDEAE3',
        // 文字色
        ink: '#1C1C1A',
        ink2: '#3D3D3A',
        ink3: '#6E6E6A',
        ink4: '#A0A09C',
        // 分割线
        line: '#E8E5DE',
        line2: '#D8D5CC',
        // 强调色（鼠尾草绿）
        accent: '#6B7F6E',
        accent2: '#566B59',
        accent3: '#8FA392',
        accentBg: '#EEF1EC',
        accentSoft: '#E2E8E3',
      },
      fontFamily: {
        sans: ['"Noto Sans SC"', 'system-ui', 'sans-serif'],
        serif: ['"Noto Serif SC"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'hero': ['clamp(2.75rem, 9vw, 7.5rem)', { lineHeight: '0.92', letterSpacing: '-0.045em' }],
        'display': ['clamp(2rem, 5vw, 4rem)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'section': ['clamp(1.5rem, 3vw, 2.5rem)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
      },
      animation: {
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
        'step-pulse': 'stepPulse 0.6s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        stepPulse: {
          '0%': { transform: 'scale(1)', boxShadow: '0 0 0 0 rgba(107,127,110,0.3)' },
          '50%': { transform: 'scale(1.03)', boxShadow: '0 0 0 8px rgba(107,127,110,0)' },
          '100%': { transform: 'scale(1)', boxShadow: '0 0 0 0 rgba(107,127,110,0)' },
        },
      },
    },
  },
  plugins: [],
};
