export const HeroSection = () => {
  return (
    <>
      <section className="jumbotron hero-section">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6 hero_image">
            <img
              src="Assets/images/SK_2.png"
              alt="Suhaim Khalid Standing Image "
            />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 hero_description">
            <h2>
              {" "}
              I'm <span>Suhaim Khalid</span>
            </h2>
            <h3>Software Developer</h3>
            <p>
              <a
                className="resume-btn"
                href="Assets/images/Suhaim Khalid Resume.pdf"
              >
                CV
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
