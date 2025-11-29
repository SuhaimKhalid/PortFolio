import { Slide } from "react-awesome-reveal";

export const Experience = () => {
  return (
    <>
      <section className="experience_section" id="experience">
        <div className="container">
          <h3>EXPERIENCE</h3>

          <Slide direction="left">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-4">
                <div className="exp_years">
                  <h3>SEO Specialist (Intern)</h3>
                  <h4>Hendrik Thurau Enterprises </h4>
                  <p>
                    <span>2024 – 2024</span>
                  </p>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-8">
                <div className="exp_description">
                  <div className="exp_circle"></div>
                  <p>
                    I successfully implemented SEO improvements that helped a
                    targeted website reach a top-3 Google ranking within just
                    three months. During this project, I collaborated closely
                    with both the content and development teams, contributing to
                    website optimisation and demonstrating strong communication,
                    teamwork, and problem-solving skills throughout the process.
                  </p>
                </div>
              </div>
            </div>
          </Slide>
          <Slide direction="left">
            {" "}
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-4">
                <div className="exp_years">
                  <h3>Front End Developer</h3>
                  <h4>Max Group Technology</h4>
                  <p>
                    <span>2021 – 2023</span>
                  </p>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-8">
                <div className="exp_description">
                  <div className="exp_circle"></div>
                  <p>
                    I built over 100 responsive, pixel-perfect websites from PSD
                    designs using HTML, CSS, Bootstrap, and JavaScript. I
                    enhanced user engagement with interactive features and
                    ensured seamless performance across different screen sizes.
                    Working closely with clients to understand their
                    requirements helped me develop strong communication and
                    teamwork skills, while consistently delivering high-quality
                    work on time.
                  </p>
                </div>
              </div>
            </div>
          </Slide>
          <Slide direction="left">
            {" "}
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-4">
                <div className="exp_years">
                  <h3>Front End Developer (Intern)</h3>
                  <h4> ERS Technology</h4>
                  <p>
                    <span>2019 – 2020</span>
                  </p>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-8">
                <div className="exp_description">
                  <div className="exp_circle"></div>
                  <p>
                    I worked as a Junior Front-End Developer where I converted
                    PSD designs into fully responsive websites using HTML, CSS,
                    and JavaScript. My process involved carefully planning the
                    page structure, applying clean and consistent styling,
                    adding interactive features, and ensuring responsive
                    behaviour across all devices. I conducted thorough
                    cross-browser testing to reduce post-deployment issues and
                    delivered high-quality, reliable code. I also contributed to
                    Agile sprints, supported deployment tasks, and collaborated
                    closely with the team, which strengthened my communication,
                    adaptability, and problem-solving skills.
                  </p>
                </div>
              </div>
            </div>
          </Slide>
        </div>
      </section>
    </>
  );
};
