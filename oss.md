---
layout: page
title: All OSS — SO Works Agent Series release roadmap
description: See all 13 planned SO Works Agent Series OSS releases, what each tool does, and which projects are already accepting pilot users.
permalink: /oss/
---

<section class="sw-product-hero sw-roadmap-hero">
  <span class="sw-kicker">SO Works OSS roadmap</span>
  <h1>13 OSS releases. One composable agent stack.</h1>
  <p>Every project below is planned for a public OSS release. Some are already in bounded pilots or preview, while others are still being prepared for a clean public release. The status describes readiness—not a promised release date.</p>
  <div class="sw-actions">
    <a class="sw-button" href="https://github.com/soworks-jp/soworks-jp.github.io/issues/3">Join a pilot or release waitlist</a>
    <a class="sw-button secondary" href="/compare/">Start with the right tool</a>
  </div>
  <div class="sw-proof-row" aria-label="OSS release principles">
    <span><strong>13 planned OSS releases</strong><small>One roadmap instead of hidden private projects</small></span>
    <span><strong>Local-first by default</strong><small>Keep core agent workflow data under your control</small></span>
    <span><strong>Composable</strong><small>Adopt a narrow package or the full operating layer</small></span>
    <span><strong>No fake launch dates</strong><small>Readiness stages update as release gates are cleared</small></span>
  </div>
</section>

<section class="sw-section">
  <div class="sw-section-head">
    <div>
      <span class="sw-kicker">Release stages</span>
      <h2>Everything is planned for release. Readiness is intentionally explicit.</h2>
      <p><strong>Pilot now</strong> means we are actively collecting bounded real-world evidence. <strong>Preview</strong> means the implementation exists but public packaging, docs, or release gates are still being finalized. <strong>Planned</strong> means the product contract exists and is being prepared for a public OSS release.</p>
    </div>
  </div>
</section>

<section class="sw-section">
  <div class="sw-section-head">
    <div>
      <span class="sw-kicker">Complete catalog</span>
      <h2>From product intent to routing, execution, review, memory, and operations.</h2>
    </div>
  </div>
  <div class="sw-roadmap-grid">
    {% for project in site.data.oss_catalog %}
    <article class="sw-roadmap-card" id="{{ project.id }}">
      <div class="sw-card-top">
        <span class="sw-layer">{{ project.layer }}</span>
        <span class="sw-release-state{% if project.pilot %} active{% endif %}">{{ project.phase }}</span>
      </div>
      <h3>{{ project.name }}</h3>
      <p>{{ project.summary_en }}</p>
      <div class="sw-release-line"><span class="sw-release-dot"></span>{{ project.status }}</div>
      <div class="sw-card-actions">
        {% if project.page %}<a href="{{ project.page }}">Product page →</a>{% endif %}
        {% if project.pilot %}<a href="https://github.com/soworks-jp/soworks-jp.github.io/issues/3">Pilot / waitlist →</a>{% endif %}
      </div>
    </article>
    {% endfor %}
  </div>
</section>

<section class="sw-panel sw-pilot-panel">
  <span class="sw-kicker inverse">Public release waitlist</span>
  <h2>Interested before the repository is public?</h2>
  <p>Use the public waitlist issue to tell us which project solves a real problem for you. For active pilots, we prioritize people who can run one bounded experiment and share sanitized evidence. For the other projects, you can simply ask to be notified when the public OSS release is ready.</p>
  <div class="sw-actions">
    <a class="sw-button" href="https://github.com/soworks-jp/soworks-jp.github.io/issues/3">Join the public waitlist</a>
    <a class="sw-button secondary" href="/pilot/">See active pilot experiments</a>
  </div>
</section>

<section class="sw-section">
  <div class="sw-section-head">
    <div>
      <span class="sw-kicker">Companion surface</span>
      <h2>Agent Desk is tracked separately.</h2>
      <p>Agent Desk is the local desktop command-center companion to Agent Workbench. Its current repository is proprietary, so it is intentionally <strong>not counted in the 13 OSS releases</strong>. If its licensing model changes, the roadmap will say so explicitly rather than presenting it as OSS prematurely.</p>
    </div>
  </div>
</section>
