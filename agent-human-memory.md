---
layout: page
title: Agent Human Memory — explicit memory experiments for agents
description: Experimental local-first memory records for agent continuity with visible provenance, review, authority, retention, and forgetting boundaries.
lang: en
permalink: /agent-human-memory/
---

<section class="sw-product-hero">
  <span class="sw-kicker">Agent Human Memory · Research pilot · Public OSS release planned</span>
  <h1>Explore agent continuity without turning memory into a black box.</h1>
  <p>Agent Human Memory experiments with explicit local records for preferences, goals, episodes, and working context while keeping provenance, authority, review, retention, and forgetting visible.</p>
  <div class="sw-actions">
    <a class="sw-button" href="https://github.com/soworks-jp/soworks-jp.github.io/issues/3">Apply for the research pilot / waitlist</a>
    <a class="sw-button secondary" href="/oss/#agent-human-memory">Release status</a>
  </div>
</section>

<div class="sw-metric-grid">
  <div class="sw-metric-card"><strong>Explicit records</strong><span>Memories are inspectable records rather than hidden model state.</span></div>
  <div class="sw-metric-card"><strong>Forgettable</strong><span>Review and forgetting are first-class lifecycle controls.</span></div>
  <div class="sw-metric-card"><strong>Safety before recall</strong><span>Authority, provenance, and false merges matter more than maximizing retrieval.</span></div>
</div>

## Quick start with synthetic examples

```bash
npm install -g agent-human-memory
agent-human-memory init --dry-run
agent-human-memory init
agent-human-memory remember --kind preference --text "Use concise progress updates." --salience 0.8 --consent explicit
agent-human-memory pack --profile balanced
agent-human-memory review
agent-human-memory validate
```

For the research pilot, use synthetic or deliberately low-sensitivity examples.

## What the research is testing

<div class="sw-choice-grid">
  <div class="sw-choice-card"><h3>Continuity</h3><p>Which explicit memory kinds meaningfully reduce repeated instructions across sessions?</p></div>
  <div class="sw-choice-card"><h3>Authority</h3><p>Can the system preserve the difference between context, preferences, and delegated instructions?</p></div>
  <div class="sw-choice-card"><h3>Forgetting</h3><p>Are review, retention, and forget controls understandable enough for users to remain in charge?</p></div>
  <div class="sw-choice-card"><h3>Consolidation safety</h3><p>Where do recurring memories merge correctly, miss a match, or create an unsafe false merge?</p></div>
</div>

## Invite-only research pilot

The first cohort is intentionally small: agent-framework developers, local-first agent builders, and advanced evaluators who can test with synthetic or low-sensitivity records over several sessions.

A successful pilot is not “the agent remembered everything.” It is evidence that useful continuity can improve while provenance, authority, review, and forgetting remain understandable and controllable.

<div class="sw-callout"><strong>Stop condition:</strong> unresolved high-risk provenance, authority, or false-merge behavior is a stronger failure signal than weak recall.</div>

[Apply through the public research pilot / release waitlist →](https://github.com/soworks-jp/soworks-jp.github.io/issues/3)

## Public release status

Agent Human Memory is planned for a public OSS release. The experimental implementation and research protocol exist today, while public packaging, documentation, and release gates are being finalized. The repository link will appear here only after it is publicly accessible.

## Product boundary

This is an experimental research package, not an identity-simulation product. It is intended to make agent memory more inspectable and controllable, not to infer hidden traits.

- [All planned OSS releases](/oss/)
- [Public research pilot / release waitlist](https://github.com/soworks-jp/soworks-jp.github.io/issues/3)
- [Japanese guide](/ja/agent-human-memory/)
- [Compare SO Works tools](/compare/)