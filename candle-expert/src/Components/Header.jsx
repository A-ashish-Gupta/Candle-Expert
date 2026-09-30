import { useEffect, useRef } from "react";

import Logo from "./logo";
const Header = () => {
  const menuButtonRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    const menuButton = menuButtonRef.current;
    const nav = navRef.current;

    if (!menuButton || !nav) return;

    const handleMenuClick = () => {
      const open = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!open));
      menuButton.setAttribute(
        "aria-label",
        open ? "Open navigation" : "Close navigation"
      );
      nav.classList.toggle("is-open", !open);
    };

    const handleNavLinkClick = () => {
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation");
      nav.classList.remove("is-open");
    };

    menuButton.addEventListener("click", handleMenuClick);

    const links = nav.querySelectorAll("a");
    links.forEach((link) => link.addEventListener("click", handleNavLinkClick));

    // Cleanup on unmount
    return () => {
      menuButton.removeEventListener("click", handleMenuClick);
      links.forEach((link) =>
        link.removeEventListener("click", handleNavLinkClick)
      );
    };
  }, []);

  return (
    <header className="site-header">
      <Logo />

      <button
        ref={menuButtonRef}
        className="menu-toggle"
        aria-label="Open navigation"
        aria-expanded="false"
        aria-controls="primary-nav"
      >
        <span></span>
        <span></span>
      </button>
      
      <nav
        ref={navRef}
        id="primary-nav"
        className="primary-nav"
        aria-label="Main navigation"
      >
        <a href="#about">About</a>
        <a href="#training">Training</a>
        <a href="#markets">Markets</a>
        <a href="#videos">Videos</a>
        <a href="#approach">Our approach</a>
        <a className="nav-cta" href="#contact">
          Let's talk <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  );
};

export default Header;
