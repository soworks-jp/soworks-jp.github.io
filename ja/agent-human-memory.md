---
layout: page
title: Agent Human Memory — 明示的なagent memory研究
description: provenance、review、authority、retention、forgettingを明示する公開予定のexperimental OSS preview。
lang: ja
permalink: /ja/agent-human-memory/
---

<section class="sw-product-hero">
  <span class="sw-kicker">Agent Human Memory · Planned OSS release</span>
  <h1>Memoryをブラックボックスにせず、agentの継続性を研究する。</h1>
  <p>Agent Human Memoryは、明示的なpreference、goal、episode、working contextを扱いながら、provenance、authority、review、retention、forgettingの境界を見える状態に保つexperimental OSSとして公開準備中です。</p>
  <div class="sw-actions">
    <a class="sw-button" href="/ja/oss/#agent-human-memory">Release roadmap</a>
    <a class="sw-button secondary" href="/ja/compare/">使い分けを見る</a>
  </div>
</section>

<div class="sw-metric-grid">
  <div class="sw-metric-card"><strong>Explicit records</strong><span>hidden model stateではなく、確認可能なrecordとしてmemoryを扱う。</span></div>
  <div class="sw-metric-card"><strong>Forgettable</strong><span>保持だけでなくreview、retention、forgettingをlifecycleに含める。</span></div>
  <div class="sw-metric-card"><strong>Safety first</strong><span>recall量よりauthority、provenance、consent、false mergeを重視する。</span></div>
</div>

## 研究したいこと

<div class="sw-choice-grid">
  <div class="sw-choice-card"><h3>Continuity</h3><p>明示的なmemoryがsessionをまたぐ繰り返し説明をどこまで減らせるか。</p></div>
  <div class="sw-choice-card"><h3>Authority</h3><p>context、preference、delegated instructionの違いを勝手に昇格させず保持できるか。</p></div>
  <div class="sw-choice-card"><h3>Forgetting</h3><p>review・retention・forgetをユーザーが理解して操作できるか。</p></div>
  <div class="sw-choice-card"><h3>Consolidation safety</h3><p>recurrenceやconsolidationがfalse mergeやprovenance escalationを起こさないか。</p></div>
</div>

<div class="sw-callout"><strong>Safety boundary:</strong> より多く思い出すことより、間違ったauthority・provenance・用途でmemoryを使わないことを優先します。</div>

## Public release status

Agent Human Memoryはpublic OSSとしてリリース予定です。experimental implementationはpublic packaging・docs・license確認・safety-oriented release gateを仕上げる間はprivateで、実際に公開可能になった時点でrepo / install linkを追加します。

## Product boundary

identity simulationを目的にしたproductではありません。memoryをよりinspectable・controllableにするためのinfrastructure researchです。

- [全OSS release roadmap](/ja/oss/)
- [English page](/agent-human-memory/)
- [使い分けを見る](/ja/compare/)
