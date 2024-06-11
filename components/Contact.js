import Link from "next/link";
import HeadingMarquee from "./HeadingMarquee";
const Contact = () => {
  return (
    <section className="contact_box pb_120 xs_pb_80">
      <HeadingMarquee text="Let's talk" headingType={2} />
      <div className="container mt_105 xs_mt_65">
        <div className="row">
          <div className="col-xl-10 col-md-10 m-auto">
            <div className="contact_box_text">
              <h2 className="has-animation">
                Do you have a question, an idea, or a project you need help
                with? Contact us!
              </h2>
              <Link href="contact_us" className="btn_hover contact_btn">
                Contact Form
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
