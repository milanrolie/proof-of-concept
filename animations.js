gsap.to("#legends-marquee", {
  scrollTrigger: {
    trigger: "#legends-marquee",
    scrub: 2,
    start: "top-=400",
    end: "bottom-=100",
  },
  "--x": 1.8,
});

// HERO SECTION VIDEO ANIMATION //
const iframeContainer = document.querySelector(".iframe-container");
const heroPlayBtn = document.querySelector(".hero-play-button button");
console.log(heroPlayBtn);

heroPlayBtn.addEventListener("click", () => {
  iframeContainer.classList.add("iframe-container-animation");

  setTimeout(() => {
    iframeContainer.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
  }, "500");
});

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

//HERO TITLE SLIDE ANIMATION
gsap.to(".slide-first", {
  x: 0,
  duration: 1,
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
        each: 0.3,
      },
      onComplete() {
        gsap.to(".slide-second", {
          opacity: 1,
          duration: 0.5,
          onComplete() {
            gsap.to(".hero-play-button", {
              opacity: 1,
              duration: 0.5,
            });
          },
        });
      },
    });
  },
});

let tl = gsap.timeline({ reversed: true });

tl.to("div", {
  opacity: 0.2,
  duration: 0.4,
  ease: Power0,
});

tl.to(
  ".mobile-menu",
  {
    y: 0,
    duration: 0.4,
    ease: Power0,
  },
  "<"
);

tl.to(
  ".open-menu-button",
  {
    rotation: 180,
    duration: 0.2,
  },
  "<"
);

tl.set("body", {
  overflow: "hidden",
});

const myAnimation = () => {
  tl.reversed(!tl.reversed());
};

document
  .querySelector(".open-menu-button")
  .addEventListener("click", myAnimation);
