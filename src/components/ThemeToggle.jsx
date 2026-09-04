import { useEffect, useState } from "react";
import { MoonStars, Sun } from "@phosphor-icons/react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => localStorage.getItem("portfolio-theme") || "dark");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const nextTheme = theme === "dark" ? "light" : "dark";

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={() => setTheme(nextTheme)}
      aria-label={`Switch to ${nextTheme} theme`}
      title={`Switch to ${nextTheme} theme`}
    >
      {theme === "dark" ? <Sun size={18} weight="duotone" /> : <MoonStars size={18} weight="duotone" />}
    </button>
  );
}
