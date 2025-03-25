import { useCallback } from "react";

interface ScrollOptions {
  behavior?: ScrollBehavior;
  block?: ScrollLogicalPosition;
  inline?: ScrollLogicalPosition;
}

export function useScrollToElement() {
  return useCallback(
    (elementRef: React.RefObject<HTMLElement>, options?: ScrollOptions) => {
      if (!elementRef.current) return;

      elementRef.current.scrollIntoView({
        behavior: options?.behavior || "smooth",
        block: options?.block || "start",
        inline: options?.inline || "nearest",
      });
    },
    []
  );
}
