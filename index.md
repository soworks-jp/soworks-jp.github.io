---
layout: home
title: Open-source operating layer for AI coding agents
description: SO Works is preparing 13 local-first OSS projects for coding-agent planning, routing, context, execution, review, memory, diagnostics, and operations.
---

<section class="sw-hero sw-hero-product">
  <span class="sw-eyebrow">SO Works Agent Series · 13 OSS releases planned</span>
  <h1>Run coding agents like a real engineering team.</h1>
  <p>SO Works is building a composable local-first stack for Codex, Claude Code, Cursor, Gemini CLI, and other agents: planning, routing, handoff, context optimization, review, memory, diagnostics, and operations.</p>
  <div class="sw-actions">
    <a class="sw-button" href="oss/">See all 13 planned OSS releases</a>
    <a class="sw-button secondary" href="agent-workbench/">Explore Agent Workbench</a>
    <a class="sw-button secondary" href="compare/">Compare the stack</a>
  </div>
  <div class="sw-proof-row" aria-label="Product principles">
    <span><strong>13 OSS releases planned</strong><small>The complete roadmap is visible before repositories open</small></span>
    <span><strong>Local-first</strong><small>Core agent workflow data is designed to stay under your control</small></span>
    <span><strong>Composable</strong><small>Use one narrow package or assemble the full Agent Series</small></span>
    <span><strong>Release honestly</strong><small>Public links appear only when each project is actually ready</small></span>
  </div>
</section>

<section class="sw-section">
  <div class="sw-section-head">
    <div>
      <span class="sw-kicker">Why this stack exists</span>
      <h2>Agents are fast. Coordination is still expensive.</h2>
      <p>The bottleneck moves from writing code to choosing context, dividing work, avoiding duplicate effort, reviewing outputs, retaining useful memory, and keeping the surrounding developer environment healthy.</p>
    </div>
  </div>
  <div class="sw-problem-grid">
    <article class="sw-problem-card"><span class="sw-number">01</span><h3>Agents repeat context</h3><p>Every new task can trigger another repository reread unless context, handoffs, and memory are deliberately packaged.</p></article>
    <article class="sw-problem-card"><span class="sw-number">02</span><h3>Parallel agents collide</h3><p>Without planning, routing, ownership, and review evidence, multiple agents can solve the same problem or overwrite each other.</p></article>
    <article class="sw-problem-card"><span class="sw-number">03</span><h3>Operations become the bottleneck</h3><p>Security, machine health, reporting, and human approval channels matter once agent usage becomes part of daily engineering work.</p></article>
  </div>
</section>

