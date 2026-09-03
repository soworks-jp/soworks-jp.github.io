---
layout: page
title: All OSS — SO Works Agent Series release roadmap
description: See all 13 planned SO Works Agent Series OSS releases and what role each project will play in the stack.
permalink: /oss/
---

<section class="sw-product-hero sw-roadmap-hero">
  <span class="sw-kicker">SO Works OSS roadmap</span>
  <h1>13 OSS releases. One composable agent stack.</h1>
  <p>Every project below is planned for a public OSS release. Most repositories are still private while public packaging, documentation, licensing checks, and release gates are finalized. This roadmap communicates product direction, not a promised launch date.</p>
  <div class="sw-actions">
    <a class="sw-button" href="/compare/">Start with the right tool</a>
    <a class="sw-button secondary" href="/">Back to Agent Series</a>
  </div>
  <div class="sw-proof-row" aria-label="OSS release principles">
    <span><strong>13 planned OSS releases</strong><small>The complete product direction is visible before repositories open</small></span>
    <span><strong>Local-first by default</strong><small>Keep core agent workflow data under your control</small></span>
    <span><strong>Composable</strong><small>Adopt a narrow package or assemble the full operating layer</small></span>
    <span><strong>No fake launch dates</strong><small>Public links appear only after each release is actually ready</small></span>
  </div>
</section>

<section class="sw-section">
  <div class="sw-section-head">
    <div>
      <span class="sw-kicker">Release status</span>
      <h2>Everything shown here is planned for public OSS release.</h2>
      <p>Until a repository or package is genuinely public, the site does not expose private repository links, installation commands that depend on unpublished packages, or public recruitment flows. Release links will appear project by project as each release clears its gates.</p>
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
        <span class="sw-release-state">{{ project.phase }}</span>
      </div>
      <h3>{{ project.name }}</h3>
      <p>{{ project.summary_en }}</p>
      <div class="sw-release-line"><span class="sw-release-dot"></span>{{ project.status }}</div>
      <div class="sw-card-actions">
        {% if project.page %}<a href="{{ project.page }}">Product page →</a>{% endif %}
      </div>
    </article>
    {% endfor %}
  </div>
</section>

<section class="sw-panel sw-pilot-panel">
  <span class="sw-kicker inverse">Release roadmap</span>
  <h2>Public release links will appear when each project is actually ready.</h2>
  <p>The roadmap stays intentionally forward-looking while repositories remain private. That lets SO Works explain the full architecture without presenting private development as already released software.</p>
  <div class="sw-actions">
    <a class="sw-button" href="/compare/">Compare the stack</a>
    <a class="sw-button secondary" href="/ja/oss/">日本語</a>
  </div>
</section>
