document.addEventListener("DOMContentLoaded", () => {
  const isDesktop = window.matchMedia("(min-width: 901px)").matches;

  // Desktop: revela secciones completas
  // Mobile: revela elementos individuales (cards, features, etc.)
  const desktopSelectors = [".section"];
  const mobileSelectors  = [".section-head", ".card", ".feature", ".faq-item", ".step"];

  const selectors = (isDesktop ? desktopSelectors : mobileSelectors).join(",");
  const els = document.querySelectorAll(selectors);
  if (!els.length) return;

  els.forEach((el) => el.classList.add("reveal"));

  if (!("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add("is-visible");
        io.unobserve(e.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
  );

  els.forEach((el) => io.observe(el));
});

