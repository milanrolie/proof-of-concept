gsap.to("#legends-marquee", {
    scrollTrigger: {
        trigger: "#legends-marquee",
        scrub: 2,
        start: 'top-=400',
        end: 'bottom-=100',
    },
    '--x': 1.8
});