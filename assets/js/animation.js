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
          once: true, // ensures it won't run again
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
          // toggleActions: "restart reset restart reset",
          once: true,
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
  let networkHead2 = section.querySelector("h2");  // Added for media page
  let networkpara = section.querySelector("p");
  let networkparaOnMediaPage = section.querySelector("#media-network-para");  // Added for media page

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

  if (networkHead2) {  // Added for media page
    gsap.fromTo(
      networkHead2,
      { opacity: 0, y: 70 }, // start above
      {
        opacity: 1,
        y: 0, // settle into place
        ease: "power2.out",
        scrollTrigger: {
          trigger: networkHead2,
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

  if (networkparaOnMediaPage) {  // Added for media page
    gsap.fromTo(
      networkparaOnMediaPage,
      { opacity: 0, y: 50 }, // start above
      {
        opacity: 1,
        y: 0, // settle into place
        ease: "power2.out",
        scrollTrigger: {
          trigger: networkparaOnMediaPage,
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
gsap.to("#verticals-stack-section-1 .tfs-network-logos h1", {
    y: 0,
    opacity: 1,
    duration: 1.5,
    stagger: 0.3, // delay between words
    ease: "power3.out",
});

gsap.to("#verticals-stack-section-1 .tfs-network-logos p", {
    y: 0,
    opacity: 1,
    duration: 2,
    ease: "power3.out",
});

// ----------------------------------------------------------------------------------------------------------

// Contact Page Animations

// Contact Us Section Heading
gsap.to("#contact-stack-section-1 .contact-left h1 span", {
    opacity: 1,
    duration: 1,
    stagger: 0.3, // delay between words
    ease: "power3.out",
});

// Contact Us Section Sub Heading
gsap.to("#contact-stack-section-1 .contact-left p", {
    opacity: 1,
    duration: 1.5,
    ease: "power3.out",
});

// ----------------------------------------------------------------------------------------------------------

// Press & Media Page Animations

// Press & Media Heading
gsap.to("#media-stack-section-1 .spotlight h1", {
    y: 0,
    opacity: 1,
    duration: 1.5,
    scrub: 5,
    ease: "power3.out",
});

// Press & Media Sub Heading
gsap.to("#media-stack-section-1 .spotlight p", {
    y: 0,
    opacity: 1,
    duration: 2.5,
    scrub: 5,
    ease: "power3.out",
});

// Press & Media Row Media Cards 
gsap.to("#media-stack-section-1 .spotlight .media-row .media-box", {
    opacity: 1,
    duration: 3,
    stagger: 0.25, // delay between cards
    scrub: 5,
    ease: "power3.out",
});

// ----------------------------------------------------------------------------------------------------------

// Public Relations Page Animations

// Public Relations Banner Heading
gsap.to(".verticals-internal-banner .banner-left h1", {
    y: 0,
    opacity: 1,
    duration: 1.5,
    scrub: 5,
    ease: "power3.out",
});

// Public Relations Banner Para
gsap.to(".verticals-internal-banner .banner-left p", {
    opacity: 1,
    duration: 1.5,
    scrub: 5,
    stagger: 0.3,
    ease: "power3.out",
});

// Domain Expertise Heading
document.addEventListener("DOMContentLoaded", () => {
  let section = document.querySelector(".domain-expertise");
  let domainHead = section.querySelector("h2");

  if (domainHead) {
    gsap.fromTo(
      domainHead,
      { opacity: 0, y: -60 }, // start above
      {
        opacity: 1,
        y: 0, // settle into place
        ease: "power2.out",
        scrollTrigger: {
          trigger: domainHead,
          start: "top 85%",
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

// Domain Expertise Cards
document.addEventListener("DOMContentLoaded", () => {
  let section = document.querySelector(".domain-expertise");
  let domainCards = section.querySelectorAll(".expertise-card");

  if (domainCards.length) {
    gsap.fromTo(
      domainCards,
      { opacity: 0, y: 60 }, // start position
      {
        opacity: 1,
        y: 0, // final position
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
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

// Influencer Outreach Heading
document.addEventListener("DOMContentLoaded", () => {
  let section = document.querySelector(".influencer-outreach");
  let influencerHead = section.querySelector("h3");

  if (influencerHead) {
    gsap.fromTo(
      influencerHead,
      { opacity: 0, x: -70 }, // start above
      {
        opacity: 1,
        x: 0, // settle into place
        ease: "power2.out",
        scrollTrigger: {
          trigger: influencerHead,
          start: "top 85%",
          end: "top 20%",
          scrub: 5,
          scroller: document.body,
          once: true, // ensures it won't run again
          markers: false,
        },
      }
    );
  }
});

// Influencer Outreach Cards
document.addEventListener("DOMContentLoaded", () => {
  let section = document.querySelector(".influencer-outreach");
  let influencerCards = section.querySelectorAll(".influencer-vid-box");

  if (influencerCards.length) {
    gsap.fromTo(
      influencerCards,
      { opacity: 0, y: 50 }, // start position
      {
        opacity: 1,
        y: 0, // final position
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          end: "top 10%",
          scrub: 7,
          scroller: document.body,
          once: true, // ensures it won't run again
          markers: false,
        },
      }
    );
  }
});

// PR Media Relations Heading
document.addEventListener("DOMContentLoaded", () => {
  let section = document.querySelector(".pr-media");
  let prMediaHead = section.querySelector("h4");

  if (prMediaHead) {
    gsap.fromTo(
      prMediaHead,
      { opacity: 0, y: 70 }, // start above
      {
        opacity: 1,
        y: 0, // settle into place
        ease: "power2.out",
        scrollTrigger: {
          trigger: prMediaHead,
          start: "top 85%",
          end: "top 20%",
          scrub: 5,
          scroller: document.body,
          once: true, // ensures it won't run again
          markers: false,
        },
      }
    );
  }
});

// ----------------------------------------------------------------------------------------------------------

// Studios Page Animations

// Studios Page Domain Expertise Cards
document.addEventListener("DOMContentLoaded", () => {
  let section = document.querySelector(".studios-domain-expertise-row");
  let studiosDomainCards = section.querySelectorAll(".studios-expertise-card");

  if (studiosDomainCards.length) {
    gsap.fromTo(
      studiosDomainCards,
      { opacity: 0, y: 60 }, // start position
      {
        opacity: 1,
        y: 0, // final position
        ease: "power2.out",
        stagger: 0.17,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "top 30%",
          scrub: 5,
          scroller: document.body,
          once: true, // ensures it won't run again
          markers: false,
        },
      }
    );
  }
});

// Studios Page Our Portfolio Heading
document.addEventListener("DOMContentLoaded", () => {
  let section = document.querySelector("#studios-stack-section-3");
  let heading = section.querySelector("h3");

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
        scrub: 4,  // ties animation to scroll (works up & down)
        scroller: document.body, // needed if using Lenis
        markers: false,
      },
    }
  );
});

// Studios Trusted By Clients Slider
document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector("#studios-stack-section-4 .clients-slider");
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
    duration: 20, // adjust speed
    ease: "none",
    repeat: -1,
    modifiers: {
      x: gsap.utils.unitize(x => parseFloat(x) % -totalWidth) // loop seamlessly
    }
  });
});

// Studios Trusted By Heading
document.addEventListener("DOMContentLoaded", () => {
  let section = document.querySelector(".studios-trusted-by");
  let domainHead = section.querySelector("h4");

  if (domainHead) {
    gsap.fromTo(
      domainHead,
      { opacity: 0, y: -60 }, // start above
      {
        opacity: 1,
        y: 0, // settle into place
        ease: "power2.out",
        scrollTrigger: {
          trigger: domainHead,
          start: "top 85%",
          end: "top 10%",
          scrub: 5,
          scroller: document.body,
          once: true,
          markers: false,
        },
      }
    );
  }
});
// ----------------------------------------------------------------------------------------------------------

// Finance Page Animations

// Finance Trusted By Heading
document.addEventListener("DOMContentLoaded", () => {
  let section = document.querySelector("#finance-stack-section-3 .studios-trusted-by");
  let domainHead = section.querySelector("h3");

  if (domainHead) {
    gsap.fromTo(
      domainHead,
      { opacity: 0, y: -60 }, // start above
      {
        opacity: 1,
        y: 0, // settle into place
        ease: "power2.out",
        scrollTrigger: {
          trigger: domainHead,
          start: "top 85%",
          end: "top 10%",
          scrub: 5,
          scroller: document.body,
          once: true,
          markers: false,
        },
      }
    );
  }
});

// Finance Trusted By Clients Slider
document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector("#finance-stack-section-3 .clients-slider");
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
// ----------------------------------------------------------------------------------------------------------

// Careers Page Animations

// Careers Heading in "Careers Page"
gsap.to("#careers-stack-section-1 .careers h1", {
    y: 0,
    opacity: 1,
    duration: 1.5,
    stagger: 0.3, // delay between words
    ease: "power3.out",
});

gsap.to("#careers-stack-section-1 .careers p", {
    y: 0,
    opacity: 1,
    duration: 2,
    ease: "power3.out",
});

// ----------------------------------------------------------------------------------------------------------