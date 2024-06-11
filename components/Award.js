import HeadingMarquee from "./HeadingMarquee";

const Award = () => {
  return (
    <section className="award pb_120 xs_pb_80" id="award">
      <HeadingMarquee text={"Awards"} headingType={2} />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="award_text mt_115 xs_mt_75">
              <ul>
                <li className="fade_bottom" data-trigerid="award">
                  <span>Site Of The Day</span>
                  <span>CSS &amp; Animation</span>
                  <span>2018</span>
                </li>
                <li className="fade_bottom" data-trigerid="award">
                  <span>Best Business Model</span>
                  <span>New Strategy</span>
                  <span>2019</span>
                </li>
                <li className="fade_bottom" data-trigerid="award">
                  <span>Motion Graphics</span>
                  <span>3D &amp; Visual Effects</span>
                  <span>2020</span>
                </li>
                <li className="fade_bottom" data-trigerid="award">
                  <span>Video Design</span>
                  <span>CSS &amp; Animation</span>
                  <span>2021</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Award;
