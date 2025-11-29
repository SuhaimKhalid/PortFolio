import html from "../../public/Icons/Html.png";
import css from "../../public/Icons/Css.png";
import bootstrap from "../../public/Icons/Bootstrap.png";
import javascript from "../../public/Icons/JS4.png";
import jquery from "../../public/Icons/Jquery.png";
import reactIcon from "../../public/Icons/React.png";
import node from "../../public/Icons/Node1.png";
import express from "../../public/Icons/Express js.png";
import sql from "../../public/Icons/Postgre.png";
import git from "../../public/Icons/Github.png";

const icons = [
  { src: html, name: "HTML" },
  { src: css, name: "CSS" },
  { src: bootstrap, name: "Bootstrap" },
  { src: javascript, name: "JavaScript" },
  { src: jquery, name: "jQuery" },
  { src: reactIcon, name: "React" },
  { src: node, name: "Node.js" },
  { src: express, name: "Express" },
  { src: sql, name: "PostgreSQL" },
  { src: git, name: "Git" },
];

export const SKills = () => {
  return (
    <>
      <section className="skill_section" id="skills">
        <div className="container">
          <h3>My Skills</h3>

          <div className="skill_show">
            {icons.map((skill) => {
              return (
                <>
                  <div className="skill_grid_card">
                    <img src={skill.src} alt={skill.name} />
                    <div className="skill_des">
                      <h4>{skill.name}</h4>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
