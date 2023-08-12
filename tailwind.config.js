function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName} , ${opacityValue}))`
    }
    return  `rgb(var(${variableName}))`
  }
}
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './ui/**/*.{ts,tsx}'
	],
  theme: {
    extend: {
      textColor: {
        skin: {
          base: withOpacity('--color-text'),
          'tech-used': withOpacity('--color-text-tech-used')
        },
      },

      backgroundColor: {
        skin: {
          'main-color': withOpacity('--color-bg-main'),
          'tech-used': withOpacity('--color-bg-tech-used'),
          'hover-sidebar-button': withOpacity('--color-bg-hover-sidebar-button'),
          'sidebar-color': withOpacity('--color-bg-sidebar')
        }
      }
    },
  },
}