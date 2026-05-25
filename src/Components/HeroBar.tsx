import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export const HeroBar = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.from(".bar_item", {
        y: 90,
        opacity: 0,
        duration: 1.5,
        stagger: 0.5,

        scrollTrigger: {
          trigger: ".bar_item",

          start: "top 80%",
          end: "top 60%",
          scrub: 5,
        },
      });
    },
    { scope: container },
  );

  return (
    <>
      <section className="hero_bar" id="herobar">
        <div className="container">
          <div className="row" ref={container}>
            <div className="col-lg-3 col-sm-12 ">
              <div className="bar_item">
                <div className="bar_col_inner">
                  <div className="bar_text">3 Years Experience</div>
                  <hr />
                  <p>Detailed Project Creation</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-12">
              <div className="bar_item">
                <div className="bar_col_inner">
                  <div className="bar_text">100+ Static Websites</div>
                  <hr />
                  <p>Custom Solutions For Diverse Clients</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-12">
              <div className="bar_item">
                <div className="bar_col_inner">
                  <div className="bar_text">Porblem Solver</div>
                  <hr /> <p>Effective Troubleshooting Methodologies</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-12">
              <div className="bar_item">
                <div className="bar_col_inner">
                  <div className="bar_text">Team Player</div>
                  <hr /> <p>Collaborative Team Leadership</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="hero_bar ">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-12">
              <div className="bar_item">
                <div className="bar_image">
                  <img src={star} alt="Start Icon" />
                </div>
                <div className="bar_text">3 Years Experience</div>
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
      </section> */}
    </>
  );
};
