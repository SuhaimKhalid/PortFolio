import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export const Footer = () => {
  const container = useRef(null);
  const footer_title = useRef(null);
  const fot_col = useRef(null);
  useGSAP(
    () => {
      gsap.from(footer_title.current, {
        opacity: 0,
        y: -40,
        scrollTrigger: {
          trigger: footer_title.current,

          start: "top 70%",
          end: "top 40%",
          scrub: 5,
        },
      });
      gsap.from(fot_col.current, {
        opacity: 0,
        y: 40,
        duration: 1.5,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: fot_col.current,

          start: "top 90%",
          end: "top 70%",
          scrub: 5,
        },
      });
    },
    { scope: container },
  );
  return (
    <>
      <footer id="contact_me">
        {/* <!-- upper Footer  --> */}
        <div className="upper_Footer">
          <div className="line left"></div>
          <div className="text" ref={footer_title}>
            Lets Talk
          </div>
          <div className="line right"></div>
        </div>
        {/* <!-- Footer Body --> */}
        <div className="container ft_container">
          <div className="ft_row" ref={fot_col}>
            <div className="footer_col">
              <span>
                <i className="fas fa-envelope"></i>
              </span>
              <p>
                <a href="mailto:suhaimkhalid007@gmail.com">
                  suhaimkhalid007@gmail.com
                </a>
              </p>
            </div>

            <div className="footer_col">
              <span>
                <i className="fas fa-phone-alt"></i>
              </span>
              <p>+44 750 853 6280</p>
            </div>

            <div className="footer_col">
              <span>
                <i className="fas fa-map-marker-alt"></i>
              </span>
              <p>Birmingham, UK</p>
            </div>
          </div>
        </div>
        {/* <!-- Lower Footer --> */}
        <div className="lower_footer">
          <div className="line left"></div>
          <div className="social_link_center">
            <ul className="social_links">
              <li>
                <a
                  href="https://www.linkedin.com/in/suhaimkhalid"
                  target="_blank"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/SuhaimKhalid" target="_blank">
                  <i className="fab fa-github"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="line right"></div>
        </div>
      </footer>
    </>
  );
};
