---
layout: page
title: Agent Human Memory — 明示的なagent memory研究
description: provenance、review、authority、retention、forgettingを明示したlocal-firstなagent memory実験基盤。
lang: ja
permalink: /ja/agent-human-memory/
---

<section class="sw-product-hero">
  <span class="sw-kicker">Agent Human Memory · Research pilot · Public OSS release planned</span>
  <h1>Memoryをブラックボックスにせず、agentの継続性を研究する。</h1>
  <p>Agent Human Memoryは、明示的なpreference、goal、episode、working contextなどを扱いながら、provenance、authority、review、retention、forgettingの境界を見える状態に保つ実験的なOSSです。</p>
  <div class="sw-actions">
    <a class="sw-button" href="https://github.com/soworks-jp/soworks-jp.github.io/issues/3">Research pilot / release waitlist</a>
    <a class="sw-button secondary" href="/ja/oss/#agent-human-memory">Release status</a>
  </div>
</section>

## 研究したいこと

<div class="sw-metric-grid">
  <div class="sw-metric-card"><strong>Continuity</strong><span>前のsessionで明示的に保存した情報を、必要な場面で安全に再利用できるか。</span></div>
  <div class="sw-metric-card"><strong>Authority</strong><span>単なるcontextをstanding instructionへ勝手に昇格させないか。</span></div>
  <div class="sw-metric-card"><strong>Forgetting</strong><span>保持だけでなく、review・retention・forgettingをユーザーが理解して操作できるか。</span></div>
</div>

## 向いている人

- agent framework / memory infrastructure開発者
- local-first agentを研究している開発者
- provenanceやauthority boundaryを評価したい人
- memory consolidationやrecurrence処理を安全側から検証したい人

## Pilotの境界

最初の研究pilotではsyntheticまたは意図的に低機密なexampleだけを使い、continuity、review、forgetting、recurrence、provenance、authority boundaryを確認します。

<div class="sw-callout"><strong>Safety first:</strong> より多く思い出すことより、間違った権限・用途・provenanceで記憶を使わないことを優先します。</div>

## Public release status

実験実装とresearch protocolは存在していますが、product repoはpublic packaging・docs・release gateを仕上げる間はprivateです。実際にpublic access可能になるまでrepo linkを先に公開しません。

<div class="sw-panel sw-pilot-panel">
  <span class="sw-kicker inverse">Invite-only research</span>
  <h2>広く集める前に、安全性を壊しにいく。</h2>
  <p>最初は小規模なbuilder/evaluator cohortで検証し、authorityやprovenanceの高リスクfailureが残る間は一般betaへ広げません。</p>
  <div class="sw-actions">
    <a class="sw-button" href="https://github.com/soworks-jp/soworks-jp.github.io/issues/3">Public research pilot / waitlist</a>
    <a class="sw-button secondary" href="/ja/oss/">全OSS roadmap</a>
  </div>
</div>