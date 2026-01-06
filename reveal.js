document.addEventListener("DOMContentLoaded", () => {
  const selectors = [".section-head", ".card", ".feature", ".faq-item", ".step"];
  const els = document.querySelectorAll(selectors.join(","));
  if (!els.length) return;

  els.forEach((el, i) => {
    el.classList.add("reveal");
    el.style.setProperty("--d", `${Math.min(i * 55, 350)}ms`);
  });

  // Fallback por si algún navegador no soporta IntersectionObserver
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

