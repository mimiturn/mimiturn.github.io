import Breadcrumb from "@/components/Breadcrumb";
import PetrixLayout from "@/layout/PetrixLayout";
import Link from "next/link";
const page = () => {
  return (
    <PetrixLayout>
      {/*========================
  BREADCRUMB START
    =========================*/}
      <Breadcrumb text={"articles"} />
      {/*========================
  BREADCRUMB END
    =========================*/}
      {/*========================
  BLOG GRID START
    =========================*/}
      <section className="blog_grid pb_120 xs_pb_80" id="blog">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="single_blog fade_up">
                <h4>August 11, 2023</h4>
                <Link className="title" href="blog_details">
                  Fresh design ideas &amp; inspiration for 2023
                </Link>
                <p>
                  Duis aute irure dolor in reprehenderit velit esse cillum
                  dolore eu fugiat
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
              <div className="single_blog fade_up">
                <h4>August 11, 2023</h4>
                <Link className="title" href="blog_details">
                  What are the new trends in web design?
                </Link>
                <p>
                  Duis aute irure dolor in reprehenderit velit esse cillum
                  dolore eu fugiat
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
              <div className="single_blog fade_up">
                <h4>August 11, 2023</h4>
                <Link className="title" href="blog_details">
                  Fresh design ideas &amp; inspiration for 2023
                </Link>
                <p>
                  Duis aute irure dolor in reprehenderit velit esse cillum
                  dolore eu fugiat
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
            <div className="col-xl-4 col-md-6">
              <div className="single_blog fade_up">
                <h4>August 11, 2023</h4>
                <Link className="title" href="blog_details">
                  Fresh design ideas &amp; inspiration for 2023
                </Link>
                <p>
                  Duis aute irure dolor in reprehenderit velit esse cillum
                  dolore eu fugiat
                </p>
                <Link
                  href="blog_details"
                  data-cursor="<i class='fa-sharp fa-light fa-arrow-up-right'></i>"
                  className="img hover_img"
                >
                  <div className="img-box">
                    <img
                      src="images/blog_img_4.jpg"
                      alt="blog"
                      className="img-fluid"
                    />
                    <img
                      src="images/blog_img_4.jpg"
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
              <div className="single_blog fade_up">
                <h4>August 11, 2023</h4>
                <Link className="title" href="blog_details">
                  What are the new trends in web design?
                </Link>
                <p>
                  Duis aute irure dolor in reprehenderit velit esse cillum
                  dolore eu fugiat
                </p>
                <Link
                  href="blog_details"
                  data-cursor="<i class='fa-sharp fa-light fa-arrow-up-right'></i>"
                  className="img hover_img"
                >
                  <div className="img-box">
                    <img
                      src="images/blog_img_5.jpg"
                      alt="blog"
                      className="img-fluid"
                    />
                    <img
                      src="images/blog_img_5.jpg"
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
              <div className="single_blog fade_up">
                <h4>August 11, 2023</h4>
                <Link className="title" href="blog_details">
                  Fresh design ideas &amp; inspiration for 2023
                </Link>
                <p>
                  Duis aute irure dolor in reprehenderit velit esse cillum
                  dolore eu fugiat
                </p>
                <Link
                  href="blog_details"
                  data-cursor="<i class='fa-sharp fa-light fa-arrow-up-right'></i>"
                  className="img hover_img"
                >
                  <div className="img-box">
                    <img
                      src="images/blog_img_6.jpg"
                      alt="blog"
                      className="img-fluid"
                    />
                    <img
                      src="images/blog_img_6.jpg"
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
          </div>
          <div className="row">
            <div className="col-12">
              <ul className="pagination mt_35">
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Previous">
                    <i className="fa-light fa-angle-left" />
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link active" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Next">
                    <i className="fa-light fa-angle-right" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/*========================
  BLOG GRID END
    =========================*/}
    </PetrixLayout>
  );
};
export default page;
