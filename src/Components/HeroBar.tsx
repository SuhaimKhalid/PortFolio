import star from "../../public/Icons/star-white-icon.png";
import achivement from "../../public/Icons/achivement.png";
import idea from "../../public/Icons/problem-solver.png";
import teamwork from "../../public/Icons/teamwork.png";
export const HeroBar = () => {
  return (
    <>
      <section className="hero_bar ">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-12">
              <div className="bar_item">
                <div className="bar_image">
                  <img src={star} alt="Start Icon" />
                </div>
                <div className="bar_text">2 Years Experience</div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-12">
              <div className="bar_item">
                <div className="bar_image">
                  <img src={achivement} alt="Troppy Icon" />
                </div>
                <div className="bar_text">100+ Static Websites</div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-12">
              <div className="bar_item">
                <div className="bar_image">
                  <img src={idea} alt="white Bulb Idea icon" />
                </div>
                <div className="bar_text">Porblem Solver</div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-12">
              <div className="bar_item">
                <div className="bar_image">
                  <img src={teamwork} alt="TeamWork Hands Icon" />
                </div>
                <div className="bar_text">Team Player</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
