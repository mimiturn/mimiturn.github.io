import Link from "next/link";
import HeadingMarquee from "./HeadingMarquee";
const Service = () => {
  return (
    <section className="services pb_120 xs_pb_80" id="service">
      <HeadingMarquee text="SERVICES" headingType={2} />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="services_text mt_105 xs_mt_65">
              <p className="text-anim">
                We specialize in the design and development of your Webflow,
                Shopify or WordPress powered website. Webhosting support through
                Webflow, WP Engine or equivalent. SEO best practices with a
                focus on page speed optimization. Familiarity with MySQL, PHP,
                JavaScript, Cloudflare, and WooCommerce.
              </p>
              <div className="mt_110 xs_mt_70 service_items">
                <div
                  className="service_item fade_bottom"
                  data-trigerid="service"
                >
                  <h2>
                    Web Development <sup>(01)</sup>
                  </h2>
                  <Link
                    href="service_details"
                    className="image-view"
                    data-img-cursor="<img src='images/portfolio_img_7.jpg' />"
                  >
                    <i className="fas fa-eye" />
                  </Link>
                </div>
                <div
                  className="service_item fade_bottom"
                  data-trigerid="service"
                >
                  <h2>
                    UI/UX Design <sup>(02)</sup>
                  </h2>
                  <Link
                    href="service_details"
                    className="image-view"
                    data-img-cursor="<img src='images/portfolio_img_11.jpg' />"
                  >
                    <i className="fas fa-eye" />
                  </Link>
                </div>
                <div
                  className="service_item fade_bottom"
                  data-trigerid="service"
                >
                  <h2>
                    Sound Design <sup>(03)</sup>
                  </h2>
                  <Link
                    href="service_details"
                    className="image-view"
                    data-img-cursor="<img src='images/portfolio_img_9.jpg' />"
                  >
                    <i className="fas fa-eye" />
                  </Link>
                </div>
                <div
                  className="service_item fade_bottom"
                  data-trigerid="service"
                >
                  <h2>
                    Game Design <sup>(04)</sup>
                  </h2>
                  <Link
                    href="service_details"
                    className="image-view"
                    data-img-cursor="<img src='images/portfolio_img_10.jpg' />"
                  >
                    <i className="fas fa-eye" />
                  </Link>
                </div>
                <div
                  className="service_item fade_bottom"
                  data-trigerid="service"
                >
                  <h2>
                    Branding Design <sup>(05)</sup>
                  </h2>
                  <Link
                    href="service_details"
                    className="image-view"
                    data-img-cursor="<img src='images/portfolio_img_1.jpg' />"
                  >
                    <i className="fas fa-eye" />
                  </Link>
                </div>
                <div
                  className="service_item fade_bottom"
                  data-trigerid="service"
                >
                  <h2>
                    Digital Marketing <sup>(06)</sup>
                  </h2>
                  <Link
                    href="service_details"
                    className="image-view"
                    data-img-cursor="<img src='images/portfolio_img_2.jpg' />"
                  >
                    <i className="fas fa-eye" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Service;
