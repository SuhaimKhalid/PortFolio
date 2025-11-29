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
                  href="https://www.facebook.com/profile.php?id=100005961014921"
                  target="_blank"
                >
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/suhaimkhalid/"
                  target="_blank"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/SuhaimKhalid007?fbclid=IwAR17IJFBdNFKGTm0Gc3VaPE2HLSbHaTsNrtPgua4J8W8qZX7HjESeANl-l4"
                  target="_blank"
                >
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
