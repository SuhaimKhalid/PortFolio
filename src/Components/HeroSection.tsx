import cv from "../assets/CV/SuhaimKhalid_CV.pdf";
import profieImage from "../../public/Images/Profile_1.jpg";
import { Slide } from "react-awesome-reveal";
export const HeroSection = () => {
  return (
    <>
      <section className="hero-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-12 col-md-6  hero_image">
              <Slide direction="left" delay={11}>
                <img src={profieImage} alt="Suhaim Khalid Standing Image " />
              </Slide>
            </div>
            <div className="col-lg-6  col-sm-12 col-md-6 hero_description">
              <Slide direction="right">
                <h2>
                  {" "}
                  I'm <span>Suhaim Khalid</span>
                </h2>
                <h3>Software Developer</h3>
                <p>
                  <a className="resume-btn" href={cv}>
                    CV
                  </a>
                </p>
              </Slide>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
