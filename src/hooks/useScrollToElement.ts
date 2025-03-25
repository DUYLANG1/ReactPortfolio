import { useCallback } from "react";

export function useScrollToElement() {
  return useCallback((elementRef: React.RefObject<HTMLElement>) => {
    elementRef.current?.scrollIntoView({
      behavior: "smooth",
      inline: "end",
    });
  }, []);
}
