---
layout: page
title: Agent Human Memory — safe human-like memory experiments for agents
description: Experimental local-first memory records for agent continuity with explicit provenance, consent, review, authority, retention, and forgetting boundaries.
lang: en
permalink: /agent-human-memory/
---

<section class="sw-product-hero">
  <span class="sw-kicker">Agent Human Memory · Experimental research</span>
  <h1>Explore agent continuity without turning memory into a black box.</h1>
  <p>Agent Human Memory experiments with explicit preferences, goals, episodes, relationship context, persona signals, and lightweight world-model records while keeping provenance, authority, review, retention, consent, and forgetting visible.</p>
  <div class="sw-actions">
    <a class="sw-button" href="https://github.com/soworks-jp/agent-human-memory">View on GitHub</a>
    <a class="sw-button secondary" href="https://github.com/soworks-jp/agent-human-memory/issues/8">Apply for the research pilot</a>
  </div>
</section>

<div class="sw-metric-grid">
  <div class="sw-metric-card"><strong>Explicit records</strong><span>Memories are inspectable records rather than hidden model state.</span></div>
  <div class="sw-metric-card"><strong>Forgettable</strong><span>Review and forgetting are first-class lifecycle controls.</span></div>
  <div class="sw-metric-card"><strong>Safety before recall</strong><span>Authority, privacy, provenance, and false merges matter more than maximizing retrieval.</span></div>
</div>

## Quick start with synthetic data

```bash
npm install -g agent-human-memory
agent-human-memory init --dry-run
agent-human-memory init
agent-human-memory remember --kind preference --text "Use concise progress updates." --salience 0.8 --consent explicit
agent-human-memory pack --profile balanced
agent-human-memory review
agent-human-memory validate
```

For the research pilot, use synthetic or deliberately low-sensitivity examples. Do not use medical, financial, intimate, authentication, or other highly sensitive personal data.

## What the research is testing

<div class="sw-choice-grid">
  <div class="sw-choice-card"><h3>Continuity</h3><p>Which explicit memory kinds meaningfully reduce repeated instructions across sessions?</p></div>
  <div class="sw-choice-card"><h3>Authority</h3><p>Can the system preserve the difference between context, preferences, delegated instructions, and other allowed uses?</p></div>
  <div class="sw-choice-card"><h3>Forgetting</h3><p>Are review, retention, and forget controls understandable enough for users to remain in charge?</p></div>
  <div class="sw-choice-card"><h3>Consolidation safety</h3><p>Where do recurring memories merge correctly, miss a match, or create an unsafe false merge?</p></div>
</div>

## Invite-only research pilot

The first cohort is intentionally small: agent/memory framework developers, local-first personal-agent builders, and advanced evaluators who can test with synthetic or low-sensitivity records over several sessions.

A successful pilot is not “the agent remembered everything.” It is evidence that useful continuity can improve while provenance, authority, review, and forgetting remain understandable and safe.

<div class="sw-callout"><strong>Stop condition:</strong> unresolved high-risk privacy, provenance, authority, or false-merge behavior is a stronger failure signal than weak recall.</div>

[Apply for the Agent Human Memory research pilot →](https://github.com/soworks-jp/agent-human-memory/issues/8)

## Product boundary

This is an experimental research package, not a consumer memory beta and not identity simulation. It does not claim to infer hidden personality, emotion, preferences, or identity. Production-grade user-controlled memory belongs in a stricter memory layer with explicit policy and governance.

- [GitHub repository](https://github.com/soworks-jp/agent-human-memory)
- [Pilot playbook](https://github.com/soworks-jp/agent-human-memory/blob/main/PILOT.md)
- [Compare SO Works tools](/compare/)
