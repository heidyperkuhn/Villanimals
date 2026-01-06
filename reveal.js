// reveal.js
(() => {
  const selectors = [
    ".section-head",
    ".card",
    ".feature",
    ".faq-item",
    ".step",
    ".svc-actions"
  ];

  const targets = document.querySelectorAll(selectors.join(","));
  if (!targets.length) return;

  // 1) agrega clase + delays suaves (cap para que no se demore infinito)
  targets.forEach((el, i) => {
    el.classList.add("reveal");
    el.style.setProperty("--d", `${Math.min(i * 60, 420)}ms`);
  });

  // 2) observa cuando entren en pantalla
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add("is-visible");
        io.unobserve(e.target); // aparece una vez
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -10% 0px"
    }
  );

  targets.forEach((el) => io.observe(el));
})();
