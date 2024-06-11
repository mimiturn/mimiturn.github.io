import Breadcrumb from "@/components/Breadcrumb";
import PetrixLayout from "@/layout/PetrixLayout";
import Link from "next/link";
const page = () => {
  return (
    <PetrixLayout>
      <Breadcrumb text={"my works"} />
      {/*========================
            PORTFOLIO START
      =========================*/}
      <section className="portfolio_page pb_120 xs_pb_80">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="details_page_header">
                <h2 className="has-animation">
                  We create resonant brands and digital experiences that amplify
                  your influence to effect change.
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="portfolio_large fade_up">
                <Link
                  href="portfolio_details"
                  data-cursor="<i class='fa-sharp fa-light fa-arrow-up-right'></i>"
                  className="portfolio_large_img"
                >
                  <img
                    src="images/portfolio_img_7.jpg"
                    alt="portfolio"
                    className="img-fluid w-100"
                  />
                </Link>
                <div className="portfolio_large_text">
                  <h2 className="has-animation">
                    MOCKUP <span>Design</span>
                  </h2>
                  <p className="has-animation">Portfolio Details - 2023</p>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="portfolio_large fade_up">
                <a
                  href="https://www.youtube.com/watch?v=B-ytMSuwbf8"
                  className="play_btn"
                  data-cursor="<i class='fa-brands fa-youtube'></i>"
                >
                  <img
                    src="images/portfolio_img_11.jpg"
                    alt="portfolio"
                    className="img-fluid w-100"
                  />
                </a>
                <div className="portfolio_large_text">
                  <h2 className="has-animation">
                    Youtube <span>Video</span>
                  </h2>
                  <p className="has-animation">Video - 2023</p>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="portfolio_large fade_up">
                <a
                  href="https://vimeo.com/132528823"
                  className="play_btn"
                  data-cursor="<i class='fa-brands fa-vimeo-v'></i>"
                >
                  <img
                    src="images/portfolio_img_9.jpg"
                    alt="portfolio"
                    className="img-fluid w-100"
                  />
                </a>
                <div className="portfolio_large_text">
                  <h2 className="has-animation">
                    Vimeo <span>Video</span>
                  </h2>
                  <p className="has-animation">Video - 2023</p>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="portfolio_large fade_up">
                <a
                  href="https://w.soundcloud.com/player/?visual=true&url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F159967086&show_artwork=true&maxwidth=1020&maxheight=1000&auto_play=1"
                  className="play_btn"
                  data-cursor='<i class="fa-brands fa-soundcloud"></i>'
                >
                  <img
                    src="images/portfolio_img_10.jpg"
                    alt="portfolio"
                    className="img-fluid w-100"
                  />
                </a>
                <div className="portfolio_large_text">
                  <h2 className="has-animation">
                    soundcloud <span>Audio</span>
                  </h2>
                  <p className="has-animation">Audio - 2023</p>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="portfolio_large fade_up">
                <a
                  href="images/portfolio_img_11.jpg"
                  className="image_popup"
                  data-cursor='<i class="fa-sharp fa-regular fa-image"></i>'
                >
                  <img
                    src="images/portfolio_img_11.jpg"
                    alt="portfolio"
                    className="img-fluid w-100"
                  />
                </a>
                <div className="portfolio_large_text">
                  <h2 className="has-animation">
                    Image <span>view</span>
                  </h2>
                  <p className="has-animation">Image - 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*========================
            PORTFOLIO END
        =========================*/}
    </PetrixLayout>
  );
};
export default page;
