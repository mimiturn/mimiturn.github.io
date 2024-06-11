import Counter from "./Counter";

const Skills = () => {
  return (
    <section className="skills pt_105 xs_pt_65 pb_120 xs_pb_80" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-xl-11 m-auto">
            <h2 className="has-animation">
              I craft wonderful digital experiences for brands
            </h2>
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col-xl-2 col-sm-4 col-lg-3">
            <div className="single_skills fade_left" data-trigerid="skills">
              <div className="text">
                <div className="icon">
                  <img
                    src="images/skill_icon_1.png"
                    alt="skills"
                    className="img-fluid"
                  />
                </div>
                <h3>
                  <span className="counter">
                    <Counter end={90} />
                  </span>
                  %
                </h3>
              </div>
              <p>Figma</p>
            </div>
          </div>
          <div className="col-xl-2 col-sm-4 col-lg-3">
            <div className="single_skills fade_left" data-trigerid="skills">
              <div className="text">
                <div className="icon">
                  <img
                    src="images/skill_icon_2.png"
                    alt="skills"
                    className="img-fluid"
                  />
                </div>
                <h3>
                  <span className="counter">
                    <Counter end={80} />
                  </span>
                  %
                </h3>
              </div>
              <p>Adobe XD</p>
            </div>
          </div>
          <div className="col-xl-2 col-sm-4 col-lg-3">
            <div className="single_skills fade_left" data-trigerid="skills">
              <div className="text">
                <div className="icon">
                  <img
                    src="images/skill_icon_3.png"
                    alt="skills"
                    className="img-fluid"
                  />
                </div>
                <h3>
                  <span className="counter">
                    <Counter end={95} />
                  </span>
                  %
                </h3>
              </div>
              <p>Wordpress</p>
            </div>
          </div>
          <div className="col-xl-2 col-sm-4 col-lg-3">
            <div className="single_skills fade_left" data-trigerid="skills">
              <div className="text">
                <div className="icon">
                  <img
                    src="images/skill_icon_4.png"
                    alt="skills"
                    className="img-fluid"
                  />
                </div>
                <h3>
                  <span className="counter">
                    <Counter end={85} />
                  </span>
                  %
                </h3>
              </div>
              <p>HTML</p>
            </div>
          </div>
          <div className="col-xl-2 col-sm-4 col-lg-3">
            <div className="single_skills fade_left" data-trigerid="skills">
              <div className="text">
                <div className="icon">
                  <img
                    src="images/skill_icon_5.png"
                    alt="skills"
                    className="img-fluid"
                  />
                </div>
                <h3>
                  <span className="counter">
                    <Counter end={95} />
                  </span>
                  %
                </h3>
              </div>
              <p>Bootstrap</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;
