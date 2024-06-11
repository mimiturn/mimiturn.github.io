import Breadcrumb from "@/components/Breadcrumb";
import PetrixLayout from "@/layout/PetrixLayout";
import Link from "next/link";
const page = () => {
  return (
    <PetrixLayout>
      {/*========================
  BREADCRUMB START
    =========================*/}
      <Breadcrumb text={"blog list"} />
      {/*========================
  BREADCRUMB END
    =========================*/}
      {/*========================
  BLOG LIST START
    =========================*/}
      <section className="blog_list pb_120 xs_pb_80" id="blog">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                <div className="col-xl-12">
                  <div className="blog_list_item fade_up">
                    <h4>August 11, 2023</h4>
                    <Link className="title" href="blog_details">
                      Fresh design ideas &amp; inspiration for 2023
                    </Link>
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat excepteur sint occaecat
                      cupidatat non proident,
                    </p>
                    <Link
                      href="blog_details"
                      data-cursor="<i class='fa-sharp fa-light fa-arrow-up-right'></i>"
                      className="img hover_img"
                    >
                      <div className="img-box">
                        <img
                          src="images/portfolio_img_7.jpg"
                          alt="blog"
                          className="img-fluid"
                        />
                        <img
                          src="images/portfolio_img_7.jpg"
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
                <div className="col-xl-12">
                  <div className="blog_list_item fade_up">
                    <h4>August 11, 2023</h4>
                    <Link className="title" href="blog_details">
                      What are the new trends in web design?
                    </Link>
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat excepteur sint occaecat
                      cupidatat non proident,
                    </p>
                    <Link
                      href="blog_details"
                      data-cursor="<i class='fa-sharp fa-light fa-arrow-up-right'></i>"
                      className="img hover_img"
                    >
                      <div className="img-box">
                        <img
                          src="images/portfolio_img_9.jpg"
                          alt="blog"
                          className="img-fluid"
                        />
                        <img
                          src="images/portfolio_img_9.jpg"
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
                <div className="col-xl-12">
                  <div className="blog_list_item fade_up">
                    <h4>August 11, 2023</h4>
                    <Link className="title" href="blog_details">
                      Fresh design ideas &amp; inspiration for 2023
                    </Link>
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat excepteur sint occaecat
                      cupidatat non proident,
                    </p>
                    <Link
                      href="blog_details"
                      data-cursor="<i class='fa-sharp fa-light fa-arrow-up-right'></i>"
                      className="img hover_img"
                    >
                      <div className="img-box">
                        <img
                          src="images/portfolio_img_12.jpg"
                          alt="blog"
                          className="img-fluid"
                        />
                        <img
                          src="images/portfolio_img_12.jpg"
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
                <div className="col-xl-12">
                  <div className="blog_list_item fade_up">
                    <h4>August 11, 2023</h4>
                    <Link className="title" href="blog_details">
                      What are the new trends in web design?
                    </Link>
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat excepteur sint occaecat
                      cupidatat non proident,
                    </p>
                    <Link
                      href="blog_details"
                      data-cursor="<i class='fa-sharp fa-light fa-arrow-up-right'></i>"
                      className="img hover_img"
                    >
                      <div className="img-box">
                        <img
                          src="images/portfolio_img_11.jpg"
                          alt="blog"
                          className="img-fluid"
                        />
                        <img
                          src="images/portfolio_img_11.jpg"
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
            <div className="col-lg-4">
              <div className="sidebar" id="sticky_sidebar">
                <div className="sidebar_search">
                  <form>
                    <input type="text" placeholder="Search" />
                    <button type="submit">
                      <i className="fa-sharp fa-regular fa-magnifying-glass" />
                    </button>
                  </form>
                </div>
                <div className="sidebar_services">
                  <h3>Categories</h3>
                  <ul>
                    <li>
                      <Link href="service_details">Agency Solution</Link>
                    </li>
                    <li>
                      <Link href="service_details">Digital</Link>
                    </li>
                    <li>
                      <Link href="service_details">Creative Agency</Link>
                    </li>
                    <li>
                      <Link href="service_details">Software</Link>
                    </li>
                  </ul>
                </div>
                <div className="sidebar_post">
                  <h3>Recent Posts</h3>
                  <ul>
                    <li>
                      <div className="img">
                        <img
                          src="images/blog_img_5.jpg"
                          alt="blog"
                          className="img-fluid w-100"
                        />
                      </div>
                      <div className="text">
                        <p>August 19, 2023</p>
                        <Link href="blog_details">
                          Fresh design ideas &amp; inspiration for 2023
                        </Link>
                      </div>
                    </li>
                    <li>
                      <div className="img">
                        <img
                          src="images/blog_img_3.jpg"
                          alt="blog"
                          className="img-fluid w-100"
                        />
                      </div>
                      <div className="text">
                        <p>August 19, 2023</p>
                        <Link href="blog_details">
                          Fresh design ideas &amp; inspiration for 2023
                        </Link>
                      </div>
                    </li>
                    <li>
                      <div className="img">
                        <img
                          src="images/blog_img_2.jpg"
                          alt="blog"
                          className="img-fluid w-100"
                        />
                      </div>
                      <div className="text">
                        <p>August 19, 2023</p>
                        <Link href="blog_details">
                          Fresh design ideas &amp; inspiration for 2023
                        </Link>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="sidebar_tags">
                  <h3>Popular Tags</h3>
                  <ul>
                    <li>
                      <a href="#">Agency</a>
                    </li>
                    <li>
                      <a href="#">Financials</a>
                    </li>
                    <li>
                      <a href="#">Man</a>
                    </li>
                    <li>
                      <a href="#">Branding</a>
                    </li>
                    <li>
                      <a href="#">Creative</a>
                    </li>
                    <li>
                      <a href="#">Digital</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*========================
  BLOG LIST END
    =========================*/}
    </PetrixLayout>
  );
};
export default page;
