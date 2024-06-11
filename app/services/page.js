import Breadcrumb from "@/components/Breadcrumb";
import Faq from "@/components/Faq";
import PetrixLayout from "@/layout/PetrixLayout";
import Link from "next/link";
const page = () => {
  return (
    <PetrixLayout>
      {/*========================
  BREADCRUMB START
    =========================*/}
      <Breadcrumb text={"services"} />
      {/*========================
            BREADCRUMB END
        =========================*/}
      {/*======================== 
            SERVICES START
        =========================*/}
      <section className="services_page pb_120 xs_pb_80">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="details_page_header mb-0">
                <h2 className="has-animation">
                  Refined branding and web design strategically created to tell
                  your story, make a connection and establish a cutting- edge
                  online and offline presence.
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-sm-6">
              <div className="single_services">
                <span>W</span>
                <h3>Web Development</h3>
                <p>
                  Duis aute irure reprehenderit velit esse cillum dolore eu
                  fugiat nulla pariatur. excepteur sint occaecat with cupidatat
                </p>
                <Link href="service_details">
                  <i className="fa-sharp fa-light fa-arrow-up-right" />
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-sm-6">
              <div className="single_services">
                <span>U</span>
                <h3>UI/UX Design</h3>
                <p>
                  Duis aute irure reprehenderit velit esse cillum dolore eu
                  fugiat nulla pariatur. excepteur sint occaecat with cupidatat
                </p>
                <Link href="service_details">
                  <i className="fa-sharp fa-light fa-arrow-up-right" />
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-sm-6">
              <div className="single_services">
                <span>s</span>
                <h3>Sound Design</h3>
                <p>
                  Duis aute irure reprehenderit velit esse cillum dolore eu
                  fugiat nulla pariatur. excepteur sint occaecat with cupidatat
                </p>
                <Link href="service_details">
                  <i className="fa-sharp fa-light fa-arrow-up-right" />
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-sm-6">
              <div className="single_services">
                <span>g</span>
                <h3>Game Design</h3>
                <p>
                  Duis aute irure reprehenderit velit esse cillum dolore eu
                  fugiat nulla pariatur. excepteur sint occaecat with cupidatat
                </p>
                <Link href="service_details">
                  <i className="fa-sharp fa-light fa-arrow-up-right" />
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-sm-6">
              <div className="single_services">
                <span>b</span>
                <h3>Branding Design</h3>
                <p>
                  Duis aute irure reprehenderit velit esse cillum dolore eu
                  fugiat nulla pariatur. excepteur sint occaecat with cupidatat
                </p>
                <Link href="service_details">
                  <i className="fa-sharp fa-light fa-arrow-up-right" />
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-sm-6">
              <div className="single_services">
                <span>d</span>
                <h3>Digital Marketing</h3>
                <p>
                  Duis aute irure reprehenderit velit esse cillum dolore eu
                  fugiat nulla pariatur. excepteur sint occaecat with cupidatat
                </p>
                <Link href="service_details">
                  <i className="fa-sharp fa-light fa-arrow-up-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*========================
            SERVICES END
        =========================*/}
      {/*========================
            PRICING START
        =========================*/}
      <section
        className="pricing pb_120 xs_pb_80"
        style={{ background: "url(images/golden_bg.jpg)" }}
      >
        <div className="section_heading section_heading_2">
          <div className="container-fluid">
            <h2>
              PRICING PLAN <span>PRICING PLAN</span> PRICING PLAN
            </h2>
          </div>
        </div>
        <div className="container pt_95 xs_pt_55">
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="single_pricing fade_left">
                <h4>Sliver Pack</h4>
                <h2>$100.00</h2>
                <span>Per/Month</span>
                <p>
                  Duis aute irure dolor in reprehenderit velit esse cillum
                  dolore eu fugiat
                </p>
                <a className="common_btn btn_hover" href="#">
                  Start My Project Now
                </a>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="single_pricing active fade_left">
                <h4>Gold Pack</h4>
                <h2>$150.00</h2>
                <span>Per/Month</span>
                <p>
                  Duis aute irure dolor in reprehenderit velit esse cillum
                  dolore eu fugiat
                </p>
                <a className="common_btn btn_hover price_btn" href="#">
                  Start My Project Now
                </a>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="single_pricing fade_left">
                <h4>Platinum Pack</h4>
                <h2>$250.00</h2>
                <span>Per/Month</span>
                <p>
                  Duis aute irure dolor in reprehenderit velit esse cillum
                  dolore eu fugiat
                </p>
                <a className="common_btn btn_hover" href="#">
                  Start My Project Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*========================
  PRICING END
    =========================*/}
      {/*========================
  FAQ START
    =========================*/}
      <section className="faq pt_100 xs_pt_60 pb_120 xs_pb_80">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="title has-animation">Common Question</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-10 m-auto">
              <Faq />
            </div>
          </div>
        </div>
      </section>
      {/*========================
  FAQ END
    =========================*/}
    </PetrixLayout>
  );
};
export default page;
