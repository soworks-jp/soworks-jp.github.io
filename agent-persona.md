---
layout: page
title: Agent Persona — persona-guided AI review
description: Add portable user, adopter, security, operator, buyer, and contributor perspectives to AI review and measure the incremental signal.
lang: en
permalink: /agent-persona/
---

<section class="sw-product-hero">
  <span class="sw-kicker">Agent Persona · Review layer</span>
  <h1>Review the artifact from the people who have to live with it.</h1>
  <p>Agent Persona turns explicit user, adopter, contributor, security, operator, and buyer perspectives into portable review packs that can be reused across README, PRD, onboarding, release, UX, and agent-handoff reviews.</p>
  <div class="sw-actions">
    <a class="sw-button" href="https://github.com/soworks-jp/agent-persona">View on GitHub</a>
    <a class="sw-button secondary" href="https://github.com/soworks-jp/agent-persona/issues/5">Try the 30-minute review challenge</a>
  </div>
</section>

<div class="sw-metric-grid">
  <div class="sw-metric-card"><strong>Baseline first</strong><span>Review one artifact normally before adding persona guidance.</span></div>
  <div class="sw-metric-card"><strong>Measure incremental signal</strong><span>Count genuinely new actionable findings, not total comments.</span></div>
  <div class="sw-metric-card"><strong>Local and portable</strong><span>Persona packs are small JSON artifacts with no required hosted service.</span></div>
</div>

## Quick start

```bash
npm install -g agent-persona
agent-persona install --dry-run
agent-persona groups
agent-persona matrix --group engineer-default-review
agent-persona report --group engineer-default-review --out persona-report.html
```

Default groups cover engineering, design, PM, indie-maker, CEO, and agent-ops review. They are synthetic starting points, not substitutes for validated user research.

## What changes in a review

<div class="sw-choice-grid">
  <div class="sw-choice-card"><h3>Make the perspective explicit</h3><p>Ask what a first-time adopter, security reviewer, economic buyer, operator, accessibility user, or maintainer would accept, reject, misunderstand, or need next.</p></div>
  <div class="sw-choice-card"><h3>Keep reviews comparable</h3><p>Reuse the same persona groups across releases so findings can be compared instead of reinventing review prompts every time.</p></div>
  <div class="sw-choice-card"><h3>Compose with agent review</h3><p>Use persona guidance as a second axis alongside technical reviewer lanes such as Agent Fusion.</p></div>
  <div class="sw-choice-card"><h3>Detect noise</h3><p>The growth metric is incremental actionable findings per extra review minute, not how many comments the system can generate.</p></div>
</div>

## 30-minute before / after challenge

Choose one public or sanitized artifact. Review it normally and save the actionable findings. Then run the most relevant persona group against the same artifact. Record only findings that are both new and worth acting on, plus the extra time and duplicate/noisy feedback.

<div class="sw-callout"><strong>Good pilot artifacts:</strong> OSS README/docs, product requirements, onboarding copy, release checklists, UX writing, and agent handoff documents.</div>

[Join the Agent Persona review challenge →](https://github.com/soworks-jp/agent-persona/issues/5)

## Product boundary

Persona packs make review perspectives explicit. They do not claim to simulate real people, infer hidden traits, or replace interviews and direct user research. Public examples should stay synthetic or sanitized.

- [GitHub repository](https://github.com/soworks-jp/agent-persona)
- [Pilot playbook](https://github.com/soworks-jp/agent-persona/blob/main/PILOT.md)
- [Compare SO Works tools](/compare/)
