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
      <Breadcrumb text={"UI/UX Design"} />

      {/*========================
  BREADCRUMB END
    =========================*/}
      {/*============================
  SERVICE DETAILS START
    =============================*/}
      <section className="service_details pb_120 xs_pb_80">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="service_details_img fade_up">
                <img
                  src="images/service_details_img.jpg"
                  alt="services"
                  className="img-fluid w-100"
                />
              </div>
              <div className="service_details_text">
                <h2 className="has-animation">Business Website Development</h2>
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                  qui dolorem non numquam eius modi tempora incidunt ut labore
                  et dolore magnam aliquam voluptatem.
                </p>
                <p>
                  Quis nostrum exercitationem ullam corporis suscipit
                  laboriosam, nisi ut aliquid ex ea consequatur? Quis autem vel
                  eum iure reprehenderit qui in ea voluptate velit esse quam
                  nihil molestiae consequatur, vel illum qui dolorem fugiat quo
                  voluptas nulla pariatur?
                </p>
                <h2 className="has-animation">Service Features</h2>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. passage Lorem Ipsum, you need to be
                  sure there isn't anything embarrassing hidden in the text. All
                  the generators on the Internet tend to repeat predefined
                  chunks as necessary, making this the first true generator on
                  the Internet. It uses a dictionary of over words,
                </p>
                <div className="row mb_55">
                  <div className="col-6">
                    <div className="service_details_small_img fade_up">
                      <img
                        src="images/service_det_img_small_1.jpg"
                        alt="Services"
                        className="img-fluid w-100"
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="service_details_small_img fade_up">
                      <img
                        src="images/service_det_img_small_2.jpg"
                        alt="Services"
                        className="img-fluid w-100"
                      />
                    </div>
                  </div>
                </div>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. passage Lorem Ipsum, you need to be
                  sure there isn't anything embarrassing hidden in the text. All
                  the generators on the Internet tend to repeat predefined
                  chunks as necessary, making this the first true generator on
                  the Internet. It uses a dictionary of over words,
                </p>
              </div>
              <div className="service_det_faq mt_45">
                <h3 className="has-animation">Frequently Asked Questions</h3>
                <div className="faq_area">
                  <Faq />
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sidebar" id="sticky_sidebar">
                <div className="sidebar_services">
                  <h3>service list</h3>
                  <ul>
                    <li>
                      <Link href="service_details">Web Development</Link>
                    </li>
                    <li>
                      <Link href="service_details">UI/UX Design</Link>
                    </li>
                    <li>
                      <Link href="service_details">Sound Design</Link>
                    </li>
                    <li>
                      <Link href="service_details">Game Design</Link>
                    </li>
                    <li>
                      <Link href="service_details">Branding Design</Link>
                    </li>
                    <li>
                      <Link href="service_details">Digital Marketing</Link>
                    </li>
                  </ul>
                </div>
                <div className="sidebar_contact">
                  <div className="sidebar_contact_img">
                    <img
                      src="images/sidebar_add_img.jpg"
                      alt="add"
                      className="img-fluid w-100"
                    />
                    <div className="overlay">
                      <Link href="contact">Let's Talk</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*============================
  SERVICE DETAILS END
    =============================*/}
    </PetrixLayout>
  );
};
export default page;
