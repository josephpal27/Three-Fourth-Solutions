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

// Trusted By Heading
document.addEventListener("DOMContentLoaded", () => {
  let section = document.querySelector("#home-stack-section-3");
  let heading = section.querySelector("h2");

   gsap.fromTo(
    heading,
    { opacity: 0, y: 60 },
    {
      opacity: 1,
      y: 0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "top 30%",
        scrub: 2,  // ties animation to scroll (works up & down)
        scroller: document.body, // needed if using Lenis
        markers: false,
      },
    }
  );
});

// Trusted By Cards
document.addEventListener("DOMContentLoaded", () => {
  let images = document.querySelectorAll(".trusted-by-card-row .trust-card img");

  images.forEach((img) => {
    // Initial hidden state
    gsap.set(img, { clipPath: "inset(0 100% 0 0)" });

    // Animate each image individually when it enters viewport
    gsap.to(img, {
      clipPath: "inset(0 0% 0 0)", // reveal
      duration: 2.5, // slower, smoother
      ease: "power3.out",
      scrollTrigger: {
        trigger: img,
        start: "top 95%",
        end: "top 60%",
        // toggleActions: "play none none reverse",
        toggleActions: "play none none none", // Play once only
        once: true, // ensures it won't run again
        markers: false,
      }
    });
  });
});


// Trusted By 400+ Clients Heading
document.addEventListener("DOMContentLoaded", () => {
  let section = document.querySelector("#home-stack-section-3");
  let heading2 = section.querySelector("h3");

  if (heading2) {
    gsap.fromTo(
      heading2,
      { opacity: 0, y: -60 }, // start above
      {
        opacity: 1,
        y: 0, // settle into place
        ease: "power2.out",
        scrollTrigger: {
          trigger: heading2,
          start: "top 60%",
          end: "top 10%",
          scrub: 5,
          scroller: document.body,
          once: true, // ensures it won't run again
          markers: false,
        },
      }
    );
  }
});

// Trusted By 400+ ClientsSlider
document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector("#home-stack-section-3 .clients-slider");
  const images = Array.from(slider.querySelectorAll("img"));

  // Duplicate the images once to make the loop seamless
  images.forEach(img => {
    slider.appendChild(img.cloneNode(true));
  });

  const allImages = slider.querySelectorAll("img");

  // Total width of all original images
  const totalWidth = images.reduce((sum, img) => sum + img.offsetWidth, 0);

  // Animate using pixel values (no gaps)
  gsap.to(allImages, {
    x: -totalWidth,
    duration: 25, // adjust speed
    ease: "none",
    repeat: -1,
    modifiers: {
      x: gsap.utils.unitize(x => parseFloat(x) % -totalWidth) // loop seamlessly
    }
  });
});


// Meet The Team
document.addEventListener("DOMContentLoaded", () => {
  let section = document.querySelector("#home-stack-section-4");
  let heading = section.querySelector("h4");
  let teamRowOne = section.querySelector("#meet-the-team-row-1");
  let teamRowTwo = section.querySelector("#meet-the-team-row-2");
  let teamRowThree = section.querySelector("#meet-the-team-row-3");

  gsap.fromTo(
    heading,
    { opacity: 0, y: 70 },
    {
      opacity: 1,
      y: 0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "top 35%",
        scrub: 3,  // ties animation to scroll (works up & down)
        scroller: document.body, // needed if using Lenis
        markers: false,
      },
    }
  );

  gsap.fromTo(
    teamRowOne,
    { opacity: 0, x: 120 },
    {
      opacity: 1,
      x: 0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: teamRowOne,
        start: "top 70%",
        end: "top 20%",
        scrub: 5,  // ties animation to scroll (works up & down)
        scroller: document.body, // needed if using Lenis
        once: true, // ensures it won't run again
        markers: false,
      },
    }
  );

  gsap.fromTo(
    teamRowTwo,
    { opacity: 0, x: -120 },
    {
      opacity: 1,
      x: 0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: teamRowTwo,
        start: "top 70%",
        end: "top 10%",
        scrub: 5,  // ties animation to scroll (works up & down)
        scroller: document.body, // needed if using Lenis
        once: true, // ensures it won't run again
        markers: false,
      },
    }
  );

  gsap.fromTo(
    teamRowThree,
    { opacity: 0, x: 120 },
    {
      opacity: 1,
      x: 0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: teamRowThree,
        start: "top 60%",
        end: "top 0%",
        scrub: 5,  // ties animation to scroll (works up & down)
        scroller: document.body, // needed if using Lenis
        once: true, // ensures it won't run again
        markers: false,
      },
    }
  );

});


