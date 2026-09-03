---
layout: home
title: Open-source operating layer for AI coding agents
description: Local-first OSS for coordinating coding agents, reducing repository context waste, adding persona-guided review, and experimenting with safe agent memory.
---

<section class="sw-hero sw-hero-product">
  <span class="sw-eyebrow">SO Works Agent Series · 13 public OSS releases planned</span>
  <h1>Run coding agents like a real engineering team.</h1>
  <p>Coordinate real work across Codex, Claude Code, Cursor, Gemini CLI, and other agents. Reduce repeated context, prevent collisions, improve reviews, and keep the operating layer in your repository instead of another hosted dashboard.</p>
  <div class="sw-actions">
    <a class="sw-button" href="agent-workbench/">Try Agent Workbench</a>
    <a class="sw-button secondary" href="agent-token-optimizer/">Audit your repo in 5 minutes</a>
    <a class="sw-button secondary" href="oss/">See all 13 planned OSS releases</a>
  </div>
  <div class="sw-proof-row" aria-label="Product principles">
    <span><strong>13 OSS releases planned</strong><small>Pilot, preview, and planned stages are public on the roadmap</small></span>
    <span><strong>Local-first</strong><small>Repository and agent workflow data stays under your control by default</small></span>
    <span><strong>Composable</strong><small>Use one narrow package or assemble the full Agent Series</small></span>
    <span><strong>Agent-agnostic</strong><small>Codex, Claude Code, Cursor, Gemini and more</small></span>
  </div>
</section>

<section class="sw-section">
  <div class="sw-section-head">
    <div>
      <span class="sw-kicker">Why this stack exists</span>
      <h2>Agents are fast. Coordination is still expensive.</h2>
      <p>The bottleneck moves from writing code to choosing context, dividing work, avoiding duplicate effort, and reviewing what comes back.</p>
    </div>
  </div>
  <div class="sw-problem-grid">
    <article class="sw-problem-card"><span class="sw-number">01</span><h3>Agents repeat context</h3><p>Every new task can trigger another expensive repository reread unless context and memory are deliberately packaged.</p></article>
    <article class="sw-problem-card"><span class="sw-number">02</span><h3>Parallel agents collide</h3><p>Without task ownership, leases, handoffs, and review evidence, multiple agents can solve the same problem or overwrite each other.</p></article>
    <article class="sw-problem-card"><span class="sw-number">03</span><h3>More output does not mean better review</h3><p>Teams need repeatable user, security, operator, and maintainer perspectives—not another generic “looks good” pass.</p></article>
  </div>
</section>

