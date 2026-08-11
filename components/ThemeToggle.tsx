"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light";

const STORAGE_KEY = "portfolio-theme";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") {
      return "dark";
    }

    const saved = window.localStorage.getItem(STORAGE_KEY) as Theme | null;
    return saved ?? "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  function toggleTheme() {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  }

  const label = theme === "dark" ? "Light Mode" : "Dark Mode";
  const icon = theme === "dark" ? "Day" : "Night";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="rounded-lg border border-borderline bg-panel/80 px-3 py-2 text-xs font-semibold text-textmain transition-colors duration-200 hover:border-accentsoft hover:text-accentsoft"
      aria-label={`Switch to ${label}`}
      title={`Switch to ${label}`}
    >
      {icon} - {label}
    </button>
  );
}
