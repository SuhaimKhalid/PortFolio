import html from "../../public/Icons/Html.png";
import css from "../../public/Icons/Css.png";
import bootstrap from "../../public/Icons/Bootstrap.png";
import javascript from "../../public/Icons/js_2.png";
import typescript from "../../public/Icons/typescript.png";
import jquery from "../../public/Icons/Jquery.png";
import reactIcon from "../../public/Icons/React.png";
import node from "../../public/Icons/Node1.png";
import express from "../../public/Icons/Express js.png";
import sql from "../../public/Icons/Postgre.png";
import git from "../../public/Icons/git.png";
import GSAP from "../../public/Icons/gsap.png";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const icons = [
  { src: html, name: "HTML" },
  { src: css, name: "CSS" },
  { src: bootstrap, name: "Bootstrap" },
  { src: GSAP, name: "GSAP" },
  { src: javascript, name: "JavaScript" },
  { src: typescript, name: "TypeScript" },
  { src: jquery, name: "jQuery" },
  { src: reactIcon, name: "React" },
  { src: node, name: "Node.js" },
  { src: express, name: "Express" },
  { src: sql, name: "PostgreSQL" },
  { src: git, name: "Git" },
];

export const SKills = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const skillsRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!skillsRef.current || !titleRef.current) return;

      // Title animation
      gsap.from(titleRef.current, {
        y: -30,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
          end: "top 60%",
          scrub: 2,
        },
      });

      // Skills stagger animation (ONE BY ONE)
      gsap.from(".skill_grid_card", {
        opacity: 0,
        y: 40,
        duration: 1.5,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".skill_grid_card",
          start: "top 80%",
          end: "top 40%",
          scrub: 5,
        },
      });
    },
    { scope: container },
  );

  return (
    <section className="skill_section" ref={container} id="skills">
      <div className="container">
        <h3 className="skills_title" ref={titleRef}>
          My Skills
        </h3>
        <div className="skill_show" ref={skillsRef}>
          {/* Row 1 */}
          <div className="row row-1">
            {icons.slice(0, 5).map((skill, index) => (
              <div className="skill_grid_card" key={index}>
                <img src={skill.src} alt={skill.name} />
                <div className="skill_des">
                  <h4>{skill.name}</h4>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="row row-2">
            {icons.slice(5, 9).map((skill, index) => (
              <div className="skill_grid_card" key={index + 5}>
                <img src={skill.src} alt={skill.name} />

                <div className="skill_des">
                  <h4>{skill.name}</h4>
                </div>
              </div>
            ))}
          </div>

          {/* Row 3 */}
          <div className="row row-3">
            {icons.slice(9, 12).map((skill, index) => (
              <div className="skill_grid_card" key={index + 9}>
                <img src={skill.src} alt={skill.name} />

                <div className="skill_des">
                  <h4>{skill.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
