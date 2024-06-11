"use client";
import emailjs from "emailjs-com";
import { Fragment, useState } from "react";
const ContactForm = () => {
  const [mailData, setMailData] = useState({
    name: "",
    email: "",
    message: "",
    template: "petrix react",
  });

  const { name, email, subject, phone, message, template } = mailData;
  const [error, setError] = useState(null);
  const [fieldError, setFieldError] = useState(null);
  const onChange = (e) =>
    setMailData({ ...mailData, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    if (name.length === 0 || email.length === 0 || message.length === 0) {
      setFieldError(true);
      setError(true);
      clearError();
    } else {
      emailjs
        .send(
          "service_gsps4gw", // service id
          "template_evezi69", // template id
          mailData,
          "Q3pccdLZhU-mZT7tQ" // public api
        )
        .then(
          (response) => {
            setError(false);
            clearError();
            setFieldError(false);
            setMailData({
              name: "",
              email: "",
              message: "",
              template: "petrix react",
            });
          },
          (err) => {
            console.log(err.text);
          }
        );
    }
  };

  const clearError = () => {
    setTimeout(() => {
      setError(null);
    }, 2000);
  };
  return (
    <Fragment>
      <div className="contact_form">
        <h3 className="has-animation">
          By all means, send us an email and get in touch.
        </h3>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="row">
            <div className="col-md-6">
              <input
                type="text"
                placeholder="Name"
                required
                name="name"
                onChange={(e) => onChange(e)}
                value={name}
              />
            </div>
            <div className="col-md-6">
              <input
                type="email"
                placeholder="Email"
                name="email"
                required
                onChange={(e) => onChange(e)}
                value={email}
              />
            </div>
            <div className="col-xl-12">
              <textarea
                rows={7}
                placeholder="Message"
                defaultValue={""}
                name="message"
                onChange={(e) => onChange(e)}
                value={message}
              />
              <button type="submit" className="common_btn">
                Send Me Quotes
              </button>
            </div>
          </div>
        </form>
      </div>
      <div
        className={`text-start bg-transparent border-0 mb-0 p-0 mt-3 ${
          error ? "alert alert-danger" : "alert alert-success"
        }`}
        style={{ opacity: error == null ? 0 : 1 }}
      >
        <span>
          {error
            ? "** Please Fill Required Fields"
            : "** Your message has been received, We will contact you soon."}
        </span>
      </div>
    </Fragment>
  );
};
export default ContactForm;
