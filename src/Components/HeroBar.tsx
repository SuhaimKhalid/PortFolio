export const HeroBar = () => {
  return (
    <>
      <section className="hero_bar">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-4">
              <article className="text_area">
                <div className="inner_area">
                  <h3>2</h3>
                  <p>YEARS OF EXPERIENCE</p>
                </div>
                <div className="inner_area">
                  <h3>
                    100<sup>+</sup>
                  </h3>
                  <p>Static Websites Created</p>
                </div>
              </article>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-8">
              <article className="images_area">
                <img src="Assets/images/Icons/Html.png" alt="Html Logo" />
                <img src="Assets/images/Icons/Css.png" alt="CSS Logo" />
                <img
                  src="Assets/images/Icons/Bootstrap.png"
                  alt="BootStrap Logo"
                />
                <img src="Assets/images/Icons/JS4.png" alt="JavaScript Logo" />
                <img src="Assets/images/Icons/Jquery.png" alt="J-Query Logo" />
                <img src="Assets/images/Icons/React.png" alt="React Logo" />
                <img src="Assets/images/Icons/Github.png" alt="GitHub Logo" />
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
