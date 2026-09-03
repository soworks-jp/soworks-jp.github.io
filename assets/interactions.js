(() => {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const root = document.documentElement;
  root.classList.add("sw-js");

  const revealTargets = document.querySelectorAll(
    ".sw-section, .sw-product-hero, .sw-card, .sw-demo-card, .sw-compact-card, .sw-choice-card, .sw-callout, .sw-pilot-panel"
  );

  revealTargets.forEach((element) => element.classList.add("sw-reveal"));

  if (reducedMotion || !("IntersectionObserver" in window)) {
    revealTargets.forEach((element) => element.classList.add("is-visible"));
  } else {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    revealTargets.forEach((element) => observer.observe(element));
  }

  document.querySelectorAll(".sw-product-card, .sw-demo-card, .sw-compact-card").forEach((card) => {
    card.classList.add("sw-interactive-card");
  });

  const hero = document.querySelector(".sw-hero-product");
  if (hero) {
    hero.classList.add("sw-tech-surface");

    const graph = document.createElement("div");
    graph.className = "sw-agent-graph";
    graph.setAttribute("aria-hidden", "true");
    graph.innerHTML = `
      <div class="sw-agent-node sw-agent-task"><small>QUEUE</small><strong>TASK-104</strong></div>
      <div class="sw-agent-node sw-agent-route"><small>ROUTE</small><strong>SCOUT</strong></div>
      <div class="sw-agent-node sw-agent-run"><small>AGENT</small><strong>RUNNING</strong></div>
      <div class="sw-agent-node sw-agent-review"><small>CHECK</small><strong>REVIEW</strong></div>
      <span class="sw-agent-link sw-link-1"></span>
      <span class="sw-agent-link sw-link-2"></span>
      <span class="sw-agent-link sw-link-3"></span>
      <span class="sw-agent-pulse sw-pulse-1"></span>
      <span class="sw-agent-pulse sw-pulse-2"></span>
      <span class="sw-agent-pulse sw-pulse-3"></span>
    `;
    hero.appendChild(graph);

    if (!reducedMotion) {
      let frame = 0;
      const updateGlow = (event) => {
        if (frame) window.cancelAnimationFrame(frame);
        frame = window.requestAnimationFrame(() => {
          const rect = hero.getBoundingClientRect();
          const x = ((event.clientX - rect.left) / rect.width) * 100;
          const y = ((event.clientY - rect.top) / rect.height) * 100;
          hero.style.setProperty("--sw-pointer-x", `${Math.max(0, Math.min(100, x))}%`);
          hero.style.setProperty("--sw-pointer-y", `${Math.max(0, Math.min(100, y))}%`);
          frame = 0;
        });
      };
      hero.addEventListener("pointermove", updateGlow, { passive: true });
    }
  }

  const metricObserver = !reducedMotion && "IntersectionObserver" in window
    ? new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-active");
            metricObserver.unobserve(entry.target);
          });
        },
        { threshold: 0.35 }
      )
    : null;

  document.querySelectorAll(".sw-proof-row, .sw-metric-grid").forEach((metrics) => {
    if (metricObserver) metricObserver.observe(metrics);
    else metrics.classList.add("is-active");
  });
})();
