"use client";

import { ColorSchemeToggle } from "./color-scheme-toggle";
import { useTheme } from "./theme-provider";

const themes = [
  { id: "default", name: "Par défaut", colors: ["#1e40af", "#7c3aed"] },
  { id: "blue", name: "Bleu", colors: ["#0ea5e9", "#3b82f6"] },
  { id: "red", name: "Rouge", colors: ["#dc2626", "#ef4444"] },
  { id: "green", name: "Vert", colors: ["#10b981", "#059669"] },
  { id: "orange", name: "Orange", colors: ["#f97316", "#ea580c"] },
  { id: "pink", name: "Rose", colors: ["#ec4899", "#db2777"] },
] as const;

interface ThemeSelectorProps {
  onThemeChange?: () => void;
}

export const ThemeSelector = ({ onThemeChange }: ThemeSelectorProps) => {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = (newTheme: (typeof themes)[number]["id"]) => {
    setTheme(newTheme);
    onThemeChange?.();
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <h4 className="text-sm font-medium text-muted-foreground">
          Mode d&apos;affichage
        </h4>
        <ColorSchemeToggle />
      </div>

      <div className="flex flex-col gap-4">
        <h4 className="text-sm font-medium text-muted-foreground">
          Couleurs du thème
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {themes.map((themeOption) => (
            <button
              key={themeOption.id}
              onClick={() => handleThemeChange(themeOption.id)}
              className={`relative p-4 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                theme === themeOption.id
                  ? "border-primary shadow-lg"
                  : "border-border hover:border-primary/50"
              }`}
            >
              <div className="flex flex-col items-center gap-3">
                <div className="flex gap-1">
                  <div
                    className="w-6 h-6 rounded-full"
                    style={{ backgroundColor: themeOption.colors[0] }}
                  />
                  <div
                    className="w-6 h-6 rounded-full"
                    style={{ backgroundColor: themeOption.colors[1] }}
                  />
                </div>
                <span className="text-sm font-medium">{themeOption.name}</span>
              </div>

              {theme === themeOption.id && (
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
