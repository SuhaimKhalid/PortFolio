import { Slide } from "react-awesome-reveal";
import { DialIcons } from "./DialIcons";

export const About = () => {
  return (
    <>
      <section className="about_section  page" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <Slide direction="left">
                <h3>About Me</h3>
                <p>
                  Full-Stack Developer creating responsive and engaging
                  <span> user interfaces (UI)</span> and scalable
                  <span> server-side applications</span> using{" "}
                  <span> React.js</span>,<span> Node.js</span>,{" "}
                  <span>Express.js</span>, and <span> PostgreSQL</span>.
                  Experienced in <span> RESTful API development</span>,
                  <span> database design</span>,{" "}
                  <span> performance optimization</span>, and writing clean,
                  maintainable code with
                  <span> Test-Driven Development (TDD)</span>. Skilled in
                  collaborating within <span>Agile workflows</span> and
                  delivering full-lifecycle solutions across both front-end and
                  back-end systems.
                </p>
              </Slide>
            </div>
            <div className="col-lg-6">
              <Slide direction="right">
                <DialIcons size={350} />
              </Slide>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
