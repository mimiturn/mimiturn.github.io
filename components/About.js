import Counter from "./Counter";
import HeadingMarquee from "./HeadingMarquee";

const About = ({ withoutMarquee }) => {
  return (
    <section
      className="about"
      id="about"
      style={{ background: "url(images/golden_bg.jpg)" }}
    >
      {!withoutMarquee && <HeadingMarquee text="about me" />}
      <div className="about_text_area pt_120 xs_pt_80 pb_120 xs_pb_80">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-md-6">
              <div className="about_img">
                <img
                  src="images/about_img.png"
                  alt="about"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-xl-7 col-md-6">
              <div className="about_text">
                <p className="description text-anim">
                  Hello! I’m David Petrix. Web designer from USA, California,
                  San Francisco. I have rich experience in web site design and
                  building, lso I am good at wordpress. I love to talk with you
                  about our unique.
                </p>
                <ul>
                  <li className="fade_right" data-trigerid="about">
                    <h2>
                      <span className="counter">
                        <Counter end={12} />
                      </span>
                      +
                    </h2>
                    <p>Years of experience</p>
                  </li>
                  <li className="fade_right" data-trigerid="about">
                    <h2>
                      <span className="counter">
                        <Counter end={1} />
                      </span>
                      K+
                    </h2>
                    <p>Successful Projects</p>
                  </li>
                  <li className="fade_right" data-trigerid="about">
                    <h2>
                      <span className="counter">
                        <Counter end={20} />
                      </span>
                      +
                    </h2>
                    <p>Honors and Awards</p>
                  </li>
                </ul>
                <a
                  className="common_btn btn_hover"
                  data-trigerid="about"
                  href="#"
                >
                  download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
