import React, { createContext, useContext, useState, ReactNode } from 'react';
import LightTheme from './lightTheme';
import DarkTheme from './darkTheme';
import { Theme } from './types';

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

// Initial default context value
const ThemeContext = createContext<ThemeContextProps>({
  theme: LightTheme,
  toggleTheme: () => {},
});

// ThemeProvider to wrap your app
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(LightTheme);

  const toggleTheme = () => {
    setTheme(prev => (prev.mode === 'light' ? DarkTheme : LightTheme));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook to use the theme in any component
export const useTheme = () => useContext(ThemeContext);
