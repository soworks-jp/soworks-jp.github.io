---
layout: page
title: Agent Persona — persona-guided AI review
description: Add portable user, adopter, security, operator, buyer, and contributor perspectives to AI review and measure the incremental signal.
lang: en
permalink: /agent-persona/
---

<section class="sw-product-hero">
  <span class="sw-kicker">Agent Persona · Pilot now · Public OSS release planned</span>
  <h1>Review the artifact from the people who have to live with it.</h1>
  <p>Agent Persona turns explicit user, adopter, contributor, security, operator, and buyer perspectives into reusable review packs for README, PRD, onboarding, release, UX, and agent-handoff reviews.</p>
  <div class="sw-actions">
    <a class="sw-button" href="https://github.com/soworks-jp/soworks-jp.github.io/issues/3">Try the 30-minute review challenge</a>
    <a class="sw-button secondary" href="/oss/#agent-persona">Release status</a>
  </div>
</section>

<div class="sw-metric-grid">
  <div class="sw-metric-card"><strong>Baseline first</strong><span>Review one artifact normally before adding persona guidance.</span></div>
  <div class="sw-metric-card"><strong>Measure incremental signal</strong><span>Count genuinely new actionable findings, not total comments.</span></div>
  <div class="sw-metric-card"><strong>Local and portable</strong><span>Persona packs are small local artifacts with no required hosted service.</span></div>
</div>

## Quick start

```bash
npm install -g agent-persona
agent-persona install --dry-run
agent-persona groups
agent-persona matrix --group engineer-default-review
agent-persona report --group engineer-default-review --out persona-report.html
```

Default groups cover engineering, design, product, maker, leadership, and agent-operations review. They are synthetic starting points, not substitutes for direct user research.

## What changes in a review

<div class="sw-choice-grid">
  <div class="sw-choice-card"><h3>Make the perspective explicit</h3><p>Ask what a first-time adopter, security reviewer, buyer, operator, accessibility user, or maintainer would accept, reject, misunderstand, or need next.</p></div>
  <div class="sw-choice-card"><h3>Keep reviews comparable</h3><p>Reuse the same review groups across releases instead of reinventing prompts every time.</p></div>
  <div class="sw-choice-card"><h3>Compose with agent review</h3><p>Use persona guidance as a second axis alongside technical reviewer lanes such as Agent Fusion.</p></div>
  <div class="sw-choice-card"><h3>Detect noise</h3><p>The growth metric is incremental actionable findings per extra review minute, not how many comments the system can generate.</p></div>
</div>

## 30-minute before / after challenge

Choose one public or sanitized artifact. Review it normally and save the actionable findings. Then run the most relevant persona group against the same artifact. Record only findings that are both new and worth acting on, plus the extra time and duplicate/noisy feedback.

<div class="sw-callout"><strong>Good pilot artifacts:</strong> OSS README/docs, product requirements, onboarding copy, release checklists, UX writing, and agent handoff documents.</div>

[Join the public Agent Persona review challenge / release waitlist →](https://github.com/soworks-jp/soworks-jp.github.io/issues/3)

## Public release status

Agent Persona is planned for a public OSS release. The implementation and review challenge exist today, while public packaging, examples, documentation, and release gates are being finalized. The repository link will appear here only after it is publicly accessible.

## Product boundary

Persona packs make review perspectives explicit. They do not claim to simulate real people or replace interviews and direct user research. Public examples should stay synthetic or sanitized.

- [All planned OSS releases](/oss/)
- [Public pilot / release waitlist](https://github.com/soworks-jp/soworks-jp.github.io/issues/3)
- [Japanese guide](/ja/agent-persona/)
- [Compare SO Works tools](/compare/)