---
layout: page
title: Agent Workbench — local operating layer for coding agents
description: Coordinate coding-agent tasks, routing, claims, prompts, handoffs, review, and durable task memory without a hosted control plane.
lang: en
permalink: /agent-workbench/
---

<section class="sw-product-hero">
  <span class="sw-kicker">Agent Workbench · Lead product</span>
  <h1>Coordinate coding agents without adding another control plane.</h1>
  <p>Agent Workbench is a local-first operating layer for real coding-agent work: tasks, route decisions, claim leases, prompts, handoffs, reports, review, and reusable completion memory live with the repository.</p>
  <div class="sw-actions">
    <a class="sw-button" href="https://github.com/soworks-jp/agent-workbench">View on GitHub</a>
    <a class="sw-button secondary" href="https://github.com/soworks-jp/agent-workbench/issues/106">Join the 7-day design-partner pilot</a>
    <a class="sw-button secondary" href="/examples/agent-workbench/">See examples</a>
  </div>
</section>

<div class="sw-metric-grid">
  <div class="sw-metric-card"><strong>Local-first by default</strong><span>No hosted account is required for the core work loop.</span></div>
  <div class="sw-metric-card"><strong>Agent-agnostic</strong><span>Use Codex, Claude Code, Cursor, Gemini CLI, OpenCode, Cline, or mixed agents.</span></div>
  <div class="sw-metric-card"><strong>Built for repeat work</strong><span>The value test is whether task 2 and task 3 need less repeated coordination than task 1.</span></div>
</div>

## The problem it solves

Coding agents can produce code quickly, but multi-agent work still needs an operating layer. Without one, maintainers repeatedly answer the same questions: what is ready, who owns it, what context should be passed, what changed, what needs review, and what should the next agent remember?

Agent Workbench turns that coordination into inspectable repo-local artifacts instead of chat history or a hosted black box.

## Try the core loop

```bash
npm install -g agent-workbench
awb tour
awb init --with-instructions
awb add "Add missing auth callback test" --priority P1 --size S
awb route TASK-001 --write
awb claim TASK-001 --agent codex
awb prompt TASK-001 --for codex --write
awb report TASK-001 --from-diff --write
awb done TASK-001 --agent codex --from-diff
```

`awb tour` runs an isolated first-value flow without modifying your repository. Real setup uses transactional previews, local snapshots, and rollback protection for generated instructions and skills.

## What you get

<div class="sw-choice-grid">
  <div class="sw-choice-card"><h3>Task memory</h3><p>Markdown tasks, acceptance criteria, durable completion learnings, decisions, and review evidence survive beyond one agent session.</p></div>
  <div class="sw-choice-card"><h3>Safe parallel work</h3><p>Route decisions and claim leases make ownership visible before several agents start solving the same task.</p></div>
  <div class="sw-choice-card"><h3>Better handoffs</h3><p>Generate target-specific prompts and handoff packets from the task instead of reconstructing context manually.</p></div>
  <div class="sw-choice-card"><h3>Local Control + Desktop</h3><p>Inspect projects, setup changes, and operational state through local UI surfaces while keeping the repo as the source of truth.</p></div>
</div>

## See the product

[![Agent Workbench dashboard preview](/examples/agent-workbench/view-preview.png)](/examples/agent-workbench/agent-workbench-dashboard.html)

- [Interactive-style static dashboard example](/examples/agent-workbench/agent-workbench-dashboard.html)
- [Examples index](/examples/agent-workbench/)
- [Japanese examples guide](/examples/agent-workbench/ja)

## Design-partner pilot

The current growth question is not “can the CLI run?” It is whether Workbench reduces coordination overhead on repeated real tasks.

The pilot asks 5–10 high-fit users to run **3 real coding-agent tasks over 7 days** and report where first value breaks. Privacy-safe local adoption summaries can be exported without raw prompts, source code, repository identifiers, or background telemetry.

```bash
awb adoption --export adoption-summary.json
```

Maintainers can aggregate consenting summaries locally with `awb adoption aggregate`.

<div class="sw-callout"><strong>Good pilot fit:</strong> solo developers, OSS maintainers, small engineering teams, and AI tooling/platform engineers already using coding agents on real repositories.</div>

[Join the Agent Workbench design-partner pilot →](https://github.com/soworks-jp/agent-workbench/issues/106)

## Product boundary

Agent Workbench does not run an autonomous agent for you and does not require hosted task infrastructure. It creates the local operating layer around agent work so humans and other agents can inspect, resume, review, and improve it.

- [GitHub repository](https://github.com/soworks-jp/agent-workbench)
- [Pilot playbook](https://github.com/soworks-jp/agent-workbench/blob/main/PILOT.md)
- [Japanese guide](/ja/agent-workbench/)
- [Compare SO Works tools](/compare/)
