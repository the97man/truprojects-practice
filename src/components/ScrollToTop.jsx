import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scrolls the window to the top on route change.
 * - Does NOT scroll for hash-based navigation (#section)
 * - Does NOT scroll when navigating to the home route ("/")
 */
export default function ScrollToTop() {
  const location = useLocation();
  const { pathname, hash } = location;

  useEffect(() => {
    if (hash && hash.length > 0) {
      return;
    }

    if (pathname === "/") {
      return;
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname, hash]);

  return null;
}
