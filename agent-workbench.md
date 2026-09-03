---
layout: page
title: Agent Workbench — local operating layer for coding agents
description: Preview the planned local-first OSS operating layer for coding-agent tasks, routing, claims, handoffs, review, and durable task memory.
lang: en
permalink: /agent-workbench/
---

<section class="sw-product-hero">
  <span class="sw-kicker">Agent Workbench · Planned OSS release</span>
  <h1>Coordinate coding agents without adding another control plane.</h1>
  <p>Agent Workbench is being prepared as a local-first operating layer for real coding-agent work: tasks, route decisions, claim leases, prompts, handoffs, reports, review, and reusable completion memory live with the repository.</p>
  <div class="sw-actions">
    <a class="sw-button" href="/examples/agent-workbench/agent-workbench-dashboard.html">See the product preview</a>
    <a class="sw-button secondary" href="/oss/#agent-workbench">Release roadmap</a>
  </div>
</section>

<div class="sw-metric-grid">
  <div class="sw-metric-card"><strong>Local-first by design</strong><span>The core work loop is designed around repository-local artifacts rather than a required hosted control plane.</span></div>
  <div class="sw-metric-card"><strong>Agent-agnostic</strong><span>Designed for Codex, Claude Code, Cursor, Gemini CLI, and mixed-agent workflows.</span></div>
  <div class="sw-metric-card"><strong>Built for repeat work</strong><span>Task memory and handoffs aim to reduce repeated coordination across sessions.</span></div>
</div>

## The problem it is designed to solve

Coding agents can produce code quickly, but multi-agent work still needs an operating layer. Maintainers repeatedly need to answer what is ready, who owns it, what context should be passed, what changed, what needs review, and what the next agent should remember.

Agent Workbench turns that coordination into inspectable repo-local artifacts instead of relying only on chat history or a hosted black box.

## Planned product surface

<div class="sw-choice-grid">
  <div class="sw-choice-card"><h3>Task memory</h3><p>Markdown tasks, acceptance criteria, durable completion learnings, decisions, and review evidence that survive beyond one agent session.</p></div>
  <div class="sw-choice-card"><h3>Safe parallel work</h3><p>Route decisions and claim leases make ownership visible before several agents start solving the same task.</p></div>
  <div class="sw-choice-card"><h3>Better handoffs</h3><p>Generate target-specific prompts and handoff packets from the task instead of reconstructing context manually.</p></div>
  <div class="sw-choice-card"><h3>Local Control + Desktop</h3><p>Inspect projects, setup changes, and operational state through local UI surfaces while keeping the repository as the source of truth.</p></div>
</div>

## See the product direction

[![Agent Workbench dashboard preview](/examples/agent-workbench/view-preview.png)](/examples/agent-workbench/agent-workbench-dashboard.html)

- [Dashboard example](/examples/agent-workbench/agent-workbench-dashboard.html)
- [Examples index](/examples/agent-workbench/)
- [Japanese examples guide](/examples/agent-workbench/ja)

## Public release status

Agent Workbench is planned for public OSS release. The implementation is still being prepared behind a private repository while public packaging, documentation, licensing, and release gates are finalized. Public repository and installation links will appear here only after they are actually ready.

## Product boundary

Agent Workbench is not intended to be another autonomous coding agent. It is the local operating layer around agent work so humans and other agents can inspect, resume, review, and improve the workflow.

- [All planned OSS releases](/oss/)
- [Japanese page](/ja/agent-workbench/)
- [Compare SO Works tools](/compare/)
