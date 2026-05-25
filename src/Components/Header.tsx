import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export const Header = () => {
  const nav_ani = useRef(null);

  useGSAP(
    () => {
      const t1 = gsap.timeline();
      t1.from(".navbar_h1", {
        y: -50,
        opacity: 0,
        duration: 1,
      });
      t1.from(".nav-item", {
        y: -50,
        opacity: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: "power2.out",
      });
    },
    { scope: nav_ani },
  );

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container" ref={nav_ani}>
            <h1 className="navbar_h1">Portfolio</h1>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse col-9"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto ">
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    About Me
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#experience">
                    Experience
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#work">
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#skills" className="nav-link">
                    Skills
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#recommendations">
                    Recommendations
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact_me">
                    Contact Me
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
