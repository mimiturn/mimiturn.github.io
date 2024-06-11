import Slider from "react-slick";
import HeadingMarquee from "./HeadingMarquee";

const Testimonial = () => {
  return (
    <section
      className="testimonial pb_120 xs_pb_80"
      style={{ background: "url(images/golden_bg.jpg)" }}
    >
      <HeadingMarquee text="testimonial" headingType={2} />
      <div className="container mt_120 xs_mt_80">
        <div className="row">
          <div className="col-xl-11 m-auto">
            <div className="testimonial_bg">
              <Slider className="row testi_slider">
                <div className="col-12">
                  <div className="testimonial_content">
                    <div className="testimonial_img">
                      <img
                        src="images/testimonial_img.jpg"
                        alt="testimonial"
                        className="img-fluid"
                      />
                    </div>
                    <div className="testimonial_text">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered some form, by
                        injected humour, or randomised words which slightly
                        believable. If you are going to use a passage
                      </p>
                      <h4>Devid Marko</h4>
                      <span> Web Developer </span>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="testimonial_content">
                    <div className="testimonial_img">
                      <img
                        src="images/testimonial_img.jpg"
                        alt="testimonial"
                        className="img-fluid"
                      />
                    </div>
                    <div className="testimonial_text">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered some form, by
                        injected humour, or randomised words which slightly
                        believable. If you are going to use a passage
                      </p>
                      <h4>Devid Marko</h4>
                      <span> Web Developer </span>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt_110 xs_mt_70" id="testimonial_brand">
        <div className="row">
          <div className="col-12">
            <div className="testimonial_brand">
              <p className="text-anim justify-content-center">
                More than 200+ companies trusted us worldwide
              </p>
              <ul>
                <li>
                  <img
                    src="images/brand_logo_1.png"
                    alt="brand"
                    className="img-fluid"
                  />
                </li>
                <li>
                  <img
                    src="images/brand_logo_2.png"
                    alt="brand"
                    className="img-fluid"
                  />
                </li>
                <li>
                  <img
                    src="images/brand_logo_3.png"
                    alt="brand"
                    className="img-fluid"
                  />
                </li>
                <li>
                  <img
                    src="images/brand_logo_4.png"
                    alt="brand"
                    className="img-fluid"
                  />
                </li>
                <li>
                  <img
                    src="images/brand_logo_5.png"
                    alt="brand"
                    className="img-fluid"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonial;