<section class="sw-section">
  <div class="sw-section-head">
    <div>
      <span class="sw-kicker">Four anchor projects</span>
      <h2>Understand the stack through its main product surfaces.</h2>
      <p>These pages preview the product direction while the repositories and packages are prepared for public OSS release.</p>
    </div>
    <a href="oss/">View complete OSS roadmap →</a>
  </div>

  <div class="sw-grid sw-product-grid">
    <article class="sw-card sw-product-card featured">
      <div class="sw-card-top"><span class="sw-icon">AW</span><span class="sw-badge">Planned OSS release</span></div>
      <h3>Agent Workbench</h3>
      <p class="sw-card-lead">Coordinate real coding-agent work without adding a hosted control plane.</p>
      <ul class="sw-mini-list"><li>Task memory, routing, claims, prompts and handoffs</li><li>Review, completion memory, Local Control and Desktop</li><li>Operating layer for repeated multi-agent work</li></ul>
      <div class="sw-card-actions"><a class="sw-button" href="agent-workbench/">Explore Workbench</a><a href="oss/#agent-workbench">Release roadmap →</a></div>
    </article>

    <article class="sw-card sw-product-card">
      <div class="sw-card-top"><span class="sw-icon green">TO</span><span class="sw-badge green">Planned OSS release</span></div>
      <h3>Agent Token Optimizer</h3>
      <p class="sw-card-lead">Find repository context waste before your coding agent pays for it.</p>
      <ul class="sw-mini-list"><li>Scan token-heavy and generated context locally</li><li>Improve agent instructions, exclusions, editor hygiene and CI budgets</li><li>Compare safe before/after repository metrics</li></ul>
      <div class="sw-card-actions"><a class="sw-button secondary" href="agent-token-optimizer/">Explore context audit</a><a href="oss/#agent-token-optimizer">Release roadmap →</a></div>
    </article>

    <article class="sw-card sw-product-card">
      <div class="sw-card-top"><span class="sw-icon orange">AP</span><span class="sw-badge orange">Planned OSS release</span></div>
      <h3>Agent Persona</h3>
      <p class="sw-card-lead">Add explicit adopter, user, security, operator, and buyer perspectives to AI review.</p>
      <ul class="sw-mini-list"><li>Portable persona packs and reusable review groups</li><li>README, PRD, onboarding and agent-handoff review</li><li>Focus on incremental actionable findings rather than review noise</li></ul>
      <div class="sw-card-actions"><a class="sw-button secondary" href="agent-persona/">Explore Persona</a><a href="oss/#agent-persona">Release roadmap →</a></div>
    </article>

    <article class="sw-card sw-product-card">
      <div class="sw-card-top"><span class="sw-icon cyan">HM</span><span class="sw-badge cyan">Planned OSS release</span></div>
      <h3>Agent Human Memory</h3>
      <p class="sw-card-lead">Experiment with explicit, reviewable, forgettable human-like memory for agents.</p>
      <ul class="sw-mini-list"><li>Preferences, goals, episodes and working context</li><li>Authority, provenance, consent and forgetting boundaries</li><li>Safety-first memory lifecycle research</li></ul>
      <div class="sw-card-actions"><a class="sw-button secondary" href="agent-human-memory/">Explore memory research</a><a href="oss/#agent-human-memory">Release roadmap →</a></div>
    </article>
  </div>
</section>

<section class="sw-section sw-demo-section">
  <div class="sw-section-head"><div><span class="sw-kicker">See the direction</span><h2>Preview the product surfaces before public release.</h2><p>Existing synthetic examples communicate the workflow without exposing private repositories, source code, or operational data.</p></div></div>
  <div class="sw-demo-grid">
    <a class="sw-demo-card" href="agent-workbench/"><img src="/examples/agent-workbench/view-preview.png" alt="Agent Workbench local dashboard preview"><div><strong>Agent Workbench</strong><span>Tasks, routes, claims, review status and local operational context.</span></div></a>
    <a class="sw-demo-card" href="agent-token-optimizer/"><img src="/examples/agent-token-optimizer/report-preview.png" alt="Agent Token Optimizer report preview"><div><strong>Agent Token Optimizer</strong><span>Repository context, readiness, risk and optimization opportunities.</span></div></a>
  </div>
</section>

<section class="sw-section sw-roadmap-preview">
  <div class="sw-section-head">
    <div><span class="sw-kicker">Full release roadmap</span><h2>All 13 planned OSS projects are visible now.</h2><p>The roadmap explains how the stack fits together while the underlying repositories remain private until release-ready.</p></div>
    <a href="oss/">Open full roadmap →</a>
  </div>
  <div class="sw-roadmap-strip">
    {% for project in site.data.oss_catalog %}
    <a href="/oss/#{{ project.id }}"><span>{{ project.layer }}</span><strong>{{ project.name }}</strong><small>{{ project.phase }}</small></a>
    {% endfor %}
  </div>
</section>

<section class="sw-panel sw-pilot-panel">
  <span class="sw-kicker inverse">Planned OSS releases</span>
  <h2>The architecture is public before the repositories are.</h2>
  <p>SO Works will add public repository and package links project by project only after release packaging, documentation, licensing, and safety gates are ready.</p>
  <div class="sw-actions">
    <a class="sw-button" href="oss/">See all planned releases</a>
    <a class="sw-button secondary" href="ja/">日本語</a>
  </div>
</section>
