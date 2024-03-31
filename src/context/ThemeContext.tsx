'use client';
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

const defaultContextValue = {
  theme: 'light', // Default theme
  toggleTheme: () => {} // Placeholder function
};

const ThemeContext = createContext(defaultContextValue);

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  // This effect runs when the component mounts and whenever the theme changes.
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    storedTheme && setTheme(storedTheme);
  }, []);

  // Apply the theme as a data attribute on the HTML element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};
