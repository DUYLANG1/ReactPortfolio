import { useContext } from "react";
import { AppContext } from "./AppContent";

export const useCurrentApp = () => {
  const context = useContext(AppContext);
  if (!context)
    throw new Error("useCurrentApp must be used within AppContextProvider");
  return context;
};
