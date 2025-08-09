// Home Page Animations 

// Three Fourth Network
document.addEventListener("DOMContentLoaded", () => {
  let section = document.querySelector("#home-stack-section-2");
  let heading = section.querySelector("h1");
  let paras = section.querySelectorAll("p");

  gsap.fromTo(
    heading,
    { opacity: 0, scale: 0.8, y: 30 },
    {
      opacity: 1,
      scale: 1,
      y: 0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "top 30%",
        scrub: 1,  // ties animation to scroll (works up & down)
        scroller: document.body, // needed if using Lenis
        markers: false,
      },
    }
  );

   gsap.fromTo(
    paras,
    { opacity: 0 },
    {
      opacity: 1,
      ease: "power3.out",
      stagger: 0.2, // delay between each paragraph
      scrollTrigger: {
        trigger: section,
        start: "top 40%",
        end: "top 20%",
        scrub: 6,
        scroller: document.body,
        markers: false,
      },
    }
  );
});

// Trusted By Cards
document.addEventListener("DOMContentLoaded", () => {
  let images = document.querySelectorAll(".trust-card img");

  images.forEach((img) => {
    // Initial hidden state
    gsap.set(img, { clipPath: "inset(0 100% 0 0)" });

    // Animate each image individually when it enters viewport
    gsap.to(img, {
      clipPath: "inset(0 0% 0 0)", // reveal
      duration: 1.8, // slower, smoother
      ease: "power3.out",
      scrollTrigger: {
        trigger: img,
        start: "top 95%",
        end: "top 60%",
        toggleActions: "play none none reverse",
        markers: false
      }
    });
  });
});

// ----------------------------------------------------------------------------------------------------------
