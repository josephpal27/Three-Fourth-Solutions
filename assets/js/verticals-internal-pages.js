
// Functionality for Domain Expertise Cards
let mm = gsap.matchMedia();

mm.add(
  {
    isMobile: "(max-width: 767px)",
    isDesktop: "(min-width: 768px)",
  },
  (context) => {
    let { isMobile, isDesktop } = context.conditions;

    document
      .querySelectorAll(".domain-expertise-card-row .expertise-card")
      .forEach((card) => {
        const overlay = card.querySelector(".overlay");
        const icon = card.querySelector(".icon");
        const heading = card.querySelector("span");
        const para = card.querySelector("p");
        const img = card.querySelector(".card-img");

        let tl = gsap.timeline({ paused: true });

        tl.to(overlay, { opacity: 0.7, duration: 0.5, ease: "power3.out" }, 0)
          .to(icon, { opacity: 0, duration: 0.5, ease: "power3.inOut" }, 0)
          .to(
            heading,
            { y: isMobile ? -40 : -70, duration: 0.4, ease: "power1.inOut" },
            0
          )
          .to(
            para,
            {
              opacity: 1,
              y: isMobile ? -30 : -60,
              duration: 0.5,
              ease: "power1.out",
            },
            "-=0.2"
          );

        card.addEventListener("mouseenter", () => tl.play());
        card.addEventListener("mouseleave", () => tl.reverse());
      });
  }
);

// ---------------------------------------------------------------------------------------------------------------

// Functionality For Public Relations Page Media Cards Slider
 const prMediaSwiper = new Swiper(".media-cards-slider", {
  slidesPerView: 3,
  loop: true,
  speed: 800,
  spaceBetween: 25,
  grabCursor: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  breakpoints: {
    992: { slidesPerView: 3 },
    768: { slidesPerView: 3 },
    480: { slidesPerView: 2 },
    0: { slidesPerView: 1 }
  }
});

// Make sure autoplay starts even if something interrupted it
prMediaSwiper.autoplay.start();

// Restart autoplay after ScrollTrigger refresh
ScrollTrigger.addEventListener("refresh", () => {
  prMediaSwiper.update();
  prMediaSwiper.autoplay.start();
});

// ---------------------------------------------------------------------------------------------------------------

// Refresh ScrollTrigger on each lazy-loaded image
document.querySelectorAll('#studios-stack-section-3 .our-portfolio img').forEach(img => {
  img.addEventListener('load', () => {
    ScrollTrigger.refresh();
  });
});

// ---------------------------------------------------------------------------------------------------------------