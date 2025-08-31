import { createContext, useEffect, useState, ReactNode } from "react";
import { Theme } from "@/types/global";

interface AppContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const AppContext = createContext<AppContextType | null>(null);

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem("theme") as Theme) || "light"
  );

  const handleThemeChange = (newTheme: Theme) => {
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-bs-theme", newTheme);
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);
  }, [theme]);

  return (
    <AppContext.Provider value={{ theme, setTheme: handleThemeChange }}>
      {children}
    </AppContext.Provider>
  );
};
