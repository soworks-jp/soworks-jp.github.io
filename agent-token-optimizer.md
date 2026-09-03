---
layout: page
title: Agent Token Optimizer — audit repository context for AI agents
description: Find token-heavy files, context waste, AI-readiness gaps, and safe repository improvements locally before expensive coding-agent runs.
lang: en
permalink: /agent-token-optimizer/
---

<section class="sw-product-hero">
  <span class="sw-kicker">Agent Token Optimizer · Fastest start</span>
  <h1>Audit what your coding agent has to read.</h1>
  <p>Agent Token Optimizer scans a repository locally for context waste, oversized files, generated content, instruction bloat, editor-indexing risk, token budgets, and model-routing opportunities. Source code is not uploaded by the tool.</p>
  <div class="sw-actions">
    <a class="sw-button" href="https://github.com/soworks-jp/agent-token-optimizer">View on GitHub</a>
    <a class="sw-button secondary" href="https://github.com/soworks-jp/agent-token-optimizer/issues/6">Pilot a free repo audit</a>
    <a class="sw-button secondary" href="/examples/agent-token-optimizer/agent-token-report.html">Open example report</a>
  </div>
</section>

<div class="sw-metric-grid">
  <div class="sw-metric-card"><strong>5-minute first pass</strong><span>Install, scan, and inspect a report before changing repository files.</span></div>
  <div class="sw-metric-card"><strong>Local-only analysis</strong><span>No AI API call or source upload is required for the core audit.</span></div>
  <div class="sw-metric-card"><strong>Before / after proof</strong><span>Apply 1–3 safe changes, scan again, and measure whether context/readiness actually improved.</span></div>
</div>

## Start with a read-only audit

```bash
npm install -g @soworks/agent-token-optimizer
agent-token-optimizer install --dry-run
agent-token-optimizer detect --json
agent-token-optimizer scan
agent-token-optimizer report --html
```

The goal is not maximum token reduction. The useful outcome is a smaller, safer default context without hiding files an agent genuinely needs.

## What it helps find

<div class="sw-choice-grid">
  <div class="sw-choice-card"><h3>Context waste</h3><p>Large generated artifacts, stale docs, lockfiles, screenshots, logs, and other files that should rarely be default AI context.</p></div>
  <div class="sw-choice-card"><h3>Instruction bloat</h3><p>Oversized AGENTS.md-style instructions and opportunities to route tasks into smaller, purpose-specific docs.</p></div>
  <div class="sw-choice-card"><h3>Editor / indexing risk</h3><p>Generated directories, watcher/search exclusions, large files, and repository shapes that can slow AI-aware editors.</p></div>
  <div class="sw-choice-card"><h3>Budget + model routing</h3><p>Repository-level token budgets and abstract model-tier recommendations for different task types.</p></div>
</div>

## See the report before installing

[![Agent Token Optimizer report preview](/examples/agent-token-optimizer/report-preview.png)](/examples/agent-token-optimizer/agent-token-report.html)

- [Example HTML report](/examples/agent-token-optimizer/agent-token-report.html)
- [Example dashboard](/examples/agent-token-optimizer/agent-token-dashboard.html)
- [Before/after comparison example](/examples/agent-token-optimizer/agent-token-compare.html)
- [Examples index](/examples/agent-token-optimizer/)

## Repository audit pilot

The easiest way to evaluate Token Optimizer is a bounded before/after experiment:

1. Run the baseline scan and report.
2. Choose 1–3 recommendations that are obviously safe for that repository.
3. Apply them manually.
4. Scan again.
5. Record sanitized deltas, false positives, and whether you would use it on a second repository or in CI.

<div class="sw-callout"><strong>Best pilot targets:</strong> medium/large repositories, monorepos, projects with generated directories, long agent instructions, or teams already using Codex, Claude Code, Cursor, Copilot, Gemini CLI, Aider, or similar coding agents.</div>

[Volunteer a repository for the audit pilot →](https://github.com/soworks-jp/agent-token-optimizer/issues/6)

## Product boundary

The project analyzes repository-side context and emits recommendations. It does not promise that every reduction is safe, and it does not automatically delete files. Review recommendations against the actual task and repository before applying them.

- [GitHub repository](https://github.com/soworks-jp/agent-token-optimizer)
- [Pilot playbook](https://github.com/soworks-jp/agent-token-optimizer/blob/main/PILOT.md)
- [Japanese guide](/ja/agent-token-optimizer/)
- [Compare SO Works tools](/compare/)