<section class="sw-section">
  <div class="sw-section-head">
    <div>
      <span class="sw-kicker">Start here</span>
      <h2>Use the smallest tool that solves today’s bottleneck.</h2>
      <p>The first four projects already have bounded pilots. Every other OSS project is visible on the release roadmap rather than hidden in private development.</p>
    </div>
    <a href="oss/">View complete OSS roadmap →</a>
  </div>

  <div class="sw-grid sw-product-grid">
    <article class="sw-card sw-product-card featured">
      <div class="sw-card-top"><span class="sw-icon">AW</span><span class="sw-badge">Pilot now</span></div>
      <h3>Agent Workbench</h3>
      <p class="sw-card-lead">Coordinate real coding-agent work without adding a hosted control plane.</p>
      <ul class="sw-mini-list"><li>Task memory, routing, claim leases, prompts and handoffs</li><li>Review, completion memory, Local Control and Desktop</li><li>Privacy-safe first-value measurement for design partners</li></ul>
      <div class="sw-card-actions"><a class="sw-button" href="agent-workbench/">See Workbench</a><a href="https://github.com/soworks-jp/soworks-jp.github.io/issues/3">Join pilot / waitlist →</a></div>
    </article>

    <article class="sw-card sw-product-card">
      <div class="sw-card-top"><span class="sw-icon green">TO</span><span class="sw-badge green">Pilot now</span></div>
      <h3>Agent Token Optimizer</h3>
      <p class="sw-card-lead">Find repository context waste before your coding agent pays for it.</p>
      <ul class="sw-mini-list"><li>Scan token-heavy and generated context locally</li><li>Improve agent instructions, exclusions, editor hygiene and CI budgets</li><li>Compare safe before/after repository metrics</li></ul>
      <div class="sw-card-actions"><a class="sw-button secondary" href="agent-token-optimizer/">Audit a repo</a><a href="https://github.com/soworks-jp/soworks-jp.github.io/issues/3">Pilot / waitlist →</a></div>
    </article>

    <article class="sw-card sw-product-card">
      <div class="sw-card-top"><span class="sw-icon orange">AP</span><span class="sw-badge orange">Pilot now</span></div>
      <h3>Agent Persona</h3>
      <p class="sw-card-lead">Add explicit adopter, user, security, operator, and buyer perspectives to AI review.</p>
      <ul class="sw-mini-list"><li>Portable persona packs and reusable review groups</li><li>README, PRD, onboarding and agent-handoff review</li><li>Measure genuinely new findings versus review noise</li></ul>
      <div class="sw-card-actions"><a class="sw-button secondary" href="agent-persona/">See Persona</a><a href="https://github.com/soworks-jp/soworks-jp.github.io/issues/3">Pilot / waitlist →</a></div>
    </article>

    <article class="sw-card sw-product-card">
      <div class="sw-card-top"><span class="sw-icon cyan">HM</span><span class="sw-badge cyan">Research pilot</span></div>
      <h3>Agent Human Memory</h3>
      <p class="sw-card-lead">Experiment with explicit, reviewable, forgettable human-like memory for agents.</p>
      <ul class="sw-mini-list"><li>Preferences, goals, episodes and relationship context</li><li>Authority, provenance, consent and forgetting boundaries</li><li>Invite-only research with synthetic or low-sensitivity data</li></ul>
      <div class="sw-card-actions"><a class="sw-button secondary" href="agent-human-memory/">See research project</a><a href="https://github.com/soworks-jp/soworks-jp.github.io/issues/3">Research pilot / waitlist →</a></div>
    </article>
  </div>
</section>

<section class="sw-section sw-demo-section">
  <div class="sw-section-head"><div><span class="sw-kicker">See the outputs</span><h2>Useful before you connect another service.</h2><p>The core surfaces are local files and static reports that can be inspected, versioned, or discarded.</p></div></div>
  <div class="sw-demo-grid">
    <a class="sw-demo-card" href="agent-workbench/"><img src="/examples/agent-workbench/view-preview.png" alt="Agent Workbench local dashboard preview"><div><strong>Agent Workbench</strong><span>Tasks, routes, claims, review status and local operational context.</span></div></a>
    <a class="sw-demo-card" href="agent-token-optimizer/"><img src="/examples/agent-token-optimizer/report-preview.png" alt="Agent Token Optimizer report preview"><div><strong>Agent Token Optimizer</strong><span>Repository context, readiness, risk and optimization opportunities.</span></div></a>
  </div>
</section>

<section class="sw-section sw-roadmap-preview">
  <div class="sw-section-head">
    <div><span class="sw-kicker">Full release roadmap</span><h2>13 OSS projects are visible now—even before public release.</h2><p>Private development should not make the roadmap invisible. Every planned OSS project has a role and readiness stage.</p></div>
    <a href="oss/">Open full roadmap →</a>
  </div>
  <div class="sw-roadmap-strip">
    {% for project in site.data.oss_catalog %}
    <a href="/oss/#{{ project.id }}"><span>{{ project.layer }}</span><strong>{{ project.name }}</strong><small>{{ project.phase }}</small></a>
    {% endfor %}
  </div>
</section>

<section class="sw-panel sw-pilot-panel">
  <span class="sw-kicker inverse">Pilot + public release waitlist</span>
  <h2>Help shape one experiment now—or ask to be notified at public release.</h2>
  <p>The public waitlist is hosted in this public Pages repository so anyone can opt in even while product repositories are still private. Never post source code, secrets, raw prompts, private repo details, or sensitive memory content.</p>
  <div class="sw-actions">
    <a class="sw-button" href="https://github.com/soworks-jp/soworks-jp.github.io/issues/3">Join public pilot / waitlist</a>
    <a class="sw-button secondary" href="pilot/">See active pilot experiments</a>
    <a class="sw-button secondary" href="ja/">日本語</a>
  </div>
</section>
