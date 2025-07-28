import {
  createContext,
  useEffect,
  useState,
  useCallback,
  ReactNode,
} from "react";
import ErrorBoundary from "components/common/ErrorBoundary";

export type ThemeContextType = "light" | "dark";

interface IAppContext {
  theme: ThemeContextType;
  setTheme: (theme: ThemeContextType) => void;
}

export const AppContext = createContext<IAppContext | null>(null);

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ThemeContextType>(() => {
    try {
      const storedTheme = localStorage.getItem("theme") as ThemeContextType;
      return storedTheme || "light";
    } catch (error) {
      console.error("Failed to access localStorage:", error);
      return "light";
    }
  });

  const handleThemeChange = useCallback((newTheme: ThemeContextType) => {
    try {
      localStorage.setItem("theme", newTheme);
      document.documentElement.setAttribute("data-bs-theme", newTheme);
      setTheme(newTheme);
    } catch (error) {
      console.error("Failed to set theme:", error);
    }
  }, []);

  useEffect(() => {
    try {
      const storedTheme = localStorage.getItem("theme") as ThemeContextType;
      if (storedTheme) {
        document.documentElement.setAttribute("data-bs-theme", storedTheme);
      }
    } catch (error) {
      console.error("Failed to access localStorage in effect:", error);
    }
  }, []);

  return (
    <ErrorBoundary>
      <AppContext.Provider
        value={{
          theme,
          setTheme: handleThemeChange,
        }}
      >
        {children}
      </AppContext.Provider>
    </ErrorBoundary>
  );
};