// The Hall Of Fame Heading
document.addEventListener("DOMContentLoaded", () => {
  let section = document.querySelector("#home-stack-section-5");
  let awardsHead = section.querySelector("h5");

  if (awardsHead) {
    gsap.fromTo(
      awardsHead,
      { opacity: 0, y: -60 }, // start above
      {
        opacity: 1,
        y: 0, // settle into place
        ease: "power2.out",
        scrollTrigger: {
          trigger: awardsHead,
          start: "top 80%",
          end: "top 10%",
          scrub: 5,
          scroller: document.body,
          markers: false,
        },
      }
    );
  }
});


// The Hall Of Fame Awards
document.addEventListener("DOMContentLoaded", () => {
  let section = document.querySelector("#home-stack-section-5");
  let awards = section.querySelectorAll("img");

  if (awards.length) {
    gsap.fromTo(
      awards,
      { y: '-100%', opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "power2.in",
        duration: 0.7, 
        stagger: 0, 
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "restart reset restart reset",
          markers: false,
        }
      }
    );
  }
});


// TFS Network Logos Heading
document.addEventListener("DOMContentLoaded", () => {
  let section = document.querySelector(".tfs-network-logos");
  let networkHead = section.querySelector("h6");
  let networkpara = section.querySelector("p");

  if (networkHead) {
    gsap.fromTo(
      networkHead,
      { opacity: 0, y: 70 }, // start above
      {
        opacity: 1,
        y: 0, // settle into place
        ease: "power2.out",
        scrollTrigger: {
          trigger: networkHead,
          start: "top 85%",
          end: "top 10%",
          scrub: 5,
          scroller: document.body,
          markers: false,
        },
      }
    );
  }

  if (networkpara) {
    gsap.fromTo(
      networkpara,
      { opacity: 0, y: 50 }, // start above
      {
        opacity: 1,
        y: 0, // settle into place
        ease: "power2.out",
        scrollTrigger: {
          trigger: networkHead,
          start: "top 85%",
          end: "top 10%",
          scrub: 4,
          scroller: document.body,
          markers: false,
        },
      }
    );
  }
});


// Work Together Heading
document.addEventListener("DOMContentLoaded", () => {
  let section = document.querySelector(".work-together");
  let head = section.querySelectorAll("p");
  let headtop = section.querySelector("span");

  if (head) {
    gsap.fromTo(
      head,
      { rotateX: '90%' }, // start above
      {
        rotateX: 0,
        y: 0, // settle into place
        ease: "power2.out",
        scrollTrigger: {
          trigger: head,
          start: "top 80%",
          end: "top 10%",
          scrub: 5,
          scroller: document.body,
          markers: false,
        },
      }
    );
  }
  if (headtop) {
    gsap.fromTo(
      headtop,
      { rotateX: '90%' }, // start above
      {
        rotateX: 0,
        y: 0, // settle into place
        ease: "power2.out",
        scrollTrigger: {
          trigger: headtop,
          start: "top 80%",
          end: "top 10%",
          scrub: 5,
          scroller: document.body,
          markers: false,
        },
      }
    );
  }
});

// ----------------------------------------------------------------------------------------------------------

// Verticals Page Animations

// TFS Network Logos Heading in "Verticals Page"
document.addEventListener("DOMContentLoaded", () => {
  let section = document.querySelector("#verticals-stack-section-1 .tfs-network-logos");
  let networkHead = section.querySelector("h1");
  let networkpara = section.querySelector("p");

  if (networkHead) {
    gsap.fromTo(
      networkHead,
      { opacity: 0, y: 70 }, // start above
      {
        opacity: 1,
        y: 0, // settle into place
        ease: "power2.out",
        duration: 1.5,
      }
    );
  }

  if (networkpara) {
    gsap.fromTo(
      networkpara,
      { opacity: 0, y: 50 }, // start above
      {
        opacity: 1,
        y: 0, // settle into place
        ease: "power2.out",
        duration: 1.5,
      }
    );
  }
});

// ----------------------------------------------------------------------------------------------------------
