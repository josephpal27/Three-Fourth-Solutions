document.addEventListener("DOMContentLoaded", () => {
  const cards = gsap.utils.toArray(".stackCard");

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
        markers: true
      });
    }
  });
});
