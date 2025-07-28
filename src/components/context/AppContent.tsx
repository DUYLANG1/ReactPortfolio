import { createContext, useEffect, useState, ReactNode } from "react";

export type ThemeContextType = "light" | "dark";

interface IAppContext {
  theme: ThemeContextType;
  setTheme: (theme: ThemeContextType) => void;
}

export const AppContext = createContext<IAppContext | null>(null);

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ThemeContextType>(
    () => (localStorage.getItem("theme") as ThemeContextType) || "light"
  );

  const handleThemeChange = (newTheme: ThemeContextType) => {
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
