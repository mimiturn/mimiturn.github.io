import { ScrollTrigger, SplitText } from "@/lib/plugins";
import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger);
export const petrixUtility = {
  customMouse() {
    var mouse = { x: 0, y: 0 }; // Cursor position
    var pos = { x: 0, y: 0 }; // Cursor position
    var ratio = 0.15; // delay follow cursor
    var active = false;
    var ball = document.getElementById("ball");

    /** default */
    const defaultValue = {
      duration: 0.3,
      opacity: 0.5,
      width: "30px",
      height: "30px",
      backgroundColor: "transparent",
      border: "2px solid #555",
    };
    const hoverBall = {
      duration: 0.3,
      borderWidth: 0,
      opacity: "1!important",
      width: "120px!important",
      height: "120px!important",
      backgroundColor: "#010101",
    };
    gsap.set(ball, {
      // scale from middle and style ball
      xPercent: -50,
      yPercent: -50,
    });
    document.addEventListener("mousemove", mouseMove);
    function mouseMove(e) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }
    gsap.ticker.add(updatePosition);
    function updatePosition() {
      if (!active) {
        pos.x += (mouse.x - pos.x) * ratio;
        pos.y += (mouse.y - pos.y) * ratio;

        gsap.set(ball, { x: pos.x, y: pos.y });
      }
    }
    // link
    var links = document.querySelectorAll("a,.c-pointer,button,.progress");
    links.forEach((link) => {
      if (!link.classList.contains("project_slider")) {
        link.addEventListener("mouseenter", function () {
          gsap.to(ball, {
            duration: 0.3,
            borderWidth: 0,
            opacity: 0.5,
            backgroundColor: "#CCC",
            width: "80px",
            height: "80px",
          });
        });
        link.addEventListener("mouseleave", function () {
          gsap.to(ball, defaultValue);
        });
      }
    });

    // Data cursor
    var dataCursorElements = document.querySelectorAll("[data-cursor]");
    dataCursorElements.forEach((dataCursorElement) => {
      dataCursorElement.addEventListener("mouseenter", function () {
        ball.innerHTML = '<div class="ball-view"></div>';
        ball.querySelector(".ball-view").innerHTML =
          this.getAttribute("data-cursor");
        gsap.to(ball, hoverBall);
      });
      dataCursorElement.addEventListener("mouseleave", function () {
        var ballView = ball.querySelector(".ball-view");
        if (ballView) {
          ball.removeChild(ballView);
        }
        gsap.to(ball, defaultValue);
      });
    });

    // Slider
    var cursorArrows = document.querySelectorAll(".cursor-arrow");
    cursorArrows.forEach((cursorArrow) => {
      cursorArrow.addEventListener("mouseenter", function () {
        ball.innerHTML =
          '<div class="ball-arrow"><i class="fx-icon-long-next-arrow"></i></div>';
        gsap.to(ball, hoverBall);
      });
      cursorArrow.addEventListener("mouseleave", function () {
        var ballArrow = ball.querySelector(".ball-arrow");
        if (ballArrow) {
          ball.removeChild(ballArrow);
        }
        gsap.to(ball, defaultValue);
      });
    });

    // Image view
    var imageViews = document.querySelectorAll(".image-view");
    imageViews.forEach((imageView) => {
      imageView.addEventListener("mouseenter", function () {
        ball.innerHTML = '<div class="ball-image-view"></div>';
        ball.querySelector(".ball-image-view").innerHTML =
          this.getAttribute("data-img-cursor");
        gsap.to(ball, {
          duration: 0.3,
          borderWidth: 0,
          opacity: "1!important",
          width: "250px!important",
          height: "250px!important",
          borderRadius: "50%",
        });
      });
      imageView.addEventListener("mouseleave", function () {
        var ballImageView = ball.querySelector(".ball-image-view");
        if (ballImageView) {
          ball.removeChild(ballImageView);
        }
        gsap.to(ball, defaultValue);
      });
    });

    // Gallery
    var galleries = document.querySelectorAll(".gallery");
    galleries.forEach((gallery) => {
      gallery.addEventListener("mouseenter", function () {
        ball.innerHTML =
          '<div class="ball-gallery"><i class="fa-sharp fa-solid fa-eye"></i></div>';
        gsap.to(ball, hoverBall);
      });
      gallery.addEventListener("mouseleave", function () {
        var ballGallery = ball.querySelector(".ball-gallery");
        if (ballGallery) {
          ball.removeChild(ballGallery);
        }
        gsap.to(ball, defaultValue);
      });
    });
  },
  preloader() {
    const svg = document.getElementById("svg");
    const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
    const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";
    const tl = gsap.timeline();

    tl.to(".preloader-text", {
      delay: 0.5,
      y: -100,
      opacity: 0,
      onComplete() {
        var hasAnim = document.querySelectorAll(
          ".banner_text_center h1,.breadcrumb h1"
        );
        hasAnim.forEach(function (element) {
          var splitType = "lines, chars";
          var splitto = new SplitText(element, {
            type: splitType,
            linesClass: "anim_line",
            charsClass: "anim_char",
            wordsClass: "anim_word",
          });
          var lines = element.querySelectorAll(".anim_line"),
            words = element.querySelectorAll(".anim_word"),
            chars = element.querySelectorAll(".anim_char");
          gsap.fromTo(
            chars,
            { y: "100%", opacity: 0 },
            {
              y: "0%",
              duration: 0.8,
              stagger: 0.01,
              opacity: 1,
              ease: "circ.out",
            }
          );
        });
      },
    })
      .to(svg, {
        duration: 0.1,
        // attr: { d: curve },
        ease: "power2.easeIn",
      })
      .to(svg, {
        duration: 0.5,
        attr: { d: flat },
        ease: "power2.easeOut",
      })
      .to(".preloader", {
        y: -1500,
      })
      .to(".preloader", {
        zIndex: -1,
        display: "none",
      });
  },
  headingRevel() {
    if (window.innerWidth > 767) {
      document.querySelectorAll(".has-animation").forEach(function (element) {
        var splitType = "lines,chars"; // Adjusted space to match your original setting
        var splitto = new SplitText(element, {
          type: splitType,
          linesClass: "anim_line",
          charsClass: "anim_char",
          wordsClass: "anim_word",
        });

        // QuerySelectorAll returns a NodeList, we convert it to Array to use the forEach method
        var chars = Array.from(element.querySelectorAll(".anim_char"));

        // GSAP animation
        gsap.fromTo(
          chars,
          { y: "100%" },
          {
            y: "0%",
            duration: 0.8,
            stagger: 0.01,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element.parentNode,
              start: "top center+=300",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }
    if (window.innerWidth > 767) {
      const splitTextLines = document.querySelectorAll(".text-anim");
      splitTextLines.forEach((splitTextLine) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: splitTextLine,
            start: "top 90%",
            duration: 0.5,
            end: "bottom 60%",
            scrub: false,
            markers: false,
            toggleActions: "play none none none",
          },
        });

        const itemSplitted = new SplitText(splitTextLine, { type: "lines" });
        splitTextLine.style.perspective = "400px";
        itemSplitted.lines.forEach((line) => {
          gsap.set(line, { transformOrigin: "top center -50" });
        });
        tl.from(itemSplitted.lines, {
          duration: 1,
          opacity: 0,
          rotationX: -80,
          force3D: true,
          stagger: 0.1,
        });
      });
    }
  },
  imgToSVG() {
    document.querySelectorAll("img.svg").forEach((el) => {
      const imgID = el.getAttribute("id");
      const imgClass = el.getAttribute("class");
      const imgURL = el.getAttribute("src");

      fetch(imgURL)
        .then((data) => data.text())
        .then((response) => {
          const parser = new DOMParser();
          const xmlDoc = parser.parseFromString(response, "text/html");
          let svg = xmlDoc.querySelector("svg");

          if (typeof imgID !== "undefined") {
            svg.setAttribute("id", imgID);
          }

          if (typeof imgClass !== "undefined") {
            svg.setAttribute("class", imgClass + " replaced-svg");
          }

          svg.removeAttribute("xmlns:a");
          if (el.parentNode) {
            el.parentNode.replaceChild(svg, el);
          }
        });
    });
  },
  buttonHover() {
    class Magnet {
      constructor(target, magnetism = 0.2) {
        this.target = target;
        this.magnetism = magnetism;
        this.interval;
        this.hover = false;
        this.bubble;
        this.content;
        this.initX;
        this.initY;
        this.cursorX = 0;
        this.cursorY = 0;
        this.buttonX = 0;
        this.buttonY = 0;
        this.contentX = 0;
        this.contentY = 0;
        this.bubbleX = 0;
        this.bubbleY = 0;
        this.init();
      }

      init() {
        this.initX =
          this.target.getBoundingClientRect().left +
          this.target.offsetWidth / 2;
        this.initY =
          this.target.getBoundingClientRect().top +
          this.target.offsetHeight / 2;

        let inner = this.target.innerHTML;
        inner = `<span class="js-magnet-content magnet-content">${inner}</span>`;
        inner = `<i class="js-magner-bubble magnet-bubble"></i>${inner}`;
        this.target.innerHTML = inner;
        this.bubble = this.target.querySelector(".js-magner-bubble");
        this.content = this.target.querySelector(".js-magnet-content");

        let timelineBubble = gsap
          .timeline({ paused: true })
          .to(this.bubble, {
            duration: 0,
            opacity: 1,
          })
          .to(this.bubble, {
            duration: 0.6,
            scaleX: "15000%",
            scaleY: "15000%",
          });
        const ball = document.getElementById("ball");
        this.target.addEventListener("mouseenter", (e) => {
          this.hover = true;
          this.moveBubble(e);
          timelineBubble.play();
          let that = this;
          this.interval = setInterval(this.magnetize, 30, that);
          ball.classList.remove("d-block");
          ball.classList.add("d-none");
        });

        this.target.addEventListener("mouseleave", (e) => {
          this.moveBubble(e);
          timelineBubble.reverse();
          this.hover = false;
          this.cursorX = 0;
          this.cursorY = 0;
          ball.classList.remove("d-none");
          ball.classList.add("d-block");
        });

        this.target.addEventListener("mousemove", (e) => {
          let targetX =
            this.target.getBoundingClientRect().left +
            this.target.offsetWidth / 2;
          let targetY =
            this.target.getBoundingClientRect().top +
            this.target.offsetHeight / 2;
          this.cursorX =
            ((e.clientX - targetX) * 100) / (this.target.offsetWidth / 2);
          this.cursorY =
            ((e.clientY - targetY) * 100) / (this.target.offsetHeight / 2);
        });
      }

      moveBubble(e) {
        this.bubbleX = (e.layerX * 100) / this.target.offsetWidth;
        this.bubbleY = (e.layerY * 100) / this.target.offsetHeight;
        this.bubble.style.left = this.bubbleX + "%";
        this.bubble.style.top = this.bubbleY + "%";
      }

      magnetize(that) {
        let distance = Math.sqrt(
          (that.initX - that.buttonX) ** 2 + (that.initY - that.buttonY) ** 2
        );
        let magnetized = distance > 0.01 && that.hover ? true : false;

        if (magnetized) {
          that.buttonX += (that.cursorX - that.buttonX) * 0.2;
          that.buttonY += (that.cursorY - that.buttonY) * 0.2;
          that.contentX += (that.cursorX - that.contentX) * 0.2;
          that.contentY += (that.cursorY - that.contentY) * 0.2;
          let buttonTranslateX = `translateX(${
            that.buttonX * that.magnetism
          }%)`;
          let buttonTranslateY = `translateY(${
            that.buttonY * that.magnetism
          }%)`;
          let contentTranslateX = `translateX(${
            (-that.contentX * that.magnetism) / 2
          }%)`;
          let contentTranslateY = `translateY(${
            (-that.contentY * that.magnetism) / 2
          }%)`;
          that.target.style.transform =
            buttonTranslateX + " " + buttonTranslateY;
          that.content.style.transform =
            contentTranslateX + " " + contentTranslateY;
        } else {
          that.target.style.transform = "translateX(0%) translateY(0%)";
          that.content.style.transform = "translateX(0%) translateY(0%)";
          clearInterval(that.interval);
        }
      }
    }

    let magnets = document.querySelectorAll(".circle_btn");
    magnets.forEach((magnet) => {
      new Magnet(magnet);
    });
  },
  normalHover() {
    class Magnet {
      constructor(target, magnetism = 0.2) {
        this.target = target;
        this.magnetism = magnetism;
        this.interval;
        this.hover = false;
        this.bubble;
        this.content;
        this.initX;
        this.initY;
        this.cursorX = 0;
        this.cursorY = 0;
        this.buttonX = 0;
        this.buttonY = 0;
        this.contentX = 0;
        this.contentY = 0;
        this.bubbleX = 0;
        this.bubbleY = 0;
        this.init();
      }

      init() {
        this.initX =
          this.target.getBoundingClientRect().left +
          this.target.offsetWidth / 2;
        this.initY =
          this.target.getBoundingClientRect().top +
          this.target.offsetHeight / 2;

        let inner = this.target.innerHTML;
        inner = `<span class="js-magnet-content magnet-content">${inner}</span>`;
        inner = `<i class="js-magner-bubble magnet-bubble"></i>${inner}`;
        this.target.innerHTML = inner;
        this.bubble = this.target.querySelector(".js-magner-bubble");
        this.content = this.target.querySelector(".js-magnet-content");

        let timelineBubble = gsap
          .timeline({ paused: true })
          .to(this.bubble, {
            duration: 0,
            opacity: 1,
          })
          .to(this.bubble, {
            duration: 0.6,
            scaleX: "15000%",
            scaleY: "15000%",
          });
        const ball = document.getElementById("ball");
        this.target.addEventListener("mouseenter", (e) => {
          this.hover = true;
          this.moveBubble(e);
          timelineBubble.play();
          let that = this;
          this.interval = setInterval(this.magnetize, 30, that);
          ball.classList.remove("d-block");
          ball.classList.add("d-none");
        });

        this.target.addEventListener("mouseleave", (e) => {
          this.moveBubble(e);
          timelineBubble.reverse();
          this.hover = false;
          this.cursorX = 0;
          this.cursorY = 0;
          ball.classList.remove("d-none");
          ball.classList.add("d-block");
        });

        this.target.addEventListener("mousemove", (e) => {
          let targetX =
            this.target.getBoundingClientRect().left +
            this.target.offsetWidth / 2;
          let targetY =
            this.target.getBoundingClientRect().top +
            this.target.offsetHeight / 2;
          this.cursorX =
            ((e.clientX - targetX) * 100) / (this.target.offsetWidth / 2);
          this.cursorY =
            ((e.clientY - targetY) * 100) / (this.target.offsetHeight / 2);
        });
      }

      moveBubble(e) {
        this.bubbleX = (e.layerX * 100) / this.target.offsetWidth;
        this.bubbleY = (e.layerY * 100) / this.target.offsetHeight;
        this.bubble.style.left = this.bubbleX + "%";
        this.bubble.style.top = this.bubbleY + "%";
      }

      magnetize(that) {
        let distance = Math.sqrt(
          (that.initX - that.buttonX) ** 2 + (that.initY - that.buttonY) ** 2
        );
        let magnetized = distance > 0.01 && that.hover ? true : false;

        if (magnetized) {
          that.buttonX += (that.cursorX - that.buttonX) * 0.2;
          that.buttonY += (that.cursorY - that.buttonY) * 0.2;
          that.contentX += (that.cursorX - that.contentX) * 0.2;
          that.contentY += (that.cursorY - that.contentY) * 0.2;
          let buttonTranslateX = `translateX(${
            that.buttonX * that.magnetism
          }%)`;
          let buttonTranslateY = `translateY(${
            that.buttonY * that.magnetism
          }%)`;
          let contentTranslateX = `translateX(${
            (-that.contentX * that.magnetism) / 2
          }%)`;
          let contentTranslateY = `translateY(${
            (-that.contentY * that.magnetism) / 2
          }%)`;
          //   that.target.style.transform =
          //     buttonTranslateX + " " + buttonTranslateY;
          //   that.content.style.transform =
          //     contentTranslateX + " " + contentTranslateY;
        } else {
          that.target.style.transform = "translateX(0%) translateY(0%)";
          that.content.style.transform = "translateX(0%) translateY(0%)";
          clearInterval(that.interval);
        }
      }
    }

    let magnets = document.querySelectorAll(".btn_hover");
    magnets.forEach((magnet) => {
      new Magnet(magnet);
    });
  },
  menuFix() {
    const mainMenu = document.querySelector(".main_menu");
    if (mainMenu) {
      window.addEventListener("scroll", function () {
        if (window.pageYOffset > 40) {
          mainMenu.classList.add("menu_fix");
        } else {
          mainMenu.classList.remove("menu_fix");
        }
      });
    }
  },
};
