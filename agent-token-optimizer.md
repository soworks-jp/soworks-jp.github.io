---
layout: page
title: Agent Token Optimizer — audit repository context for AI agents
description: Preview the planned local-first OSS for finding token-heavy files, context waste, AI-readiness gaps, and safer repository context defaults.
lang: en
permalink: /agent-token-optimizer/
---

<section class="sw-product-hero">
  <span class="sw-kicker">Agent Token Optimizer · Planned OSS release</span>
  <h1>Audit what your coding agent has to read.</h1>
  <p>Agent Token Optimizer is being prepared to scan repositories locally for context waste, oversized files, generated content, instruction bloat, editor-indexing risk, token budgets, and model-routing opportunities.</p>
  <div class="sw-actions">
    <a class="sw-button" href="/examples/agent-token-optimizer/agent-token-report.html">Open example report</a>
    <a class="sw-button secondary" href="/oss/#agent-token-optimizer">Release roadmap</a>
  </div>
</section>

<div class="sw-metric-grid">
  <div class="sw-metric-card"><strong>Read-only first</strong><span>The product direction starts with inspection before repository changes.</span></div>
  <div class="sw-metric-card"><strong>Local analysis</strong><span>The core audit is designed not to require source upload to a hosted service.</span></div>
  <div class="sw-metric-card"><strong>Before / after proof</strong><span>Measure whether a small set of safe changes genuinely improves default context and readiness.</span></div>
</div>

## What it is designed to find

<div class="sw-choice-grid">
  <div class="sw-choice-card"><h3>Context waste</h3><p>Large generated artifacts, stale docs, screenshots, logs, and other files that should rarely be default AI context.</p></div>
  <div class="sw-choice-card"><h3>Instruction bloat</h3><p>Oversized agent instructions and opportunities to route tasks into smaller purpose-specific context.</p></div>
  <div class="sw-choice-card"><h3>Editor / indexing risk</h3><p>Generated directories, watcher/search exclusions, large files, and repository shapes that can slow AI-aware editors.</p></div>
  <div class="sw-choice-card"><h3>Budget + model routing</h3><p>Repository-level token budgets and abstract model-tier recommendations for different task types.</p></div>
</div>

## See the report direction

[![Agent Token Optimizer report preview](/examples/agent-token-optimizer/report-preview.png)](/examples/agent-token-optimizer/agent-token-report.html)

- [Example HTML report](/examples/agent-token-optimizer/agent-token-report.html)
- [Example dashboard](/examples/agent-token-optimizer/agent-token-dashboard.html)
- [Before/after comparison example](/examples/agent-token-optimizer/agent-token-compare.html)
- [Examples index](/examples/agent-token-optimizer/)

## Public release status

Agent Token Optimizer is planned for public OSS release. The implementation is still being prepared behind a private repository while public packaging, documentation, licensing, and release gates are finalized. Public repository and installation links will appear only when the release is actually accessible.

## Product boundary

The project is designed to analyze repository-side context and emit recommendations. It should not treat maximum token reduction as the goal or automatically delete files; recommendations must remain reviewable against the real task and repository.

- [All planned OSS releases](/oss/)
- [Japanese page](/ja/agent-token-optimizer/)
- [Compare SO Works tools](/compare/)
