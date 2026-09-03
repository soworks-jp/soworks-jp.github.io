---
layout: page
title: Agent Human Memory — explicit memory experiments for agents
description: Preview the planned experimental OSS for explicit agent memory with visible provenance, review, authority, retention, and forgetting boundaries.
lang: en
permalink: /agent-human-memory/
---

<section class="sw-product-hero">
  <span class="sw-kicker">Agent Human Memory · Planned OSS release</span>
  <h1>Explore agent continuity without turning memory into a black box.</h1>
  <p>Agent Human Memory is an experimental project for explicit local records such as preferences, goals, episodes, and working context while keeping provenance, authority, review, retention, and forgetting visible.</p>
  <div class="sw-actions">
    <a class="sw-button" href="/oss/#agent-human-memory">Release roadmap</a>
    <a class="sw-button secondary" href="/compare/">Compare the stack</a>
  </div>
</section>

<div class="sw-metric-grid">
  <div class="sw-metric-card"><strong>Explicit records</strong><span>Memory should remain inspectable instead of becoming hidden model state.</span></div>
  <div class="sw-metric-card"><strong>Forgettable</strong><span>Review, retention, and forgetting are part of the lifecycle design.</span></div>
  <div class="sw-metric-card"><strong>Safety before recall</strong><span>Authority, provenance, consent, and false merges matter more than maximizing retrieval.</span></div>
</div>

## What the project is designed to explore

<div class="sw-choice-grid">
  <div class="sw-choice-card"><h3>Continuity</h3><p>Which explicit memory kinds can reduce repeated instructions across sessions without creating hidden state?</p></div>
  <div class="sw-choice-card"><h3>Authority</h3><p>Can the system preserve the difference between context, preferences, and delegated instructions?</p></div>
  <div class="sw-choice-card"><h3>Forgetting</h3><p>Are review, retention, and forget controls understandable enough for users to remain in charge?</p></div>
  <div class="sw-choice-card"><h3>Consolidation safety</h3><p>How can recurrence and consolidation avoid unsafe false merges or provenance escalation?</p></div>
</div>

<div class="sw-callout"><strong>Safety boundary:</strong> this project prioritizes understandable authority, provenance, and forgetting over maximizing how much an agent remembers.</div>

## Public release status

Agent Human Memory is planned for public OSS release. The experimental implementation remains behind a private repository while public packaging, documentation, licensing, and safety-oriented release gates are finalized. Public repository and installation links will appear only after the release is ready.

## Product boundary

This is an experimental memory infrastructure project, not an identity-simulation product. It is intended to make agent memory more inspectable and controllable, not to infer hidden traits.

- [All planned OSS releases](/oss/)
- [Japanese page](/ja/agent-human-memory/)
- [Compare SO Works tools](/compare/)
