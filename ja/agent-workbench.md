---
layout: page
title: Agent Workbench — AI coding agentの作業基盤
description: Codex、Claude Code、Cursor、Gemini CLIなど複数のcoding agentを、task memory、routing、claim、handoff、reviewでローカルに運用するOSS。
lang: ja
permalink: /ja/agent-workbench/
---

<section class="sw-product-hero">
  <span class="sw-kicker">Agent Workbench · Pilot now · Public OSS release planned</span>
  <h1>AI coding agentを、実際の開発チームのように運用する。</h1>
  <p>Agent Workbenchは、実repo上のtask memory、routing、claim/lease、prompt、handoff、report、reviewをローカルにまとめます。Codex、Claude Code、Cursor、Gemini CLIなどを併用しても、別のhosted control planeを必須にしません。</p>
  <div class="sw-actions">
    <a class="sw-button" href="https://github.com/soworks-jp/soworks-jp.github.io/issues/3">7日pilot / release waitlistに参加</a>
    <a class="sw-button secondary" href="/examples/agent-workbench/agent-workbench-dashboard.html">Dashboardを見る</a>
    <a class="sw-button secondary" href="/ja/oss/#agent-workbench">Release status</a>
  </div>
</section>

## 解決すること

<div class="sw-metric-grid">
  <div class="sw-metric-card"><strong>Task memory</strong><span>TODO、issue、roadmap、review needをagentへ渡せるtaskとして残す。</span></div>
  <div class="sw-metric-card"><strong>Coordination</strong><span>routingとclaim/leaseで、複数agentの重複作業や衝突を減らす。</span></div>
  <div class="sw-metric-card"><strong>Evidence</strong><span>prompt、report、review、PR briefをtask loopに沿って残す。</span></div>
</div>

## まず試す

```bash
npx agent-workbench tour
```

isolated tourでtask作成、duplicate preflight、route、claim、prompt、reviewまで試した後、実repoへ導入できます。

## 向いている人

- Codex / Claude Code / Cursor / Gemini CLIなど複数agentを使う開発者
- OSS maintainerやsolo developerで、毎回contextを説明し直したくない人
- 小規模チームでagent taskのownershipとhandoffを見える化したい人
- hosted SaaSへrepo operational contextを増やしたくない人

## 実際のsurface

<div class="sw-demo-grid">
  <a class="sw-demo-card" href="/examples/agent-workbench/agent-workbench-dashboard.html"><img src="/examples/agent-workbench/view-preview.png" alt="Agent Workbench dashboard preview"><div><strong>Local Control</strong><span>task、status、routing、evidenceをローカルUIで確認する。</span></div></a>
  <a class="sw-demo-card" href="/examples/agent-workbench/"><img src="/examples/agent-workbench/view-preview.png" alt="Agent Workbench example index preview"><div><strong>Examples</strong><span>private repo情報を使わないfixtureで、task loopの見え方を確認する。</span></div></a>
</div>

## Public release status

実装とpilotは存在していますが、product repoはpublic packaging・docs・release gateを仕上げる間はprivateです。実際にpublic access可能になるまでrepo linkを先に公開しません。

<div class="sw-panel sw-pilot-panel">
  <span class="sw-kicker inverse">Design partner pilot</span>
  <h2>7日間、実タスクを3件だけ回してみる。</h2>
  <p>first-valueの詰まり、繰り返しcontext説明が減るか、継続利用したいsurfaceは何かを測ります。</p>
  <div class="sw-actions">
    <a class="sw-button" href="https://github.com/soworks-jp/soworks-jp.github.io/issues/3">Public pilot / waitlist</a>
    <a class="sw-button secondary" href="/ja/oss/">全OSS roadmap</a>
  </div>
</div>