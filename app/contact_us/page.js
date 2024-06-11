import Breadcrumb from "@/components/Breadcrumb";
import ContactForm from "@/components/ContactForm";
import PetrixLayout from "@/layout/PetrixLayout";
const page = () => {
  return (
    <PetrixLayout noContactForm>
      {" "}
      {/*========================
  BREADCRUMB START
    =========================*/}
      <Breadcrumb text={"CONTACT ME"} />
      {/*========================
  BREADCRUMB END
    =========================*/}
      {/*======================== 
  CONTACT US START
    =========================*/}
      <section className="contact_us pb_120 xs_pb_80">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="details_page_header mb-0">
                <h2 className="has-animation">
                  You're launching a business and we can help you make it look
                  pretty.
                </h2>
              </div>
            </div>
          </div>
          <div className="contact_header mt_110 xs_mt_70">
            <ul>
              <li>
                <span>Contact</span>
                <a href="callto:+18008450000">+1 800 845 00 00</a>
              </li>
              <li>
                <span>Email</span>
                <a href="mailto:petrix99@gmail.com">petrix99@gmail.com</a>
              </li>
              <li>
                <span>address</span>
                <p>750 St, Office 1138, San Francisco, CA 94108</p>
              </li>
            </ul>
          </div>

          <ContactForm />
        </div>
      </section>
      {/*========================
  CONTACT US END
    =========================*/}
    </PetrixLayout>
  );
};
export default page;
