export const Footer = () => {
  return (
    <>
      <footer id="contact_me">
        {/* <!-- upper Footer  --> */}
        <div className="upper_Footer">
          <div className="line left"></div>
          <div className="text">Contact Me</div>
          <div className="line right"></div>
        </div>
        {/* <!-- Footer Body --> */}
        <div className="container ft_container">
          <div className="ft_row">
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
