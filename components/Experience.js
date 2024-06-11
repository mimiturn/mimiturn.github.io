const Experience = () => {
  return (
    <section
      className="experience pt_90 xs_pt_50 pb_120 xs_pb_80"
      id="experience"
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div
              className="experience_text fade_left"
              data-trigerid="experience"
            >
              <h2>
                <i className="fa-sharp fa-solid fa-graduation-cap" />
                <span className="has-animation">My Education</span>
              </h2>
              <ul>
                <li>
                  <div className="title">
                    <span>2015 - 2017</span>
                  </div>
                  <div className="title">
                    <h3>Programming Course</h3>
                    <p>Harvard University</p>
                  </div>
                </li>
                <li>
                  <div className="title">
                    <span>2014 - 2015</span>
                  </div>
                  <div className="title">
                    <h3>Cognitive Sciences</h3>
                    <p>University of California</p>
                  </div>
                </li>
                <li>
                  <div className="title">
                    <span>2013 - 2014</span>
                  </div>
                  <div className="title">
                    <h3>Web Design Course</h3>
                    <p>Bigtown, England</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div
              className="experience_text fade_right"
              data-trigerid="experience"
            >
              <h2>
                <i className="fa-solid fa-briefcase-blank" />
                <span className="has-animation">My Experience</span>
              </h2>
              <ul>
                <li>
                  <div className="title">
                    <span>2022 - Present</span>
                  </div>
                  <div className="title">
                    <h3>Envato Elements</h3>
                    <p>Exclusive Author</p>
                  </div>
                </li>
                <li>
                  <div className="title">
                    <span>2018 - 2021</span>
                  </div>
                  <div className="title">
                    <h3>Leader Team of Marketing</h3>
                    <p>Head of Department</p>
                  </div>
                </li>
                <li>
                  <div className="title">
                    <span>2013 - 2014</span>
                  </div>
                  <div className="title">
                    <h3>Head of UX Engineering</h3>
                    <p>Webflow</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Experience;
