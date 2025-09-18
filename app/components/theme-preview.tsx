"use client";

import { useTheme } from "./theme-provider";

export const ThemePreview = () => {
  const { theme, colorScheme } = useTheme();

  const themeNames = {
    default: "Par défaut",
    blue: "Bleu",
    red: "Rouge",
    green: "Vert",
    orange: "Orange",
    pink: "Rose",
  };

  return (
    <div className="flex items-center gap-4 text-sm text-muted-foreground">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-primary"></div>
        <span>Thème: {themeNames[theme as keyof typeof themeNames]}</span>
      </div>
      <div className="flex items-center gap-2">
        {colorScheme === "dark" ? (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        ) : (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        )}
        <span>Mode: {colorScheme === "dark" ? "Sombre" : "Clair"}</span>
      </div>
    </div>
  );
};
