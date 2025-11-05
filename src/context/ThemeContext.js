import { createContext, useContext, useState, useEffect } from 'react';
import { theme } from '../styles/theme';

const ThemeContext = createContext();

const STORAGE_KEY = 'shivnem-theme-preference';

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);
  const currentTheme = isDark ? theme.dark : theme.light;

  useEffect(() => {
    // Load saved preference
    const savedPreference = localStorage.getItem(STORAGE_KEY);
    if (savedPreference) {
      setIsDark(savedPreference === 'dark');
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDark(prefersDark);
    }

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      if (!localStorage.getItem(STORAGE_KEY)) {
        setIsDark(e.matches);
      }
    };
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem(STORAGE_KEY, newTheme ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark');
  };

  // Apply theme class on initial load
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}