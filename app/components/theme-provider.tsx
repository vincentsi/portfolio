"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "default" | "blue" | "red" | "green" | "orange" | "pink";
type ColorScheme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  colorScheme: ColorScheme;
  setColorScheme: (scheme: ColorScheme) => void;
  toggleColorScheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("default");
  const [colorScheme, setColorScheme] = useState<ColorScheme>("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme") as Theme;
    const savedColorScheme = localStorage.getItem(
      "portfolio-color-scheme"
    ) as ColorScheme;

    if (savedTheme) {
      setTheme(savedTheme);
    }
    if (savedColorScheme) {
      setColorScheme(savedColorScheme);
    } else {
      // Détecter la préférence système
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setColorScheme(prefersDark ? "dark" : "light");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("portfolio-theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("portfolio-color-scheme", colorScheme);
    document.documentElement.setAttribute("data-color-scheme", colorScheme);
  }, [colorScheme]);

  const toggleColorScheme = () => {
    setColorScheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        colorScheme,
        setColorScheme,
        toggleColorScheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
