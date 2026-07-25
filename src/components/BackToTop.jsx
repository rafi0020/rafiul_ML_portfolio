import { useEffect, useState } from "react";
import Icon from "./Icon";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // rAF-throttled + passive so the listener never blocks scrolling.
    let frame = null;
    const onScroll = () => {
      if (frame !== null) return;
      frame = requestAnimationFrame(() => {
        setIsVisible(window.scrollY > 300);
        frame = null;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, []);

  const scrollToTop = () => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
    // Send focus somewhere sensible instead of leaving it on a vanishing button.
    document.getElementById("main-content")?.focus({ preventScroll: true });
  };

  if (!isVisible) return null;

  return (
    <button type="button" onClick={scrollToTop} className="back-to-top-btn" aria-label="Back to top">
      <Icon name="arrowUp" size={20} />
    </button>
  );
}
