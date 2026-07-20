import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="header">
        <div className="logo">
          <img src="/images/logo3.png" alt="logo" />
        </div>

        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="line long"></span>
          <span className="line short"></span>
        </div>
      </header>

      <div className={`overlay ${menuOpen ? "show" : ""}`}>
        <nav className="overlay-menu">
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
      </div>
    </>
  );
}
