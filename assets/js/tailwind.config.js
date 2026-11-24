/**
 * Tailwind CSS Configuration for YOUR SPACE MAX
 * Implements Brand Guidelines: #003779 primary, #3b82f6 dark mode accent, IBM Plex Sans Arabic
 */
tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#003779',
          dark: '#3b82f6',
          hover: '#002855',
          surface: '#f0f5fa',
          surfaceDark: '#0f172a'
        }
      },
      fontFamily: {
        headline: ['"IBM Plex Sans Arabic"', 'sans-serif'],
        body: ['"IBM Plex Sans Arabic"', 'sans-serif'],
        accent: ['"IBM Plex Sans Arabic"', 'sans-serif'],
        latin: ['"Plus Jakarta Sans"', 'sans-serif']
      }
    }
  }
};

