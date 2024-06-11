import TextHoverAnimation from "@/components/TextHoverAnimation";
const Footer = () => {
  return (
    <footer id="footer" style={{ background: "url(images/golden_bg.jpg)" }}>
      <div className="footer_heading">
        <div className="container">
          <ul>
            <li>
              <a href="mailto:info@demo.com">info@demo.com</a>
            </li>
            <li>
              <p>14 tottenham road, london, england</p>
            </li>
            <li>
              <a href="callto:+1(0)987654321">+1(0) 987 654 321</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer_link">
        <div className="container">
          <ul>
            <li className="fade_bottom" data-trigerid="footer">
              <a href="#" data-cursor='<i class="fa-brands fa-instagram"></i>'>
                My Instagram
              </a>
            </li>
            <li className="fade_bottom" data-trigerid="footer">
              <a href="#" data-cursor='<i class="fa-brands fa-behance"></i>'>
                My Behance
              </a>
            </li>
            <li className="fade_bottom" data-trigerid="footer">
              <a href="#" data-cursor='<i class="fa-brands fa-twitter"></i>'>
                My Twitter
              </a>
            </li>
            <li className="fade_bottom" data-trigerid="footer">
              <a
                href="#"
                data-cursor='<i class="fa-brands fa-linkedin-in"></i>'
              >
                my Linkedin
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer_copyright">
        <div className="container">
          <div className="footer_copyright_text">
            <p>
              Copyright © {new Date().getFullYear()} Petrix. All rights
              reserved.
            </p>
            <ul>
              <li>
                <a href="#" className="text_hover_animaiton">
                  <TextHoverAnimation text={"Terms & Condition"} />
                </a>
              </li>
              <li>
                <a href="#" className="text_hover_animaiton">
                  <TextHoverAnimation text={"Privacy Policy"} />
                </a>
              </li>
            </ul>
            <a className="scroll_button" href="#body">
              <i className="fa-light fa-arrow-up" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
