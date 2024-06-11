import Link from "next/link";
import HeadingMarquee from "./HeadingMarquee";
const Portfolio = () => {
  return (
    <section className="portfolio pb_120 xs_pb_80" id="portfolio">
      <HeadingMarquee text="PORTFOLIO" headingType={2} />
      <div className="container portfolio_items">
        <div className="row justify-content-between">
          <div className="col-xl-6 col-md-6">
            <Link
              href="portfolio_details"
              className="portfolio_item mt_120 xs_mt_80 hover_img h-400"
              data-cursor="<i class='fa-sharp fa-light fa-arrow-up-right'></i>"
            >
              <div className="img-box">
                <img
                  src="images/portfolio_img_1.jpg"
                  alt="portfolio"
                  className="img-fluid"
                />
                <img
                  src="images/portfolio_img_1.jpg"
                  alt="portfolio"
                  className="img-fluid img"
                  data-speed="0.3"
                />
              </div>
              <div className="text">
                <span>Details</span>
                <p>UI/UX Design Mockup</p>
              </div>
            </Link>
            <a
              href="https://www.youtube.com/watch?v=B-ytMSuwbf8"
              className="portfolio_item mt_120 xs_mt_80 hover_img h-400 play_btn"
              data-cursor="<i class='fa-brands fa-youtube'></i>"
            >
              <div className="img-box">
                <img
                  src="images/portfolio_img_2.jpg"
                  alt="portfolio"
                  className="img-fluid"
                />
                <img
                  src="images/portfolio_img_2.jpg"
                  alt="portfolio"
                  className="img-fluid"
                />
              </div>
              <div className="text">
                <span>Youtube</span>
                <p>Custom design</p>
              </div>
            </a>
            <a
              href="images/portfolio_img_5.jpg"
              className="portfolio_item mt_120 xs_mt_80 hover_img h-600 image_popup"
              data-cursor='<i class="fa-sharp fa-regular fa-image"></i>'
            >
              <div className="img-box">
                <img
                  src="images/portfolio_img_5.jpg"
                  alt="portfolio"
                  className="img-fluid"
                />
                <img
                  src="images/portfolio_img_5.jpg"
                  alt="portfolio"
                  className="img-fluid img"
                />
              </div>
              <div className="text">
                <span>Image</span>
                <p>Product Mockup Design</p>
              </div>
            </a>
          </div>
          <div className="col-xl-6 col-md-6">
            <a
              href="https://vimeo.com/132528823"
              className="portfolio_item margin_left mt_120 xs_mt_80 h-600 hover_img play_btn"
              data-cursor="<i class='fa-brands fa-vimeo-v'></i>"
            >
              <div className="img-box">
                <img
                  src="images/portfolio_img_6.jpg"
                  alt="portfolio"
                  className="img-fluid"
                />
                <img
                  src="images/portfolio_img_6.jpg"
                  alt="portfolio"
                  className="img-fluid img"
                />
              </div>
              <div className="text">
                <span>Vimeo</span>
                <p>Box Mockup Design</p>
              </div>
            </a>
            <a
              href="https://w.soundcloud.com/player/?visual=true&url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F159967086&show_artwork=true&maxwidth=1020&maxheight=1000&auto_play=1"
              className="portfolio_item margin_left mt_120 xs_mt_80 hover_img h-400 play_btn"
              data-cursor='<i class="fa-brands fa-soundcloud"></i>'
            >
              <div className="img-box">
                <img
                  src="images/portfolio_img_3.jpg"
                  alt="portfolio"
                  className="img-fluid"
                />
                <img
                  src="images/portfolio_img_3.jpg"
                  alt="portfolio"
                  className="img-fluid img"
                />
              </div>
              <div className="text">
                <span>soundcloud</span>
                <p>Design Mockup</p>
              </div>
            </a>
            <a
              href="images/portfolio_img_4.jpg"
              className="portfolio_item margin_left mt_120 xs_mt_80 hover_img h-400 image_popup"
              data-cursor='<i class="fa-sharp fa-regular fa-image"></i>'
            >
              <div className="img-box">
                <img
                  src="images/portfolio_img_4.jpg"
                  alt="portfolio"
                  className="img-fluid"
                />
                <img
                  src="images/portfolio_img_4.jpg"
                  alt="portfolio"
                  className="img-fluid img"
                />
              </div>
              <div className="text">
                <span>Image</span>
                <p>Design Concept</p>
              </div>
            </a>
          </div>
          <div className="col-12 text-center mt_120 xs_mt_80">
            <Link className="see_portfolio circle_btn" href="portfolio">
              <i className="fa-sharp fa-light fa-arrow-up-right" /> See All
              Recent Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
