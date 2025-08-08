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

// Functionality For CustomCursor Animation
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
      // make visible on first mousemove
      if (!isVisible) {
        isVisible = true;
        dot.classList.remove("is-hidden");
        ring.classList.remove("is-hidden");
      }
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
document.addEventListener("DOMContentLoaded", function() {
  const preloader = document.getElementById("preloader");

  if (window.location.pathname === "/" || window.location.pathname.endsWith("index.html")) {
    window.addEventListener("load", function() {
      setTimeout(() => {
        preloader.classList.add("hide");
      }, 2500); // slight delay for effect
    });
  } else {
    preloader.style.display = "none";
  }
});

// ---------------------------------------------------------------------------------------------------------------
