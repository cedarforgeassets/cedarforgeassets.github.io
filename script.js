document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".info-card, .work-item");

  cards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(12px)";
    card.style.transition = "opacity 500ms ease, transform 500ms ease";

    setTimeout(() => {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, 120 * index + 120);
  });
});
