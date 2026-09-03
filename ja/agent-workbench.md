---
layout: page
title: Agent Workbench — AI coding agentの作業基盤
description: Codex、Claude Code、Cursor、Gemini CLIなど複数のcoding agentを、task memory、routing、claim、handoff、reviewでローカルに運用するOSS。
lang: ja
permalink: /ja/agent-workbench/
---

<section class="sw-product-hero">
  <span class="sw-kicker">Agent Workbench · Lead product</span>
  <h1>AI coding agentを、実際の開発チームのように運用する。</h1>
  <p>Agent Workbenchは、実repo上のtask memory、routing、claim/lease、prompt、handoff、report、reviewをローカルにまとめます。Codex、Claude Code、Cursor、Gemini CLIなどを併用しても、別のhosted control planeを必須にしません。</p>
  <div class="sw-actions">
    <a class="sw-button" href="https://github.com/soworks-jp/agent-workbench">GitHubで見る</a>
    <a class="sw-button secondary" href="https://github.com/soworks-jp/agent-workbench/issues/106">7日pilotに参加</a>
    <a class="sw-button secondary" href="https://soworks.app/examples/agent-workbench/agent-workbench-dashboard.html">Dashboardを見る</a>
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
  <a class="sw-demo-card" href="https://soworks.app/examples/agent-workbench/agent-workbench-dashboard.html">
    <img src="https://soworks.app/examples/agent-workbench/view-preview.png" alt="Agent Workbench dashboard preview">
    <div><strong>Local Control</strong><span>task、status、routing、evidenceをローカルUIで確認する。</span></div>
  </a>
  <a class="sw-demo-card" href="https://soworks.app/examples/agent-workbench/">
    <img src="https://soworks.app/examples/agent-workbench/view-preview.png" alt="Agent Workbench example index preview">
    <div><strong>Examples</strong><span>private repo情報を使わないfixtureで、task loopの見え方を確認する。</span></div>
  </a>
</div>

## Privacy / safety

Workbenchのcore workflowはlocal-firstです。公開feedbackやadoption exportにはsource、raw prompt、private path、repository nameを含めない設計を優先しています。

<div class="sw-callout"><strong>現在のフェーズ:</strong> experimental 0.1.xとしてengineering-ready。次の重要な証拠は「実ユーザーがtask 2、task 3でも戻ってくるか」です。</div>

<div class="sw-panel sw-pilot-panel">
  <span class="sw-kicker inverse">Design partner pilot</span>
  <h2>7日間、実タスクを3件だけ回してみる。</h2>
  <p>最初のpilotでは5〜10人のdesign partnerを募集しています。first-valueの詰まり、繰り返しcontext説明が減るか、継続利用したいsurfaceは何かを測ります。</p>
  <div class="sw-actions">
    <a class="sw-button" href="https://github.com/soworks-jp/agent-workbench/issues/106">Pilot募集Issue</a>
    <a class="sw-button secondary" href="/ja/pilot/">全pilotを見る</a>
  </div>
</div>
