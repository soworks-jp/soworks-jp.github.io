---
layout: page
title: Compare SO Works Agent Series tools
description: Choose the smallest local-first OSS tool for coding-agent coordination, repository context optimization, persona-guided review, or experimental human-like memory.
permalink: /compare/
---

<section class="sw-product-hero">
  <span class="sw-kicker">Choose by bottleneck</span>
  <h1>Start with the problem you already feel.</h1>
  <p>You do not need the whole stack. Pick one tool that removes a concrete bottleneck, prove value on a bounded task, and compose the projects only when the workflow earns it.</p>
  <div class="sw-actions">
    <a class="sw-button" href="/pilot/">See active pilots</a>
    <a class="sw-button secondary" href="https://github.com/soworks-jp">Browse GitHub</a>
  </div>
</section>

## Quick decision

| If your main problem is… | Start with | Fastest proof |
|---|---|---|
| Multiple coding agents repeat work or lose task context | **[Agent Workbench](/agent-workbench/)** | Run 3 real tasks over 7 days |
| Agents/editors read too much repository context | **[Agent Token Optimizer](/agent-token-optimizer/)** | Baseline scan → 1–3 safe changes → rescan |
| AI review misses user/adopter/operator perspectives | **[Agent Persona](/agent-persona/)** | Normal review vs persona-guided review on one artifact |
| You are researching explicit human-like agent continuity | **[Agent Human Memory](/agent-human-memory/)** | Synthetic/low-sensitivity multi-session memory experiment |
| Reusable agent skills need packaging across tools | **[Agent Skill Shelf](/agent-skill-shelf/)** | Package one reusable skill bundle |
| One output needs multi-perspective synthesis/judging | **[Fusion Skill](/fusion-skill/)** | Compare a baseline answer with reviewer-lane synthesis |

## How the core projects fit together

<div class="sw-choice-grid">
  <div class="sw-choice-card"><h3>Coordinate → Agent Workbench</h3><p>The operating layer: tasks, routing, claim leases, prompts, handoffs, reports, review, and completion memory.</p></div>
  <div class="sw-choice-card"><h3>Optimize → Token Optimizer</h3><p>The repository preflight: context waste, instruction bloat, editor/indexing risk, token budgets, and routing signals.</p></div>
  <div class="sw-choice-card"><h3>Review → Agent Persona</h3><p>The human-perspective review layer: reusable adopter, user, security, operator, buyer, and contributor viewpoints.</p></div>
  <div class="sw-choice-card"><h3>Remember → Human Memory</h3><p>The experimental research layer: explicit human-like memory with provenance, authority, consent, review, retention, and forgetting.</p></div>
</div>

## Recommended growth path

For most coding-agent users, the easiest entry point is **Agent Token Optimizer** because it can produce a useful read-only audit without changing workflow. Users who already coordinate several agents or repeatedly reconstruct task context should start directly with **Agent Workbench**.

Agent Persona is a lightweight add-on when review quality is the bottleneck. Human Memory should remain a deliberate research choice rather than a default install.

<div class="sw-callout"><strong>Portfolio rule:</strong> do not install another tool because it exists. Add it when a repeated bottleneck is visible and you can define a before/after experiment.</div>

## Privacy and maturity

All four core projects are local-first by default, but they are not equally mature or equally appropriate for sensitive data. Workbench and Token Optimizer are developer-operations tools. Persona uses explicit synthetic or user-authored review perspectives. Human Memory is experimental research and should be tested first with synthetic or low-sensitivity data.

- [English home](/)
- [Active pilots](/pilot/)
- [Japanese comparison](/ja/compare/)
