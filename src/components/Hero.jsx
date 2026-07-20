import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const heroRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  // fade-in on mount (replaces window "load" listener)
  useEffect(() => {
    setLoaded(true);
  }, []);

  // track mouse position for the CSS custom properties (--x / --y)
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const handleMouseMove = (e) => {
      hero.style.setProperty("--x", `${e.clientX}px`);
      hero.style.setProperty("--y", `${e.clientY}px`);
    };

    hero.addEventListener("mousemove", handleMouseMove);
    return () => hero.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      className="hero"
      id="home"
      ref={heroRef}
      style={{ opacity: loaded ? 1 : 0 }}
    >
      <div className="social-sidebar">
        <a href="#"><i className="fab fa-github"></i></a>
        <a href="#"><i className="fab fa-linkedin"></i></a>
        <a href="#"><i className="fab fa-whatsapp"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <div className="sidebar-line"></div>
      </div>

      <div className="hero-content">
        <div className="bg-marquee">
          <h1 className="bg-title">FRONT END DEV</h1>
          <h1 className="bg-title">FRONT END DEV</h1>
        </div>

        <p className="greeting">
          Hello there, I'm <span>Given</span>
        </p>

        <h2 className="main-title">I build things for the Web</h2>

        <p className="subtext">
          that are appealing, brand-accurate, & user-friendly.
        </p>

        <div className="buttons">
          <a href="#" className="button primary">Download Resume</a>
          <a href="#" className="button outline">View Client Projects</a>
        </div>
      </div>

      <div className="hero-image-wrapper">
        <img src="/images/gemini-brown-tp.png" className="hero-image" alt="Given portrait" />
      </div>
    </section>
  );
}
