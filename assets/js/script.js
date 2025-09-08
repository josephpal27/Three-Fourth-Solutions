// Initialize Lenis
const lenis = new Lenis({
  duration: 1.2, // smoothness speed
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // ease-out
  smoothWheel: true,
  smoothTouch: true, // if you want smooth scrolling on touch devices
});

// Use Lenis with GSAP's ScrollTrigger
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

lenis.on('scroll', ScrollTrigger.update);

// ---------------------------------------------------------------------------------------------------------------

// Functionality For Stacking Sections Using GSAP
document.addEventListener("DOMContentLoaded", () => {
  const cards = gsap.utils.toArray(".stack-section");

  cards.forEach((card, i) => {
    const nextCard = cards[i + 1];

    if (nextCard) {
      ScrollTrigger.create({
        trigger: card,
        start: "bottom bottom", // start pinning when bottom hits bottom of viewport
        endTrigger: nextCard,
        end: "top top", // unpin when next card reaches top
        pin: true,
        pinSpacing: false,
        markers: false,
      });
    }
  });
});

// ---------------------------------------------------------------------------------------------------------------

// Functionality For Custom Cursor Animation
(function () {
  const dot = document.getElementById("cursor-dot");
  const ring = document.getElementById("cursor-ring");

  // Current mouse position
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;

  // Rendered positions (for easing)
  let dotX = mouseX,
    dotY = mouseY;
  let ringX = mouseX,
    ringY = mouseY;

  // Easing factors
  const dotEasing = 0.35;
  const ringEasing = 0.12;

  // Update mouse coordinates on move
  window.addEventListener(
    "mousemove",
    (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    },
    { passive: true }
  );

  // The animation loop
  function render() {
    // ease dot (snappy)
    dotX += (mouseX - dotX) * dotEasing;
    dotY += (mouseY - dotY) * dotEasing;

    // ease ring (lag)
    ringX += (mouseX - ringX) * ringEasing;
    ringY += (mouseY - ringY) * ringEasing;

    // apply transforms
    dot.style.transform = `translate3d(${dotX}px, ${dotY}px, 0) translate(-50%, -50%)`;
    ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;

    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
})();

// ---------------------------------------------------------------------------------------------------------------

// Functionality For Home Page Preloader
// document.addEventListener("DOMContentLoaded", function() {
//   const preloader = document.getElementById("preloader");

//   if (window.location.pathname === "/" || window.location.pathname.endsWith("index.html")) {
//     window.addEventListener("load", function() {
//       setTimeout(() => {
//         preloader.classList.add("hide");
//       }, 500); // slight delay for effect
//     });
//   } else {
//     preloader.style.display = "none";
//   }
// });

document.addEventListener("DOMContentLoaded", function () {
  const preloader = document.getElementById("preloader");
  const mainContent = document.getElementById("home-stack-section-1");

  if (window.location.pathname === "/" || window.location.pathname.endsWith("index.html")) {
    window.addEventListener("load", function () {
      setTimeout(() => {
        preloader.classList.add("hide");
        setTimeout(() => {
          mainContent.classList.add("reveal");
        }, 100); // matches preloader transition
      }, 500);
    });
  } else {
    preloader.style.display = "none";
    mainContent.classList.add("reveal");
  }
});

// ---------------------------------------------------------------------------------------------------------------

// Functionality For Home Page Trusted By Cards Hover Effect
VanillaTilt.init(document.querySelectorAll(".trusted-by-card-row .trust-card"), {
    max: 15,
    speed: 400,
    glare: true,
    "max-glare": 0.2
});

// ---------------------------------------------------------------------------------------------------------------

// Functionality For Press & Media Page Spotlight Media Cards Hover Effect
VanillaTilt.init(document.querySelectorAll(".spotlight .media-row .media-box"), {
    max: 15,
    speed: 400,
    glare: true,
    "max-glare": 0.2
});

// ---------------------------------------------------------------------------------------------------------------

// Functionality For Home Page Awards Slider
 const awardsSwiper = new Swiper(".awards-slider", {
  slidesPerView: 4,
  loop: true,
  speed: 600,
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
    992: { slidesPerView: 4 },
    768: { slidesPerView: 3 },
    480: { slidesPerView: 2 },
    0: { slidesPerView: 1 }
  }
});

// Make sure autoplay starts even if something interrupted it
awardsSwiper.autoplay.start();

// Restart autoplay after ScrollTrigger refresh
ScrollTrigger.addEventListener("refresh", () => {
  awardsSwiper.update();
  awardsSwiper.autoplay.start();
});

// ---------------------------------------------------------------------------------------------------------------

// The TFS Network Story Sutra Logo Hover Effect
const logoBox = document.getElementById("story-sutra-logo-box");
const logoImg = logoBox.querySelector("img");

function changeLogo(newSrc) {
    logoImg.src = newSrc;
}

logoBox.addEventListener("mouseenter", () => {
  changeLogo("assets/images/logo/story-sutra.webp");
});
logoBox.addEventListener("mouseleave", () => {
  changeLogo("assets/images/logo/story-sutra-black.webp");
});

// ---------------------------------------------------------------------------------------------------------------

// Refresh ScrollTrigger after all images are loaded
window.addEventListener("load", function () {
  setTimeout(() => {
    ScrollTrigger.refresh();
  }, 200); // small delay for layout stability
});

// Refresh ScrollTrigger on each lazy-loaded image
document.querySelectorAll('.clients-slider img').forEach(img => {
  img.addEventListener('load', () => {
    ScrollTrigger.refresh();
  });
});

document.querySelectorAll('.meet-the-team img').forEach(img => {
  img.addEventListener('load', () => {
    ScrollTrigger.refresh();
  });
});

document.querySelectorAll('.hall-of-fame img').forEach(img => {
  img.addEventListener('load', () => {
    ScrollTrigger.refresh();
  });
});

document.querySelectorAll('.tfs-network-logos img').forEach(img => {
  img.addEventListener('load', () => {
    ScrollTrigger.refresh();
  });
});

document.querySelectorAll('.spotlight .media-row img').forEach(img => {
  img.addEventListener('load', () => {
    ScrollTrigger.refresh();
  });
});

document.querySelectorAll('.influencer-outreach .influencer-vid-box video').forEach(vid => {
  vid.addEventListener('loadedmetadata', () => {
    ScrollTrigger.refresh();
  });
});

document.querySelectorAll('.studios-trusted-by .clients-slider img').forEach(img => {
  img.addEventListener('load', () => {
    ScrollTrigger.refresh();
  });
});
// ---------------------------------------------------------------------------------------------------------------