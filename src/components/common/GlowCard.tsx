import { useEffect, useRef, useCallback } from "react";
import "./GlowCard.scss";

interface GlowCardProps {
  children: React.ReactNode;
  identifier: string;
}

const GlowCard = ({ children, identifier }: GlowCardProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const updateGlow = useCallback(
    (event: PointerEvent) => {
      const container = containerRef.current;
      if (!container) return;

      const cards = container.querySelectorAll(
        `.glow-card-${identifier}`
      ) as NodeListOf<HTMLElement>;

      cards.forEach((card) => {
        const bounds = card.getBoundingClientRect();
        const proximity = 40;

        const isNear =
          event.x > bounds.left - proximity &&
          event.x < bounds.right + proximity &&
          event.y > bounds.top - proximity &&
          event.y < bounds.bottom + proximity;

        card.style.setProperty("--active", isNear ? "1" : "0");

        if (isNear) {
          const centerX = bounds.left + bounds.width * 0.5;
          const centerY = bounds.top + bounds.height * 0.5;
          let angle =
            (Math.atan2(event.y - centerY, event.x - centerX) * 180) / Math.PI;
          angle = angle < 0 ? angle + 360 : angle;
          card.style.setProperty("--start", String(angle + 90));
        }
      });
    },
    [identifier]
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Set CSS properties
    container.style.setProperty("--gap", "32");
    container.style.setProperty("--blur", "12");
    container.style.setProperty("--spread", "80");
    container.style.setProperty("--direction", "row");

    document.body.addEventListener("pointermove", updateGlow);
    return () => document.body.removeEventListener("pointermove", updateGlow);
  }, [updateGlow]);

  return (
    <div
      ref={containerRef}
      className={`glow-container-${identifier} glow-container`}
    >
      <article className={`glow-card glow-card-${identifier}`}>
        <div className="glows" />
        {children}
      </article>
    </div>
  );
};

export default GlowCard;
