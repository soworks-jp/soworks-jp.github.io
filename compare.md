---
layout: page
title: Compare SO Works Agent Series tools
description: Choose the smallest local-first OSS tool for your current coding-agent bottleneck, then explore the complete 13-project release roadmap.
permalink: /compare/
---

<section class="sw-product-hero">
  <span class="sw-kicker">Choose by bottleneck</span>
  <h1>Start with the problem you already feel.</h1>
  <p>You do not need the whole stack. Pick one tool that removes a concrete bottleneck, prove value on a bounded task, and compose the projects only when the workflow earns it.</p>
  <div class="sw-actions">
    <a class="sw-button" href="/pilot/">See active pilots</a>
    <a class="sw-button secondary" href="/oss/">See all 13 planned OSS releases</a>
  </div>
</section>

## Quick decision

| If your main problem is… | Start with | Fastest proof |
|---|---|---|
| Multiple coding agents repeat work or lose task context | **[Agent Workbench](/agent-workbench/)** | Run 3 real tasks over 7 days |
| Agents/editors read too much repository context | **[Agent Token Optimizer](/agent-token-optimizer/)** | Baseline scan → 1–3 safe changes → rescan |
| AI review misses user/adopter/operator perspectives | **[Agent Persona](/agent-persona/)** | Normal review vs persona-guided review on one artifact |
| You are researching explicit agent continuity | **[Agent Human Memory](/agent-human-memory/)** | Synthetic/low-sensitivity multi-session experiment |
| Reusable agent skills need packaging across tools | **[Agent Skill Shelf](/agent-skill-shelf/)** | Package one reusable skill bundle |
| One output needs multi-perspective synthesis/judging | **[Fusion Skill](/fusion-skill/)** | Compare a baseline answer with reviewer-lane synthesis |
| Product ideas need briefs, PRDs and task plans | **AI Product Manager** | Planned public OSS release |
| Tasks need deterministic assignment before execution | **Agent Task Router** | Preview release |
| Structured tasks need target-specific handoff packets | **Agent Handoff Kit** | Planned public OSS release |
| Agent activity needs reports, risks and next actions | **Agent Reporting** | Planned public OSS release |
| Developer-machine performance is slowing agent work | **Agent Machine Doctor** | Preview release |
| Repository / agent security needs a release gate | **Agent Security Doctor** | Preview release |
| Human approvals/results need Slack or Discord delivery | **Agent Channel Bridge** | Preview release |

[See readiness and descriptions for all 13 projects →](/oss/)

## How the core projects fit together

<div class="sw-choice-grid">
  <div class="sw-choice-card"><h3>Coordinate → Agent Workbench</h3><p>The operating layer: tasks, routing, claim leases, prompts, handoffs, reports, review, and completion memory.</p></div>
  <div class="sw-choice-card"><h3>Optimize → Token Optimizer</h3><p>The repository preflight: context waste, instruction bloat, editor/indexing risk, token budgets, and routing signals.</p></div>
  <div class="sw-choice-card"><h3>Review → Agent Persona</h3><p>The human-perspective review layer: reusable adopter, user, security, operator, buyer, and contributor viewpoints.</p></div>
  <div class="sw-choice-card"><h3>Remember → Human Memory</h3><p>The experimental research layer: explicit memory with provenance, authority, review, retention, and forgetting.</p></div>
</div>

## Recommended growth path

For most coding-agent users, the easiest entry point is **Agent Token Optimizer** because it can produce a useful read-only audit without changing workflow. Users who already coordinate several agents or repeatedly reconstruct task context should start directly with **Agent Workbench**.

Agent Persona is a lightweight add-on when review quality is the bottleneck. Human Memory should remain a deliberate research choice rather than a default install. The lower-level planning, routing, handoff, reporting, doctor, skill, and channel packages can be adopted as they become public.

<div class="sw-callout"><strong>Portfolio rule:</strong> all 13 projects are planned for public OSS release, but do not install another tool just because it exists. Add it when a repeated bottleneck is visible and you can define a before/after experiment.</div>

- [Complete OSS release roadmap](/oss/)
- [Active pilots](/pilot/)
- [Public pilot / release waitlist](https://github.com/soworks-jp/soworks-jp.github.io/issues/3)
- [Japanese comparison](/ja/compare/)