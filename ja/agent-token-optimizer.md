---
layout: page
title: Agent Token Optimizer — AI agent向けrepo context監査
description: repository context、巨大ファイル、生成物、token riskをローカル監査する公開予定OSSのproduct preview。
lang: ja
permalink: /ja/agent-token-optimizer/
---

<section class="sw-product-hero">
  <span class="sw-kicker">Agent Token Optimizer · Planned OSS release</span>
  <h1>AI coding agentが読む前に、repo contextの無駄を監査する。</h1>
  <p>Agent Token Optimizerは、repo全体をローカルにscanして、巨大ファイル、generated output、context budget、instruction肥大、indexing risk、model routing hintを確認するOSSとして公開準備中です。</p>
  <div class="sw-actions">
    <a class="sw-button" href="/examples/agent-token-optimizer/agent-token-report.html">Report previewを見る</a>
    <a class="sw-button secondary" href="/ja/oss/#agent-token-optimizer">Release roadmap</a>
  </div>
</section>

<div class="sw-metric-grid">
  <div class="sw-metric-card"><strong>Read-only first</strong><span>変更より先にrepo contextを確認するproduct direction。</span></div>
  <div class="sw-metric-card"><strong>Local analysis</strong><span>core auditはsource uploadを前提にしない設計。</span></div>
  <div class="sw-metric-card"><strong>Before / After</strong><span>安全な少数変更でdefault contextが本当に改善したか比較する。</span></div>
</div>

## 何が分かるか

<div class="sw-choice-grid">
  <div class="sw-choice-card"><h3>Context waste</h3><p>agentが毎回読む必要のないgenerated / dependency / oversized context候補。</p></div>
  <div class="sw-choice-card"><h3>Instruction bloat</h3><p>agent instructionの肥大と、小さなpurpose-specific contextへ分割できる箇所。</p></div>
  <div class="sw-choice-card"><h3>Editor / indexing risk</h3><p>generated directory、watcher/search exclusion、大きすぎるfileなどの候補。</p></div>
  <div class="sw-choice-card"><h3>Budget / routing</h3><p>repo context budgetとtask typeごとのmodel tier判断材料。</p></div>
</div>

## Preview

[![Agent Token Optimizer report preview](/examples/agent-token-optimizer/report-preview.png)](/examples/agent-token-optimizer/agent-token-report.html)

- [Example report](/examples/agent-token-optimizer/agent-token-report.html)
- [Dashboard example](/examples/agent-token-optimizer/agent-token-dashboard.html)
- [Before/after example](/examples/agent-token-optimizer/agent-token-compare.html)

## Public release status

Agent Token Optimizerはpublic OSSとしてリリース予定です。repoはpublic packaging・docs・license確認・release gateを仕上げる間はprivateで、実際に公開可能になった時点でrepo / install linkを追加します。

- [全OSS release roadmap](/ja/oss/)
- [English page](/agent-token-optimizer/)
- [使い分けを見る](/ja/compare/)
