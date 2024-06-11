"use client";
import TextHoverAnimation from "@/components/TextHoverAnimation";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const currentPath = usePathname();
  const activeMenuFuntion = (value) => {
    return value.some((el) => currentPath.includes(el)) ? "active" : "";
  };
  return (
    <nav className="navbar navbar-expand-lg main_menu">
      <div className="container container_large">
        <Link className="navbar-brand" href="/">
          <img src="images/logo.png" alt="Petrix" className="img-fluid" />
        </Link>
        <button className="navbar-toggler" onClick={() => setToggle(!toggle)}>
          <i className="fa-sharp fa-sharp fa-regular fa-bars menu_icon_bar" />
          <i className="fa-regular fa-xmark close_icon_close" />
        </button>
        <div
          className={`navbar-collapse collapse ${toggle ? "show" : ""}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav m-auto">
            <li className="nav-item">
              <Link
                className={`nav-link text_hover_animaiton ${
                  currentPath.includes("home") || currentPath == "/"
                    ? "active"
                    : ""
                }`}
                href="/"
              >
                <TextHoverAnimation text={"Home"} />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link text_hover_animaiton ${activeMenuFuntion([
                  "about_us",
                ])}`}
                href="about_us"
              >
                <TextHoverAnimation text={"About Me"} />
              </Link>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link text_hover_animaiton ${activeMenuFuntion([
                  "portfolio",
                  "portfolio_details",
                ])}`}
                href="#"
              >
                <TextHoverAnimation text={"Portfolio"} />{" "}
                <i className="far fa-angle-down" />
              </a>
              <ul className="droap_menu">
                <li>
                  <Link href="portfolio">Portfolio</Link>
                </li>
                <li>
                  <Link href="portfolio_details">Portfolio Details</Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link text_hover_animaiton ${activeMenuFuntion([
                  "services",
                  "service_details",
                ])}`}
                href="#"
              >
                <TextHoverAnimation text={"Services"} />{" "}
                <i className="far fa-angle-down" />
              </a>
              <ul className="droap_menu">
                <li>
                  <Link href="services">Services</Link>
                </li>
                <li>
                  <Link href="service_details">Service Details</Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link text_hover_animaiton ${activeMenuFuntion([
                  "blog_grid",
                  "blog_list",
                  "blog_details",
                ])}`}
                href="#"
              >
                <TextHoverAnimation text={"Blog"} />{" "}
                <i className="far fa-angle-down" />
              </a>
              <ul className="droap_menu">
                <li>
                  <Link href="blog_grid">Blog Grid</Link>
                </li>
                <li>
                  <Link href="blog_list">Blog List</Link>
                </li>
                <li>
                  <Link href="blog_details">Blog Details</Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link text_hover_animaiton ${activeMenuFuntion([
                  "contact_us",
                ])}`}
                href="contact_us"
              >
                <TextHoverAnimation text={"Contact"} />
              </Link>
            </li>
          </ul>
          <div className="right_menu">
            <Link href="contact_us" className="btn_hover">
              Let's Talk
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Header;
