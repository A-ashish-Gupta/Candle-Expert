import { useEffect } from "react";

/**
 * Observes all `.reveal` elements and adds `.is-visible` when they
 * scroll into view. Falls back to immediate visibility if the browser
 * doesn't support IntersectionObserver or the user prefers reduced motion.
 */
const useRevealObserver = () => {
  useEffect(() => {
    const revealItems = document.querySelectorAll(".reveal");

    // Fallback: skip animation for accessibility / older browsers
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!("IntersectionObserver" in window) || prefersReducedMotion) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return; // no observer created → no cleanup needed
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target); // stop watching once visible
          }
        });
      },
      { threshold: 0.12 }
    );

    revealItems.forEach((item) => observer.observe(item));

    // Cleanup: disconnect observer when component unmounts
    return () => observer.disconnect();
  }, []); // [] → run only once after initial render
};

export default useRevealObserver;
