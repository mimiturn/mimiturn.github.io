import Link from "next/link";
import HeadingMarquee from "./HeadingMarquee";
const Blog = () => {
  return (
    <section className="blog pb_125 xs_pb_85" id="blog">
      <HeadingMarquee text="Our News" headingType={2} />
      <div className="container mt_95 xs_mt_55">
        <div className="row">
          <div className="col-xl-4 col-md-6">
            <div className="single_blog fade_left" data-trigerid="blog">
              <h4>August 11, 2023</h4>
              <Link className="title" href="blog_details">
                Fresh design ideas &amp; inspiration for 2023
              </Link>
              <p>
                Duis aute irure dolor in reprehenderit velit esse cillum dolore
                eu fugiat
              </p>
              <Link
                href="blog_details"
                data-cursor="<i class='fa-sharp fa-light fa-arrow-up-right'></i>"
                className="img hover_img"
              >
                <div className="img-box">
                  <img
                    src="images/blog_img_1.jpg"
                    alt="blog"
                    className="img-fluid"
                  />
                  <img
                    src="images/blog_img_1.jpg"
                    alt="blog"
                    className="img-fluid"
                  />
                </div>
              </Link>
              <Link className="read_btn" href="blog_details">
                read more
              </Link>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="single_blog fade_left" data-trigerid="blog">
              <h4>August 11, 2023</h4>
              <Link className="title" href="blog_details">
                What are the new trends in web design?
              </Link>
              <p>
                Duis aute irure dolor in reprehenderit velit esse cillum dolore
                eu fugiat
              </p>
              <Link
                href="blog_details"
                data-cursor="<i class='fa-sharp fa-light fa-arrow-up-right'></i>"
                className="img hover_img"
              >
                <div className="img-box">
                  <img
                    src="images/blog_img_2.jpg"
                    alt="blog"
                    className="img-fluid"
                  />
                  <img
                    src="images/blog_img_2.jpg"
                    alt="blog"
                    className="img-fluid"
                  />
                </div>
              </Link>
              <Link className="read_btn" href="blog_details">
                read more
              </Link>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="single_blog fade_left" data-trigerid="blog">
              <h4>August 11, 2023</h4>
              <Link className="title" href="blog_details">
                Fresh design ideas &amp; inspiration for 2023
              </Link>
              <p>
                Duis aute irure dolor in reprehenderit velit esse cillum dolore
                eu fugiat
              </p>
              <Link
                href="blog_details"
                data-cursor="<i class='fa-sharp fa-light fa-arrow-up-right'></i>"
                className="img hover_img"
              >
                <div className="img-box">
                  <img
                    src="images/blog_img_3.jpg"
                    alt="blog"
                    className="img-fluid"
                  />
                  <img
                    src="images/blog_img_3.jpg"
                    alt="blog"
                    className="img-fluid"
                  />
                </div>
              </Link>
              <Link className="read_btn" href="blog_details">
                read more
              </Link>
            </div>
          </div>
          <div className="col-12 text-center mt_60">
            <Link className="common_btn btn_hover" href="blog_details">
              Explore Our Blog
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Blog;
