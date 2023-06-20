gsap.to("#legends-marquee", {
  scrollTrigger: {
    trigger: "#legends-marquee",
    scrub: 2,
    start: "top-=400",
    end: "bottom-=100",
  },
  "--x": 1.8,
});

//-----------------HERO SECTION VIDEO ANIMATION-------------------------//

document
  .querySelector(".hero-play-button button")
  .addEventListener("click", () => {
    document
      .querySelector(".iframe-container")
      .classList.add("iframe-container-animation");
    setTimeout(() => {
      document.querySelector(".iframe-container").scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    }, "500");
  });

//-----------------NAV REMOVE ON SCROLL-------------------------//
const showAnim = gsap
  .from(".top-nav", {
    yPercent: -100,
    paused: true,
    duration: 0.2,
  })
  .progress(1);

ScrollTrigger.create({
  start: "top top",
  end: 99999,
  onUpdate: (self) => {
    self.direction === -1 ? showAnim.play() : showAnim.reverse();
  },
});

//-----------------HERO TITLE ANIMATION-------------------------//
gsap.to(".slide-first", {
  opacity: 1,
  scale: 1,
  duration: 0.2,
  delay: 0.5,
  stagger: {
    each: 0.4,
  },
  onComplete() {
    gsap.to(".hero-title-legends span", {
      scale: 1,
      duration: 0.2,
      opacity: 1,
      stagger: {
        from: "left",
        each: 0.2,
      },
      onComplete() {
        gsap.to(".slide-second", {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          onComplete() {
            gsap.to(".hero-video video", {
              x: 0,
              duration: 0.3,
            });
            gsap.to(".hero-play-button", {
              x: 0,
              opacity: 1,
              duration: 0.3,
            });
          },
        });
      },
    });
  },
});

//-----------------OPEN & CLOSE MENU-------------------------//
document
  .querySelector(".open-menu-button-wrapper")
  .addEventListener("click", () => {
    document.querySelector(".mobile-menu").classList.add("mobile-menu-slider");
    document.querySelector("body").style.overflow = "hidden";
    document.querySelectorAll(".logo path").forEach((path) => {
      path.classList.add("logo-path-mobile");
    });
    gsap.to(".menu-stagger", {
      y: 0,
      duration: 0.2,
      opacity: 1,
      delay: 0.2,
      ease: "none",
      stagger: {
        each: 0.1,
      },
    });
  });

document
  .querySelector(".close-menu-button-text")
  .addEventListener("click", () => {
    gsap.to(".menu-stagger", {
      y: -30,
      x: 0,
      duration: 0.2,
      opacity: 0,
      stagger: {
        each: 0.1,
      },
      onComplete() {
        document
          .querySelector(".mobile-menu")
          .classList.remove("mobile-menu-slider");
        document.querySelector("body").style.overflow = "scroll";
        document.querySelectorAll(".logo path").forEach((path) => {
          path.classList.remove("logo-path-mobile");
        });
      },
    });
  });

// ----------------- Numbers -----------------

gsap.to(".nr358", {
  innerText: 358,
  duration: 3.5,
  // delay: 0.1,
  snap: {
    innerText: 1,
  },
});

gsap.to(".nr12", {
  innerText: 12,
  duration: 2,
  delay: 1,
  snap: {
    innerText: 1,
  },
});

gsap.to(".nr04", {
  innerText: 04,
  duration: 1.5,
  // delay: 0.1,
  snap: {
    innerText: 1,
  },
});

gsap.to(".nr08", {
  innerText: 08,
  duration: 3,
  delay: 1.5,
  snap: {
    innerText: 1,
  },
});

gsap.from(".filled", {
  scrollTrigger: {
    trigger: ".filled",
    start: "center center",
    // markers: true,
  },
  stagger: 0.4,
  duration: 3,
  ease: Power4.easeOut,
  "--variable": 1,
});

//-----------------SCREEN WIDTH CHECK-----------------------//

// This function makes sure the menu is removed and body is set to scroll when user resizes the screen above 600px when in mobile menu //

window.addEventListener("resize", () => {
  if (window.innerWidth >= 600) {
    document
      .querySelector(".mobile-menu")
      .classList.remove("mobile-menu-slider");
    document.querySelector("body").style.overflow = "scroll";
  }
});

//-----------------CHANGE NAV COLOR ON SCROLL-----------------------//

const root = document.querySelector(":root");
const color = getComputedStyle(root).getPropertyValue("--link-hover-color");
const secondColor = getComputedStyle(root).getPropertyValue("--pictonBlue");
const logo = document.querySelector(".logo");
const intro = document.querySelector(".intro");
const navLinks = document.querySelectorAll(".top-nav a, .top-nav span");
const topNavSponsorButton = document.querySelector(".sponsor-button");
const startingLink = document.querySelector(".starting-link");
gsap.to(".top-nav", {
  scrollTrigger: {
    trigger: ".intro",
    start: "top -50px",
    end: "bottom 50px",
    onEnter() {
      logo.classList.add("color-change-onscroll");
      topNavSponsorButton.classList.add("change-button-background");
      startingLink.classList.add("change-color-starting-link");
      root.style.setProperty("--link-hover-color", "#3DBAE1");
      navLinks.forEach((link) => {
        link.classList.add("change-color-links-onscroll");
      });
    },
    onLeave() {
      logo.classList.remove("color-change-onscroll");
      topNavSponsorButton.classList.remove("change-button-background");
      startingLink.classList.remove("change-color-starting-link");
      root.style.setProperty("--link-hover-color", "#FFDA1D");
      navLinks.forEach((link) => {
        link.classList.remove("change-color-links-onscroll");
      });
    },
    onEnterBack() {
      logo.classList.add("color-change-onscroll");
      topNavSponsorButton.classList.add("change-button-background");
      startingLink.classList.add("change-color-starting-link");
      root.style.setProperty("--link-hover-color", "#3DBAE1");
      navLinks.forEach((link) => {
        link.classList.add("change-color-links-onscroll");
      });
    },
    onLeaveBack() {
      logo.classList.remove("color-change-onscroll");
      topNavSponsorButton.classList.remove("change-button-background");
      startingLink.classList.remove("change-color-starting-link");
      root.style.setProperty("--link-hover-color", "#FFDA1D");
      navLinks.forEach((link) => {
        link.classList.remove("change-color-links-onscroll");
      });
    },
    markers: true,
  },
});

// navLinks.forEach((link) => {
//   link.addEventListener("mouseover", () => {
//     link.style.color = "blue";
//   });
//   link.addEventListener("mouseleave", () => {
//     link.style.color = "white";
//   });
// });
