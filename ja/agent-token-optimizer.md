---
layout: page
title: Agent Token Optimizer — AI agent向けrepo context監査
description: repository context、巨大ファイル、生成物、token riskをローカルに監査し、AI coding agentへ渡す前の無駄を減らすOSS。
lang: ja
permalink: /ja/agent-token-optimizer/
---

<section class="sw-product-hero">
  <span class="sw-kicker">Agent Token Optimizer · Fastest entry point</span>
  <h1>AI coding agentが読む前に、repo contextの無駄を監査する。</h1>
  <p>Agent Token Optimizerは、repo全体をローカルにscanして、巨大ファイル、generated output、依存物、context budget、model routing hintを確認します。sourceをuploadせず、5分程度のread-only auditから始められます。</p>
  <div class="sw-actions">
    <a class="sw-button" href="https://github.com/soworks-jp/agent-token-optimizer">GitHubで見る</a>
    <a class="sw-button secondary" href="https://github.com/soworks-jp/agent-token-optimizer/issues/6">無料repo audit pilot</a>
    <a class="sw-button secondary" href="https://soworks.app/examples/agent-token-optimizer/agent-token-report.html">Reportを見る</a>
  </div>
</section>

## 何が分かるか

<div class="sw-metric-grid">
  <div class="sw-metric-card"><strong>Context waste</strong><span>agentが毎回読む必要のないgenerated / dependency / oversized context候補を把握する。</span></div>
  <div class="sw-metric-card"><strong>Budget signal</strong><span>taskごとのrepo shortlistとcontext budgetを作り、下流のtoken余白を残す。</span></div>
  <div class="sw-metric-card"><strong>Routing hint</strong><span>軽い作業と高context・高riskな作業を分ける判断材料にする。</span></div>
</div>

## Pilotはbefore / afterで測る

1. baseline scanを取る。
2. 安全だと判断できるrecommendationだけ1〜3件適用する。
3. 同じ条件で再scanする。
4. context/readiness delta、false positive、2repo目やCIでも使いたいかを記録する。

<div class="sw-callout"><strong>重要:</strong> 最大token削減を目的にしません。安全に繰り返せるrecommendationと、誤検知の少なさを優先します。</div>

## Preview

<div class="sw-demo-grid">
  <a class="sw-demo-card" href="https://soworks.app/examples/agent-token-optimizer/agent-token-report.html">
    <img src="https://soworks.app/examples/agent-token-optimizer/report-preview.png" alt="Agent Token Optimizer report preview">
    <div><strong>Repository report</strong><span>context構成、risk、改善候補を共有可能な形で確認する。</span></div>
  </a>
  <a class="sw-demo-card" href="https://soworks.app/examples/agent-token-optimizer/agent-token-compare.html">
    <img src="https://soworks.app/examples/agent-token-optimizer/report-preview.png" alt="Agent Token Optimizer compare preview">
    <div><strong>Before / after</strong><span>安全な変更の前後でcontext状態を比較する。</span></div>
  </a>
</div>

## Privacy boundary

scanはローカルで動きます。private repoのpilot feedbackでは、source code、private path、customer name、secret-risk snippetを共有せず、sanitized/rounded aggregate metricだけを使います。

<div class="sw-panel sw-pilot-panel">
  <span class="sw-kicker inverse">Repository audit pilot</span>
  <h2>5分でbaselineを取り、改善の前後を測る。</h2>
  <p>最初は8〜10 repoを対象に、どのrecommendationが繰り返し有効か、何が誤検知になるか、2repo目やCIでも使いたくなるかを確認します。</p>
  <div class="sw-actions">
    <a class="sw-button" href="https://github.com/soworks-jp/agent-token-optimizer/issues/6">Pilot募集Issue</a>
    <a class="sw-button secondary" href="/ja/pilot/">全pilotを見る</a>
  </div>
</div>
