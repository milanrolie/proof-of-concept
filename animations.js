import * as prismic from 'https://cdn.skypack.dev/@prismicio/client';

const repositoryName = 'projectink'
const accessToken = 'MC5aSTNldEJVQUFDb0FCNFFt.dSHvv71CND8t77-977-977-9Mzp377-9fjTvv73vv73vv73vv73vv73vv73vv71G77-977-9GO-_ve-_vWrvv718'
//roep de client(tussenlaag) aan en geef de repo naam en accestoken mee om in de api te kunnen werken
const client = prismic.createClient(repositoryName, { accessToken })
//als de connectie gemaakt kan worden haal dan alle data die als type speler heeft op
let childrenSaved

const init = async () => {
  const graph = await client.getAllByType('graph')
  
  childrenSaved = graph[0].data.children_saved
}
console.log(childrenSaved); 

init()


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
        each: 0.15,
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
    gsap.to(".menu-stagger", {
      y: 0,
      opacity: 1,
      delay: 0.4,
      ease: "none",
      stagger: {
        each: 0.2,
      },
    });
  });

document.querySelector(".close-menu-button").addEventListener("click", () => {
  document.querySelector(".mobile-menu").classList.remove("mobile-menu-slider");
  document.querySelector("body").style.overflow = "scroll";
  gsap.to(".menu-stagger", {
    y: -30,
    opacity: 0,
    duration: 0.2,
    delay: 0.4,
    stagger: {
      each: 0.1,
    },
  });
});

// ----------------- Numbers -----------------

gsap.to(".nr358", {
  scrollTrigger: {
    trigger: ".filled",
    start: "center center",
    // markers: true,
  },
  innerText: 358,
  duration: 3,
  ease: Power4.easeOut,
  snap: {
    innerText: 1,
  },
});

gsap.to(".nr12", {
  scrollTrigger: {
    trigger: ".filled",
    start: "center center",
    // markers: true,
  },
  innerText: 12,
  duration: 2,
  delay: 1,
  snap: {
    innerText: 1,
    ease: Power4.easeOut,
  },
});

gsap.to(".nr04", {
  scrollTrigger: {
    trigger: ".filled",
    start: "center center",
    // markers: true,
  },
<<<<<<< Updated upstream
  innerText: 04,
=======
  innerText: 4, 
>>>>>>> Stashed changes
  duration: 1,
  delay: 1,
  snap: {
    innerText: 1,
    ease: Power4.easeOut,
  },
});

gsap.to(".nr08", {
  scrollTrigger: {
    trigger: ".filled",
    start: "center center",
    // markers: true,
  },
<<<<<<< Updated upstream
  innerText: 08,
=======
  innerText: 8, 
>>>>>>> Stashed changes
  duration: 3,
  delay: 1.5,
  snap: {
    innerText: 1,
    ease: Power4.easeOut,
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
// const color = getComputedStyle(root).getPropertyValue("--link-hover-color");
// const secondColor = getComputedStyle(root).getPropertyValue("--pictonBlue");
const logo = document.querySelector(".logo");
const intro = document.querySelector(".intro");
const navLinks = document.querySelectorAll(".top-nav-link, .top-nav span");
const topNavSponsorButton = document.querySelector("#top-nav-sponsor-button");
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
      root.style.setProperty("--button-hover-color", "#3DBAE1");
      root.style.setProperty("--top-nav-sponsor-button-hover-color", "#FFFFFF");
      navLinks.forEach((link) => {
        link.classList.add("change-color-links-onscroll");
      });
    },
    onLeave() {
      logo.classList.remove("color-change-onscroll");
      topNavSponsorButton.classList.remove("change-button-background");
      startingLink.classList.remove("change-color-starting-link");
      root.style.setProperty("--link-hover-color", "#FFDA1D");
      root.style.setProperty("--button-hover-color", "#FFFFFF");
      root.style.setProperty("--top-nav-sponsor-button-hover-color", "#051A1A");
      navLinks.forEach((link) => {
        link.classList.remove("change-color-links-onscroll");
      });
    },
    onEnterBack() {
      logo.classList.add("color-change-onscroll");
      topNavSponsorButton.classList.add("change-button-background");
      startingLink.classList.add("change-color-starting-link");
      root.style.setProperty("--link-hover-color", "#3DBAE1");
      root.style.setProperty("--button-hover-color", "#3DBAE1");
      root.style.setProperty("--top-nav-sponsor-button-hover-color", "#FFFFFF");
      navLinks.forEach((link) => {
        link.classList.add("change-color-links-onscroll");
      });
    },
    onLeaveBack() {
      logo.classList.remove("color-change-onscroll");
      topNavSponsorButton.classList.remove("change-button-background");
      startingLink.classList.remove("change-color-starting-link");
      root.style.setProperty("--link-hover-color", "#FFDA1D");
      root.style.setProperty("--button-hover-color", "#FFFFFF");
      root.style.setProperty("--top-nav-sponsor-button-hover-color", "#051A1A");
      navLinks.forEach((link) => {
        link.classList.remove("change-color-links-onscroll");
      });
    },
  },
});
