import { useEffect, useRef } from "react";

const skills = [
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" },
  { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { name: "GSAP", icon: "https://raw.githubusercontent.com/gilbarbara/logos/master/logos/gsap.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Motion", icon: "https://raw.githubusercontent.com/gilbarbara/logos/master/logos/framer.svg" },
];

export default function Skills() {
  const gridRef = useRef(null);

  useEffect(() => {
    // VanillaTilt is loaded globally via the <script> tag in index.html
    if (window.VanillaTilt && gridRef.current) {
      const cards = gridRef.current.querySelectorAll(".threeD-card");
      window.VanillaTilt.init(cards, {
        max: 20,
        speed: 500,
        glare: true,
        "max-glare": 0.2,
      });
    }
  }, []);

  return (
    <section className="skills-section threeD" id="skills">
      <h2 className="section-title autoShow">
        <span>03.</span> Tech and Tools I Use
        <div className="title-line"></div>
      </h2>

      <div className="skills-grid" ref={gridRef}>
        {skills.map((skill) => (
          <div className="skill-card threeD-card autoShow" data-tilt key={skill.name}>
            <div className="shine"></div>
            <img src={skill.icon} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
